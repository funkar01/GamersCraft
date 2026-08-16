import * as THREE from 'three';
import { WebGLRendererManager } from './webgl/Renderer.js';
import { Drone } from './webgl/Drone.js';
import { audio } from './ui/AudioEngine.js';
import { ProInteractiveCanvas } from './ui/ProInteractiveCanvas.js';
import { LabDroneViewer } from './ui/LabDroneViewer.js';
import { ModeController } from './ui/ModeController.js';
import { caseStudies } from './ui/CaseStudiesData.js';
import './ui/VisitorTelemetry.js';
import { GGChatWidget } from './ui/GGChatWidget.js';

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------------
    // 0. Initialize Gamified Visitor Lead Capture & Telemetry
    // -----------------------------------------------------------------
    const ggWidget = new GGChatWidget();

    // Wire up any "Let's Talk" buttons to trigger the interactive comms modal
    document.querySelectorAll('.btn-talk').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            ggWidget.open();
        });
    });

    // -----------------------------------------------------------------
    // 1. Initialize Game 3D WebGL Manager
    // -----------------------------------------------------------------
    const glManager = new WebGLRendererManager('canvas-container');

    // Keyboard Inputs Tracker
    const keys = {};
    glManager.keys = keys;

    const onKeyDown = (e) => {
        const key = e.key.toLowerCase();
        keys[key] = true;
        if ([" ", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key) && document.body.classList.contains('game-mode-active')) {
            e.preventDefault();
        }
    };

    const onKeyUp = (e) => {
        const key = e.key.toLowerCase();
        keys[key] = false;
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // -----------------------------------------------------------------
    // 2. Initialize Professional Mode Interactive Visualizers
    // -----------------------------------------------------------------
    const proCanvas = new ProInteractiveCanvas('pro-hero-canvas-container');
    const labViewer = new LabDroneViewer('lab-drone-canvas');

    // -----------------------------------------------------------------
    // 3. Initialize Dual-Mode Controller (Pro Mode <-> 3D Game Mode)
    // -----------------------------------------------------------------
    const modeController = new ModeController({
        glManager,
        proCanvas,
        labViewer
    });

    // -----------------------------------------------------------------
    // 4. Custom Magnetic Cursor System
    // -----------------------------------------------------------------
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('cursor-follower');

    if (cursor && follower) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let followerX = mouseX;
        let followerY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        function animateCursor() {
            followerX += (mouseX - followerX) * 0.18;
            followerY += (mouseY - followerY) * 0.18;
            follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Add magnetic hover class to interactive elements
        const updateHoverListeners = () => {
            document.querySelectorAll('a, button, input, textarea, .project-card, .lab-card, .synth-pad-btn, .drone-option').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    follower.classList.add('hovered');
                });
                el.addEventListener('mouseleave', () => {
                    follower.classList.remove('hovered');
                });
            });
        };
        updateHoverListeners();
    }

    // -----------------------------------------------------------------
    // 5. Populate Featured Works Flash Cards Grid & Filtering
    // -----------------------------------------------------------------
    const worksGrid = document.getElementById('works-grid');
    const filterBtns = document.querySelectorAll('.filter-pill, .filter-btn');

    function renderProjects(filter = 'all') {
        if (!worksGrid) return;
        worksGrid.innerHTML = '';

        const filtered = filter === 'all' 
            ? caseStudies 
            : caseStudies.filter(p => p.category === filter);

        filtered.forEach((project) => {
            const card = document.createElement('article');
            card.className = 'project-flash-card';
            card.setAttribute('data-id', project.id);
            card.style.setProperty('--card-accent', project.accentColor);

            card.innerHTML = `
                <div class="flash-card-media">
                    <img src="${project.image}" alt="${project.title}" class="flash-card-img" loading="lazy" />
                    <div class="flash-card-overlay"></div>
                </div>
                <div class="flash-card-info">
                    <span class="flash-card-disciplines">${project.disciplines}</span>
                    <h3 class="flash-card-title">
                        <span class="title-arrow">→</span>
                        <span class="title-text">${project.title}</span>
                    </h3>
                </div>
            `;

            // Click anywhere on flash card to open detailed case study drawer
            card.addEventListener('click', () => {
                audio.playClick();
                openCaseStudyDrawer(project.id);
            });

            worksGrid.appendChild(card);
        });

        // Re-bind hover listeners for magnetic cursor
        if (cursor && follower) {
            document.querySelectorAll('.project-flash-card').forEach(btn => {
                btn.addEventListener('mouseenter', () => follower.classList.add('hovered'));
                btn.addEventListener('mouseleave', () => follower.classList.remove('hovered'));
            });
        }
    }

    renderProjects('all');

    // Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            audio.playClick();
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    // -----------------------------------------------------------------
    // 6. Case Study Drawer Modal Manager
    // -----------------------------------------------------------------
    const drawer = document.getElementById('case-study-drawer');
    const drawerContent = document.getElementById('drawer-content');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerBackdrop = document.getElementById('drawer-backdrop');

    function openCaseStudy(id) {
        const project = caseStudies.find(p => p.id === id);
        if (!project || !drawer || !drawerContent) return;

        audio.playZoneSync('project');

        drawerContent.innerHTML = `
            <div class="drawer-header">
                <span class="drawer-category-badge" style="color: ${project.accentColor}">// ${project.categoryLabel.toUpperCase()}</span>
                <h2 class="drawer-title">${project.title}</h2>
                <p class="drawer-tagline">${project.tagline}</p>
            </div>

            <div class="drawer-stats-row">
                ${project.stats.map(s => `
                    <div class="stat-item">
                        <span class="stat-label">${s.label.toUpperCase()}</span>
                        <span class="stat-val" style="color: ${project.accentColor}">${s.value}</span>
                    </div>
                `).join('')}
            </div>

            <div class="drawer-section">
                <h3><span style="color: ${project.accentColor}">//</span> OVERVIEW</h3>
                <p>${project.overview}</p>
            </div>

            <div class="drawer-section">
                <h3><span style="color: ${project.accentColor}">//</span> ARCHITECTURAL CHALLENGE</h3>
                <p>${project.challenge}</p>
            </div>

            <div class="drawer-section">
                <h3><span style="color: ${project.accentColor}">//</span> TECHNICAL SOLUTION & PIPELINE</h3>
                <p>${project.solution}</p>
            </div>

            <div class="drawer-section">
                <h3><span style="color: ${project.accentColor}">//</span> KEY TECHNICAL HIGHLIGHTS</h3>
                <ul class="drawer-highlights-list">
                    ${project.technicalHighlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>

            <div class="drawer-section">
                <h3><span style="color: ${project.accentColor}">//</span> CORE IMPLEMENTATION SNIPPET</h3>
                <div class="code-block-wrapper">
                    <div class="code-block-header">${project.languages.join(' • ')}</div>
                    <pre class="code-block-pre"><code>${escapeHtml(project.codeSnippet)}</code></pre>
                </div>
            </div>

            <div class="drawer-section" style="display: flex; gap: 16px; margin-top: 40px;">
                <a href="${project.githubUrl}" target="_blank" class="hero-primary-btn" style="background: ${project.accentColor}; flex: 1; justify-content: center;">
                    <span>INSPECT REPOSITORY</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </a>
                <button class="mode-toggle-action hero-secondary-btn" data-target-mode="game" style="flex: 1;">
                    <span>LAUNCH IN 3D WORLD</span>
                    <span class="btn-subtext">🕹️ INTERACTIVE WORLD</span>
                </button>
            </div>
        `;

        drawer.classList.remove('hidden');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // prevent background scrolling while drawer open
    }

    function closeCaseStudy() {
        if (!drawer) return;
        audio.playClick();
        drawer.classList.add('hidden');
        drawer.setAttribute('aria-hidden', 'true');
        if (document.body.classList.contains('pro-mode-active')) {
            document.body.style.overflow = 'auto';
        }
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Event delegation for opening case studies
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.open-case-study');
        if (btn) {
            const id = btn.dataset.id;
            if (id) openCaseStudy(id);
        }
    });

    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeCaseStudy);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeCaseStudy);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer && !drawer.classList.contains('hidden')) {
            closeCaseStudy();
        }
    });

    // -----------------------------------------------------------------
    // 7. Interactive Lab Toy 2: Kinetic GLSL Particle Vortex
    // -----------------------------------------------------------------
    const vortexCanvas = document.getElementById('lab-vortex-canvas');
    if (vortexCanvas) {
        const ctx = vortexCanvas.getContext('2d');
        let vWidth = (vortexCanvas.width = vortexCanvas.parentElement.clientWidth);
        let vHeight = (vortexCanvas.height = vortexCanvas.parentElement.clientHeight);

        const vParticles = [];
        const vCount = 180;
        const vMouse = { x: vWidth / 2, y: vHeight / 2, active: false };

        for (let i = 0; i < vCount; i++) {
            vParticles.push({
                x: Math.random() * vWidth,
                y: Math.random() * vHeight,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                radius: 1.5 + Math.random() * 2.0,
                color: i % 2 === 0 ? '#ffb700' : '#00f0ff'
            });
        }

        vortexCanvas.addEventListener('mousemove', (e) => {
            const rect = vortexCanvas.getBoundingClientRect();
            vMouse.x = e.clientX - rect.left;
            vMouse.y = e.clientY - rect.top;
            vMouse.active = true;
        });

        vortexCanvas.addEventListener('mouseleave', () => {
            vMouse.active = false;
        });

        // Pulse blast button
        const resetBtn = document.getElementById('lab-particle-reset');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                audio.playExplode();
                vParticles.forEach(p => {
                    const angle = Math.random() * Math.PI * 2;
                    const speed = 4 + Math.random() * 6;
                    p.vx = Math.cos(angle) * speed;
                    p.vy = Math.sin(angle) * speed;
                });
            });
        }

        function drawVortex() {
            requestAnimationFrame(drawVortex);
            ctx.fillStyle = 'rgba(6, 8, 16, 0.25)';
            ctx.fillRect(0, 0, vWidth, vHeight);

            vParticles.forEach(p => {
                if (vMouse.active) {
                    const dx = p.x - vMouse.x;
                    const dy = p.y - vMouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                    if (dist < 120) {
                        const force = (120 - dist) / 120 * 0.4;
                        p.vx += (dx / dist) * force;
                        p.vy += (dy / dist) * force;
                    }
                }

                // Swirl towards center
                const cx = vWidth / 2;
                const cy = vHeight / 2;
                const toCx = cx - p.x;
                const toCy = cy - p.y;
                p.vx += toCx * 0.0003 - toCy * 0.0012;
                p.vy += toCy * 0.0003 + toCx * 0.0012;

                p.vx *= 0.98;
                p.vy *= 0.98;

                p.x += p.vx;
                p.y += p.vy;

                // Wrap
                if (p.x < 0) p.x = vWidth;
                if (p.x > vWidth) p.x = 0;
                if (p.y < 0) p.y = vHeight;
                if (p.y > vHeight) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 8;
                ctx.shadowColor = p.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            });
        }
        drawVortex();
    }

    // -----------------------------------------------------------------
    // 8. Interactive Lab Toy 3: Web Audio Harmonic Synthesizer
    // -----------------------------------------------------------------
    const synthPadBtns = document.querySelectorAll('.synth-pad-btn');
    synthPadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const freq = parseFloat(btn.dataset.freq) || 440;
            audio.init();
            
            // Generate harmonic synth tone
            if (audio.ctx) {
                const ctx = audio.ctx;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const filter = ctx.createBiquadFilter();

                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, ctx.currentTime);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(1800, ctx.currentTime);
                filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 1.2);

                gain.gain.setValueAtTime(0.2, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(audio.masterGain);

                osc.start();
                osc.stop(ctx.currentTime + 1.3);

                btn.classList.add('active');
                setTimeout(() => btn.classList.remove('active'), 300);
            }
        });
    });

    // -----------------------------------------------------------------
    // 9. Contact Section: 1-Click Email Copy & Live Studio Clock
    // -----------------------------------------------------------------
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyFeedback = document.getElementById('copy-feedback');
    const directEmailLink = document.getElementById('direct-email-link');

    if (copyEmailBtn && directEmailLink) {
        copyEmailBtn.addEventListener('click', () => {
            const email = directEmailLink.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                audio.playSuccess();
                if (copyFeedback) copyFeedback.textContent = 'COPIED!';
                copyEmailBtn.style.background = 'var(--color-cyan)';
                copyEmailBtn.style.color = '#000';
                setTimeout(() => {
                    if (copyFeedback) copyFeedback.textContent = 'COPY';
                    copyEmailBtn.style.background = '';
                    copyEmailBtn.style.color = '';
                }, 2000);
            }).catch(() => {
                window.location.href = `mailto:${email}`;
            });
        });
    }

    // Live Studio Clock (UTC+5:30)
    const studioClock = document.getElementById('live-studio-clock');
    function updateStudioClock() {
        if (!studioClock) return;
        const now = new Date();
        const options = {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const timeString = new Intl.DateTimeFormat([], options).format(now);
        studioClock.textContent = `UTC+5:30 // ${timeString}`;
    }
    updateStudioClock();
    setInterval(updateStudioClock, 1000);

    // Inquiry Form Scope Selector & Submission
    const scopePills = document.querySelectorAll('.scope-pill');
    let selectedScope = 'Game Development';
    scopePills.forEach(pill => {
        pill.addEventListener('click', () => {
            audio.playClick();
            scopePills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            selectedScope = pill.dataset.scope;
        });
    });

    const inquiryForm = document.getElementById('pro-inquiry-form');
    const formFeedback = document.getElementById('form-feedback');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            audio.playSuccess();

            const name = document.getElementById('inquiry-name').value;
            const email = document.getElementById('inquiry-email').value;
            const message = document.getElementById('inquiry-message').value;

            if (formFeedback) {
                formFeedback.className = 'form-feedback success';
                formFeedback.textContent = `TRANSMISSION SECURED: Thank you ${name}. Your ${selectedScope} brief has been recorded. Direct dispatch initiated.`;
                formFeedback.classList.remove('hidden');
            }

            inquiryForm.reset();
            setTimeout(() => {
                if (formFeedback) formFeedback.classList.add('hidden');
            }, 6000);
        });
    }

    // -----------------------------------------------------------------
    // 10. Sound Synthesizer Controls (Both Pro & Game Headers)
    // -----------------------------------------------------------------
    const proSoundToggle = document.getElementById('pro-sound-toggle');
    const proSoundOn = document.getElementById('pro-sound-on-svg');
    const proSoundOff = document.getElementById('pro-sound-off-svg');

    const hudSoundToggle = document.getElementById('hud-sound-toggle');
    const hudSoundOn = document.getElementById('sound-on-svg');
    const hudSoundOff = document.getElementById('sound-off-svg');

    function toggleAudio() {
        const currentlyMuted = audio.muted;
        const newMuted = !currentlyMuted;
        audio.setMute(newMuted);

        [proSoundOn, hudSoundOn].forEach(svg => {
            if (svg) svg.classList.toggle('hidden-icon', newMuted);
        });
        [proSoundOff, hudSoundOff].forEach(svg => {
            if (svg) svg.classList.toggle('hidden-icon', !newMuted);
        });

        if (!newMuted) audio.playSuccess();
    }

    if (proSoundToggle) proSoundToggle.addEventListener('click', toggleAudio);
    if (hudSoundToggle) hudSoundToggle.addEventListener('click', toggleAudio);

    // Initialize AudioContext on first user interaction
    const initAudioContext = () => {
        audio.init();
        document.removeEventListener('click', initAudioContext);
        document.removeEventListener('keydown', initAudioContext);
    };
    document.addEventListener('click', initAudioContext);
    document.addEventListener('keydown', initAudioContext);

    // -----------------------------------------------------------------
    // 11. Preserved 3D Game World Interactions & Settings
    // -----------------------------------------------------------------
    // Mobile D-Pad Touch Controls
    const mapMobileBtn = (elementId, keyCode) => {
        const btn = document.getElementById(elementId);
        if (!btn) return;

        const press = (e) => { e.preventDefault(); keys[keyCode] = true; };
        const release = (e) => { e.preventDefault(); keys[keyCode] = false; };

        btn.addEventListener('mousedown', press);
        btn.addEventListener('mouseup', release);
        btn.addEventListener('mouseleave', release);
        btn.addEventListener('touchstart', press, { passive: false });
        btn.addEventListener('touchend', release, { passive: false });
        btn.addEventListener('touchcancel', release, { passive: false });
    };

    mapMobileBtn('mobile-drive-up', 'w');
    mapMobileBtn('mobile-drive-down', 's');
    mapMobileBtn('mobile-steer-left', 'a');
    mapMobileBtn('mobile-steer-right', 'd');

    // Interactive Zones & Modal Popups
    const infoOverlay = document.getElementById('info-overlay');
    const popupContent = document.getElementById('popup-content');
    const popupClose = document.getElementById('popup-close');
    const zoneIndicator = document.getElementById('hud-zone-indicator');
    const indicatorText = document.getElementById('indicator-text');
    const templates = document.getElementById('project-templates');
    
    let currentActiveZone = null;
    let openedByZone = false;

    let currentPortalProjectIndex = 0;
    const portalProjectList = ['neon', 'void', 'defense'];
    const portalProjectColors = [0x39ff14, 0xff00ff, 0x00f0ff];

    function updatePortalProjectDisplay() {
        const detailsContainer = document.getElementById('portal-project-details');
        const indicator = document.getElementById('portal-project-indicator');
        if (!detailsContainer) return;

        const activeName = portalProjectList[currentPortalProjectIndex];
        const template = templates.querySelector(`#template-${activeName}`);
        if (template) {
            detailsContainer.innerHTML = template.innerHTML;
            const badge = detailsContainer.querySelector('.popup-badge');
            if (badge) badge.remove();
        }

        if (indicator) {
            indicator.textContent = `${currentPortalProjectIndex + 1} / 3`;
            const colors = ['#39ff14', '#ff00ff', '#00f0ff'];
            indicator.style.color = colors[currentPortalProjectIndex];
        }

        if (glManager.playground && typeof glManager.playground.setPortalColor === 'function') {
            glManager.playground.setPortalColor(portalProjectColors[currentPortalProjectIndex]);
        }
    }

    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'portal-prev-btn') {
            audio.playClick();
            currentPortalProjectIndex = (currentPortalProjectIndex - 1 + portalProjectList.length) % portalProjectList.length;
            updatePortalProjectDisplay();
        }
        if (e.target && e.target.id === 'portal-next-btn') {
            audio.playClick();
            currentPortalProjectIndex = (currentPortalProjectIndex + 1) % portalProjectList.length;
            updatePortalProjectDisplay();
        }
    });

    glManager.playground.onEnterZone = (zone) => {
        if (zone) {
            if (currentActiveZone && currentActiveZone.type === zone.type && currentActiveZone.name === zone.name) {
                return;
            }
            currentActiveZone = zone;
            openedByZone = true;
            audio.playZoneSync(zone.type === 'project' ? zone.name : 'contact');
            
            if (zoneIndicator) zoneIndicator.classList.remove('hidden');
            
            if (zone.type === 'project') {
                if (zone.name === 'portal') {
                    const template = templates.querySelector('#template-portal');
                    if (template) {
                        popupContent.innerHTML = template.innerHTML;
                        infoOverlay.classList.remove('hidden');
                        updatePortalProjectDisplay();
                    }
                } else {
                    if (indicatorText) indicatorText.textContent = `MONOLITH SYNC: ENCODING ${zone.name.toUpperCase()} DATAFRAMES...`;
                    const template = templates.querySelector(`#template-${zone.name}`);
                    if (template) {
                        popupContent.innerHTML = template.innerHTML;
                        infoOverlay.classList.remove('hidden');
                    }
                }
            } else if (zone.type === 'contact') {
                if (indicatorText) indicatorText.textContent = 'BEACON ANOMALY: TRANSCEIVER SOCKET SECURED';
                const template = templates.querySelector('#template-contact');
                if (template) {
                    popupContent.innerHTML = template.innerHTML;
                    infoOverlay.classList.remove('hidden');
                }
            }
        } else {
            if (currentActiveZone) {
                currentActiveZone = null;
                if (zoneIndicator) zoneIndicator.classList.add('hidden');
                if (openedByZone) {
                    infoOverlay.classList.add('hidden');
                    openedByZone = false;
                }
            }
        }
    };

    if (popupClose) {
        popupClose.addEventListener('click', () => {
            audio.playClick();
            infoOverlay.classList.add('hidden');
            openedByZone = false;
        });
    }

    // Teleport Navigation inside Game HUD
    const navItems = document.querySelectorAll('.hud-nav-item');
    const targets = {
        welcome: { x: 0, z: 0, heading: 0 },
        about: { x: -18, z: 7, heading: Math.PI },
        quests: { x: 0, z: -25, heading: Math.PI },
        skills: { x: 18, z: 12, heading: Math.PI / 4 },
        contact: { x: 0, z: 31, heading: 0 }
    };

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            audio.playTeleport();
            const targetName = item.dataset.target;
            const coord = targets[targetName];
            
            if (coord && glManager.drone) {
                if (zoneIndicator) {
                    zoneIndicator.classList.remove('hidden');
                    if (indicatorText) indicatorText.textContent = `TELEPORTING DRONE TELEMETRY TO ${targetName.toUpperCase()}...`;
                }
                glManager.drone.teleportTo(coord.x, coord.z, coord.heading);
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });

    // Dismiss manual
    const closeInstructionsBtn = document.getElementById('close-instructions-btn');
    const instructionsCard = document.getElementById('instructions-card');
    if (closeInstructionsBtn && instructionsCard) {
        closeInstructionsBtn.addEventListener('click', () => {
            audio.playClick();
            instructionsCard.classList.add('hidden');
        });
    }

    // Settings Modal Panel in Game Mode
    const settingsToggle = document.getElementById('hud-settings-toggle');
    const settingsOverlay = document.getElementById('settings-overlay');
    const settingsClose = document.getElementById('settings-close');
    const applyDroneBtn = document.getElementById('apply-drone-btn');
    
    const volumeSlider = document.getElementById('volume-slider');
    const volumePercent = document.getElementById('volume-percent');
    const musicSlider = document.getElementById('music-slider');
    const musicPercent = document.getElementById('music-percent');
    const lightSlider = document.getElementById('light-slider');
    const lightPercent = document.getElementById('light-percent');

    let previewRenderer = null;
    let previewScene = null;
    let previewCamera = null;
    let previewDroneGroup = null;
    let currentPreviewDrone = null;
    let previewAnimId = null;
    let selectedDroneType = 'cyan-dart';

    if (settingsToggle && settingsOverlay) {
        settingsToggle.addEventListener('click', () => {
            audio.playClick();
            if (infoOverlay) infoOverlay.classList.add('hidden');
            settingsOverlay.classList.remove('hidden');

            if (glManager.drone) {
                const currentType = glManager.drone.currentType || 'default';
                selectedDroneType = currentType;
                document.querySelectorAll('.drone-option').forEach(opt => {
                    opt.classList.toggle('active', opt.dataset.drone === currentType);
                });
            }

            initDronePreview();
            updatePreviewDroneModel(selectedDroneType);
        });
    }

    if (settingsClose && settingsOverlay) {
        settingsClose.addEventListener('click', () => {
            audio.playClick();
            settingsOverlay.classList.add('hidden');
            stopPreviewAnimation();
        });
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            if (volumePercent) volumePercent.textContent = `${Math.round(val * 100)}%`;
            audio.setVolume(val);
        });
    }

    if (musicSlider) {
        musicSlider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            if (musicPercent) musicPercent.textContent = `${Math.round(val * 100)}%`;
            audio.setBgmVolume(val);
        });
    }

    if (lightSlider) {
        lightSlider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            if (lightPercent) lightPercent.textContent = `${Math.round(val * 100)}%`;
            if (glManager) glManager.setLightMultiplier(val);
        });
    }

    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            audio.playClick();
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (glManager) glManager.setLightingPreset(btn.dataset.preset);
        });
    });

    document.querySelectorAll('.drone-option').forEach(option => {
        option.addEventListener('click', () => {
            audio.playClick();
            document.querySelectorAll('.drone-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            selectedDroneType = option.dataset.drone;
            updatePreviewDroneModel(selectedDroneType);
        });
    });

    if (applyDroneBtn) {
        applyDroneBtn.addEventListener('click', () => {
            audio.playSuccess();
            glManager.setDroneType(selectedDroneType);
            settingsOverlay.classList.add('hidden');
            stopPreviewAnimation();
        });
    }

    function initDronePreview() {
        const previewContainer = document.getElementById('drone-preview-canvas-container');
        if (!previewContainer || previewRenderer) return;

        previewScene = new THREE.Scene();
        const gridHelper = new THREE.GridHelper(5, 10, 0x00f0ff, 0x444444);
        gridHelper.position.y = -0.55;
        previewScene.add(gridHelper);

        previewCamera = new THREE.PerspectiveCamera(45, previewContainer.clientWidth / previewContainer.clientHeight, 0.1, 100);
        previewCamera.position.set(0, 0.8, 2.5);

        previewRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        previewRenderer.setSize(previewContainer.clientWidth, previewContainer.clientHeight);
        previewRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        previewContainer.appendChild(previewRenderer.domElement);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x333333, 1.4);
        previewScene.add(hemiLight);

        const dirLight1 = new THREE.DirectionalLight(0xffdf80, 1.2);
        dirLight1.position.set(3, 4, -2);
        previewScene.add(dirLight1);

        previewDroneGroup = new THREE.Group();
        previewScene.add(previewDroneGroup);

        function tickPreview() {
            previewAnimId = requestAnimationFrame(tickPreview);
            previewDroneGroup.rotation.y += 0.005;
            previewRenderer.render(previewScene, previewCamera);
        }
        tickPreview();
    }

    function updatePreviewDroneModel(type) {
        if (!previewScene || !previewDroneGroup) return;
        if (currentPreviewDrone) previewDroneGroup.remove(currentPreviewDrone.mesh);

        currentPreviewDrone = new Drone();
        currentPreviewDrone.rebuildModel(type);
        currentPreviewDrone.mesh.scale.set(1.0, 1.0, 1.0);
        previewDroneGroup.rotation.set(0.1, 0, 0);
        previewDroneGroup.add(currentPreviewDrone.mesh);
    }

    function stopPreviewAnimation() {
        if (previewAnimId) {
            cancelAnimationFrame(previewAnimId);
            previewAnimId = null;
        }
        const previewContainer = document.getElementById('drone-preview-canvas-container');
        if (previewContainer && previewRenderer) {
            previewContainer.innerHTML = '';
            previewRenderer.dispose();
            previewRenderer = null;
            previewScene = null;
            previewCamera = null;
            previewDroneGroup = null;
            currentPreviewDrone = null;
        }
    }
});
