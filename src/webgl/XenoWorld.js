import * as THREE from 'three';
import { getTerrainHeight } from './TerrainMath.js';
import { audio } from '../ui/AudioEngine.js';

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
        this.grassCount = 20000;
        this.grassPositions = null;
        this.grassScales = null;
        this.grassYaws = null;

        // Tree Leaf parameters
        this.leafMesh = null;
        this.leafCount = 9 * 150;
        this.leafPositions = null;
        this.leafRotations = null;
        this.leafScales = null;
        this.leafSeeds = null;

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
        
        ctx.fillStyle = '#1b2d2d';
        ctx.fillRect(0, 0, 128, 128);
        
        ctx.strokeStyle = 'rgba(30, 144, 255, 0.25)'; // Sky Blue #1E90FF
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, 128, 128);
        
        ctx.strokeStyle = 'rgba(0, 255, 127, 0.12)'; // Bright Green #00FF7F
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

        // --- 9. Stylized Fluffy Pink Blossom Trees with Quad Leaves (Skill Forest) ---
        const treeBaseX = 25;
        const treeBaseZ = 20;
        
        this.leafPositions = new Float32Array(this.leafCount * 3);
        this.leafRotations = new Float32Array(this.leafCount * 3);
        this.leafScales = new Float32Array(this.leafCount * 3);
        this.leafSeeds = new Float32Array(this.leafCount);

        const leafColors = [0xff007f, 0xff5ea6, 0xff8ab2, 0xf72585];
        const color = new THREE.Color();
        const dummy = new THREE.Object3D();

        // Smaller leaf geometry (matching user request)
        const leafGeom = new THREE.PlaneGeometry(0.24, 0.17);
        const leafMat = new THREE.MeshStandardMaterial({
            color: 0xffffff, // Tinted by instance colors
            emissive: 0xff007f,
            emissiveIntensity: 0.2,
            roughness: 0.5,
            metalness: 0.1,
            flatShading: true,
            side: THREE.DoubleSide
        });

        this.leafMesh = new THREE.InstancedMesh(leafGeom, leafMat, this.leafCount);
        this.leafMesh.castShadow = true;
        this.leafMesh.receiveShadow = true;

        for (let i = 0; i < 9; i++) {
            const angle = (i / 9) * Math.PI * 2;
            const radius = 5 + Math.random() * 3;
            const tx = treeBaseX + Math.cos(angle) * radius;
            const tz = treeBaseZ + Math.sin(angle) * radius;
            const gy = getTerrainHeight(tx, tz);

            const tree = new THREE.Group();
            
            // Random trunk height, width, and taper representing natural variance
            const baseHeight = 1.3 + Math.random() * 1.3; // 1.3 to 2.6 units high
            const baseRadius = 0.08 + Math.random() * 0.12; // 0.08 to 0.20 units wide
            const trunk = new THREE.Mesh(new THREE.CylinderGeometry(baseRadius * 0.6, baseRadius, baseHeight, 5), trunkMat);
            trunk.position.y = baseHeight / 2;
            trunk.castShadow = true;
            tree.add(trunk);

            // Local green/cyan point light inside leaves (adjust height to fit the trunk)
            const treeLight = new THREE.PointLight(
                0xff00a0, 
                0.8 + Math.random() * 0.8, 
                5.0 + Math.random() * 4.0, 
                1.2
            );
            treeLight.position.set(0, baseHeight + 0.2, 0);
            tree.add(treeLight);
            this.treeLights.push({ light: treeLight, seed: i * 1.5 });

            tree.position.set(tx, gy, tz);
            this.group.add(tree);

            // Unique canopy shape factors (varying radius, vertical squishing, and directional scaling)
            const cx = tx;
            const cy = gy + baseHeight + 0.2;
            const cz = tz;

            const canopyRadius = 0.7 + Math.random() * 0.8; // 0.7 to 1.5 radius
            const squishY = 0.5 + Math.random() * 0.45; // vertical squishing variation
            const scaleX = 0.7 + Math.random() * 0.7; // elliptical stretch X
            const scaleZ = 0.7 + Math.random() * 0.7; // elliptical stretch Z

            for (let j = 0; j < 150; j++) {
                const leafIndex = i * 150 + j;

                // Spherical random offset
                const u = Math.random();
                const v = Math.random();
                const theta = u * 2.0 * Math.PI;
                const phi = Math.acos(2.0 * v - 1.0);
                
                const r = 0.1 + Math.random() * canopyRadius;
                
                // Position applying our customized tree canopy shape scaling
                const lx = cx + r * Math.sin(phi) * Math.cos(theta) * scaleX;
                const ly = cy + r * Math.sin(phi) * Math.sin(theta) * squishY;
                const lz = cz + r * Math.cos(phi) * scaleZ;

                this.leafPositions[leafIndex * 3] = lx;
                this.leafPositions[leafIndex * 3 + 1] = ly;
                this.leafPositions[leafIndex * 3 + 2] = lz;

                // Rotations facing outward with random variations
                const tempObj = new THREE.Object3D();
                tempObj.position.set(lx, ly, lz);
                tempObj.lookAt(cx, cy, cz);
                tempObj.rotation.y += Math.PI + (Math.random() - 0.5) * 1.0;
                tempObj.rotation.x += (Math.random() - 0.5) * 1.0;
                tempObj.rotation.z += (Math.random() - 0.5) * 1.5;

                this.leafRotations[leafIndex * 3] = tempObj.rotation.x;
                this.leafRotations[leafIndex * 3 + 1] = tempObj.rotation.y;
                this.leafRotations[leafIndex * 3 + 2] = tempObj.rotation.z;

                // Scale leaf
                const s = 0.7 + Math.random() * 0.7;
                this.leafScales[leafIndex * 3] = s;
                this.leafScales[leafIndex * 3 + 1] = s;
                this.leafScales[leafIndex * 3 + 2] = s;

                this.leafSeeds[leafIndex] = Math.random() * 100.0;

                // Set initial transform
                dummy.position.set(lx, ly, lz);
                dummy.rotation.copy(tempObj.rotation);
                dummy.scale.set(s, s, s);
                dummy.updateMatrix();
                this.leafMesh.setMatrixAt(leafIndex, dummy.matrix);

                // Set random shade of pink
                color.setHex(leafColors[Math.floor(Math.random() * leafColors.length)]);
                this.leafMesh.setColorAt(leafIndex, color);
            }
        }

        this.group.add(this.leafMesh);

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

    createMagneticRamp(x, z, width, depth, height) {
        const angle = Math.atan2(height, depth);
        const rampGroup = new THREE.Group();
        const gy = getTerrainHeight(x, z);
        
        // Main Board
        const boardGeom = new THREE.BoxGeometry(width, 0.2, depth);
        const boardMat = new THREE.MeshStandardMaterial({
            color: 0x09090e,
            roughness: 0.3,
            metalness: 0.8
        });
        const board = new THREE.Mesh(boardGeom, boardMat);
        board.position.set(0, height / 2, 0);
        board.rotation.x = angle;
        board.castShadow = true;
        board.receiveShadow = true;
        rampGroup.add(board);
        
        // Glowing side rails (Cyan neon)
        const railMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
        const leftRail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, depth), railMat);
        leftRail.position.set(-width / 2 - 0.05, height / 2, 0);
        leftRail.rotation.x = angle;
        rampGroup.add(leftRail);

        const rightRail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, depth), railMat);
        rightRail.position.set(width / 2 + 0.05, height / 2, 0);
        rightRail.rotation.x = angle;
        rampGroup.add(rightRail);

        // Magnetic hover thrusters underneath
        const thrusterGeom = new THREE.CylinderGeometry(0.3, 0.3, 0.15, 6);
        const thrusterMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
        
        const t1 = new THREE.Mesh(thrusterGeom, thrusterMat);
        t1.position.set(-width / 2 + 0.5, height / 2 - 0.2, -depth / 2 + 1);
        t1.rotation.x = angle;
        rampGroup.add(t1);

        const t2 = new THREE.Mesh(thrusterGeom, thrusterMat);
        t2.position.set(width / 2 - 0.5, height / 2 - 0.2, depth / 2 - 1);
        t2.rotation.x = angle;
        rampGroup.add(t2);

        rampGroup.position.set(x, gy, z);
        this.group.add(rampGroup);

        this.ramps.push({
            position: new THREE.Vector3(x, gy, z),
            width: width,
            depth: depth,
            height: height,
            angle: angle
        });
    }

    createSignBoard(titleText, bodyLines, x, z, w, h, neonColor) {
        const signGroup = new THREE.Group();
        const gy = getTerrainHeight(x, z);

        // Pillars
        const pillGeom = new THREE.CylinderGeometry(0.08, 0.08, 5, 8);
        const pillMat = new THREE.MeshStandardMaterial({ color: 0x111116, roughness: 0.8 });
        
        const leftPill = new THREE.Mesh(pillGeom, pillMat);
        leftPill.position.set(-w / 2 + 0.3, 2.5, 0);
        leftPill.castShadow = true;
        leftPill.receiveShadow = true;
        signGroup.add(leftPill);
        
        const rightPill = new THREE.Mesh(pillGeom, pillMat);
        rightPill.position.set(w / 2 - 0.3, 2.5, 0);
        rightPill.castShadow = true;
        rightPill.receiveShadow = true;
        signGroup.add(rightPill);

        // Draw Canvas texture
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');

        // Draw background
        ctx.fillStyle = '#0a0518';
        ctx.fillRect(0, 0, 512, 256);
        
        // Draw neon border outline
        ctx.strokeStyle = `#${neonColor.toString(16).padStart(6, '0')}`;
        ctx.lineWidth = 12;
        ctx.strokeRect(6, 6, 500, 244);
        
        // Header Text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px Courier New';
        ctx.textAlign = 'center';
        ctx.fillText(titleText, 256, 55);

        // Body Text
        ctx.fillStyle = '#a5b4fc';
        ctx.font = '20px Courier New';
        bodyLines.forEach((line, idx) => {
            ctx.fillText(line, 256, 110 + idx * 30);
        });

        const texture = new THREE.CanvasTexture(canvas);
        const boardGeom = new THREE.PlaneGeometry(w, h);
        const boardMat = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.95
        });
        const boardMesh = new THREE.Mesh(boardGeom, boardMat);
        boardMesh.position.y = 3.5;
        boardMesh.castShadow = true;
        signGroup.add(boardMesh);

        // Add a backplate with emissive color
        const backplateGeom = new THREE.BoxGeometry(w + 0.1, h + 0.1, 0.05);
        const backplateMat = new THREE.MeshStandardMaterial({
            color: 0x090514,
            emissive: neonColor,
            emissiveIntensity: 0.15,
            roughness: 0.5,
            metalness: 0.8
        });
        const backplate = new THREE.Mesh(backplateGeom, backplateMat);
        backplate.position.set(0, 3.5, -0.04);
        backplate.castShadow = true;
        signGroup.add(backplate);

        // Add a point light to cast neon glow
        const glowLight = new THREE.PointLight(neonColor, 1.5, 6, 1.5);
        glowLight.position.set(0, 2.0, 0.5);
        signGroup.add(glowLight);

        signGroup.position.set(x, gy, z);
        this.group.add(signGroup);
    }

    createObsidianMonolith(name, x, z, colorHex) {
        const monolithGroup = new THREE.Group();
        const gy = getTerrainHeight(x, z);

        // 1. Column - Pentagonal low-poly obsidian column
        const colGeom = new THREE.CylinderGeometry(0.7, 0.9, 5.0, 5);
        const colMat = new THREE.MeshStandardMaterial({
            color: 0x07070a,
            roughness: 0.15,
            metalness: 0.9,
            flatShading: true
        });
        const column = new THREE.Mesh(colGeom, colMat);
        column.position.y = 2.5;
        column.castShadow = true;
        column.receiveShadow = true;
        monolithGroup.add(column);

        // 2. Glowing Runic Engravings (Neon strips on the column)
        const stripGeom = new THREE.BoxGeometry(0.12, 3.8, 0.12);
        const stripMat = new THREE.MeshBasicMaterial({ color: colorHex });
        
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const strip = new THREE.Mesh(stripGeom, stripMat);
            strip.position.set(Math.cos(angle) * 0.78, 2.5, Math.sin(angle) * 0.78);
            strip.rotation.y = -angle;
            monolithGroup.add(strip);
        }

        // 3. Holographic Text Plate (Project Name)
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#050508';
        ctx.fillRect(0, 0, 256, 64);
        
        ctx.strokeStyle = `#${colorHex.toString(16).padStart(6, '0')}`;
        ctx.lineWidth = 4;
        ctx.strokeRect(2, 2, 252, 60);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 20px Courier New';
        ctx.textAlign = 'center';
        ctx.fillText(name.toUpperCase(), 128, 38);

        const textTexture = new THREE.CanvasTexture(canvas);
        const textPlate = new THREE.Mesh(
            new THREE.PlaneGeometry(2.0, 0.5),
            new THREE.MeshBasicMaterial({ map: textTexture, side: THREE.DoubleSide })
        );
        textPlate.position.set(0, 4.0, 1.05);
        monolithGroup.add(textPlate);

        // 4. Floating Runic Ring above monolith
        const ringGeom = new THREE.TorusGeometry(1.0, 0.08, 6, 20);
        ringGeom.rotateX(Math.PI / 2);
        const ringMat = new THREE.MeshBasicMaterial({
            color: colorHex,
            transparent: true,
            opacity: 0.8
        });
        const ring = new THREE.Mesh(ringGeom, ringMat);
        ring.position.set(0, 6.8, 0);
        monolithGroup.add(ring);
        
        this.runicRings.push(ring);

        // 5. Zone Area Ring on the ground
        const zoneRingGeom = new THREE.RingGeometry(2.3, 2.5, 32);
        zoneRingGeom.rotateX(-Math.PI / 2);
        const zoneRingMat = new THREE.MeshBasicMaterial({
            color: colorHex,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });
        const zoneRing = new THREE.Mesh(zoneRingGeom, zoneRingMat);
        zoneRing.position.set(0, 0.05, 0);
        monolithGroup.add(zoneRing);

        // 6. PointLight for bioluminescent ground casting
        const light = new THREE.PointLight(colorHex, 1.8, 8, 1.5);
        light.position.set(0, 1.0, 0);
        monolithGroup.add(light);

        monolithGroup.position.set(x, gy, z);
        this.group.add(monolithGroup);

        this.projectZones.push({
            name: name,
            center: new THREE.Vector3(x, gy, z),
            radius: 2.6
        });
    }

    createInstancedGrass() {
        // Grass width set to ~1/4 of its height (base radius 0.18, height 1.4) to cover large areas
        const grassGeom = new THREE.ConeGeometry(0.18, 1.4, 3);
        // Offset grass mesh pivot coordinates to bottom face
        grassGeom.translate(0, 0.7, 0);
        
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

        // Cohesive shades of Bright Green (#00FF7F) and Sky Blue (#1E90FF) with slight variations
        const colors = [
            0x00ff7f, 0x33ff99, 0x00d86c, 0x05e580, // Bright Green variations
            0x1e90ff, 0x3aa1ff, 0x007ce6, 0x00b0ff  // Sky Blue variations
        ];
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

            // Taller scaling factors
            const sy = 0.8 + Math.random() * 0.8;
            const sxz = 0.7 + Math.random() * 0.6;
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

        // --- 1. Wind Grass Sway & Drone Interactive Bending update (optimized CPU update) ---
        if (this.grassMesh) {
            const dummy = new THREE.Object3D();
            const dronePos = drone ? drone.position : null;
            const hasDrone = !!dronePos;

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

                // Drone interaction bending math
                let bendX = 0;
                let bendZ = 0;
                let pushScale = 1.0;

                if (hasDrone) {
                    const dx = px - dronePos.x;
                    const dz = pz - dronePos.z;
                    const distSq = dx * dx + dz * dz;
                    // Interact radius (e.g. 4.2 units around drone)
                    const radius = 4.2;
                    const radiusSq = radius * radius;

                    if (distSq < radiusSq) {
                        const dist = Math.sqrt(distSq);
                        const force = 1.0 - (dist / radius); // 0 (outer edge) to 1 (center)
                        
                        // Push direction away from drone (adding epsilon to avoid division by zero)
                        const angle = Math.atan2(dz, dx || 0.0001);
                        
                        // Bend rotation (pitch & roll) away
                        bendX = -Math.sin(angle) * force * 1.0;
                        bendZ = Math.cos(angle) * force * 1.0;
                        
                        // Flatten slightly when drone is close
                        pushScale = 1.0 - force * 0.35;
                    }
                }

                dummy.position.set(px, py, pz);
                // Rotate Yaw, and apply combined wind + drone bending using 'YXZ' order
                dummy.rotation.set(sway * 0.4 + bendX, yaw, sway + bendZ, 'YXZ');
                dummy.scale.set(sxz, sy * pushScale, sxz);
                dummy.updateMatrix();

                this.grassMesh.setMatrixAt(i, dummy.matrix);
            }
            this.grassMesh.instanceMatrix.needsUpdate = true;
        }

        // --- 1b. Wind Tree Leaf Flutter update (optimized CPU update) ---
        if (this.leafMesh) {
            const dummy = new THREE.Object3D();
            for (let i = 0; i < this.leafCount; i++) {
                const i3 = i * 3;
                const px = this.leafPositions[i3];
                const py = this.leafPositions[i3 + 1];
                const pz = this.leafPositions[i3 + 2];
                const rx = this.leafRotations[i3];
                const ry = this.leafRotations[i3 + 1];
                const rz = this.leafRotations[i3 + 2];
                const s = this.leafScales[i3];
                const seed = this.leafSeeds[i];

                // Flutter rotation offset in wind (adding subtle variety per leaf instance)
                const flutterX = Math.sin(time * 4.5 + seed) * 0.08;
                const flutterY = Math.cos(time * 3.8 + seed) * 0.08;
                const flutterZ = Math.sin(time * 5.2 + seed) * 0.12;

                dummy.position.set(px, py, pz);
                dummy.rotation.set(rx + flutterX, ry + flutterY, rz + flutterZ, 'YXZ');
                dummy.scale.set(s, s, s);
                dummy.updateMatrix();

                this.leafMesh.setMatrixAt(i, dummy.matrix);
            }
            this.leafMesh.instanceMatrix.needsUpdate = true;
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

                        // Play procedural crystal impact sound
                        audio.playCrystalHit(impactForce);
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
