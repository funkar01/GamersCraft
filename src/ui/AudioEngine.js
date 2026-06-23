// Procedural retro synth sound engine using Web Audio API
class AudioEngine {
    constructor() {
        this.ctx = null;
        this.muted = true;
        this.masterVolume = null;
        
        // Ambient wind/hum sound nodes
        this.ambientOsc = null;
        this.ambientGain = null;

        // Drone engine sound nodes (low-frequency mechanical hum)
        this.engineOsc = null;
        this.engineGain = null;

        // Drone woosh sound nodes (futuristic bandpass filtered noise)
        this.noiseSource = null;
        this.noiseFilter = null;
        this.noiseGain = null;
    }

    init() {
        if (this.ctx) return;
        
        // Create audio context on first user interaction
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        
        this.ctx = new AudioContextClass();
        this.masterVolume = this.ctx.createGain();
        this.masterVolume.gain.value = 0.3; // Default master volume
        this.masterVolume.connect(this.ctx.destination);
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
            if (this.engineGain && this.noiseGain) {
                this.engineGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
                this.noiseGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
            } else {
                this.startDroneSound();
            }
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
        if (this.muted || !this.ctx || this.engineOsc) return;
        
        const now = this.ctx.currentTime;
        
        // 1. Mechanical low hum
        this.engineOsc = this.ctx.createOscillator();
        this.engineGain = this.ctx.createGain();
        this.engineOsc.type = 'sine';
        this.engineOsc.frequency.value = 65; // Base low frequency hum
        this.engineGain.gain.setValueAtTime(0.0, now); // start silent
        
        // 2. Futuristic noise woosh (wind/jet turbine)
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
        this.noiseFilter.Q.value = 4.0; // Resonant whistle/wind
        this.noiseFilter.frequency.value = 250;
        
        this.noiseGain = this.ctx.createGain();
        this.noiseGain.gain.setValueAtTime(0.0, now); // start silent
        
        // Connect mechanical hum
        this.engineOsc.connect(this.engineGain);
        this.engineGain.connect(this.masterVolume);
        
        // Connect noise woosh
        this.noiseSource.connect(this.noiseFilter);
        this.noiseFilter.connect(this.noiseGain);
        this.noiseGain.connect(this.masterVolume);
        
        // Start both
        this.engineOsc.start(now);
        this.noiseSource.start(now);
    }

    updateDroneSound(velocityRatio) {
        if (this.muted || !this.ctx) return;
        if (!this.engineOsc) {
            this.startDroneSound();
        }
        if (!this.engineOsc) return;
        
        const now = this.ctx.currentTime;
        
        // 1. Modulate Low Hum
        // Pitch goes from 65Hz (hover) up to 130Hz (full speed)
        const humFreq = 65 + velocityRatio * 65;
        this.engineOsc.frequency.setTargetAtTime(humFreq, now, 0.1);
        
        // Volume goes from 0.02 to 0.05
        const humVol = 0.02 + velocityRatio * 0.03;
        this.engineGain.gain.setTargetAtTime(humVol, now, 0.1);
        
        // 2. Modulate Noise Woosh
        // Cutoff sweeps from 250Hz (low whistle hover) up to 900Hz (bright woosh thrust)
        const filterCutoff = 250 + velocityRatio * 650;
        this.noiseFilter.frequency.setTargetAtTime(filterCutoff, now, 0.15);
        
        // Resonance widens at full speed (Q drops slightly to let more broadband wind through)
        const filterQ = 4.0 - velocityRatio * 1.5;
        this.noiseFilter.Q.setTargetAtTime(filterQ, now, 0.15);
        
        // Volume sweeps from 0.02 (soft breath) up to 0.09 (heavy sci-fi turbine woosh)
        const noiseVol = 0.02 + velocityRatio * 0.07;
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
