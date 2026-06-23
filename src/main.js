import { WebGLRendererManager } from './webgl/Renderer.js';
import { audio } from './ui/AudioEngine.js';

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------------
    // 1. Initialize WebGL Manager
    // -----------------------------------------------------------------
    const glManager = new WebGLRendererManager('canvas-container');

    // -----------------------------------------------------------------
    // 2. Keyboard Inputs Tracker
    // -----------------------------------------------------------------
    const keys = {};
    glManager.keys = keys; // Bind keys to renderer manager

    const onKeyDown = (e) => {
        const key = e.key.toLowerCase();
        keys[key] = true;
    };

    const onKeyUp = (e) => {
        const key = e.key.toLowerCase();
        keys[key] = false;
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // -----------------------------------------------------------------
    // 3. Mobile D-Pad Touch Controls
    // -----------------------------------------------------------------
    const mapMobileBtn = (elementId, keyCode) => {
        const btn = document.getElementById(elementId);
        if (!btn) return;

        const press = (e) => {
            e.preventDefault();
            keys[keyCode] = true;
        };

        const release = (e) => {
            e.preventDefault();
            keys[keyCode] = false;
        };

        btn.addEventListener('mousedown', press);
        btn.addEventListener('mouseup', release);
        btn.addEventListener('mouseleave', release);
        
        btn.addEventListener('touchstart', press, { passive: false });
        btn.addEventListener('touchend', release, { passive: false });
        btn.addEventListener('touchcancel', release, { passive: false });
    };

    // Map D-pad buttons to key inputs
    mapMobileBtn('mobile-drive-up', 'w');
    mapMobileBtn('mobile-drive-down', 's');
    mapMobileBtn('mobile-steer-left', 'a');
    mapMobileBtn('mobile-steer-right', 'd');

    // -----------------------------------------------------------------
    // 4. Interactive Zones & Modal Popups
    // -----------------------------------------------------------------
    const infoOverlay = document.getElementById('info-overlay');
    const popupContent = document.getElementById('popup-content');
    const popupClose = document.getElementById('popup-close');
    const zoneIndicator = document.getElementById('hud-zone-indicator');
    const indicatorText = document.getElementById('indicator-text');
    const templates = document.getElementById('project-templates');
    
    let currentActiveZone = null;
    let openedByZone = false;

    // Monitor playground collision zones
    glManager.playground.onEnterZone = (zone) => {
        if (zone) {
            // Already in this exact zone, do nothing
            if (currentActiveZone && currentActiveZone.type === zone.type && currentActiveZone.name === zone.name) {
                return;
            }
            
            currentActiveZone = zone;
            openedByZone = true;
            
            audio.playZoneSync(zone.type === 'project' ? zone.name : 'contact');
            
            // Show HUD Status bar
            zoneIndicator.classList.remove('hidden');
            
            // Inject correct template
            if (zone.type === 'project') {
                indicatorText.textContent = `MONOLITH SYNC: ENCODING ${zone.name.toUpperCase()} DATAFRAMES...`;
                const template = templates.querySelector(`#template-${zone.name}`);
                if (template) {
                    popupContent.innerHTML = template.innerHTML;
                    infoOverlay.classList.remove('hidden');
                }
            } else if (zone.type === 'contact') {
                indicatorText.textContent = 'BEACON ANOMALY: TRANSCEIVER SOCKET SECURED';
                const template = templates.querySelector('#template-contact');
                if (template) {
                    popupContent.innerHTML = template.innerHTML;
                    infoOverlay.classList.remove('hidden');
                }
            }
        } else {
            // Left the zone
            if (currentActiveZone) {
                currentActiveZone = null;
                zoneIndicator.classList.add('hidden');
                
                // If the modal was opened by driving into a zone, close it automatically when driving away
                if (openedByZone) {
                    infoOverlay.classList.add('hidden');
                    openedByZone = false;
                }
            }
        }
    };

    // Manual Close Modal
    popupClose.addEventListener('click', () => {
        audio.playClick();
        infoOverlay.classList.add('hidden');
        openedByZone = false; // block automatic opening until re-entering
    });

    // -----------------------------------------------------------------
    // 5. Navigation Teleportation coordinates
    // -----------------------------------------------------------------
    const navItems = document.querySelectorAll('.hud-nav-item');
    
    // Teleport points relative to XenoWorld coordinates
    const targets = {
        welcome: { x: 0, z: 0, heading: 0 },
        about: { x: -18, z: 7, heading: Math.PI }, // Facing Bio board sign
        quests: { x: 0, z: -25, heading: Math.PI }, // Facing Obsidian Monoliths
        skills: { x: 18, z: 12, heading: Math.PI / 4 }, // Facing Skills board sign
        contact: { x: 0, z: 31, heading: 0 } // Inside Beacon ring
    };

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            audio.playTeleport();
            
            const targetName = item.dataset.target;
            const coord = targets[targetName];
            
            if (coord && glManager.drone) {
                // Flash indicator in HUD
                zoneIndicator.classList.remove('hidden');
                indicatorText.textContent = `TELEPORTING DRONE TELEMETRY TO ${targetName.toUpperCase()}...`;
                
                // Teleport Drone
                glManager.drone.teleportTo(coord.x, coord.z, coord.heading);
                
                // Audio Chime
                setTimeout(() => {
                    audio.playZoneSync(targetName);
                }, 120);

                // Update active link visually
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                // Auto hide status indicator after 2 seconds if no zone active
                setTimeout(() => {
                    if (!currentActiveZone) {
                        zoneIndicator.classList.add('hidden');
                    }
                }, 2000);
            }
        });
    });

    // -----------------------------------------------------------------
    // 6. Sound Synthesizer Controls
    // -----------------------------------------------------------------
    const soundToggle = document.getElementById('hud-sound-toggle');
    const soundOnSvg = document.getElementById('sound-on-svg');
    const soundOffSvg = document.getElementById('sound-off-svg');

    // Initialize AudioContext on first interaction
    const initAudioContext = () => {
        audio.init();
        document.removeEventListener('click', initAudioContext);
        document.removeEventListener('keydown', initAudioContext);
    };
    document.addEventListener('click', initAudioContext);
    document.addEventListener('keydown', initAudioContext);

    soundToggle.addEventListener('click', () => {
        const currentlyMuted = audio.muted;
        const newMuted = !currentlyMuted;
        audio.setMute(newMuted);

        if (newMuted) {
            soundOnSvg.classList.add('hidden-icon');
            soundOffSvg.classList.remove('hidden-icon');
        } else {
            soundOffSvg.classList.add('hidden-icon');
            soundOnSvg.classList.remove('hidden-icon');
            audio.playSuccess();
        }
    });

    // -----------------------------------------------------------------
    // 7. Manual dismissal
    // -----------------------------------------------------------------
    const closeInstructionsBtn = document.getElementById('close-instructions-btn');
    const instructionsCard = document.getElementById('instructions-card');

    if (closeInstructionsBtn) {
        closeInstructionsBtn.addEventListener('click', () => {
            audio.playClick();
            instructionsCard.style.opacity = 0;
            setTimeout(() => {
                instructionsCard.classList.add('hidden');
            }, 300);
        });
    }

    // Add generic hover sounds to HUD links
    const interactiveElements = document.querySelectorAll(
        'a, button, .hud-nav-item, .dpad-btn, .popup-close-btn'
    );
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            audio.playHover();
        });
    });
});
