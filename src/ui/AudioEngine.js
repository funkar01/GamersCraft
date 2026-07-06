// Procedural retro synth sound engine using Web Audio API
class AudioEngine {
    constructor() {
        this.ctx = null;
        this.muted = true;
        this.masterVolume = null;
        this.savedVolume = 0.3; // Cached volume level
        
        // Ambient wind/hum sound nodes
        this.ambientOsc = null;
        this.ambientGain = null;

        // Drone engine growlers (low-frequency detuned mechanical saw/tri chords)
        this.engineOsc1 = null;
        this.engineOsc2 = null;
        this.engineLowpass = null;
        this.engineGain = null;

        // Cyberpunk FM warp oscillator (futuristic LFO modulated whistle)
        this.warpOsc = null;
        this.warpLFO = null;
        this.warpLFOGain = null;
        this.warpGain = null;

        // Drone woosh sound nodes (futuristic bandpass filtered noise)
        this.noiseSource = null;
        this.noiseFilter = null;
        this.noiseGain = null;

        // BGM variables
        this.bgmVolume = 0.12; // Default subtle ambient volume
        this.currentBgm = null;
        this.currentBgmIndex = -1;
        this.bgmTracks = [
            'Assets/GameMusic_Audios/Game Music_mickeyscat-moment-of-peace-mickeyscat-554494.mp3',
            'Assets/GameMusic_Audios/GameMusic_alex-morgan-background-music-545525.mp3',
            'Assets/GameMusic_Audios/GameMusic_delosound-meditation-relaxing-music-background-320405.mp3',
            'Assets/GameMusic_Audios/GameMusic_krasnoshchok-background-music-soft-calm-404429.mp3',
            'Assets/GameMusic_Audios/GameMusic_petrushkasound-relaxation-zen-background-music-461979.mp3',
            'Assets/GameMusic_Audios/GameMusic_sigmamusicart-relaxing-relax-background-music-537728.mp3'
        ];
    }

    init() {
        if (this.ctx) return;
        
        // Create audio context on first user interaction
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        
        this.ctx = new AudioContextClass();
        this.masterVolume = this.ctx.createGain();
        this.masterVolume.gain.value = this.savedVolume; // Default master volume from cache
        this.masterVolume.connect(this.ctx.destination);
    }

    setVolume(val) {
        const cleanVal = Math.max(0, Math.min(1, parseFloat(val)));
        this.savedVolume = cleanVal;
        if (this.masterVolume && this.ctx) {
            this.masterVolume.gain.setValueAtTime(cleanVal, this.ctx.currentTime);
        }
    }

    setMute(muteState) {
        this.muted = muteState;
        if (this.muted) {
            if (this.ambientGain) {
                this.ambientGain.gain.setValueAtTime(0, this.ctx?.currentTime || 0);
            }
            if (this.engineGain) {
                this.engineGain.gain.setValueAtTime(0, this.ctx?.currentTime || 0);
            }
            if (this.noiseGain) {
                this.noiseGain.gain.setValueAtTime(0, this.ctx?.currentTime || 0);
            }
            if (this.warpGain) {
                this.warpGain.gain.setValueAtTime(0, this.ctx?.currentTime || 0);
            }
            this.stopBgm();
        } else {
            this.init();
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            
            // Start ambient hum
            if (this.ambientGain) {
                this.ambientGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
            } else {
                this.startAmbientHum();
            }

            // Start drone engine hover hum & woosh sounds
            if (this.engineGain && this.noiseGain && this.warpGain) {
                this.engineGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
                this.noiseGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
                this.warpGain.gain.setValueAtTime(0.015, this.ctx.currentTime);
            } else {
                this.startDroneSound();
            }

            // Play background music
            if (this.currentBgm) {
                this.currentBgm.play().catch(e => console.warn(e));
            } else {
                this.playRandomBgm();
            }
        }
    }

