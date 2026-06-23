// Procedural retro synth sound engine using Web Audio API
class AudioEngine {
    constructor() {
        this.ctx = null;
        this.muted = true;
        this.masterVolume = null;
        this.ambientOsc = null;
        this.ambientGain = null;
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
        } else {
            this.init();
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            if (this.ambientGain) {
                this.ambientGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
            } else {
                this.startAmbientHum();
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
}

export const audio = new AudioEngine();
