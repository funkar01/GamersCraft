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

        // Project Showcase Portal assets
        this.portalDebris = [];
        this.portalRingMat = null;
        this.portalCoreMat = null;
        this.portalInnerCoreMat = null;
        this.portalLight = null;
        
        // Grass InstancedMesh parameters
        this.grassMesh = null;
        this.grassCount = 35000;
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

        // Culling Entity Lists
        this.spireMeshes = [];
        this.boulderMeshes = [];
        this.pebbleMeshes = [];
        this.puddleMeshes = [];
        this.flowers = [];
        this.trees = [];
        this.signGroups = [];
        this.portalGroup = null;
        this.beaconGroup = null;
        this.contactCircle = null;

        this.onEnterZone = () => {};
        
        this.init();
    }

    init() {
        // --- 1. Procedural Grid Texture Canvas ---
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = '#ffffff'; // White base (multiplies vertex colors)
        ctx.fillRect(0, 0, 128, 128);
        
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.14)'; // Subtle dark grid overlay
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, 128, 128);
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; // Subtle highlight
        ctx.lineWidth = 1;
        ctx.strokeRect(32, 32, 64, 64);
        
        const gridTexture = new THREE.CanvasTexture(canvas);
        gridTexture.wrapS = THREE.RepeatWrapping;
        gridTexture.wrapT = THREE.RepeatWrapping;
        gridTexture.repeat.set(125, 125);

        // --- 2. Deformed Ground Geometry ---
        const groundGeom = new THREE.PlaneGeometry(250, 250, 96, 96);
        
        const posAttr = groundGeom.attributes.position;
        const colorsAttr = [];
        const grassColor = new THREE.Color(0x55a630); // Vibrant grass green
        const soilColor = new THREE.Color(0xd68d53);  // Warm orange-brown soil
        
        for (let i = 0; i < posAttr.count; i++) {
            const vx = posAttr.getX(i);
            const vy = posAttr.getY(i);
            const heightVal = getTerrainHeight(vx, vy);
            posAttr.setZ(i, heightVal);
            
            // Winding path formula: snaking along the Y axis of the plane (which is Z in world)
            const pathX = Math.sin(vy * 0.06) * 12.0 + Math.sin(vy * 0.02) * 6.0;
            const distToPath = Math.abs(vx - pathX);
            const distToCenter = Math.sqrt(vx * vx + vy * vy);
            
            let color = grassColor.clone();
            
            if (distToCenter <= 8.5) {
                // Center plaza is soil
                color.copy(soilColor);
            } else {
                if (distToPath < 3.8) {
                    color.copy(soilColor);
                } else if (distToPath < 7.5) {
                    // Smooth transition blend
                    const t = (distToPath - 3.8) / 3.7;
                    color.lerpColors(soilColor, grassColor, t);
                }
            }
            colorsAttr.push(color.r, color.g, color.b);
        }
        
        groundGeom.setAttribute('color', new THREE.Float32BufferAttribute(colorsAttr, 3));
        groundGeom.computeVertexNormals();

        const groundMat = new THREE.MeshStandardMaterial({
            map: gridTexture,
            vertexColors: true,
            roughness: 0.9,
            metalness: 0.1,
            flatShading: true
        });
        const ground = new THREE.Mesh(groundGeom, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.group.add(ground);

        // --- Stylized Stacked Plateaus & Spire Rocks (Slate Grey) ---
        const plateauMat = new THREE.MeshStandardMaterial({
            color: 0x94a3b8, // Light slate-grey matching the boulders
            roughness: 0.85,
            metalness: 0.25,
            flatShading: true
        });

        // Function to create a stacked stone plateau (no neon rings for cartoon daylight look)
        const createStackedPlateau = (px, pz, scaleFactor = 1.0) => {
            const group = new THREE.Group();
            const gy = getTerrainHeight(px, pz);
            
            // Layer 1 (Bottom slab)
            const slab1Geom = new THREE.CylinderGeometry(5 * scaleFactor, 6 * scaleFactor, 1.2, 5);
            const slab1 = new THREE.Mesh(slab1Geom, plateauMat);
            slab1.position.y = 0.6;
            slab1.rotation.y = Math.random() * Math.PI;
            slab1.castShadow = true;
            slab1.receiveShadow = true;
            group.add(slab1);

            // Layer 2 (Middle slab)
            const slab2Geom = new THREE.CylinderGeometry(3.5 * scaleFactor, 4.2 * scaleFactor, 0.9, 5);
            const slab2 = new THREE.Mesh(slab2Geom, plateauMat);
            slab2.position.y = 1.65;
            slab2.rotation.y = Math.random() * Math.PI;
            slab2.castShadow = true;
            slab2.receiveShadow = true;
            group.add(slab2);

            // Layer 3 (Top slab)
            const slab3Geom = new THREE.CylinderGeometry(2.2 * scaleFactor, 2.8 * scaleFactor, 0.7, 5);
            const slab3 = new THREE.Mesh(slab3Geom, plateauMat);
            slab3.position.y = 2.45;
            slab3.rotation.y = Math.random() * Math.PI;
            slab3.castShadow = true;
            slab3.receiveShadow = true;
            group.add(slab3);

            group.position.set(px, gy - 0.2, pz);
            this.group.add(group);
        };

        // Create 6 stacked rock plateaus
        const plateauCoords = [
            { x: -25, z: -15, scale: 1.4 },
            { x: 30, z: -35, scale: 1.6 },
            { x: -35, z: 25, scale: 1.2 },
            { x: 40, z: 20, scale: 1.5 },
            { x: -10, z: -40, scale: 1.3 },
            { x: 20, z: 45, scale: 1.5 }
        ];
        plateauCoords.forEach(c => createStackedPlateau(c.x, c.z, c.scale));

        // Function to create a majestic spire rock
        const createSpireRock = (px, pz, scaleH = 1.0) => {
            const spireGeom = new THREE.ConeGeometry(2.5, 20 * scaleH, 4);
            const spire = new THREE.Mesh(spireGeom, plateauMat);
            const gy = getTerrainHeight(px, pz);
            
            spire.position.set(px, gy + 10 * scaleH - 1.5, pz);
            spire.rotation.y = Math.random() * Math.PI;
            spire.rotation.x = (Math.random() - 0.5) * 0.08;
            spire.rotation.z = (Math.random() - 0.5) * 0.08;
            spire.castShadow = true;
            spire.receiveShadow = true;
            this.group.add(spire);
            this.spireMeshes.push(spire);
        };

        // Spawn 15 towering spire rocks around the horizon landscape
        const spireCoords = [
            { x: -55, z: -45, scale: 1.2 }, { x: 55, z: -55, scale: 1.4 },
            { x: -60, z: 50, scale: 1.5 }, { x: 65, z: 45, scale: 1.3 },
            { x: -80, z: -20, scale: 1.6 }, { x: 80, z: -10, scale: 1.4 },
            { x: -75, z: 75, scale: 1.7 }, { x: 75, z: 70, scale: 1.5 },
            { x: -100, z: -80, scale: 1.8 }, { x: 90, z: -90, scale: 1.6 },
            { x: -95, z: 95, scale: 1.9 }, { x: 100, z: 90, scale: 1.7 },
            { x: 0, z: -95, scale: 1.5 }, { x: -110, z: 10, scale: 1.8 },
            { x: 110, z: -20, scale: 1.7 }
        ];
        spireCoords.forEach(c => createSpireRock(c.x, c.z, c.scale));

        // --- 3. Blocky Grey Boulders (Slate Obstacles) ---
        const boulderGeom = new THREE.IcosahedronGeometry(2.0, 0); // 0 subdivision = very blocky
        const boulderMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.9, flatShading: true });
        
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
            this.boulderMeshes.push(mesh);
        });

        // --- 4. Scattered Ground Pebbles & Small Crystals ---
        const rockGeom = new THREE.DodecahedronGeometry(0.2, 0);
        const pebbleGeom = new THREE.BoxGeometry(0.3, 0.15, 0.3);
        const rockMat = new THREE.MeshStandardMaterial({ color: 0x708090, roughness: 0.9 });
        
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
            this.pebbleMeshes.push(detailMesh);
        }

        // --- 5. Calm Clear Water Puddles (Valleys) ---
        const waterGeom = new THREE.CircleGeometry(3.8, 16);
        const waterMat = new THREE.MeshStandardMaterial({
            color: 0x56ccf2, // Sky blue cartoon water
            transparent: true,
            opacity: 0.82,
            roughness: 0.05,
            metalness: 0.1
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
            this.puddleMeshes.push(puddle);
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
        
        const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.85 }); // Warm natural wood brown
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
            this.mushrooms.push({ mesh: shroom, light: pinkLight, seed: idx * 2.0, baseY: gy });
        });

        // --- 9. Stylized Fluffy Pink Blossom Trees with Quad Leaves (Skill Forest) ---
        const isPositionClear = (x, z, scale, existingTrees) => {
            const distFromCenter = Math.sqrt(x * x + z * z);
            
            // Spawn pad boundary
            if (distFromCenter < 12.0) return false;
            
            // Playable area boundary
            if (distFromCenter > 95.0) return false;

            // Check against existing trees
            for (const tree of existingTrees) {
                const dx = x - tree.tx;
                const dz = z - tree.tz;
                const minDist = (scale + tree.scale) * 1.5;
                if (dx * dx + dz * dz < minDist * minDist) {
                    return false;
                }
            }

            // Check against stacked plateaus
            const plateaus = [
                { x: -25, z: -15, scale: 1.4 },
                { x: 30, z: -35, scale: 1.6 },
                { x: -35, z: 25, scale: 1.2 },
                { x: 40, z: 20, scale: 1.5 },
                { x: -10, z: -40, scale: 1.3 },
                { x: 20, z: 45, scale: 1.5 }
            ];
            for (const p of plateaus) {
                const dx = x - p.x;
                const dz = z - p.z;
                const minDist = 6.0 * p.scale + 2.5;
                if (dx * dx + dz * dz < minDist * minDist) return false;
            }

            // Check against spire rocks
            const spires = [
                { x: -55, z: -45, scale: 1.2 }, { x: 55, z: -55, scale: 1.4 },
                { x: -60, z: 50, scale: 1.5 }, { x: 65, z: 45, scale: 1.3 },
                { x: -80, z: -20, scale: 1.6 }, { x: 80, z: -10, scale: 1.4 },
                { x: -75, z: 75, scale: 1.7 }, { x: 75, z: 70, scale: 1.5 },
                { x: -100, z: -80, scale: 1.8 }, { x: 90, z: -90, scale: 1.6 },
                { x: -95, z: 95, scale: 1.9 }, { x: 100, z: 90, scale: 1.7 },
                { x: 0, z: -95, scale: 1.5 }, { x: -110, z: 10, scale: 1.8 },
                { x: 110, z: -20, scale: 1.7 }
            ];
            for (const s of spires) {
                const dx = x - s.x;
                const dz = z - s.z;
                const minDist = 2.5 * s.scale + 3.0;
                if (dx * dx + dz * dz < minDist * minDist) return false;
            }

            // Check against boulders
            const boulders = [
                { x: -15, z: 25 }, { x: -35, z: -10 }, { x: 30, z: -25 },
                { x: -28, z: 32 }, { x: 25, z: -5 }, { x: -8, z: 25 },
                { x: 35, z: 35 }, { x: -40, z: -35 }, { x: 42, z: -15 }
            ];
            for (const b of boulders) {
                const dx = x - b.x;
                const dz = z - b.z;
                if (dx * dx + dz * dz < 5.5 * 5.5) return false;
            }

            // Check against crystals
            const crystals = [
                { x: -6, z: -18 }, { x: -4.5, z: -18 }, { x: -3, z: -18 },
                { x: -5.25, z: -19.5 }, { x: -3.75, z: -19.5 }
            ];
            for (const c of crystals) {
                const dx = x - c.x;
                const dz = z - c.z;
                if (dx * dx + dz * dz < 4.0 * 4.0) return false;
            }

            // Check against puddles
            const puddles = [
                { x: 18, z: -15 }, { x: -22, z: -12 }, { x: -14, z: 20 }, { x: 28, z: -28 }
            ];
            for (const pud of puddles) {
                const dx = x - pud.x;
                const dz = z - pud.z;
                if (dx * dx + dz * dz < 6.0 * 6.0) return false;
            }

            // Check against ramps (centered at (0, -10))
            const dxRamp = x - 0;
            const dzRamp = z - (-10);
            if (dxRamp * dxRamp + dzRamp * dzRamp < 9.0 * 9.0) return false;

            // Check against signs
            const signs = [
                { x: -18, z: 12 }, { x: 18, z: 18 }
            ];
            for (const s of signs) {
                const dx = x - s.x;
                const dz = z - s.z;
                if (dx * dx + dz * dz < 6.0 * 6.0) return false;
            }

            // Check against project portal
            const dxPortal = x - 0;
            const dzPortal = z - (-32);
            if (dxPortal * dxPortal + dzPortal * dzPortal < 8.0 * 8.0) return false;

            // Check against transmission beacon
            const dxBeacon = x - 0;
            const dzBeacon = z - 35;
            if (dxBeacon * dxBeacon + dzBeacon * dzBeacon < 7.5 * 7.5) return false;

            return true;
        };

        const totalNumTrees = 42;
        const treeDefs = [];
        let runningLeafCount = 0;

        for (let i = 0; i < totalNumTrees; i++) {
            let tx = 0, tz = 0, S = 1.0;
            let found = false;
            
            for (let attempt = 0; attempt < 100; attempt++) {
                const rx = (Math.random() - 0.5) * 190;
                const rz = (Math.random() - 0.5) * 190;
                const randScale = 3.0 + Math.random() * 3.0; // 3X - 6X scaling
                
                if (isPositionClear(rx, rz, randScale, treeDefs)) {
                    tx = rx;
                    tz = rz;
                    S = randScale;
                    found = true;
                    break;
                }
            }
            
            if (!found) continue;

            const style = Math.floor(Math.random() * 4);
            const numLeaves = Math.floor(350 + (S - 3.0) * 150); // density scales with tree size
            
            treeDefs.push({
                tx,
                tz,
                scale: S,
                style,
                numLeaves,
                leafStartIndex: runningLeafCount
            });
            runningLeafCount += numLeaves;
        }

        this.leafCount = runningLeafCount;

        this.leafPositions = new Float32Array(this.leafCount * 3);
        this.leafRotations = new Float32Array(this.leafCount * 3);
        this.leafScales = new Float32Array(this.leafCount * 3);
        this.leafSeeds = new Float32Array(this.leafCount);

        const color = new THREE.Color();
        const dummy = new THREE.Object3D();

        const leafGeom = new THREE.PlaneGeometry(0.24, 0.17);
        const leafMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: 0x000000, // Disabled neon glow for cartoon daylight forest
            emissiveIntensity: 0.0,
            roughness: 0.6,
            metalness: 0.05,
            flatShading: true,
            side: THREE.DoubleSide
        });

        this.leafMesh = new THREE.InstancedMesh(leafGeom, leafMat, this.leafCount);
        this.leafMesh.castShadow = true;
        this.leafMesh.receiveShadow = true;

        const greenColors = [0x3cb83c, 0x5cb85c, 0x7ec850, 0x4caf50];       // Lush green
        const redColors = [0xe53935, 0xff5252, 0xd32f2f, 0xff7043];         // Crimson/red
        const yellowOrangeColors = [0xffa726, 0xffb74d, 0xffcc00, 0xffeb3b]; // Yellow/orange

        const palettes = [greenColors, redColors, yellowOrangeColors];
        const lightColors = [0x4caf50, 0xff5252, 0xffb74d]; // Match local lights to leaf theme

        treeDefs.forEach((def, i) => {
            const { tx, tz, scale, style, numLeaves, leafStartIndex } = def;
            const gy = getTerrainHeight(tx, tz);

            const tree = new THREE.Group();
            
            const themeIndex = Math.floor(Math.random() * 3);
            const leafColors = palettes[themeIndex];
            const lightColor = lightColors[themeIndex];

            const baseHeight = (1.3 + Math.random() * 0.7) * scale; 
            const baseRadius = (0.08 + Math.random() * 0.06) * scale * 0.7;
            
            const trunk = new THREE.Mesh(
                new THREE.CylinderGeometry(baseRadius * 0.5, baseRadius, baseHeight, 6), 
                trunkMat
            );
            trunk.position.y = baseHeight / 2;
            trunk.castShadow = true;
            trunk.receiveShadow = true;
            tree.add(trunk);

            const treeLight = new THREE.PointLight(
                lightColor, 
                1.0 + Math.random() * 0.8, 
                8.0 + scale * 2.0, 
                1.2
            );
            treeLight.position.set(0, baseHeight + 0.5, 0);
            tree.add(treeLight);
            this.treeLights.push({ light: treeLight, seed: i * 1.5 });

            const clumps = [];
            
            clumps.push({
                center: new THREE.Vector3(0, baseHeight, 0),
                radius: (0.7 + Math.random() * 0.7) * scale * 0.6,
                scaleX: 1.0,
                scaleY: 0.9,
                scaleZ: 1.0,
                weight: 1.0,
                downwardBias: false
            });

            if (style === 0) {
                const numBranches = 3 + Math.floor(Math.random() * 3);
                for (let b = 0; b < numBranches; b++) {
                    const branchLength = baseHeight * (0.35 + Math.random() * 0.35);
                    const branchRadius = baseRadius * 0.45;
                    const startHeight = baseHeight * (0.45 + Math.random() * 0.4);
                    
                    const branchAngle = (b / numBranches) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
                    const branchInclination = 0.5 + Math.random() * 0.4;
                    
                    const branchGeom = new THREE.CylinderGeometry(branchRadius * 0.4, branchRadius, branchLength, 5);
                    const branchMesh = new THREE.Mesh(branchGeom, trunkMat);
                    branchMesh.castShadow = true;
                    branchMesh.receiveShadow = true;
                    
                    const halfL = branchLength / 2;
                    const dir = new THREE.Vector3(
                        Math.cos(branchAngle) * Math.sin(branchInclination),
                        Math.cos(branchInclination),
                        Math.sin(branchAngle) * Math.sin(branchInclination)
                    ).normalize();
                    
                    branchMesh.position.set(dir.x * halfL, startHeight + dir.y * halfL, dir.z * halfL);
                    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
                    branchMesh.setRotationFromQuaternion(quat);
                    tree.add(branchMesh);
                    
                    clumps.push({
                        center: new THREE.Vector3(dir.x * branchLength, startHeight + dir.y * branchLength, dir.z * branchLength),
                        radius: (0.5 + Math.random() * 0.5) * scale * 0.5,
                        scaleX: 1.0,
                        scaleY: 0.9,
                        scaleZ: 1.0,
                        weight: 1.2,
                        downwardBias: false
                    });
                }
            } else if (style === 1) {
                clumps.length = 0;
                const numTiers = 3 + Math.floor(Math.random() * 2);
                for (let t = 0; t < numTiers; t++) {
                    const progress = (t + 1) / (numTiers + 0.5);
                    const tierHeight = baseHeight * progress;
                    const tierRadius = baseHeight * 0.3 * (1.0 - progress * 0.5);
                    
                    const numTierBranches = 4;
                    for (let tb = 0; tb < numTierBranches; tb++) {
                        const angle = (tb / numTierBranches) * Math.PI * 2 + t * 0.5;
                        const brLength = tierRadius;
                        const brGeom = new THREE.CylinderGeometry(baseRadius * 0.25, baseRadius * 0.35, brLength, 4);
                        const brMesh = new THREE.Mesh(brGeom, trunkMat);
                        brMesh.castShadow = true;
                        brMesh.receiveShadow = true;
                        
                        brMesh.position.set(
                            Math.cos(angle) * (brLength / 2),
                            tierHeight,
                            Math.sin(angle) * (brLength / 2)
                        );
                        
                        const dir = new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle)).normalize();
                        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
                        brMesh.setRotationFromQuaternion(quat);
                        tree.add(brMesh);
                    }

                    clumps.push({
                        center: new THREE.Vector3(0, tierHeight, 0),
                        radius: tierRadius,
                        scaleX: 1.25,
                        scaleY: 0.22,
                        scaleZ: 1.25,
                        weight: 1.0,
                        downwardBias: false
                    });
                }
            } else if (style === 2) {
                clumps.length = 0;
                const numForks = 3 + Math.floor(Math.random() * 2);
                for (let f = 0; f < numForks; f++) {
                    const forkAngle = (f / numForks) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
                    const forkLength = baseHeight * (0.35 + Math.random() * 0.15);
                    const forkInclination = 1.1 + Math.random() * 0.3;
                    
                    const fGeom = new THREE.CylinderGeometry(baseRadius * 0.3, baseRadius * 0.45, forkLength, 4);
                    const fMesh = new THREE.Mesh(fGeom, trunkMat);
                    fMesh.castShadow = true;
                    fMesh.receiveShadow = true;
                    
                    const dir = new THREE.Vector3(
                        Math.cos(forkAngle) * Math.sin(forkInclination),
                        Math.cos(forkInclination),
                        Math.sin(forkAngle) * Math.sin(forkInclination)
                    ).normalize();
                    
                    const halfL = forkLength / 2;
                    fMesh.position.set(dir.x * halfL, baseHeight * 0.82 + dir.y * halfL, dir.z * halfL);
                    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
                    fMesh.setRotationFromQuaternion(quat);
                    tree.add(fMesh);
                }
                
                clumps.push({
                    center: new THREE.Vector3(0, baseHeight * 1.02, 0),
                    radius: baseHeight * 0.42,
                    scaleX: 1.75,
                    scaleY: 0.22,
                    scaleZ: 1.75,
                    weight: 1.0,
                    downwardBias: false
                });
            } else if (style === 3) {
                const numBranches = 3 + Math.floor(Math.random() * 2);
                for (let b = 0; b < numBranches; b++) {
                    const branchAngle = (b / numBranches) * Math.PI * 2;
                    const seg1L = baseHeight * 0.3;
                    const seg2L = baseHeight * 0.25;
                    
                    const s1Geom = new THREE.CylinderGeometry(baseRadius * 0.35, baseRadius * 0.45, seg1L, 4);
                    const s1Mesh = new THREE.Mesh(s1Geom, trunkMat);
                    s1Mesh.castShadow = true;
                    s1Mesh.receiveShadow = true;
                    const inc1 = 0.6 + Math.random() * 0.3;
                    const dir1 = new THREE.Vector3(Math.cos(branchAngle) * Math.sin(inc1), Math.cos(inc1), Math.sin(branchAngle) * Math.sin(inc1)).normalize();
                    s1Mesh.position.set(dir1.x * (seg1L/2), baseHeight * 0.72 + dir1.y * (seg1L/2), dir1.z * (seg1L/2));
                    const quat1 = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir1);
                    s1Mesh.setRotationFromQuaternion(quat1);
                    tree.add(s1Mesh);
                    
                    const s2Geom = new THREE.CylinderGeometry(baseRadius * 0.2, baseRadius * 0.35, seg2L, 4);
                    const s2Mesh = new THREE.Mesh(s2Geom, trunkMat);
                    s2Mesh.castShadow = true;
                    s2Mesh.receiveShadow = true;
                    const inc2 = 1.8 + Math.random() * 0.4;
                    const dir2 = new THREE.Vector3(Math.cos(branchAngle) * Math.sin(inc2), Math.cos(inc2), Math.sin(branchAngle) * Math.sin(inc2)).normalize();
                    const s1End = dir1.clone().multiplyScalar(seg1L).add(new THREE.Vector3(0, baseHeight * 0.72, 0));
                    s2Mesh.position.set(s1End.x + dir2.x * (seg2L/2), s1End.y + dir2.y * (seg2L/2), s1End.z + dir2.z * (seg2L/2));
                    const quat2 = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir2);
                    s2Mesh.setRotationFromQuaternion(quat2);
                    tree.add(s2Mesh);
                    
                    const s2End = s1End.clone().add(dir2.clone().multiplyScalar(seg2L));
                    clumps.push({
                        center: s2End,
                        radius: (0.7 + Math.random() * 0.4) * scale * 0.55,
                        scaleX: 0.9,
                        scaleY: 1.45,
                        scaleZ: 0.9,
                        weight: 1.0,
                        downwardBias: true
                    });
                }
            }

            tree.position.set(tx, gy, tz);
            this.group.add(tree);

            const totalWeight = clumps.reduce((sum, cl) => sum + cl.weight, 0);
            
            for (let j = 0; j < numLeaves; j++) {
                const leafIndex = leafStartIndex + j;

                let randWeight = Math.random() * totalWeight;
                let selectedClump = clumps[0];
                for (const cl of clumps) {
                    if (randWeight < cl.weight) {
                        selectedClump = cl;
                        break;
                    }
                    randWeight -= cl.weight;
                }

                const u = Math.random();
                const v = Math.random();
                const theta = u * 2.0 * Math.PI;
                const phi = Math.acos(2.0 * v - 1.0);
                
                const r = (0.15 + Math.random() * 0.85) * selectedClump.radius;
                
                let ox = r * Math.sin(phi) * Math.cos(theta) * selectedClump.scaleX;
                let oy = r * Math.sin(phi) * Math.sin(theta) * selectedClump.scaleY;
                let oz = r * Math.cos(phi) * selectedClump.scaleZ;
                
                if (selectedClump.downwardBias) {
                    oy -= r * 0.35;
                }
                
                const lx_local = selectedClump.center.x + ox;
                const ly_local = selectedClump.center.y + oy;
                const lz_local = selectedClump.center.z + oz;
                
                const lx = tx + lx_local;
                const ly = gy + ly_local;
                const lz = tz + lz_local;

                this.leafPositions[leafIndex * 3] = lx;
                this.leafPositions[leafIndex * 3 + 1] = ly;
                this.leafPositions[leafIndex * 3 + 2] = lz;

                const tempObj = new THREE.Object3D();
                tempObj.position.set(lx, ly, lz);
                
                const worldClumpCenter = selectedClump.center.clone().add(new THREE.Vector3(tx, gy, tz));
                tempObj.lookAt(worldClumpCenter);
                
                if (selectedClump.downwardBias) {
                    tempObj.rotation.x += Math.PI / 2 + (Math.random() - 0.5) * 0.6;
                } else {
                    tempObj.rotation.y += Math.PI + (Math.random() - 0.5) * 1.2;
                    tempObj.rotation.x += (Math.random() - 0.5) * 1.2;
                }
                tempObj.rotation.z += (Math.random() - 0.5) * 1.8;

                this.leafRotations[leafIndex * 3] = tempObj.rotation.x;
                this.leafRotations[leafIndex * 3 + 1] = tempObj.rotation.y;
                this.leafRotations[leafIndex * 3 + 2] = tempObj.rotation.z;

                const s = 0.55 + Math.random() * 0.65;
                this.leafScales[leafIndex * 3] = s;
                this.leafScales[leafIndex * 3 + 1] = s;
                this.leafScales[leafIndex * 3 + 2] = s;

                this.leafSeeds[leafIndex] = Math.random() * 100.0;

                dummy.position.set(lx, ly, lz);
                dummy.rotation.copy(tempObj.rotation);
                dummy.scale.set(s, s, s);
                dummy.updateMatrix();
                this.leafMesh.setMatrixAt(leafIndex, dummy.matrix);

                color.setHex(leafColors[Math.floor(Math.random() * leafColors.length)]);
                this.leafMesh.setColorAt(leafIndex, color);
            }

            this.trees.push({
                group: tree,
                center: new THREE.Vector3(tx, gy + baseHeight + 1.0, tz),
                leafStartIndex: leafStartIndex,
                numLeaves: numLeaves,
                wasVisible: undefined,
                seed: i * 1.5,
                light: treeLight
            });
        });

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
        // (Removed 2 UI screens from the environment as per request)

        // --- 12. Futuristic Project Portal Screen ---
        this.projectPortal = this.createProjectPortal(0, -32);

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
        this.beaconGroup = beacon;

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
        this.contactCircle = contactCircle;

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
        this.signGroups.push(signGroup);
    }

    createProjectPortal(x, z) {
        const portalGroup = new THREE.Group();
        const gy = getTerrainHeight(x, z);

        // 1. Portal base circular platform
        const baseMat = new THREE.MeshStandardMaterial({
            color: 0x181824,
            roughness: 0.85,
            metalness: 0.2,
            flatShading: true
        });
        const basePlatform = new THREE.Mesh(
            new THREE.CylinderGeometry(5.2, 5.8, 0.5, 8),
            baseMat
        );
        basePlatform.position.y = 0.25;
        basePlatform.receiveShadow = true;
        basePlatform.castShadow = true;
        portalGroup.add(basePlatform);

        // 2. Portal outer stone pillars framing the ring (arch arrangement)
        const stoneMat = new THREE.MeshStandardMaterial({
            color: 0x07070a, // Obsidian rock
            roughness: 0.2,
            metalness: 0.8,
            flatShading: true
        });
        
        const pillarCount = 8;
        const radius = 4.2;
        for (let i = 0; i < pillarCount; i++) {
            const angle = (i / pillarCount) * Math.PI; // semi-circle arch framing the top
            const px = Math.cos(angle) * radius;
            const py = Math.sin(angle) * radius + 0.5;
            
            const colGeom = new THREE.CylinderGeometry(0.35, 0.5, 1.8 + Math.random() * 0.6, 5);
            const pillar = new THREE.Mesh(colGeom, stoneMat);
            pillar.position.set(px, py, 0);
            // tilt them to look like a circular arch
            pillar.rotation.z = -angle + Math.PI / 2;
            pillar.castShadow = true;
            pillar.receiveShadow = true;
            portalGroup.add(pillar);
        }

        // 3. Floating debris particles orbiting the portal (like the 1st reference image)
        this.portalDebris = [];
        const debrisGeom = new THREE.DodecahedronGeometry(0.24, 0);
        for (let i = 0; i < 12; i++) {
            const debris = new THREE.Mesh(debrisGeom, stoneMat);
            const angle = (i / 12) * Math.PI * 2;
            const dist = 5.2 + Math.random() * 1.5;
            debris.position.set(
                Math.cos(angle) * dist,
                3.0 + (Math.random() - 0.5) * 3.5,
                (Math.random() - 0.5) * 2.0
            );
            debris.castShadow = true;
            portalGroup.add(debris);
            
            this.portalDebris.push({
                mesh: debris,
                angle: angle,
                radius: dist,
                speed: 0.8 + Math.random() * 0.8,
                yOffset: debris.position.y
            });
        }

        // 4. Portal Inner Swirling Screen (Core Ring)
        const ringGeom = new THREE.TorusGeometry(3.6, 0.25, 8, 32);
        this.portalRingMat = new THREE.MeshBasicMaterial({
            color: 0x39ff14, // Vibrant green default
            transparent: true,
            opacity: 0.85,
            blending: THREE.AdditiveBlending
        });
        const portalRing = new THREE.Mesh(ringGeom, this.portalRingMat);
        portalRing.position.set(0, 3.8, 0);
        portalGroup.add(portalRing);

        // 5. Portal Center whirlpool/swirl screen mesh
        const coreGeom = new THREE.CircleGeometry(3.4, 32);
        this.portalCoreMat = new THREE.MeshBasicMaterial({
            color: 0x39ff14,
            transparent: true,
            opacity: 0.65,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });
        this.portalCore = new THREE.Mesh(coreGeom, this.portalCoreMat);
        this.portalCore.position.set(0, 3.8, 0.05); // slightly offset
        portalGroup.add(this.portalCore);

        // Secondary inner swirl circle for visual depth
        const innerCoreGeom = new THREE.CircleGeometry(2.4, 32);
        this.portalInnerCoreMat = new THREE.MeshBasicMaterial({
            color: 0x00ffaa,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });
        this.portalInnerCore = new THREE.Mesh(innerCoreGeom, this.portalInnerCoreMat);
        this.portalInnerCore.position.set(0, 3.8, 0.1); 
        portalGroup.add(this.portalInnerCore);

        // 6. Dynamic PointLight inside the portal screen
        this.portalLight = new THREE.PointLight(0x39ff14, 3.0, 15, 1.2);
        this.portalLight.position.set(0, 3.8, 0.5);
        portalGroup.add(this.portalLight);

        portalGroup.position.set(x, gy, z);
        this.group.add(portalGroup);
        this.portalGroup = portalGroup;

        // Register the project zone representing the portal
        this.projectZones.push({
            name: 'portal',
            center: new THREE.Vector3(x, gy, z),
            radius: 4.8
        });
    }

    setPortalColor(colorHex) {
        if (this.portalRingMat) this.portalRingMat.color.setHex(colorHex);
        if (this.portalCoreMat) this.portalCoreMat.color.setHex(colorHex);
        if (this.portalInnerCoreMat) {
            const innerColor = new THREE.Color(colorHex).addScalar(0.1);
            this.portalInnerCoreMat.color.copy(innerColor);
        }
        if (this.portalLight) this.portalLight.color.setHex(colorHex);
    }

    createInstancedGrass() {
        // Create custom bent grass geometry using 3 triangles (5 vertices, curving in Z)
        const grassGeom = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            -0.12, 0.0,  0.0,   // 0: Bottom left
             0.12, 0.0,  0.0,   // 1: Bottom right
            -0.08, 0.65, 0.0,   // 2: Middle left
             0.08, 0.65, 0.0,   // 3: Middle right
             0.0,  1.3, -0.15   // 4: Curved top tip (bent forward slightly)
        ]);
        const uvs = new Float32Array([
            0.0, 0.0,
            1.0, 0.0,
            0.1, 0.5,
            0.9, 0.5,
            0.5, 1.0
        ]);
        const indices = [
            0, 1, 3,  // Bottom triangle 1
            0, 3, 2,  // Bottom triangle 2
            2, 3, 4   // Top bent triangle
        ];
        grassGeom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        grassGeom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
        grassGeom.setIndex(indices);
        grassGeom.computeVertexNormals();
        
        const grassMat = new THREE.MeshStandardMaterial({
            roughness: 0.7,
            metalness: 0.15,
            flatShading: true,
            side: THREE.DoubleSide
        });

        this.grassMesh = new THREE.InstancedMesh(grassGeom, grassMat, this.grassCount);
        this.grassMesh.castShadow = true;

        this.grassPositions = new Float32Array(this.grassCount * 3);
        this.grassScales = new Float32Array(this.grassCount * 3);
        this.grassYaws = new Float32Array(this.grassCount);

        // Cohesive shades of cartoon green for grass blades matching the reference image
        const colors = [
            0x3cb83c, 0x5cb85c, 0x449d44, // Lush grass greens
            0x7ec850, 0x9be868, 0x61a833, // Yellow-green highlights
            0x228b22, 0x1e561e           // Deep greens
        ];
        const color = new THREE.Color();
        const dummy = new THREE.Object3D();

        let index = 0;
        while (index < this.grassCount) {
            const rx = (Math.random() - 0.5) * 88;
            const rz = (Math.random() - 0.5) * 88;
            
            // Skip spawning on the center plaza
            const dist = Math.sqrt(rx * rx + rz * rz);
            if (dist < 8.5) continue;

            // Skip spawning on the winding dirt path (keeps the trail clean of vegetation)
            const pathX = Math.sin(rz * 0.06) * 12.0 + Math.sin(rz * 0.02) * 6.0;
            const distToPath = Math.abs(rx - pathX);
            if (distToPath < 4.2) continue;

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
            shroom.mesh.position.y = shroom.baseY + Math.sin(time + shroom.seed) * 0.05;
            shroom.light.intensity = 0.8 + Math.sin(time * 3.0 + shroom.seed) * 0.4;
        });

        // Pulsing trees
        this.trees.forEach(tree => {
            tree.light.intensity = 0.8 + Math.sin(time * 2.0 + tree.seed) * 0.3;
        });

        // Pulsing flower bulbs
        this.flowers.forEach(flower => {
            flower.light.intensity = 0.6 + Math.sin(time * 4.0 + flower.seed) * 0.4;
        });

        // --- 1. Wind Grass Sway & Drone Interactive Bending update (full simulation, zero culling) ---
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
                    // Skip math operations for distant blades (optimization)
                    if (distSq < 15.0 * 15.0) {
                        const radius = 4.2;
                        if (distSq < radius * radius) {
                            const dist = Math.sqrt(distSq);
                            const force = 1.0 - (dist / radius); // 0 (outer edge) to 1 (center)
                            const angle = Math.atan2(dz, dx || 0.0001);
                            
                            bendX = -Math.sin(angle) * force * 1.0;
                            bendZ = Math.cos(angle) * force * 1.0;
                            pushScale = 1.0 - force * 0.35;
                        }
                    }
                }

                dummy.position.set(px, py, pz);
                dummy.rotation.set(sway * 0.4 + bendX, yaw, sway + bendZ, 'YXZ');
                dummy.scale.set(sxz, sy * pushScale, sxz);
                dummy.updateMatrix();

                this.grassMesh.setMatrixAt(i, dummy.matrix);
            }
            this.grassMesh.instanceMatrix.needsUpdate = true;
        }

        // --- 1b. Wind Tree Leaf Flutter update ---
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

                // Flutter rotation offset in wind
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

                const limit = 120.0;
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

        // --- 5. Animate Project Showcase Portal Screen (Swirl & Orbiting Debris) ---
        if (this.portalGroup) {
            if (this.portalCore) {
                this.portalCore.rotation.z = time * 0.8;
            }
            if (this.portalInnerCore) {
                this.portalInnerCore.rotation.z = -time * 1.6;
            }
            if (this.portalDebris) {
                this.portalDebris.forEach(d => {
                    d.angle += d.speed * delta;
                    d.mesh.position.x = Math.cos(d.angle) * d.radius;
                    d.mesh.position.z = Math.sin(d.angle) * d.radius;
                    d.mesh.position.y = d.yOffset + Math.sin(time * 2.0 + d.angle) * 0.15;
                    d.mesh.rotation.x += delta;
                    d.mesh.rotation.y += delta * 0.5;
                });
            }
        }
    }
}