    playRandomBgm() {
        if (this.muted) return;
        this.stopBgm();

        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * this.bgmTracks.length);
        } while (nextIndex === this.currentBgmIndex && this.bgmTracks.length > 1);

        this.currentBgmIndex = nextIndex;
        const trackUrl = this.bgmTracks[this.currentBgmIndex];

        try {
            this.currentBgm = new Audio(trackUrl);
            this.currentBgm.volume = this.bgmVolume;
            this.currentBgm.play().catch(e => {
                console.warn("Audio autoplay blocked or track error:", e);
            });

            this.currentBgm.addEventListener('ended', () => {
                this.playRandomBgm();
            });
        } catch(err) {
            console.error("Failed to play BGM track:", err);
        }
    }

    stopBgm() {
        if (this.currentBgm) {
            this.currentBgm.pause();
            this.currentBgm = null;
        }
    }

    setBgmVolume(val) {
        const cleanVal = Math.max(0, Math.min(1, parseFloat(val)));
        this.bgmVolume = cleanVal;
        if (this.currentBgm) {
            this.currentBgm.volume = cleanVal;
        }
    }

    playClick() {
        if (this.muted || !this.ctx) return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
        
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        
        osc.connect(gain);
        gain.connect(this.masterVolume);
        
        osc.start(now);
        osc.stop(now + 0.06);
    }

    playHover() {
        if (this.muted || !this.ctx) return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.setValueAtTime(950, now + 0.015);
        
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        
        osc.connect(gain);
        gain.connect(this.masterVolume);
        
        osc.start(now);
        osc.stop(now + 0.031);
    }

    playBoot() {
        this.init();
        if (this.muted || !this.ctx) return;
        
        const now = this.ctx.currentTime;
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // Ascending arpeggio
        
        notes.forEach((freq, index) => {
            const time = now + index * 0.07;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, time);
            
            gain.gain.setValueAtTime(0.15, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
            
            osc.connect(gain);
            gain.connect(this.masterVolume);
            
            osc.start(time);
            osc.stop(time + 0.15);
        });
    }

    playError() {
        if (this.muted || !this.ctx) return;
        
        const now = this.ctx.currentTime;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(110, now);
        osc2.type = 'square';
        osc2.frequency.setValueAtTime(113, now); // Detuned for dissonance
        
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.masterVolume);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.26);
        osc2.stop(now + 0.26);
    }

    playSuccess() {
        if (this.muted || !this.ctx) return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.4); // C6
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.setValueAtTime(0.15, now + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        
        osc.connect(gain);
        gain.connect(this.masterVolume);
        
        osc.start(now);
        osc.stop(now + 0.55);
    }

    startAmbientHum() {
        if (this.muted || !this.ctx || this.ambientOsc) return;
        
        const now = this.ctx.currentTime;
        this.ambientOsc = this.ctx.createOscillator();
        this.ambientGain = this.ctx.createGain();
        
        this.ambientOsc.type = 'sine';
        this.ambientOsc.frequency.value = 55; // Low A hum
        
        this.ambientGain.gain.setValueAtTime(0.02, now);
        
        this.ambientOsc.connect(this.ambientGain);
        this.ambientGain.connect(this.masterVolume);
        
        this.ambientOsc.start(now);
    }

    startDroneSound() {
        if (this.muted || !this.ctx || this.engineOsc1) return;
        
        const now = this.ctx.currentTime;
        
        // 1. Dual detuned oscillators for a rich, chorused cyberpunk growl
        this.engineOsc1 = this.ctx.createOscillator();
        this.engineOsc1.type = 'sawtooth';
        this.engineOsc1.frequency.value = 58; // Low mechanical rumbling base
        
        this.engineOsc2 = this.ctx.createOscillator();
        this.engineOsc2.type = 'triangle';
        this.engineOsc2.frequency.value = 59.2; // Slightly detuned for chorus thickness
        
        this.engineLowpass = this.ctx.createBiquadFilter();
        this.engineLowpass.type = 'lowpass';
        this.engineLowpass.frequency.value = 160; // Keep the saw wave thick and deep
        
        this.engineGain = this.ctx.createGain();
        this.engineGain.gain.setValueAtTime(0.0, now); // start silent

        // Connect mechanical growl
        this.engineOsc1.connect(this.engineLowpass);
        this.engineOsc2.connect(this.engineLowpass);
        this.engineLowpass.connect(this.engineGain);
        this.engineGain.connect(this.masterVolume);
        
        // 2. Futuristic Cyberpunk FM Wobble (Frequency Modulated ion drive)
        this.warpOsc = this.ctx.createOscillator();
        this.warpOsc.type = 'sine';
        this.warpOsc.frequency.value = 135; // Hover base whistle
        
        this.warpLFO = this.ctx.createOscillator();
        this.warpLFO.type = 'sine';
        this.warpLFO.frequency.value = 11; // 11Hz speed base
        
        this.warpLFOGain = this.ctx.createGain();
        this.warpLFOGain.gain.value = 32; // Depth of frequency modulation
        
        this.warpGain = this.ctx.createGain();
        this.warpGain.gain.setValueAtTime(0.0, now); // start silent
        
        // FM Modulation: connect LFO to warp oscillator frequency
        this.warpLFO.connect(this.warpLFOGain);
        this.warpLFOGain.connect(this.warpOsc.frequency);
        
        this.warpOsc.connect(this.warpGain);
        this.warpGain.connect(this.masterVolume);
        
        // 3. Resonant futuristic wind/woosh (wind turbine/jet flow)
        const bufferSize = this.ctx.sampleRate * 2;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        this.noiseSource = this.ctx.createBufferSource();
        this.noiseSource.buffer = buffer;
        this.noiseSource.loop = true;
        
        this.noiseFilter = this.ctx.createBiquadFilter();
        this.noiseFilter.type = 'bandpass';
        this.noiseFilter.Q.value = 4.2; // Resonant cyberpunk wind whistle
        this.noiseFilter.frequency.value = 240;
        
        this.noiseGain = this.ctx.createGain();
        this.noiseGain.gain.setValueAtTime(0.0, now); // start silent
        
        // Connect noise filter
        this.noiseSource.connect(this.noiseFilter);
        this.noiseFilter.connect(this.noiseGain);
        this.noiseGain.connect(this.masterVolume);
        
        // Start all sound generators
        this.engineOsc1.start(now);
        this.engineOsc2.start(now);
        this.warpOsc.start(now);
        this.warpLFO.start(now);
        this.noiseSource.start(now);
    }

    updateDroneSound(velocityRatio) {
        if (this.muted || !this.ctx) return;
        if (!this.engineOsc1) {
            this.startDroneSound();
        }
        if (!this.engineOsc1) return;
        
        const now = this.ctx.currentTime;
        
        // 1. Modulate Cyberpunk Low growl
        // Frequencies sweep up to 135Hz
        const baseFreq = 58 + velocityRatio * 77;
        this.engineOsc1.frequency.setTargetAtTime(baseFreq, now, 0.1);
        this.engineOsc2.frequency.setTargetAtTime(baseFreq + 1.2, now, 0.1);
        
        // Open filter cutoff at higher speeds
        const filterCut = 160 + velocityRatio * 220;
        this.engineLowpass.frequency.setTargetAtTime(filterCut, now, 0.1);
        
        // Volume grows from 0.02 to 0.06
        const engineVol = 0.02 + velocityRatio * 0.04;
        this.engineGain.gain.setTargetAtTime(engineVol, now, 0.1);
        
        // 2. Modulate Cyberpunk Warp Wobbler
        // High whistle sweeps up to 360Hz
        const warpFreq = 135 + velocityRatio * 225;
        this.warpOsc.frequency.setTargetAtTime(warpFreq, now, 0.1);
        
        // LFO rate speeds up to 24Hz
        const lfoRate = 11 + velocityRatio * 13;
        this.warpLFO.frequency.setTargetAtTime(lfoRate, now, 0.1);
        
        // FM Wobbler volume sweeps from 0.015 to 0.035
        const warpVol = 0.015 + velocityRatio * 0.02;
        this.warpGain.gain.setTargetAtTime(warpVol, now, 0.1);
        
        // 3. Modulate Resonant Wind Woosh
        // Cutoff sweeps from 240Hz up to 1050Hz
        const noiseCutoff = 240 + velocityRatio * 810;
        this.noiseFilter.frequency.setTargetAtTime(noiseCutoff, now, 0.15);
        
        // Resonance tightens slightly for extra whistling
        const filterQ = 4.2 - velocityRatio * 1.2;
        this.noiseFilter.Q.setTargetAtTime(filterQ, now, 0.15);
        
        // Volume sweeps up to 0.1
        const noiseVol = 0.02 + velocityRatio * 0.08;
        this.noiseGain.gain.setTargetAtTime(noiseVol, now, 0.1);
    }

    playTeleport() {
        if (this.muted || !this.ctx) return;
        
        const now = this.ctx.currentTime;
        // High-tech sci-fi sweeping synthesizer sound
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(300, now);
        osc1.frequency.exponentialRampToValueAtTime(1800, now + 0.35);
        
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(150, now);
        osc2.frequency.exponentialRampToValueAtTime(900, now + 0.35);
        
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.masterVolume);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.42);
        osc2.stop(now + 0.42);
    }

    playCrystalHit(force) {
        if (this.muted || !this.ctx) return;
        
        const now = this.ctx.currentTime;
        // High frequency bell/glass chime
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        // Base frequency 1200Hz, detunes upwards based on impact force
        const freq = 1200 + Math.random() * 800;
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.1, now + 0.18);
        
        const volume = Math.min(0.05 + force * 0.12, 0.25);
        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        
        osc.connect(gain);
        gain.connect(this.masterVolume);
        
        osc.start(now);
        osc.stop(now + 0.2);
    }

    playZoneSync(zoneName) {
        if (this.muted || !this.ctx) return;
        
        const now = this.ctx.currentTime;
        // Dual oscillator data stream chime
        const notes = zoneName === 'contact' ? [392, 587, 880] : [523, 659, 1046];
        
        notes.forEach((freq, idx) => {
            const time = now + idx * 0.08;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, time);
            osc.frequency.setValueAtTime(freq * 1.5, time + 0.05);
            
            gain.gain.setValueAtTime(0.08, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
            
            osc.connect(gain);
            gain.connect(this.masterVolume);
            
            osc.start(time);
            osc.stop(time + 0.16);
        });
    }
}

export const audio = new AudioEngine();
