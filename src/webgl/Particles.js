import * as THREE from 'three';

export class ParticlesCartridge {
    constructor() {
        this.group = new THREE.Group();
        this.particleCount = 15000;
        this.particles = null;
        
        // Simulation parameters (exposed for GUI)
        this.params = {
            gravity: 1.5,
            restoringForce: 0.8,
            speed: 1.0,
            swirl: 2.0,
            size: 0.15,
            theme: 'cyan'
        };

        // Cache positions & velocities
        this.positions = new Float32Array(this.particleCount * 3);
        this.initialPositions = new Float32Array(this.particleCount * 3);
        this.velocities = new Float32Array(this.particleCount * 3);
        this.colors = new Float32Array(this.particleCount * 3);

        this.init();
    }

    init() {
        // Create initial distribution (Double Helix / Spiral Galaxy)
        for (let i = 0; i < this.particleCount; i++) {
            const angle = (i / this.particleCount) * Math.PI * 2 * 15; // Spiral wrapping
            const radius = (i / this.particleCount) * 15 + Math.random() * 1.5;
            
            // Alternating helix branches
            const branch = i % 2 === 0 ? 0 : Math.PI;
            
            const x = Math.cos(angle + branch) * radius;
            const y = Math.sin(angle + branch) * radius;
            const z = (Math.random() - 0.5) * 2; // Flat disc spread
            
            this.positions[i * 3] = x;
            this.positions[i * 3 + 1] = y;
            this.positions[i * 3 + 2] = z;

            this.initialPositions[i * 3] = x;
            this.initialPositions[i * 3 + 1] = y;
            this.initialPositions[i * 3 + 2] = z;

            // Zero velocity
            this.velocities[i * 3] = 0;
            this.velocities[i * 3 + 1] = 0;
            this.velocities[i * 3 + 2] = 0;
        }

        // Setup geometry
        const geometry = new THREE.BufferGeometry();
        this.positionAttribute = new THREE.BufferAttribute(this.positions, 3);
        geometry.setAttribute('position', this.positionAttribute);
        
        this.colorAttribute = new THREE.BufferAttribute(this.colors, 3);
        this.updateColors();
        geometry.setAttribute('color', this.colorAttribute);

        // Texture - create a procedural soft circular particle
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 16, 16);
        const texture = new THREE.CanvasTexture(canvas);

        // Material
        const material = new THREE.PointsMaterial({
            size: this.params.size,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            map: texture
        });

        // Mesh
        this.particles = new THREE.Points(geometry, material);
        this.group.add(this.particles);
        
        // Scale group down initially for transition
        this.group.scale.set(0.001, 0.001, 0.001);
    }

    updateColors() {
        const theme = this.params.theme;
        let c1 = new THREE.Color(0x00f0ff); // Cyan
        let c2 = new THREE.Color(0x54b334); // Green
        
        if (theme === 'pink') {
            c1 = new THREE.Color(0xff0055);
            c2 = new THREE.Color(0x7000ff);
        } else if (theme === 'gold') {
            c1 = new THREE.Color(0xffb700);
            c2 = new THREE.Color(0xff3c00);
        }

        for (let i = 0; i < this.particleCount; i++) {
            const ratio = i / this.particleCount;
            const mixedColor = c1.clone().lerp(c2, ratio + Math.random() * 0.2 - 0.1);
            
            this.colors[i * 3] = mixedColor.r;
            this.colors[i * 3 + 1] = mixedColor.g;
            this.colors[i * 3 + 2] = mixedColor.b;
        }
        
        if (this.colorAttribute) {
            this.colorAttribute.needsUpdate = true;
        }
    }

    setTheme(themeName) {
        this.params.theme = themeName;
        this.updateColors();
    }

    update(delta, time, mouse) {
        // Project mouse vector to 3D space dimensions (roughly width 36, height 25 at depth 0)
        const targetX = mouse.x * 24;
        const targetY = mouse.y * 18;
        
        const posArr = this.positionAttribute.array;
        const velArr = this.velocities;
        const initArr = this.initialPositions;
        
        const speedMult = this.params.speed;
        const grav = this.params.gravity * 0.03;
        const swirl = this.params.swirl * 0.02;
        const restore = this.params.restoringForce * 0.01;

        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;
            
            const px = posArr[i3];
            const py = posArr[i3 + 1];
            const pz = posArr[i3 + 2];
            
            // Vector to mouse target
            const dx = targetX - px;
            const dy = targetY - py;
            const dz = -pz;
            
            const distSq = dx * dx + dy * dy + dz * dz;
            const dist = Math.sqrt(distSq) + 0.1; // Avoid divide by zero
            
            // Gravitational pull toward mouse
            let pullForce = 0;
            if (dist < 15) {
                // Stronger pull when closer
                pullForce = (1 - dist / 15) * grav;
            }

            // Swirl / Vortex force around mouse (cross product)
            const swirlX = -dy / dist * swirl;
            const swirlY = dx / dist * swirl;

            // Restoring force to return to helix base
            const rx = initArr[i3] - px;
            const ry = initArr[i3 + 1] - py;
            const rz = initArr[i3 + 2] - pz;
            
            // Apply physics forces to velocities
            velArr[i3] += (dx / dist) * pullForce + swirlX * (1 - dist / 20) + rx * restore;
            velArr[i3 + 1] += (dy / dist) * pullForce + swirlY * (1 - dist / 20) + ry * restore;
            velArr[i3 + 2] += (dz / dist) * pullForce + rz * restore;
            
            // Friction/damping (air resistance)
            velArr[i3] *= 0.95;
            velArr[i3 + 1] *= 0.95;
            velArr[i3 + 2] *= 0.95;
            
            // Apply velocities to positions
            posArr[i3] += velArr[i3] * speedMult;
            posArr[i3 + 1] += velArr[i3 + 1] * speedMult;
            posArr[i3 + 2] += velArr[i3 + 2] * speedMult;
        }

        this.positionAttribute.needsUpdate = true;
        
        // Gentle rotation of the overall spiral galaxy
        this.group.rotation.z += 0.05 * delta;
    }

    transitionIn() {
        return new Promise(resolve => {
            const start = performance.now();
            const duration = 800; // ms
            
            const animate = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out elastic-ish
                const scale = Math.sin(progress * Math.PI * 0.5);
                this.group.scale.set(scale, scale, scale);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            requestAnimationFrame(animate);
        });
    }

    transitionOut() {
        return new Promise(resolve => {
            const start = performance.now();
            const duration = 500;
            
            const animate = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease in scale down
                const scale = 1 - progress;
                this.group.scale.set(scale, scale, scale);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            requestAnimationFrame(animate);
        });
    }
}
