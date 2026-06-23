import * as THREE from 'three';

export class LifeCartridge {
    constructor() {
        this.group = new THREE.Group();
        this.gridWidth = 24;
        this.gridHeight = 24;
        this.instancedMesh = null;
        
        // Sim data
        this.grid = [];
        this.nextGrid = [];
        this.scales = []; // for smoothing animations
        this.updateInterval = 0.15; // 150ms step
        this.timer = 0;

        // Dummy objects for calculations
        this.dummy = new THREE.Object3D();
        this.color = new THREE.Color();

        this.init();
    }

    init() {
        // Initialize grid boards
        for (let y = 0; y < this.gridHeight; y++) {
            this.grid[y] = [];
            this.nextGrid[y] = [];
            this.scales[y] = [];
            for (let x = 0; x < this.gridWidth; x++) {
                // Initialize with random density
                const alive = Math.random() > 0.75 ? 1 : 0;
                this.grid[y][x] = alive;
                this.nextGrid[y][x] = 0;
                this.scales[y][x] = alive ? 1.0 : 0.0;
            }
        }

        // Spawn a glider and spaceship to ensure life persists
        this.spawnStructure();

        // 3D Instanced Mesh Setup
        // Total instances = gridWidth * gridHeight
        const count = this.gridWidth * this.gridHeight;
        const geom = new THREE.BoxGeometry(0.85, 0.85, 0.85);
        const mat = new THREE.MeshStandardMaterial({
            roughness: 0.2,
            metalness: 0.8,
            flatShading: true,
            emissive: 0x00f0ff,
            emissiveIntensity: 0.5
        });

        this.instancedMesh = new THREE.InstancedMesh(geom, mat, count);
        this.instancedMesh.castShadow = true;
        this.instancedMesh.receiveShadow = true;
        
        // Centered position offsets
        const startX = -(this.gridWidth * 1.0) / 2 + 0.5;
        const startY = -(this.gridHeight * 1.0) / 2 + 0.5;

        let index = 0;
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                this.dummy.position.set(startX + x * 1.0, startY + y * 1.0, 0);
                this.dummy.scale.set(0, 0, 0);
                this.dummy.updateMatrix();
                this.instancedMesh.setMatrixAt(index++, this.dummy.matrix);
            }
        }
        
        this.group.add(this.instancedMesh);
        
        // Scale down container initially
        this.group.scale.set(0.001, 0.001, 0.001);
    }

    spawnStructure() {
        const midY = Math.floor(this.gridHeight / 2);
        const midX = Math.floor(this.gridWidth / 2);
        
        // Glider
        this.grid[midY][midX] = 1;
        this.grid[midY + 1][midX + 1] = 1;
        this.grid[midY - 1][midX + 1] = 1;
        this.grid[midY - 1][midX] = 1;
        this.grid[midY - 1][midX - 1] = 1;

        // Pulsar center right
        if (midX + 6 < this.gridWidth) {
            this.grid[midY][midX + 5] = 1;
            this.grid[midY][midX + 6] = 1;
            this.grid[midY + 1][midX + 5] = 1;
            this.grid[midY + 1][midX + 6] = 1;
        }
    }

    stepSimulation() {
        // Double-buffering rules
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                let neighbors = 0;
                
                // Wrap-around grid index calculations
                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        if (dy === 0 && dx === 0) continue;
                        const ny = (y + dy + this.gridHeight) % this.gridHeight;
                        const nx = (x + dx + this.gridWidth) % this.gridWidth;
                        if (this.grid[ny][nx] === 1) neighbors++;
                    }
                }
                
                if (this.grid[y][x] === 1) {
                    this.nextGrid[y][x] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
                } else {
                    this.nextGrid[y][x] = (neighbors === 3) ? 1 : 0;
                }
            }
        }
        
        // Copy back
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                this.grid[y][x] = this.nextGrid[y][x];
            }
        }
    }

    // Injects a localized blast of cells where mouse triggers
    injectLife(mouse) {
        // Map normal coordinates to index
        const halfW = this.gridWidth / 2;
        const halfH = this.gridHeight / 2;
        
        // Scale mouse range
        const mouseX = Math.floor((mouse.x + 1) * halfW);
        const mouseY = Math.floor((mouse.y + 1) * halfH);

        if (mouseX >= 0 && mouseX < this.gridWidth && mouseY >= 0 && mouseY < this.gridHeight) {
            // Seed a small cross cluster of life
            const coords = [
                [0,0], [1,0], [-1,0], [0,1], [0,-1]
            ];
            coords.forEach(([dx, dy]) => {
                const nx = (mouseX + dx + this.gridWidth) % this.gridWidth;
                const ny = (mouseY + dy + this.gridHeight) % this.gridHeight;
                this.grid[ny][nx] = 1;
                this.scales[ny][nx] = 1.0;
            });
        }
    }

    update(delta, time, mouse) {
        // Increment timer
        this.timer += delta;
        if (this.timer >= this.updateInterval) {
            this.stepSimulation();
            this.timer = 0;
        }

        // Mouse inject trigger (if mouse moves quickly or clicks)
        if (Math.abs(mouse.x) > 0.05 && Math.random() > 0.96) {
            this.injectLife(mouse);
        }

        // Render update instance matrices and colors
        const startX = -(this.gridWidth * 1.0) / 2 + 0.5;
        const startY = -(this.gridHeight * 1.0) / 2 + 0.5;
        
        let index = 0;
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                const isAlive = this.grid[y][x] === 1;
                const targetScale = isAlive ? 1.0 : 0.05;
                
                // Interpolate scale for smooth growing/shrinking
                this.scales[y][x] += (targetScale - this.scales[y][x]) * 0.15;
                const currentScale = this.scales[y][x];
                
                this.dummy.position.set(startX + x * 1.0, startY + y * 1.0, 0);
                this.dummy.scale.set(currentScale, currentScale, currentScale);
                
                // Add a small rotation wave to alive blocks
                if (isAlive) {
                    this.dummy.rotation.set(
                        Math.sin(time + x) * 0.2,
                        Math.cos(time + y) * 0.2,
                        0
                    );
                } else {
                    this.dummy.rotation.set(0, 0, 0);
                }
                
                this.dummy.updateMatrix();
                this.instancedMesh.setMatrixAt(index, this.dummy.matrix);

                // Dynamically color matrix cells
                // Neon teal for young, purple/pink for older
                if (isAlive) {
                    const noise = Math.sin(x * 0.3 + y * 0.3 + time);
                    if (noise > 0.2) {
                        this.color.setHex(0x00f0ff); // Neon Cyan
                    } else if (noise < -0.2) {
                        this.color.setHex(0xff0055); // Neon Pink
                    } else {
                        this.color.setHex(0x54b334); // Neon Green
                    }
                } else {
                    this.color.setHex(0x1a1a1f); // Dark empty grey
                }
                
                this.instancedMesh.setColorAt(index, this.color);
                index++;
            }
        }

        this.instancedMesh.instanceMatrix.needsUpdate = true;
        if (this.instancedMesh.instanceColor) {
            this.instancedMesh.instanceColor.needsUpdate = true;
        }

        // Float / rotate grid slightly
        this.group.rotation.x = Math.sin(time * 0.2) * 0.15;
        this.group.rotation.y = Math.cos(time * 0.2) * 0.15;
    }

    transitionIn() {
        return new Promise(resolve => {
            const start = performance.now();
            const duration = 800;

            const animate = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                
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
