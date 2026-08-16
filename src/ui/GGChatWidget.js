/**
 * GGChatWidget.js
 * Interactive, gamified lead capture & guestbook for GamersCraft.
 * Allows visitors to drop a quick GG note, leave contact details, or request a quick chat.
 */

import { sendCustomEventTelemetry } from './VisitorTelemetry.js';
import { audio } from './AudioEngine.js';

export class GGChatWidget {
    constructor() {
        this.isOpen = false;
        this.activeTab = 'gg'; // 'gg' or 'chat'
        this.selectedReaction = '🎮 GG WP';
        this.init();
    }

    init() {
        this.injectWidgetDOM();
        this.bindEvents();
        this.loadSavedUser();
    }

    injectWidgetDOM() {
        // Create Floating Trigger Pill
        const trigger = document.createElement('div');
        trigger.id = 'gg-floating-trigger';
        trigger.className = 'gg-floating-trigger';
        trigger.innerHTML = `
            <button id="gg-trigger-btn" class="gg-trigger-btn" title="Drop a GG or Book a 15-min Chat">
                <span class="gg-status-pulse"></span>
                <span class="gg-trigger-icon">⚡</span>
                <span class="gg-trigger-text">DROP A GG / CHAT</span>
                <span class="gg-xp-badge">+100 XP</span>
            </button>
        `;
        document.body.appendChild(trigger);

        // Create Modal Backdrop & Card
        const modal = document.createElement('div');
        modal.id = 'gg-chat-modal';
        modal.className = 'gg-modal-overlay hidden';
        modal.innerHTML = `
            <div class="gg-modal-backdrop" id="gg-modal-backdrop"></div>
            <div class="gg-modal-card" role="dialog" aria-labelledby="gg-modal-title">
                <button class="gg-close-btn" id="gg-close-btn" aria-label="Close modal">×</button>
                
                <div class="gg-card-header">
                    <div class="gg-badge">// COMMS RELAY • LEVEL 1 INTERACTION</div>
                    <h3 id="gg-modal-title" class="gg-modal-title">Transmit to Bhanu Teja</h3>
                    <p class="gg-modal-subtitle">Leave a quick high-five or book a 1-on-1 chat. Zero friction.</p>
                </div>

                <!-- Navigation Tabs -->
                <div class="gg-tab-group">
                    <button class="gg-tab-btn active" data-tab="gg">🎮 Drop a GG</button>
                    <button class="gg-tab-btn" data-tab="chat">📅 Book a Chat</button>
                </div>

                <!-- TAB 1: DROP A GG -->
                <div id="gg-tab-content-gg" class="gg-tab-pane active">
                    <div class="gg-reaction-grid">
                        <button type="button" class="reaction-chip active" data-reaction="🎮 GG WP">🎮 GG WP</button>
                        <button type="button" class="reaction-chip" data-reaction="🔥 Epic 3D Work">🔥 Epic 3D</button>
                        <button type="button" class="reaction-chip" data-reaction="💼 Studio / Let's Hire">💼 Let's Hire</button>
                        <button type="button" class="reaction-chip" data-reaction="🚀 Love the UI">🚀 Love the UI</button>
                        <button type="button" class="reaction-chip" data-reaction="☕ Coffee Chat">☕ Coffee</button>
                    </div>

                    <form id="gg-form-note" class="gg-form">
                        <div class="form-row">
                            <input type="text" id="gg-input-name" class="gg-input" placeholder="Your Name or Studio Handle" required />
                            <input type="text" id="gg-input-contact" class="gg-input" placeholder="Email, Discord, or LinkedIn (Optional)" />
                        </div>
                        <textarea id="gg-input-message" class="gg-textarea" rows="2" placeholder="Leave a short note, feedback, or question..."></textarea>
                        
                        <button type="submit" class="gg-submit-btn">
                            <span>TRANSMIT GG</span>
                            <span class="btn-arrow">⚡</span>
                        </button>
                    </form>
                </div>

                <!-- TAB 2: BOOK A CHAT -->
                <div id="gg-tab-content-chat" class="gg-tab-pane">
                    <form id="gg-form-chat" class="gg-form">
                        <label class="gg-field-label">SELECT DISCUSSION TOPIC</label>
                        <select id="chat-topic-select" class="gg-select">
                            <option value="Game Development & Unity 3D">🕹️ Game Development & Unity 3D</option>
                            <option value="Spatial XR & WebGL Architecture">👓 Spatial XR & WebGL Architecture</option>
                            <option value="Job / Studio Project Opportunity">💼 Job / Studio Project Opportunity</option>
                            <option value="Casual 15-min Tech Coffee Chat">☕ Casual 15-min Tech Coffee Chat</option>
                        </select>

                        <div class="form-row" style="margin-top: 10px;">
                            <input type="text" id="chat-input-name" class="gg-input" placeholder="Your Name" required />
                            <input type="email" id="chat-input-email" class="gg-input" placeholder="Your Email Address" required />
                        </div>

                        <textarea id="chat-input-notes" class="gg-textarea" rows="2" placeholder="Preferred time slots or what you'd like to discuss..."></textarea>

                        <button type="submit" class="gg-submit-btn gg-submit-chat">
                            <span>REQUEST 1-ON-1 SYNC</span>
                            <span class="btn-arrow">📅</span>
                        </button>
                    </form>
                </div>

                <!-- Success Confirmation State -->
                <div id="gg-success-state" class="gg-success-overlay hidden">
                    <div class="success-icon-wrap">
                        <div class="success-ring"></div>
                        <span class="success-emoji">🎉</span>
                    </div>
                    <h4 class="success-title">SIGNAL TRANSMITTED</h4>
                    <p class="success-desc">Thank you! Your transmission was beamed directly to Bhanu's telemetry feed.</p>
                    <div class="success-xp">+100 REPUTATION GAINED</div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    bindEvents() {
        const triggerBtn = document.getElementById('gg-trigger-btn');
        const modal = document.getElementById('gg-chat-modal');
        const closeBtn = document.getElementById('gg-close-btn');
        const backdrop = document.getElementById('gg-modal-backdrop');

        // Open Modal
        triggerBtn?.addEventListener('click', () => {
            audio.init();
            audio.playClick();
            this.open();
        });

        // Close Modal
        closeBtn?.addEventListener('click', () => {
            audio.playClick();
            this.close();
        });
        backdrop?.addEventListener('click', () => this.close());

        // Escape Key Listener
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Tab Switching
        const tabBtns = modal.querySelectorAll('.gg-tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetTab = btn.dataset.tab;
                this.switchTab(targetTab);
            });
        });

        // Reaction Chips Selection
        const chips = modal.querySelectorAll('.reaction-chip');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                this.selectedReaction = chip.dataset.reaction;
                audio.playHover();
            });
        });

        // Form 1: Drop a GG
        const formGG = document.getElementById('gg-form-note');
        formGG?.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('gg-input-name').value.trim();
            const contact = document.getElementById('gg-input-contact').value.trim();
            const message = document.getElementById('gg-input-message').value.trim();

            this.saveUser(name, contact);

            // Send telemetry event
            await sendCustomEventTelemetry('GG_NOTE_TRANSMITTED', {
                reaction: this.selectedReaction,
                name,
                contact,
                message
            });

            this.showSuccess();
        });

        // Form 2: Book a Chat
        const formChat = document.getElementById('gg-form-chat');
        formChat?.addEventListener('submit', async (e) => {
            e.preventDefault();
            const topic = document.getElementById('chat-topic-select').value;
            const name = document.getElementById('chat-input-name').value.trim();
            const email = document.getElementById('chat-input-email').value.trim();
            const notes = document.getElementById('chat-input-notes').value.trim();

            this.saveUser(name, email);

            // Send telemetry event
            await sendCustomEventTelemetry('CHAT_BOOKING_REQUEST', {
                topic,
                name,
                contact: email,
                notes
            });

            this.showSuccess();
        });
    }

    open() {
        const modal = document.getElementById('gg-chat-modal');
        modal?.classList.remove('hidden');
        this.isOpen = true;
        document.body.classList.add('gg-modal-open');
    }

    close() {
        const modal = document.getElementById('gg-chat-modal');
        modal?.classList.add('hidden');
        this.isOpen = false;
        document.body.classList.remove('gg-modal-open');
        this.hideSuccess();
    }

    switchTab(tab) {
        audio.playClick();
        this.activeTab = tab;
        const modal = document.getElementById('gg-chat-modal');
        modal.querySelectorAll('.gg-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });
        modal.querySelectorAll('.gg-tab-pane').forEach(pane => {
            pane.classList.toggle('active', pane.id === `gg-tab-content-${tab}`);
        });
    }

    showSuccess() {
        audio.playSuccess();
        const successOverlay = document.getElementById('gg-success-state');
        successOverlay?.classList.remove('hidden');

        // Auto close after 3.5 seconds
        setTimeout(() => {
            this.close();
        }, 3500);
    }

    hideSuccess() {
        const successOverlay = document.getElementById('gg-success-state');
        successOverlay?.classList.add('hidden');
    }

    saveUser(name, contact) {
        if (typeof localStorage !== 'undefined') {
            if (name) localStorage.setItem('gc_user_name', name);
            if (contact) localStorage.setItem('gc_user_contact', contact);
        }
    }

    loadSavedUser() {
        if (typeof localStorage !== 'undefined') {
            const savedName = localStorage.getItem('gc_user_name');
            const savedContact = localStorage.getItem('gc_user_contact');

            if (savedName) {
                const nameInput = document.getElementById('gg-input-name');
                const chatName = document.getElementById('chat-input-name');
                if (nameInput) nameInput.value = savedName;
                if (chatName) chatName.value = savedName;
            }
            if (savedContact) {
                const contactInput = document.getElementById('gg-input-contact');
                const chatEmail = document.getElementById('chat-input-email');
                if (contactInput) contactInput.value = savedContact;
                if (chatEmail && savedContact.includes('@')) chatEmail.value = savedContact;
            }
        }
    }
}
