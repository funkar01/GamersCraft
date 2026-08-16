import { audio } from './AudioEngine.js';

export class ModeController {
    constructor({ glManager, proCanvas, labViewer }) {
        this.glManager = glManager;
        this.proCanvas = proCanvas;
        this.labViewer = labViewer;

        // Elements
        this.proContainer = document.getElementById('pro-mode-container');
        this.gameHud = document.getElementById('game-hud');
        this.canvasContainer = document.getElementById('canvas-container');
        this.scanlines = document.querySelector('.scanlines');
        this.transitionWarp = document.getElementById('mode-transition-warp');
        this.modeToggleBtns = document.querySelectorAll('.mode-toggle-action');

        // Initial mode determination: check url hash or localStorage (default to 'pro' for premier studio presentation)
        const hash = window.location.hash.toLowerCase();
        let initialMode = 'pro';
        if (hash === '#game' || hash === '#xeno') {
            initialMode = 'game';
        } else if (hash === '#pro' || hash === '#portfolio') {
            initialMode = 'pro';
        } else {
            const saved = localStorage.getItem('gamerscraft_mode');
            if (saved === 'game') initialMode = 'game';
        }

        this.currentMode = null;
        this.setMode(initialMode, false);
        this.bindEvents();
    }

    bindEvents() {
        // Bind all mode toggle triggers (header buttons, CTA links, floating pills)
        this.modeToggleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetMode = btn.dataset.targetMode || (this.currentMode === 'pro' ? 'game' : 'pro');
                this.setMode(targetMode, true);
            });
        });

        // Listen for browser popstate / hashchange
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.toLowerCase();
            if (hash === '#game' && this.currentMode !== 'game') {
                this.setMode('game', true);
            } else if (hash === '#pro' && this.currentMode !== 'pro') {
                this.setMode('pro', true);
            }
        });

        // Keyboard shortcut: Shift + G to toggle mode
        window.addEventListener('keydown', (e) => {
            if (e.shiftKey && (e.key.toLowerCase() === 'g' || e.key.toLowerCase() === 'm')) {
                // Don't trigger if typing in an input
                if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;
                const nextMode = this.currentMode === 'pro' ? 'game' : 'pro';
                this.setMode(nextMode, true);
            }
        });
    }

    setMode(mode, animate = true) {
        if (this.currentMode === mode) return;
        this.currentMode = mode;
        localStorage.setItem('gamerscraft_mode', mode);

        if (animate) {
            audio.playTeleport();
            this.showTransitionWarp(mode, () => {
                this.applyModeStyles(mode);
            });
        } else {
            this.applyModeStyles(mode);
        }
    }

    showTransitionWarp(mode, callback) {
        if (!this.transitionWarp) {
            callback();
            return;
        }

        const modeLabel = this.transitionWarp.querySelector('.warp-mode-label');
        if (modeLabel) {
            modeLabel.textContent = mode === 'game' ? 'INITIALIZING 3D XENO-WORLD & TELEMETRY...' : 'SWITCHING TO PROFESSIONAL STUDIO MODE...';
        }

        this.transitionWarp.classList.remove('hidden');
        this.transitionWarp.classList.add('active');

        setTimeout(() => {
            callback();
            setTimeout(() => {
                this.transitionWarp.classList.remove('active');
                setTimeout(() => {
                    this.transitionWarp.classList.add('hidden');
                }, 400);
            }, 350);
        }, 300);
    }

    applyModeStyles(mode) {
        if (mode === 'game') {
            // Activate 3D Game World Mode
            document.body.classList.remove('pro-mode-active');
            document.body.classList.add('game-mode-active');

            if (this.proContainer) {
                this.proContainer.classList.add('hidden');
            }
            if (this.gameHud) {
                this.gameHud.classList.remove('hidden');
            }
            if (this.canvasContainer) {
                this.canvasContainer.style.display = 'block';
                this.canvasContainer.style.opacity = '1';
                this.canvasContainer.style.pointerEvents = 'auto';
            }
            if (this.scanlines) {
                this.scanlines.style.display = 'block';
            }

            // Resume Game WebGL loop
            if (this.glManager && typeof this.glManager.resume === 'function') {
                this.glManager.resume();
            }

            // Pause Pro interactive canvas
            if (this.proCanvas && typeof this.proCanvas.pause === 'function') {
                this.proCanvas.pause();
            }

            // Update UI toggle pill text & state
            document.querySelectorAll('.mode-toggle-action').forEach(btn => {
                btn.classList.add('mode-in-game');
                btn.classList.remove('mode-in-pro');
                const label = btn.querySelector('.mode-toggle-label');
                if (label) label.textContent = '💼 PRO MODE';
            });

            // Status bar alert in Game HUD
            const zoneIndicator = document.getElementById('hud-zone-indicator');
            const indicatorText = document.getElementById('indicator-text');
            if (zoneIndicator && indicatorText) {
                zoneIndicator.classList.remove('hidden');
                indicatorText.textContent = '3D XENO-EXPLORER ENGAGED // HOVER THRUSTERS ONLINE';
                setTimeout(() => {
                    zoneIndicator.classList.add('hidden');
                }, 3000);
            }

        } else {
            // Activate Professional Studio Mode
            document.body.classList.remove('game-mode-active');
            document.body.classList.add('pro-mode-active');

            if (this.proContainer) {
                this.proContainer.classList.remove('hidden');
            }
            if (this.gameHud) {
                this.gameHud.classList.add('hidden');
            }
            if (this.canvasContainer) {
                this.canvasContainer.style.display = 'none';
                this.canvasContainer.style.pointerEvents = 'none';
            }
            if (this.scanlines) {
                this.scanlines.style.display = 'none';
            }

            // Pause Game WebGL loop to conserve CPU/GPU
            if (this.glManager && typeof this.glManager.pause === 'function') {
                this.glManager.pause();
            }

            // Resume Pro interactive canvas
            if (this.proCanvas && typeof this.proCanvas.resume === 'function') {
                this.proCanvas.resume();
            }

            // Update UI toggle pill text & state
            document.querySelectorAll('.mode-toggle-action').forEach(btn => {
                btn.classList.remove('mode-in-game');
                btn.classList.add('mode-in-pro');
                const label = btn.querySelector('.mode-toggle-label');
                if (label) label.textContent = '🕹️ 3D GAME MODE';
            });
        }
    }
}
