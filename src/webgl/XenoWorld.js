import * as THREE from 'three';
import { getTerrainHeight } from './TerrainMath.js';

export class XenoWorld {
    constructor() {
        this.group = new THREE.Group();
        this.ramps = [];
        this.crystals = [];
        this.projectZones = [];
        this.contactZone = null;
        
        // Animated objects
        this.mushrooms = [];
        this.treeLights = [];
        this.runicRings = [];
        this.flowerLights = [];
        
        // Grass InstancedMesh parameters
        this.grassMesh = null;
        this.grassCount = 1800;
        this.grassPositions = null;
        this.grassScales = null;
        this.grassYaws = null;

        // Spore Particles
        this.sporeParticles = null;
        this.sporeCount = 200;
        this.sporePositions = [];
        this.sporeVelocities = [];

        this.onEnterZone = () => {};
        
        this.init();
    }

    init() {
        // --- 1. Procedural Grid Texture Canvas ---
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = '#160c28';
        ctx.fillRect(0, 0, 128, 128);
        
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.22)';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, 128, 128);
        
        ctx.strokeStyle = 'rgba(255, 0, 85, 0.1)';
        ctx.lineWidth = 1;
        ctx.strokeRect(32, 32, 64, 64);
        
        const gridTexture = new THREE.CanvasTexture(canvas);
        gridTexture.wrapS = THREE.RepeatWrapping;
        gridTexture.wrapT = THREE.RepeatWrapping;
        gridTexture.repeat.set(50, 50);

        // --- 2. Deformed Ground Geometry ---
        const groundGeom = new THREE.PlaneGeometry(100, 100, 48, 48);
        
        const posAttr = groundGeom.attributes.position;
        for (let i = 0; i < posAttr.count; i++) {
            const vx = posAttr.getX(i);
            const vy = posAttr.getY(i);
            const heightVal = getTerrainHeight(vx, vy);
            posAttr.setZ(i, heightVal);
        }
        
        groundGeom.computeVertexNormals();

