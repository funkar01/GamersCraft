import * as THREE from 'three';
import { WebGLRendererManager } from './webgl/Renderer.js';
import { Drone } from './webgl/Drone.js';
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
        if ([" ", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
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
        'a, button, .hud-nav-item, .dpad-btn, .popup-close-btn, .settings-toggle-btn, .drone-option'
    );
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            audio.playHover();
        });
    });

    // -----------------------------------------------------------------
    // 8. Settings Panel Modal & 3D Drone Preview Control
    // -----------------------------------------------------------------
    const settingsToggle = document.getElementById('hud-settings-toggle');
    const settingsOverlay = document.getElementById('settings-overlay');
    const settingsClose = document.getElementById('settings-close');
    const applyDroneBtn = document.getElementById('apply-drone-btn');
    
    const volumeSlider = document.getElementById('volume-slider');
    const volumePercent = document.getElementById('volume-percent');
    
    const lightSlider = document.getElementById('light-slider');
    const lightPercent = document.getElementById('light-percent');
    
    let previewRenderer = null;
    let previewScene = null;
    let previewCamera = null;
    let previewDroneGroup = null;
    let currentPreviewDrone = null;
    let previewAnimId = null;

    // Track active selected drone model type
    let selectedDroneType = 'default';

    // Show settings overlay
    if (settingsToggle && settingsOverlay) {
        settingsToggle.addEventListener('click', () => {
            audio.playClick();
            
            // Close other info modal if open
            if (infoOverlay) infoOverlay.classList.add('hidden');
            
            settingsOverlay.classList.remove('hidden');
            
            // Sync current in-game drone type to active option
            if (glManager.drone) {
                const currentType = glManager.drone.currentType || 'default';
                selectedDroneType = currentType;
                
                document.querySelectorAll('.drone-option').forEach(opt => {
                    if (opt.dataset.drone === currentType) {
                        opt.classList.add('active');
                    } else {
                        opt.classList.remove('active');
                    }
                });
            }

            // Sync volume slider state
            const currentVol = audio.savedVolume !== undefined ? audio.savedVolume : 0.3;
            if (volumeSlider) {
                volumeSlider.value = currentVol;
                volumePercent.textContent = `${Math.round(currentVol * 100)}%`;
            }

            // Sync light slider state
            if (lightSlider && glManager) {
                const currentLightMult = glManager.lightMultiplier !== undefined ? glManager.lightMultiplier : 1.0;
                lightSlider.value = currentLightMult;
                lightPercent.textContent = `${Math.round(currentLightMult * 100)}%`;
            }

            // Initialize or update the 3D preview viewport
            initDronePreview();
            updatePreviewDroneModel(selectedDroneType);
        });
    }

    // Close settings overlay
    if (settingsClose && settingsOverlay) {
        settingsClose.addEventListener('click', () => {
            audio.playClick();
            settingsOverlay.classList.add('hidden');
            stopPreviewAnimation();
        });
    }

    // Volume Slider update
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            volumePercent.textContent = `${Math.round(val * 100)}%`;
            audio.setVolume(val);
            
            // Unmute if slider is pulled up from 0
            if (val > 0 && audio.muted) {
                audio.setMute(false);
                const soundOnSvg = document.getElementById('sound-on-svg');
                const soundOffSvg = document.getElementById('sound-off-svg');
                if (soundOnSvg && soundOffSvg) {
                    soundOffSvg.classList.remove('hidden-icon');
                    soundOnSvg.classList.add('hidden-icon');
                }
            }
        });
    }

    // Environmental Light Slider update
    if (lightSlider) {
        lightSlider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            lightPercent.textContent = `${Math.round(val * 100)}%`;
            if (glManager) {
                glManager.setLightMultiplier(val);
            }
        });
    }

    // Select drone option click listeners
    document.querySelectorAll('.drone-option').forEach(option => {
        option.addEventListener('click', () => {
            audio.playClick();
            document.querySelectorAll('.drone-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            selectedDroneType = option.dataset.drone;
            updatePreviewDroneModel(selectedDroneType);
        });
    });

    // Deploy Chassis
    if (applyDroneBtn) {
        applyDroneBtn.addEventListener('click', () => {
            audio.playSuccess();
            
            // Apply drone type to game
            glManager.setDroneType(selectedDroneType);
            
            // Alert in status zone bar
            zoneIndicator.classList.remove('hidden');
            indicatorText.textContent = `SYSTEM CALIBRATION COMPLETED // ACTIVE CHASSIS: ${selectedDroneType.toUpperCase()}`;
            
            setTimeout(() => {
                if (!currentActiveZone) {
                    zoneIndicator.classList.add('hidden');
                }
            }, 3000);

            // Close settings
            settingsOverlay.classList.add('hidden');
            stopPreviewAnimation();
        });
    }

    function initDronePreview() {
        const previewContainer = document.getElementById('drone-preview-canvas-container');
        if (!previewContainer || previewRenderer) return;

        // Create Scene
        previewScene = new THREE.Scene();

        // Nice grid helper
        const gridHelper = new THREE.GridHelper(5, 10, 0x00f0ff, 0x444444);
        gridHelper.position.y = -0.55;
        previewScene.add(gridHelper);

        // Perspective Camera
        previewCamera = new THREE.PerspectiveCamera(
            45, 
            previewContainer.clientWidth / previewContainer.clientHeight, 
            0.1, 
            100
        );
        previewCamera.position.set(0, 0.8, 2.5);

        // WebGL Renderer
        previewRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        previewRenderer.setSize(previewContainer.clientWidth, previewContainer.clientHeight);
        previewRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        previewContainer.appendChild(previewRenderer.domElement);

        // Lights
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x333333, 1.4);
        previewScene.add(hemiLight);

        const dirLight1 = new THREE.DirectionalLight(0xffdf80, 1.2);
        dirLight1.position.set(3, 4, -2);
        previewScene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0x00f0ff, 0.8);
        dirLight2.position.set(-3, 2, 2);
        previewScene.add(dirLight2);

        // Preview Group for user-controlled rotation
        previewDroneGroup = new THREE.Group();
        previewScene.add(previewDroneGroup);

        // Basic Mouse Drag-to-Rotate and Scroll-to-Zoom Controls
        let isDragging = false;
        let prevMouseX = 0;
        let prevMouseY = 0;

        previewContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            prevMouseX = e.clientX;
            prevMouseY = e.clientY;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - prevMouseX;
            const deltaY = e.clientY - prevMouseY;
            prevMouseX = e.clientX;
            prevMouseY = e.clientY;

            previewDroneGroup.rotation.y += deltaX * 0.007;
            previewDroneGroup.rotation.x += deltaY * 0.007;
            
            // Limit vertical rotation pitch to avoid going completely upside down
            previewDroneGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, previewDroneGroup.rotation.x));
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Touch drag
        previewContainer.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                prevMouseX = e.touches[0].clientX;
                prevMouseY = e.touches[0].clientY;
            }
        });

        previewContainer.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length !== 1) return;
            const deltaX = e.touches[0].clientX - prevMouseX;
            const deltaY = e.touches[0].clientY - prevMouseY;
            prevMouseX = e.touches[0].clientX;
            prevMouseY = e.touches[0].clientY;

            previewDroneGroup.rotation.y += deltaX * 0.007;
            previewDroneGroup.rotation.x += deltaY * 0.007;
            previewDroneGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, previewDroneGroup.rotation.x));
        });

        previewContainer.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Scroll wheel Zoom
        previewContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            previewCamera.position.z += e.deltaY * 0.002;
            // clamp camera distance between 1.6 units and 5.0 units
            previewCamera.position.z = Math.max(1.6, Math.min(5.0, previewCamera.position.z));
        }, { passive: false });

        // Resize support
        const resizeObserver = new ResizeObserver(() => {
            if (!previewContainer || !previewCamera || !previewRenderer) return;
            previewCamera.aspect = previewContainer.clientWidth / previewContainer.clientHeight;
            previewCamera.updateProjectionMatrix();
            previewRenderer.setSize(previewContainer.clientWidth, previewContainer.clientHeight);
        });
        resizeObserver.observe(previewContainer);

        // Tick loop
        function tickPreview() {
            previewAnimId = requestAnimationFrame(tickPreview);

            // Auto spin when not active dragging
            if (!isDragging) {
                previewDroneGroup.rotation.y += 0.005;
            }

            // Animate jet flame flickering inside preview
            if (currentPreviewDrone) {
                const time = performance.now() * 0.001;
                const flameScale = 0.8 + Math.sin(time * 35) * 0.18;
                if (currentPreviewDrone.thrusters && currentPreviewDrone.thrusters.length >= 2) {
                    currentPreviewDrone.thrusters[0].scale.set(1, 1, flameScale);
                    currentPreviewDrone.thrusters[1].scale.set(1, 1, flameScale);
                }
            }

            previewRenderer.render(previewScene, previewCamera);
        }

        tickPreview();
    }

    function updatePreviewDroneModel(type) {
        if (!previewScene || !previewDroneGroup) return;

        if (currentPreviewDrone) {
            previewDroneGroup.remove(currentPreviewDrone.mesh);
        }

        currentPreviewDrone = new Drone();
        currentPreviewDrone.rebuildModel(type);
        currentPreviewDrone.mesh.scale.set(1.0, 1.0, 1.0); // Fit beautifully within preview container
        
        // Reset rotation and position
        previewDroneGroup.rotation.set(0.1, 0, 0);
        previewDroneGroup.add(currentPreviewDrone.mesh);
    }

    function stopPreviewAnimation() {
        if (previewAnimId) {
            cancelAnimationFrame(previewAnimId);
            previewAnimId = null;
        }
        // Clean up renderer from DOM
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
