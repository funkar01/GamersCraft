import { WebGLRendererManager } from './webgl/Renderer.js';
import { ParticlesCartridge } from './webgl/Particles.js';
import { PlanetCartridge } from './webgl/Planet.js';
import { LifeCartridge } from './webgl/Life.js';
import { CompanionBot } from './webgl/Companion.js';
import { Terminal } from './ui/Terminal.js';
import { audio } from './ui/AudioEngine.js';

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------------
    // 1. Initialize WebGL Stack
    // -----------------------------------------------------------------
    const glManager = new WebGLRendererManager('canvas-container');
    
    const vortex = new ParticlesCartridge();
    const planet = new PlanetCartridge();
    const life = new LifeCartridge();
    
    glManager.registerCartridge('vortex', vortex);
    glManager.registerCartridge('planet', planet);
    glManager.registerCartridge('life', life);
    
    const companion = new CompanionBot();
    glManager.registerCompanion(companion);
    
    // Start with Gravity Vortex
    glManager.switchCartridge('vortex');

    // -----------------------------------------------------------------
    // 2. Initialize Draggable Terminal CLI
    // -----------------------------------------------------------------
    const terminal = new Terminal('terminal-container', {
        onCommand: (action, value) => {
            if (action === 'cartridge') {
                glManager.switchCartridge(value);
                syncCartridgeActiveUI(value);
            }
        }
    });

    // -----------------------------------------------------------------
    // 3. Audio / Mute Controls
    // -----------------------------------------------------------------
    const muteToggle = document.getElementById('mute-toggle');
    const soundOnIcon = document.getElementById('sound-on-icon');
    const soundOffIcon = document.getElementById('sound-off-icon');
    const muteText = muteToggle.querySelector('.hud-btn-text');

    // Initialize AudioContext on first click anywhere
    const unlockAudio = () => {
        audio.init();
        document.removeEventListener('click', unlockAudio);
        document.removeEventListener('keydown', unlockAudio);
    };
    document.addEventListener('click', unlockAudio);
    document.addEventListener('keydown', unlockAudio);

    muteToggle.addEventListener('click', () => {
        const currentlyMuted = audio.muted;
        const newMuted = !currentlyMuted;
        
        audio.setMute(newMuted);
        
        if (newMuted) {
            soundOnIcon.classList.add('hidden-icon');
            soundOffIcon.classList.remove('hidden-icon');
            muteText.textContent = 'SOUND: OFF';
        } else {
            soundOffIcon.classList.add('hidden-icon');
            soundOnIcon.classList.remove('hidden-icon');
            muteText.textContent = 'SOUND: ON';
            audio.playSuccess();
        }
    });

    // -----------------------------------------------------------------
    // 4. Cartridge Deck Interface & Slider Listeners
    // -----------------------------------------------------------------
    const slots = document.querySelectorAll('.cartridge-slot');
    
    const syncCartridgeActiveUI = (cartridgeName) => {
        slots.forEach(slot => {
            if (slot.dataset.cartridge === cartridgeName) {
                slot.classList.add('active');
            } else {
                slot.classList.remove('active');
            }
        });

        // Hide/Show sliders based on active mode
        const gravityGroup = document.getElementById('slider-gravity-group');
        const speedGroup = document.getElementById('slider-speed-group');
        const colorGroup = document.querySelector('.param-color-group');

        if (cartridgeName === 'vortex') {
            gravityGroup.style.display = 'block';
            speedGroup.style.display = 'block';
            colorGroup.style.display = 'flex';
        } else if (cartridgeName === 'planet') {
            gravityGroup.style.display = 'none';
            speedGroup.style.display = 'block';
            colorGroup.style.display = 'none';
        } else if (cartridgeName === 'life') {
            gravityGroup.style.display = 'none'; // Life doesn't have gravity
            speedGroup.style.display = 'block';
            colorGroup.style.display = 'none';
        }
    };

    slots.forEach(slot => {
        slot.addEventListener('click', () => {
            const cartridgeName = slot.dataset.cartridge;
            audio.playClick();
            glManager.switchCartridge(cartridgeName);
            syncCartridgeActiveUI(cartridgeName);
        });
    });

    // Preset standard values
    syncCartridgeActiveUI('vortex');

    // Sliders
    const gravitySlider = document.getElementById('slider-gravity');
    const speedSlider = document.getElementById('slider-speed');

    gravitySlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        vortex.params.gravity = val;
    });

    speedSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        vortex.params.speed = val;
        
        // Planet rotation speed adjust
        planet.group.rotation.y = val * 0.1;
        
        // Life simulation speed adjust
        life.updateInterval = 0.3 - (val * 0.1); // higher flow slider = lower interval delay
    });

    // Color Swappers (Vortex specific)
    const colorBtns = document.querySelectorAll('.color-btn');
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            audio.playClick();
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            vortex.setTheme(btn.dataset.theme);
        });
    });

    // -----------------------------------------------------------------
    // 5. Diagnostics Terminal Toggle
    // -----------------------------------------------------------------
    const termToggle = document.getElementById('terminal-toggle');
    const termContainer = document.getElementById('terminal-container');
    const heroDiagTrigger = document.getElementById('hero-diagnostic-trigger');

    const toggleTerminal = () => {
        audio.playClick();
        if (termContainer.style.display === 'none') {
            termContainer.style.display = 'flex';
            termContainer.classList.remove('minimized');
            termContainer.querySelector('.terminal-body .terminal-output').style.display = 'block';
            termContainer.querySelector('.terminal-body .terminal-input-container').style.display = 'flex';
            termContainer.querySelector('.terminal-input').focus();
        } else {
            termContainer.style.display = 'none';
        }
    };

    termToggle.addEventListener('click', toggleTerminal);
    if (heroDiagTrigger) {
        heroDiagTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTerminal();
        });
    }

    // -----------------------------------------------------------------
    // 6. Section Scroll Snap Hooks (IntersectionObserver)
    // -----------------------------------------------------------------
    const sections = document.querySelectorAll('.hero-section, section');
    const scrollContainer = document.querySelector('.scroll-container');
    
    // Header navigation links active mapping
    const navLinks = document.querySelectorAll('.nav-links a');

    const obsOptions = {
        root: scrollContainer,
        threshold: 0.5
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Sound / switch cartridges dynamically based on scroll category
                if (sectionId === 'hero') {
                    glManager.switchCartridge('vortex');
                    syncCartridgeActiveUI('vortex');
                } else if (sectionId === 'games') {
                    glManager.switchCartridge('planet');
                    syncCartridgeActiveUI('planet');
                } else if (sectionId === 'skills') {
                    glManager.switchCartridge('life');
                    syncCartridgeActiveUI('life');
                }

                // Update navbar states
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, obsOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // -----------------------------------------------------------------
    // 7. Quest Card Hover and Cinematic Focus
    // -----------------------------------------------------------------
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            audio.playHover();
            companion.setAlert(true);
            
            // Focus planet camera to landmark
            const landmark = card.dataset.landmark;
            if (glManager.activeCartridge === planet) {
                planet.focusLandmark(landmark);
            }
        });

        card.addEventListener('mouseleave', () => {
            companion.setAlert(false);
            
            if (glManager.activeCartridge === planet) {
                planet.focusLandmark('reset');
            }
        });
    });

    // -----------------------------------------------------------------
    // 8. Bind Web Audio Synthesis on Hover/Click of controls
    // -----------------------------------------------------------------
    const interactiveElements = document.querySelectorAll(
        'a, button, .cartridge-slot, .color-btn, .game-card, .term-btn, input[type="range"]'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            audio.playHover();
        });
        
        // Exclude range input so click synth doesn't fire continuously on slide
        if (el.tagName !== 'INPUT') {
            el.addEventListener('click', () => {
                audio.playClick();
            });
        }
    });

    // -----------------------------------------------------------------
    // 9. Mobile Menu Toggle
    // -----------------------------------------------------------------
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            audio.playClick();
            mobileLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }
});