        const groundMat = new THREE.MeshStandardMaterial({
            map: gridTexture,
            roughness: 0.9,
            metalness: 0.3
        });
        const ground = new THREE.Mesh(groundGeom, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.group.add(ground);

        // Boundary Monolith Walls
        const boundaryMat = new THREE.MeshStandardMaterial({ color: 0x09090e, roughness: 0.6 });
        const addBoundaryMonolith = (x, z, w, d) => {
            const gy = getTerrainHeight(x, z);
            const block = new THREE.Mesh(new THREE.BoxGeometry(w, 2.2, d), boundaryMat);
            block.position.set(x, gy + 1.1, z);
            block.castShadow = true;
            block.receiveShadow = true;
            this.group.add(block);
        };
        addBoundaryMonolith(0, 50, 100, 2);
        addBoundaryMonolith(0, -50, 100, 2);
        addBoundaryMonolith(50, 0, 2, 100);
        addBoundaryMonolith(-50, 0, 2, 100);

        // --- 3. Blocky Grey Boulders (Slate Obstacles) ---
        const boulderGeom = new THREE.IcosahedronGeometry(2.0, 0); // 0 subdivision = very blocky
        const boulderMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9, flatShading: true });
        
        const boulderSpawns = [
            { x: -15, z: 25 }, { x: -35, z: -10 }, { x: 30, z: -25 },
            { x: -28, z: 32 }, { x: 25, z: -5 }, { x: -8, z: 25 },
            { x: 35, z: 35 }, { x: -40, z: -35 }, { x: 42, z: -15 }
        ];

        boulderSpawns.forEach(b => {
            const mesh = new THREE.Mesh(boulderGeom, boulderMat);
            const gy = getTerrainHeight(b.x, b.z);
            mesh.position.set(b.x, gy - 0.4, b.z); // partially embedded in ground
            
            // Random scaling
            mesh.scale.set(
                1.0 + Math.random() * 0.8,
                0.8 + Math.random() * 1.5,
                1.0 + Math.random() * 0.8
            );
            mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            this.group.add(mesh);
        });

        // --- 4. Scattered Ground Pebbles & Small Crystals ---
        const rockGeom = new THREE.DodecahedronGeometry(0.2, 0);
        const pebbleGeom = new THREE.BoxGeometry(0.3, 0.15, 0.3);
        const rockMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });
        
        const crystalGlowMat = new THREE.MeshStandardMaterial({
            color: 0x00f0ff,
            emissive: 0x00f0ff,
            emissiveIntensity: 0.8,
            roughness: 0.1
        });

        for (let i = 0; i < 25; i++) {
            const rx = (Math.random() - 0.5) * 85;
            const rz = (Math.random() - 0.5) * 85;
            
            if (Math.abs(rx) < 5 && Math.abs(rz) < 5) continue;

            const isCrystalPebble = Math.random() > 0.6;
            let detailMesh;
            
            if (isCrystalPebble) {
                detailMesh = new THREE.Mesh(rockGeom, crystalGlowMat);
                detailMesh.scale.set(1, 1 + Math.random() * 0.5, 1);
            } else {
                detailMesh = new THREE.Mesh(pebbleGeom, rockMat);
            }

            const gy = getTerrainHeight(rx, rz);
            detailMesh.position.set(rx, gy + 0.08, rz);
            detailMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            detailMesh.castShadow = true;
            this.group.add(detailMesh);
        }

        // --- 5. Bioluminescent Water Puddles (Valleys) ---
        const waterGeom = new THREE.CircleGeometry(3.8, 16);
        const waterMat = new THREE.MeshStandardMaterial({
            color: 0x00f0ff,
            emissive: 0x005c8a,
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.6,
            roughness: 0.05,
            metalness: 0.95
        });

        // Placed in major valleys
        const puddleCoords = [
            { x: 18, z: -15 },
            { x: -22, z: -12 },
            { x: -14, z: 20 },
            { x: 28, z: -28 }
        ];

        puddleCoords.forEach(c => {
            const puddle = new THREE.Mesh(waterGeom, waterMat);
            puddle.rotation.x = -Math.PI / 2;
            const gy = getTerrainHeight(c.x, c.z);
            puddle.position.set(c.x, gy + 0.05, c.z); // offset slightly above ground
            puddle.receiveShadow = true;
            this.group.add(puddle);
        });

        // --- 6. Floating Magnetic Ramps ---
        this.createMagneticRamp(0, -10, 6, 12, 1.8);

        // --- 7. Dynamic Shatterable Crystals ---
        const crystalGeom = new THREE.DodecahedronGeometry(0.65, 0);
        const crystalMat = new THREE.MeshStandardMaterial({
            color: 0xff0055,
            emissive: 0x7000ff,
            emissiveIntensity: 0.5,
            roughness: 0.1,
            metalness: 0.9
        });

        const crystalSpawns = [
            { x: -6, z: -18 }, { x: -4.5, z: -18 }, { x: -3, z: -18 },
            { x: -5.25, z: -19.5 }, { x: -3.75, z: -19.5 },
            { x: -5.25, z: -18, y: 1.2 }, { x: -3.75, z: -18, y: 1.2 },
            { x: -4.5, z: -18.75, y: 2.2 }
        ];

        crystalSpawns.forEach(c => {
            const mesh = new THREE.Mesh(crystalGeom, crystalMat);
            const gy = getTerrainHeight(c.x, c.z);
            mesh.position.set(c.x, gy + (c.y || 0.6), c.z);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            this.group.add(mesh);

            this.crystals.push({
                mesh: mesh,
                pos: mesh.position.clone(),
                vel: new THREE.Vector3(),
                rot: new THREE.Vector3(),
                rotVel: new THREE.Vector3(),
                width: 1.3,
                height: 1.3,
                depth: 1.3,
                mass: 1.0
            });
        });

        // --- 8. Bioluminescent Mushrooms ---
        const mushTrunkGeom = new THREE.CylinderGeometry(0.1, 0.2, 1.2, 5);
        const mushCapGeom = new THREE.SphereGeometry(0.8, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
        
        const trunkMat = new THREE.MeshStandardMaterial({ color: 0x181824, roughness: 0.8 });
        const capMat = new THREE.MeshStandardMaterial({
            color: 0xff0055,
            emissive: 0xff0055,
            emissiveIntensity: 0.6,
            roughness: 0.2
        });

        const mushCoords = [
            { x: -25, z: 20 }, { x: -28, z: 18 }, { x: -23, z: 24 },
            { x: -30, z: 25 }, { x: -20, z: 15 }, { x: -24, z: 14 }
        ];

        mushCoords.forEach((c, idx) => {
            const shroom = new THREE.Group();
            
            const trunk = new THREE.Mesh(mushTrunkGeom, trunkMat);
            trunk.position.y = 0.6;
            trunk.castShadow = true;
            shroom.add(trunk);

            const cap = new THREE.Mesh(mushCapGeom, capMat);
            cap.scale.set(1.0, 0.5, 1.0);
            cap.position.y = 1.2;
            cap.castShadow = true;
            shroom.add(cap);

            const pinkLight = new THREE.PointLight(0xff0055, 1.2, 5, 1.5);
            pinkLight.position.set(0, 1.2, 0);
            shroom.add(pinkLight);

            const gy = getTerrainHeight(c.x, c.z);
            shroom.position.set(c.x, gy, c.z);
            const randScale = 0.8 + Math.random() * 0.5;
            shroom.scale.set(randScale, randScale, randScale);

            this.group.add(shroom);
            this.mushrooms.push({ mesh: shroom, light: pinkLight, seed: idx * 2.0 });
        });

        // --- 9. Stylized Fluffy Pink Blossom Trees (Skill Forest) ---
        const treeBaseX = 25;
        const treeBaseZ = 20;
        
        const leavesGeom = new THREE.IcosahedronGeometry(1.0, 0); // low-poly blossom sphere leaves
        const leavesMat = new THREE.MeshStandardMaterial({
            color: 0xff007f, // Hot bubblegum pink leaves
            emissive: 0xff007f,
            emissiveIntensity: 0.4,
            flatShading: true
        });

        for (let i = 0; i < 9; i++) {
            const tree = new THREE.Group();
            
            const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 1.8, 5), trunkMat);
            trunk.position.y = 0.9;
            trunk.castShadow = true;
            tree.add(trunk);

            // Fluffy overlapping canopy spheres
            const leaf1 = new THREE.Mesh(leavesGeom, leavesMat);
            leaf1.scale.set(1.3, 0.9, 1.3);
            leaf1.position.y = 2.2;
            leaf1.castShadow = true;
            tree.add(leaf1);

            const leaf2 = new THREE.Mesh(leavesGeom, leavesMat);
            leaf2.scale.set(0.9, 0.7, 0.9);
            leaf2.position.set(0.5, 2.5, 0.3);
            leaf2.castShadow = true;
            tree.add(leaf2);

            const leaf3 = new THREE.Mesh(leavesGeom, leavesMat);
            leaf3.scale.set(0.8, 0.6, 0.8);
            leaf3.position.set(-0.6, 2.3, -0.4);
            leaf3.castShadow = true;
            tree.add(leaf3);

            // Local green/cyan point light inside leaves
            const treeLight = new THREE.PointLight(0xff00a0, 1.2, 7, 1.2);
            treeLight.position.set(0, 2.3, 0);
            tree.add(treeLight);
            this.treeLights.push({ light: treeLight, seed: i * 1.5 });

            const angle = (i / 9) * Math.PI * 2;
            const radius = 5 + Math.random() * 3;
            const tx = treeBaseX + Math.cos(angle) * radius;
            const tz = treeBaseZ + Math.sin(angle) * radius;
            
            const gy = getTerrainHeight(tx, tz);
            tree.position.set(tx, gy, tz);
            this.group.add(tree);
        }

        // --- 10. Bioluminescent Flower Stalks ---
        const flowerCoords = [
            { x: -10, z: -8 }, { x: 12, z: 8 }, { x: -5, z: 18 },
            { x: 18, z: -5 }, { x: -16, z: -24 }, { x: 8, z: -15 }
        ];

        const stalkGeom = new THREE.CylinderGeometry(0.04, 0.05, 1.5, 4);
        const bulbGeom = new THREE.SphereGeometry(0.18, 8, 8);
        const bulbMat = new THREE.MeshBasicMaterial({ color: 0xff0055 }); // glowing red/pink flowers

        flowerCoords.forEach((c, idx) => {
            const flower = new THREE.Group();
            
            const stalk = new THREE.Mesh(stalkGeom, trunkMat);
            stalk.position.y = 0.75;
            stalk.rotation.z = 0.15; // slightly bent
            flower.add(stalk);

            const bulb = new THREE.Mesh(bulbGeom, bulbMat);
            bulb.position.set(-0.1, 1.5, 0);
            flower.add(bulb);

            // Glow point light
            const fLight = new THREE.PointLight(0xff0055, 1.0, 4, 2.0);
            fLight.position.set(-0.1, 1.5, 0);
            flower.add(fLight);
            this.flowerLights.push({ light: fLight, seed: idx * 3.0 });

            const gy = getTerrainHeight(c.x, c.z);
            flower.position.set(c.x, gy, c.z);
            this.group.add(flower);
        });

        // --- 11. Holographic Signs ---
        this.createSignBoard(
            "XENO_EXPLORER // EXPEDITION BIO",
            [
                "EXPEDITION LEADER: BHANU",
                "SPECIALIZATION: GRAPHICS & SIM ENGINES",
                "DATA FILES: Blending computational mechanics",
                "with high-fidelity visual representations.",
                "Procedural mathematical vector grids generated",
                "completely inside memory sockets."
            ],
            -18, 12, 10, 6, 0x00f0ff
        );

        this.createSignBoard(
            "TECH // CELLULAR CONSTELLATION",
            [
                "ENGINES: Unity 3D, Unreal Engine 5, Godot",
                "LANGUAGES: C++, C#, JS (ES6), GLSL Shaders, Python",
                "WebGL CORE: Three.js Rendering, Web Audio Synth",
                "UTILITIES: Blender Modeling, Git, Vite"
            ],
            18, 18, 8, 5, 0x54b334
        );

        // --- 12. Runic Obsidian Monoliths ---
        this.createObsidianMonolith("neon", -16, -32, 0x54b334);
        this.createObsidianMonolith("void", 0, -32, 0xff0055);
        this.createObsidianMonolith("defense", 16, -32, 0x00f0ff);

        // --- 13. Transmission Radar Spire ---
        const beacon = new THREE.Group();
        const baseCone = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.5, 6, 6), trunkMat);
        baseCone.position.y = 3.0;
        baseCone.castShadow = true;
        beacon.add(baseCone);

        const torusGeom = new THREE.TorusGeometry(1.0, 0.08, 6, 18);
        torusGeom.rotateX(Math.PI / 2);
        const torusMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.8 });
        
        this.energyRing = new THREE.Mesh(torusGeom, torusMat);
        this.energyRing.position.y = 6.2;
        beacon.add(this.energyRing);

        const coreSpire = new THREE.Mesh(new THREE.ConeGeometry(0.15, 1.2, 5), new THREE.MeshBasicMaterial({ color: 0xff0055 }));
        coreSpire.position.y = 6.2;
        beacon.add(coreSpire);

        const beaconY = getTerrainHeight(0, 35);
        beacon.position.set(0, beaconY, 35);
        this.group.add(beacon);

        const circleGeom = new THREE.RingGeometry(3.5, 3.7, 32);
        circleGeom.rotateX(-Math.PI / 2);
        const circleMat = new THREE.MeshBasicMaterial({
            color: 0x00f0ff,
            transparent: true,
            opacity: 0.6,
            side: THREE.DoubleSide
        });
        const contactCircle = new THREE.Mesh(circleGeom, circleMat);
        contactCircle.position.set(0, beaconY + 0.05, 35);
        this.group.add(contactCircle);

        this.contactZone = {
            center: new THREE.Vector3(0, beaconY, 35),
            radius: 3.8
        };

        // --- 14. Instanced Pink/Purple Grass System ---
        this.createInstancedGrass();

        // --- 15. Atmospheric Spore Particles ---
        this.createAtmosphericSpores();
    }

    createInstancedGrass() {
        const grassGeom = new THREE.ConeGeometry(0.1, 0.6, 3);
        // Offset grass mesh pivot coordinates to bottom face
        grassGeom.translate(0, 0.3, 0);
        
        const grassMat = new THREE.MeshStandardMaterial({
            roughness: 0.7,
            metalness: 0.1,
            flatShading: true,
            side: THREE.DoubleSide
        });

        this.grassMesh = new THREE.InstancedMesh(grassGeom, grassMat, this.grassCount);
        this.grassMesh.castShadow = true;

        this.grassPositions = new Float32Array(this.grassCount * 3);
        this.grassScales = new Float32Array(this.grassCount * 3);
        this.grassYaws = new Float32Array(this.grassCount);

        const colors = [0xff0055, 0x9d4edd, 0x7b2cbf, 0xff007f];
        const color = new THREE.Color();
        const dummy = new THREE.Object3D();

        let index = 0;
        while (index < this.grassCount) {
            const rx = (Math.random() - 0.5) * 88;
            const rz = (Math.random() - 0.5) * 88;
            
            // Skip spawning directly on center pad
            const dist = Math.sqrt(rx * rx + rz * rz);
            if (dist < 6.5) continue;

            const gy = getTerrainHeight(rx, rz);
            
            // Cache attributes for wind animation matrix rebuilds
            this.grassPositions[index * 3] = rx;
            this.grassPositions[index * 3 + 1] = gy;
            this.grassPositions[index * 3 + 2] = rz;

            const sy = 0.5 + Math.random() * 0.8;
            const sxz = 0.7 + Math.random() * 0.5;
            this.grassScales[index * 3] = sxz;
            this.grassScales[index * 3 + 1] = sy;
            this.grassScales[index * 3 + 2] = sxz;

            const yaw = Math.random() * Math.PI * 2;
            this.grassYaws[index] = yaw;

            dummy.position.set(rx, gy, rz);
            dummy.rotation.set(0, yaw, 0);
            dummy.scale.set(sxz, sy, sxz);
            dummy.updateMatrix();
            this.grassMesh.setMatrixAt(index, dummy.matrix);

            // Color mix
            color.setHex(colors[Math.floor(Math.random() * colors.length)]);
            this.grassMesh.setColorAt(index, color);
            
            index++;
        }

        this.group.add(this.grassMesh);
    }

    createAtmosphericSpores() {
        const geom = new THREE.BufferGeometry();
        const positions = new Float32Array(this.sporeCount * 3);

        for (let i = 0; i < this.sporeCount; i++) {
            const x = (Math.random() - 0.5) * 80;
            const z = (Math.random() - 0.5) * 80;
            const gy = getTerrainHeight(x, z);
            const y = gy + 0.5 + Math.random() * 7.5; 

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            this.sporeVelocities.push({
                x: (Math.random() - 0.5) * 0.4,
                y: (Math.random() - 0.5) * 0.3,
                z: (Math.random() - 0.5) * 0.4
            });
        }

        geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const mat = new THREE.PointsMaterial({
            size: 0.22,
            color: 0x00f0ff,
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.sporeParticles = new THREE.Points(geom, mat);
        this.group.add(this.sporeParticles);
    }

    update(delta, time, drone) {
        // Pulse satellite spire ring
        if (this.energyRing) {
            this.energyRing.rotation.y = time * 0.8;
            this.energyRing.scale.set(
                1.0 + Math.sin(time * 5.0) * 0.1,
                1.0 + Math.sin(time * 5.0) * 0.1,
                1.0
            );
        }

        // Spin Runic Rings above Monoliths
        this.runicRings.forEach((ring, idx) => {
            const direction = idx % 2 === 0 ? 1 : -1;
            ring.rotation.y = time * 0.6 * direction;
            ring.position.y = 6.8 + Math.sin(time * 2.0 + idx) * 0.08;
        });

        // Pulsing mushrooms
        this.mushrooms.forEach(shroom => {
            shroom.mesh.position.y = getTerrainHeight(shroom.mesh.position.x, shroom.mesh.position.z) + Math.sin(time + shroom.seed) * 0.05;
            shroom.light.intensity = 0.8 + Math.sin(time * 3.0 + shroom.seed) * 0.4;
        });

        // Pulsing trees
        this.treeLights.forEach(tree => {
            tree.light.intensity = 0.8 + Math.sin(time * 2.0 + tree.seed) * 0.3;
        });

        // Pulsing flower bulbs
        this.flowerLights.forEach(flower => {
            flower.light.intensity = 0.6 + Math.sin(time * 4.0 + flower.seed) * 0.4;
        });

        // --- 1. Wind Grass Sway update (optimized CPU update) ---
        if (this.grassMesh) {
            const dummy = new THREE.Object3D();
            for (let i = 0; i < this.grassCount; i++) {
                const i3 = i * 3;
                const px = this.grassPositions[i3];
                const py = this.grassPositions[i3 + 1];
                const pz = this.grassPositions[i3 + 2];
                const sxz = this.grassScales[i3];
                const sy = this.grassScales[i3 + 1];
                const yaw = this.grassYaws[i];

                // Calculate wind sway offset along Z and X axes
                const sway = Math.sin(time * 2.5 + px * 0.15 + pz * 0.12) * 0.09;

                dummy.position.set(px, py, pz);
                // Rotate Yaw, bank roll/pitch slightly with wind sway
                dummy.rotation.set(sway * 0.4, yaw, sway);
                dummy.scale.set(sxz, sy, sxz);
                dummy.updateMatrix();

                this.grassMesh.setMatrixAt(i, dummy.matrix);
            }
            this.grassMesh.instanceMatrix.needsUpdate = true;
        }

        // --- 2. Spore Particles drifting ---
        if (this.sporeParticles) {
            const posAttr = this.sporeParticles.geometry.attributes.position;
            const posArr = posAttr.array;

            for (let i = 0; i < this.sporeCount; i++) {
                const i3 = i * 3;
                const vel = this.sporeVelocities[i];

                posArr[i3] += vel.x * delta;
                posArr[i3 + 1] += (vel.y + Math.sin(time + i) * 0.08) * delta;
                posArr[i3 + 2] += vel.z * delta;

                const gy = getTerrainHeight(posArr[i3], posArr[i3 + 2]);
                if (posArr[i3 + 1] < gy + 0.3 || posArr[i3 + 1] > gy + 8.0) {
                    vel.y = -vel.y;
                }

                const limit = 45.0;
                if (Math.abs(posArr[i3]) > limit) posArr[i3] = -posArr[i3];
                if (Math.abs(posArr[i3 + 2]) > limit) posArr[i3 + 2] = -posArr[i3 + 2];
            }
            posAttr.needsUpdate = true;
        }

        // --- 3. Dynamic Physics Collisions for Crystal Shards ---
        const grav = 9.8;

        this.crystals.forEach(c => {
            const gy = getTerrainHeight(c.pos.x, c.pos.z);
            const gLimit = gy + 0.6;

            if (c.pos.y > gLimit) {
                c.vel.y -= grav * delta;
            } else {
                c.pos.y = gLimit;
                c.vel.y = 0;
            }

            c.vel.x *= 0.93;
            c.vel.z *= 0.93;
            c.rotVel.y *= 0.93;

            c.pos.addScaledVector(c.vel, delta);
            c.mesh.position.copy(c.pos);
            c.mesh.rotation.y += c.rotVel.y * delta;

            const limit = 48.0;
            c.pos.x = THREE.MathUtils.clamp(c.pos.x, -limit, limit);
            c.pos.z = THREE.MathUtils.clamp(c.pos.z, -limit, limit);

            if (drone) {
                const dist = c.pos.distanceTo(drone.position);
                const collisionThreshold = 1.3;
                
                if (dist < collisionThreshold) {
                    const pushDir = c.pos.clone().sub(drone.position).setY(0).normalize();
                    const impactForce = Math.abs(drone.velocity) * 1.5;
                    
                    if (impactForce > 0.5) {
                        c.vel.x = pushDir.x * impactForce * 1.3;
                        c.vel.z = pushDir.z * impactForce * 1.3;
                        c.rotVel.y = (Math.random() - 0.5) * impactForce * 8.0;
                        
                        if (c.pos.y === gLimit) {
                            c.vel.y = impactForce * 0.5;
                        }
                    }
                }
            }
        });

        // --- 4. Interactive Trigger Zone checks ---
        if (drone) {
            let activeZone = null;
            
            for (const zone of this.projectZones) {
                const dist = drone.position.distanceTo(zone.center);
                if (dist < zone.radius) {
                    activeZone = { type: 'project', name: zone.name };
                    break;
                }
            }

            if (!activeZone && this.contactZone) {
                const dist = drone.position.distanceTo(this.contactZone.center);
                if (dist < this.contactZone.radius) {
                    activeZone = { type: 'contact' };
                }
            }

            this.onEnterZone(activeZone);
        }
    }
}
