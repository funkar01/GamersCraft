import * as THREE from 'three';
import { Drone } from './Drone.js';
import { XenoWorld } from './XenoWorld.js';
import { audio } from '../ui/AudioEngine.js';

export class WebGLRendererManager {
    constructor(canvasContainerId) {
        this.container = document.getElementById(canvasContainerId);
        if (!this.container) return;

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.clock = new THREE.Clock();

        // Game Entities
        this.drone = null;
        this.playground = null;
        this.droneGlow = null; // Under-glow PointLight
        
        // Atmosphere Assets
        this.starfield = null;
        this.skyIslands = [];
        this.clouds = [];
        this.birds = [];
        this.shootingStars = [];
        this.aurora1 = null;
        this.aurora2 = null;

        // Lighting Multiplier and Presets settings
        this.lightMultiplier = 1.0;
        this.currentPreset = 'afternoon';
        this.warmSun = null;
        this.coolSun = null;
        this.moonLight = null;
        this.hemiLight = null;
        this.starfieldMaterial = null;
        this.giantMoon = null;
        this.sun1 = null;
        this.sun2 = null;
        this.sun1Glow = null;
        this.sun2Glow = null;

        // Camera Follow helpers
        this.currentLookTarget = new THREE.Vector3(0, 0.8, 0);
        
        // Input state passed from main.js
        this.keys = {};

        // Pause/Resume state for dual-mode support
        this.isPaused = false;

        this.init();
    }

    init() {
        // --- 1. Scene Setup ---
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0c1616); // Dark slate-teal color matching new landscape style
        this.scene.fog = new THREE.FogExp2(0x0c1616, 0.02); // Cohesive atmospheric fog

        // --- 2. Camera Setup ---
        this.camera = new THREE.PerspectiveCamera(
            50,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 8, -12);

        // --- 3. Renderer Setup ---
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Shadow configuration
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        this.container.appendChild(this.renderer.domElement);

        // --- 4. Ambient & Dual Sunlight System ---
        // 4a. HemisphereLight: provides soft sky purple to ground dark violet gradient
        const hemiLight = new THREE.HemisphereLight(0x9d4edd, 0x140e28, 0.95); 
        this.scene.add(hemiLight);
        this.hemiLight = hemiLight;

        // 4b. Sun 1: Warm Golden Sun (casts shadow, 10X intensity!)
        const warmSun = new THREE.DirectionalLight(0xffdf80, 22.0); 
        warmSun.position.set(30, 45, 30); // positioned forward/right
        warmSun.castShadow = true;
        warmSun.shadow.mapSize.width = 2048;
        warmSun.shadow.mapSize.height = 2048;
        warmSun.shadow.camera.near = 0.5;
        warmSun.shadow.camera.far = 150;
        
        const d = 50;
        warmSun.shadow.camera.left = -d;
        warmSun.shadow.camera.right = d;
        warmSun.shadow.camera.top = d;
        warmSun.shadow.camera.bottom = -d;
        warmSun.shadow.bias = -0.001;
        this.scene.add(warmSun);
        this.scene.add(warmSun.target);
        this.warmSun = warmSun;

        // 4c. Sun 2: Cool Purple Star (rim fill light, 10X intensity!)
        const coolSun = new THREE.DirectionalLight(0x7b2cbf, 14.0); 
        coolSun.position.set(-30, 25, 20); // positioned front/left
        this.scene.add(coolSun);
        this.scene.add(coolSun.target);
        this.coolSun = coolSun;

        // 4d. Moon 1: Purple/Indigo Moon DirectionalLight (casts nighttime shadows, 10X intensity!)
        const moonLight = new THREE.DirectionalLight(0x9b5de5, 8.5);
        moonLight.position.set(5, 33, 75); // Positioned at Moon's forward coordinates
        moonLight.castShadow = true;
        moonLight.shadow.mapSize.width = 1024;
        moonLight.shadow.mapSize.height = 1024;
        moonLight.shadow.camera.near = 1.0;
        moonLight.shadow.camera.far = 200;
        moonLight.shadow.camera.left = -60;
        moonLight.shadow.camera.right = 60;
        moonLight.shadow.camera.top = 60;
        moonLight.shadow.camera.bottom = -60;
        moonLight.shadow.bias = -0.002;
        this.scene.add(moonLight);
        this.scene.add(moonLight.target);
        this.moonLight = moonLight;

        // --- 5. Spawn Entities ---
        // 5a. XenoWorld Map Ground
        this.playground = new XenoWorld();
        this.scene.add(this.playground.group);

        // 5b. Hover Drone
        this.drone = new Drone();
        this.scene.add(this.drone.mesh);

        // 5c. Drone Under-Glow PointLight (Upgraded power/range for 2X scale)
        this.droneGlow = new THREE.PointLight(0x00f0ff, 6.0, 18, 1.5);
        this.droneGlow.castShadow = true;
        this.droneGlow.shadow.bias = -0.002;
        this.scene.add(this.droneGlow);

        // Default to Cyan Dart Jet chassis at startup
        this.setDroneType('cyan-dart');

        // --- 6. Atmospheric Assets & Celestial Bodies ---
        this.createStarfield();
        this.createSkyIslands();
        this.createCelestialSky();
        this.createAurora();
        this.createClouds();
        this.createBirds();

        // --- 7. Resize Listener ---
        window.addEventListener('resize', () => this.handleResize());

        // Initialize lighting preset
        this.setLightingPreset('afternoon');

        // --- 8. Start Loop ---
        this.tick();
    }

    createStarfield() {
        this.starfield = new THREE.Group();
        
        const starCount = 450; 
        const geom = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);

        const color1 = new THREE.Color(0xffffff); 
        const color2 = new THREE.Color(0x00f0ff); 
        const color3 = new THREE.Color(0xff00ff); // Purple/violet stars

        for (let i = 0; i < starCount; i++) {
            const radius = 160 + Math.random() * 60;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2.0 * Math.random() - 1.0);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = Math.abs(radius * Math.sin(phi) * Math.sin(theta)) + 15;
            positions[i * 3 + 2] = radius * Math.cos(phi);

            let starColor = color1;
            const rand = Math.random();
            if (rand > 0.75) {
                starColor = color2;
            } else if (rand < 0.15) {
                starColor = color3;
            }

            colors[i * 3] = starColor.r;
            colors[i * 3 + 1] = starColor.g;
            colors[i * 3 + 2] = starColor.b;
        }

        geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 1.4,
            vertexColors: true,
            transparent: true,
            opacity: 0.85,
            sizeAttenuation: true
        });
        this.starfieldMaterial = mat;

        const starPoints = new THREE.Points(geom, mat);
        this.starfield.add(starPoints);

        // Add Constellations basic lines
        const constLineMat = new THREE.LineBasicMaterial({
            color: 0x00f0ff,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });

        // Constellation 1: The Dipper
        const dipperPoints = [
            new THREE.Vector3(-15, 38, 90),
            new THREE.Vector3(-9, 40, 90),
            new THREE.Vector3(-3, 37, 90),
            new THREE.Vector3(1, 33, 90),
            new THREE.Vector3(7, 33, 90),
            new THREE.Vector3(5, 27, 90),
            new THREE.Vector3(-1, 27, 90),
            new THREE.Vector3(1, 33, 90) 
        ];
        const dipperGeom = new THREE.BufferGeometry().setFromPoints(dipperPoints);
        const dipperLine = new THREE.Line(dipperGeom, constLineMat);
        this.starfield.add(dipperLine);

        // Constellation 2: Cassiopeia (W-shape)
        const wPoints = [
            new THREE.Vector3(-35, 42, 85),
            new THREE.Vector3(-30, 46, 85),
            new THREE.Vector3(-25, 40, 85),
            new THREE.Vector3(-20, 48, 85),
            new THREE.Vector3(-14, 43, 85)
        ];
        const wGeom = new THREE.BufferGeometry().setFromPoints(wPoints);
        const wLine = new THREE.Line(wGeom, constLineMat);
        this.starfield.add(wLine);

        // Constellation 3: Orion/Bow shape
        const orionPoints = [
            new THREE.Vector3(20, 44, 88),
            new THREE.Vector3(26, 46, 88),
            new THREE.Vector3(24, 38, 88),
            new THREE.Vector3(28, 30, 88),
            new THREE.Vector3(21, 28, 88),
            new THREE.Vector3(24, 38, 88), 
            new THREE.Vector3(14, 39, 88)  
        ];
        const orionGeom = new THREE.BufferGeometry().setFromPoints(orionPoints);
        const orionLine = new THREE.Line(orionGeom, constLineMat);
        this.starfield.add(orionLine);

        this.scene.add(this.starfield);
    }

    createSkyIslands() {
        const islandCount = 4;
        const islandMat = new THREE.MeshStandardMaterial({
            color: 0x140e28, // Deep violet rock matching sky
            roughness: 0.9,
            metalness: 0.1,
            flatShading: true
        });
        const crystalMat = new THREE.MeshStandardMaterial({
            color: 0x00f0ff,
            emissive: 0x00f0ff,
            emissiveIntensity: 1.2,
            flatShading: true
        });

        const coords = [
            { x: -35, y: 22, z: -25, scale: 1.4 },
            { x: 32, y: 26, z: -35, scale: 1.6 },
            { x: -28, y: 28, z: 30, scale: 1.2 },
            { x: 38, y: 24, z: 25, scale: 1.5 }
        ];

        coords.forEach((c, idx) => {
            const island = new THREE.Group();
            
            const rockGeom = new THREE.ConeGeometry(2.5, 3.5, 5);
            rockGeom.rotateX(Math.PI);
            const rock = new THREE.Mesh(rockGeom, islandMat);
            rock.castShadow = true;
            rock.receiveShadow = true;
            island.add(rock);

            const capGeom = new THREE.CylinderGeometry(2.6, 2.5, 0.4, 5);
            const cap = new THREE.Mesh(capGeom, islandMat);
            cap.position.y = 1.75;
            cap.castShadow = true;
            island.add(cap);

            const cryGeom = new THREE.DodecahedronGeometry(0.5, 0);
            const crystal = new THREE.Mesh(cryGeom, crystalMat);
            crystal.position.set(0.6, 2.2, 0.4);
            island.add(crystal);

            const crystal2 = new THREE.Mesh(cryGeom, crystalMat);
            crystal2.scale.set(0.6, 0.6, 0.6);
            crystal2.position.set(-0.7, 2.1, -0.6);
            island.add(crystal2);

            island.position.set(c.x, c.y, c.z);
            island.scale.set(c.scale, c.scale, c.scale);
            
            this.scene.add(island);
            this.skyIslands.push({ mesh: island, speed: 0.05 + idx * 0.02, offset: idx });
        });
    }

    createCelestialSky() {
        // --- 1. Giant Purple Moon ---
        const moonGeom = new THREE.SphereGeometry(22, 32, 32);
        const moonMat = new THREE.MeshBasicMaterial({
            color: 0x5a189a,
            transparent: true,
            opacity: 0.6 // semi-translucent looming planet
        });
        const moon = new THREE.Mesh(moonGeom, moonMat);
        moon.position.set(5, 24, 75); // Suspended in front of spawn view
        this.scene.add(moon);
        this.giantMoon = moon;

        // Giant Moon glowing outer corona/halo
        const moonHaloGeom = new THREE.SphereGeometry(24.5, 16, 16);
        const moonHaloMat = new THREE.MeshBasicMaterial({
            color: 0x7b2cbf,
            transparent: true,
            opacity: 0.18,
            side: THREE.BackSide
        });
        const moonHalo = new THREE.Mesh(moonHaloGeom, moonHaloMat);
        moon.add(moonHalo);

        // --- 2. Glowing White Sun (Left) ---
        const sun1Geom = new THREE.SphereGeometry(5.0, 16, 16);
        const sun1Mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sun1 = new THREE.Mesh(sun1Geom, sun1Mat);
        sun1.position.set(-18, 32, 70);
        this.scene.add(sun1);
        this.sun1 = sun1;
        
        // Sun 1 white/cyan corona glow
        const sun1HaloGeom = new THREE.SphereGeometry(6.6, 16, 16);
        const sun1HaloMat = new THREE.MeshBasicMaterial({
            color: 0xe0f7fa,
            transparent: true,
            opacity: 0.28,
            side: THREE.BackSide
        });
        const sun1Halo = new THREE.Mesh(sun1HaloGeom, sun1HaloMat);
        sun1.add(sun1Halo);

        // Ambient white halo light
        const sun1Glow = new THREE.PointLight(0x00f0ff, 4.0, 60, 1.2);
        sun1Glow.position.copy(sun1.position);
        this.scene.add(sun1Glow);
        this.sun1Glow = sun1Glow;

        // --- 3. Glowing Yellow Sun (Right) ---
        const sun2Geom = new THREE.SphereGeometry(3.5, 16, 16);
        const sun2Mat = new THREE.MeshBasicMaterial({ color: 0xffb700 });
        const sun2 = new THREE.Mesh(sun2Geom, sun2Mat);
        sun2.position.set(22, 16, 65);
        this.scene.add(sun2);
        this.sun2 = sun2;
        
        // Sun 2 warm golden corona glow
        const sun2HaloGeom = new THREE.SphereGeometry(4.8, 16, 16);
        const sun2HaloMat = new THREE.MeshBasicMaterial({
            color: 0xffe082,
            transparent: true,
            opacity: 0.32,
            side: THREE.BackSide
        });
        const sun2Halo = new THREE.Mesh(sun2HaloGeom, sun2HaloMat);
        sun2.add(sun2Halo);

        // Ambient golden warm halo light
        const sun2Glow = new THREE.PointLight(0xffb700, 3.0, 50, 1.2);
        sun2Glow.position.copy(sun2.position);
        this.scene.add(sun2Glow);
        this.sun2Glow = sun2Glow;
    }

    createAurora() {
        // Aurora 1 (Vibrant Emerald/Green Curtain)
        const geom1 = new THREE.PlaneGeometry(120, 22, 60, 1);
        const mat1 = new THREE.MeshBasicMaterial({
            color: 0x39ff14,
            transparent: true,
            opacity: 0.26,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.aurora1 = new THREE.Mesh(geom1, mat1);
        this.aurora1.position.set(0, 26, 60);
        this.scene.add(this.aurora1);

        // Aurora 2 (Mystic Violet Curtain)
        const geom2 = new THREE.PlaneGeometry(120, 18, 60, 1);
        const mat2 = new THREE.MeshBasicMaterial({
            color: 0x8a2be2,
            transparent: true,
            opacity: 0.22,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.aurora2 = new THREE.Mesh(geom2, mat2);
        this.aurora2.position.set(0, 30, 64);
        this.scene.add(this.aurora2);
    }

    createClouds() {
        this.clouds = [];
        const cloudMat = new THREE.MeshStandardMaterial({
            color: 0xffffff, // Bright white clouds
            roughness: 0.9,
            metalness: 0.0,
            transparent: true,
            opacity: 0.92,
            flatShading: true
        });
        
        // Spawn 14 drifting low-poly cloud puff clusters for full sky coverage
        for (let i = 0; i < 14; i++) {
            const cloudGroup = new THREE.Group();
            
            // Build 4 to 6 overlapping flat spheroids per cloud
            const puffs = 4 + Math.floor(Math.random() * 3);
            for (let j = 0; j < puffs; j++) {
                const puffGeom = new THREE.DodecahedronGeometry(1.6 + Math.random() * 1.4, 1);
                const puff = new THREE.Mesh(puffGeom, cloudMat);
                puff.scale.set(1.6, 0.75, 1.0); // flat cartoon layout
                puff.position.set(
                    (j - puffs / 2) * 1.8,
                    (Math.random() - 0.5) * 0.4,
                    (Math.random() - 0.5) * 1.0
                );
                puff.castShadow = true;
                cloudGroup.add(puff);
            }
            
            // Wider horizontal, height, and depth dispersion
            const cx = (Math.random() - 0.5) * 160;
            const cy = 22 + Math.random() * 12; // high float altitude
            const cz = -60 + Math.random() * 140; // place in viewing frustum
            
            cloudGroup.position.set(cx, cy, cz);
            this.scene.add(cloudGroup);
            
            this.clouds.push({
                mesh: cloudGroup,
                speed: 0.6 + Math.random() * 0.9
            });
        }
    }

    createBirds() {
        this.birds = [];
        
        // Low-poly bird material
        const birdMat = new THREE.MeshStandardMaterial({
            color: 0x4f5d75, // slate-grey bird feathers
            roughness: 0.7,
            metalness: 0.1,
            flatShading: true,
            side: THREE.DoubleSide
        });

        // Spawn 7 flying birds scattered in the sky
        for (let i = 0; i < 7; i++) {
            const birdGroup = new THREE.Group();
            
            // Bird body: narrow cone pointing forward (+Z in local coords)
            const bodyGeom = new THREE.ConeGeometry(0.12, 0.5, 4);
            bodyGeom.rotateX(Math.PI / 2); // align forward along Z axis
            const body = new THREE.Mesh(bodyGeom, birdMat);
            body.castShadow = true;
            birdGroup.add(body);
            
            // Left wing with offset pivot
            const leftWingGroup = new THREE.Group();
            const leftWingMesh = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.015, 0.15), birdMat);
            leftWingMesh.position.x = -0.275; // pivot joint offset
            leftWingGroup.add(leftWingMesh);
            leftWingGroup.position.set(-0.06, 0, 0);
            birdGroup.add(leftWingGroup);
            
            // Right wing with offset pivot
            const rightWingGroup = new THREE.Group();
            const rightWingMesh = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.015, 0.15), birdMat);
            rightWingMesh.position.x = 0.275; // pivot joint offset
            rightWingGroup.add(rightWingMesh);
            rightWingGroup.position.set(0.06, 0, 0);
            birdGroup.add(rightWingGroup);
            
            // Random sky coordinates
            const bx = (Math.random() - 0.5) * 140;
            const by = 13 + Math.random() * 9;
            const bz = -40 + Math.random() * 110;
            birdGroup.position.set(bx, by, bz);
            
            // Speed and heading direction angle
            const speed = 4.0 + Math.random() * 3.5;
            const angle = Math.random() * Math.PI * 2;
            const velocity = new THREE.Vector3(Math.cos(angle) * speed, 0, Math.sin(angle) * speed);
            
            this.scene.add(birdGroup);
            
            this.birds.push({
                group: birdGroup,
                leftWing: leftWingGroup,
                rightWing: rightWingGroup,
                velocity: velocity,
                flapSpeed: 10 + Math.random() * 6,
                flapOffset: Math.random() * Math.PI * 2
            });
        }
    }

    spawnShootingStar() {
        const starGeom = new THREE.CylinderGeometry(0.01, 0.06, 4.0, 6);
        starGeom.rotateZ(Math.PI / 4); // Angle pointing down/right
        
        const colors = [0xffffff, 0xff00ff, 0x00ffff, 0xffea00];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        const starMat = new THREE.MeshBasicMaterial({
            color: randomColor,
            transparent: true,
            opacity: 0.9
        });
        
        const mesh = new THREE.Mesh(starGeom, starMat);
        
        // Spawn high in the sky in front of player
        const sx = -40 + Math.random() * 70;
        const sy = 24 + Math.random() * 10;
        const sz = 30 + Math.random() * 50;
        mesh.position.set(sx, sy, sz);
        
        this.scene.add(mesh);
        
        // Velocity vector shooting down and right
        const speed = 25.0 + Math.random() * 15.0;
        const velocity = new THREE.Vector3(speed * 0.7, -speed * 0.7, -speed * 0.2); 
        
        this.shootingStars.push({ mesh, material: starMat, velocity });
    }

    handleResize() {
        if (!this.container) return;
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    tick() {
        if (this.isPaused) return;

        requestAnimationFrame(() => this.tick());

        const delta = Math.min(this.clock.getDelta(), 0.1); 
        const time = this.clock.getElapsedTime();

        // Update hover drone
        if (this.drone) {
            this.drone.update(delta, this.keys, this.playground, time);
            
            // Sync dynamic flight hover sound
            const velocityRatio = Math.abs(this.drone.velocity) / this.drone.maxSpeed;
            audio.updateDroneSound(velocityRatio);

            // Sync dynamic under-glow thruster PointLight directly to drone positions
            if (this.droneGlow) {
                this.droneGlow.position.set(
                    this.drone.position.x,
                    this.drone.position.y - 0.70,
                    this.drone.position.z
                );
            }

            // Update directional lights to follow drone position (stabilized with shadow map texel-snapping to eliminate shimmering/jitter)
            if (this.warmSun) {
                const lightOffset = new THREE.Vector3(30, 45, 30);
                const lightDir = lightOffset.clone().normalize();
                
                const right = new THREE.Vector3(1, 0, 0).cross(lightDir).normalize();
                const up = lightDir.clone().cross(right).normalize();
                
                const x = this.drone.position.dot(right);
                const y = this.drone.position.dot(up);
                
                const texelSize = 100 / 2048; // shadow camera width = 100, map size = 2048
                const snappedX = Math.round(x / texelSize) * texelSize;
                const snappedY = Math.round(y / texelSize) * texelSize;
                
                const stabilizedCenter = new THREE.Vector3()
                    .addScaledVector(right, snappedX)
                    .addScaledVector(up, snappedY);
                
                this.warmSun.position.copy(stabilizedCenter).add(lightOffset);
                this.warmSun.target.position.copy(stabilizedCenter);
                this.warmSun.target.updateMatrixWorld();
            }
            if (this.coolSun) {
                this.coolSun.position.set(this.drone.position.x - 30, this.drone.position.y + 25, this.drone.position.z + 20);
                this.coolSun.target.position.copy(this.drone.position);
                this.coolSun.target.updateMatrixWorld();
            }
            if (this.moonLight) {
                const lightOffset = new THREE.Vector3(5, 33, 75);
                const lightDir = lightOffset.clone().normalize();
                
                const right = new THREE.Vector3(1, 0, 0).cross(lightDir).normalize();
                const up = lightDir.clone().cross(right).normalize();
                
                const x = this.drone.position.dot(right);
                const y = this.drone.position.dot(up);
                
                const texelSize = 120 / 1024; // shadow camera width = 120, map size = 1024
                const snappedX = Math.round(x / texelSize) * texelSize;
                const snappedY = Math.round(y / texelSize) * texelSize;
                
                const stabilizedCenter = new THREE.Vector3()
                    .addScaledVector(right, snappedX)
                    .addScaledVector(up, snappedY);
                
                this.moonLight.position.copy(stabilizedCenter).add(lightOffset);
                this.moonLight.target.position.copy(stabilizedCenter);
                this.moonLight.target.updateMatrixWorld();
            }
        }

        // Update playground dynamic obstacles/shatters
        if (this.playground) {
            this.playground.update(delta, time, this.drone);
        }

        // Rotate Starfield Slowly
        if (this.starfield) {
            this.starfield.rotation.y = time * 0.005;
        }

        // Floating Sky Islands animations
        this.skyIslands.forEach(isl => {
            isl.mesh.rotation.y = time * isl.speed;
            isl.mesh.position.y += Math.sin(time * 0.8 + isl.offset) * 0.006;
        });

        // Update clouds drifting
        if (this.clouds) {
            this.clouds.forEach(cloud => {
                cloud.mesh.position.x += cloud.speed * delta;
                // wrap around boundaries (wider dispersion wrap)
                if (cloud.mesh.position.x > 90) {
                    cloud.mesh.position.x = -90;
                }
            });
        }

        // Update birds flying and flapping wings
        if (this.birds) {
            this.birds.forEach(bird => {
                // Fly bird forward
                bird.group.position.addScaledVector(bird.velocity, delta);
                
                // Align yaw rotation to flight vector
                bird.group.rotation.y = Math.atan2(bird.velocity.x, bird.velocity.z);
                
                // Flapping wings rotation pivots
                const flap = Math.sin(time * bird.flapSpeed + bird.flapOffset) * 0.6;
                bird.leftWing.rotation.z = flap;
                bird.rightWing.rotation.z = -flap;
                
                // wrap boundaries
                if (bird.group.position.x > 100) bird.group.position.x = -100;
                if (bird.group.position.x < -100) bird.group.position.x = 100;
                if (bird.group.position.z > 100) bird.group.position.z = -100;
                if (bird.group.position.z < -100) bird.group.position.z = 100;
            });
        }

        // Animate Aurora waving ribbon curtains
        if (this.aurora1) {
            const pos = this.aurora1.geometry.attributes.position;
            for (let i = 0; i < pos.count; i++) {
                const x = pos.getX(i);
                const z = Math.sin(time * 0.7 + x * 0.08) * 3.5 + Math.cos(time * 0.35 + x * 0.16) * 1.5;
                pos.setZ(i, z);
            }
            pos.needsUpdate = true;
        }
        if (this.aurora2) {
            const pos = this.aurora2.geometry.attributes.position;
            for (let i = 0; i < pos.count; i++) {
                const x = pos.getX(i);
                const z = Math.sin(time * 0.5 + x * 0.07 + 1.2) * 3.0 + Math.cos(time * 0.25 + x * 0.13) * 1.2;
                pos.setZ(i, z);
            }
            pos.needsUpdate = true;
        }

        // Spawning shooting stars randomly
        if (Math.random() < 0.005 && this.shootingStars.length < 3) {
            this.spawnShootingStar();
        }

        // Updating shooting stars
        if (this.shootingStars) {
            for (let i = this.shootingStars.length - 1; i >= 0; i--) {
                const ss = this.shootingStars[i];
                ss.mesh.position.addScaledVector(ss.velocity, delta);
                ss.material.opacity -= delta * 0.95; 
                
                if (ss.material.opacity <= 0 || ss.mesh.position.y < 1.0) {
                    this.scene.remove(ss.mesh);
                    ss.mesh.geometry.dispose();
                    ss.material.dispose();
                    this.shootingStars.splice(i, 1);
                }
            }
        }

        // Camera Spring-Follow Tracing
        if (this.drone) {
            const offset = new THREE.Vector3(0, 3.2, -11.0); // lowered slightly for better sky view
            offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.drone.rotationY);
            
            const targetCamPos = this.drone.position.clone().add(offset);
            this.camera.position.lerp(targetCamPos, 0.08);

            const lookTarget = this.drone.position.clone();
            const lookAhead = new THREE.Vector3(0, 1.0, 3.5); // tilted upward slightly to capture the sky
            lookAhead.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.drone.rotationY);
            lookTarget.add(lookAhead);

            this.currentLookTarget.lerp(lookTarget, 0.1);
            this.camera.lookAt(this.currentLookTarget);
        }

        this.renderer.render(this.scene, this.camera);
    }

    setDroneType(type) {
        if (!this.drone) return;
        this.drone.rebuildModel(type);
        
        // Update under-glow light color matching the drone's model signature
        let glowColor = 0x00f0ff; // Default cyan
        if (type === 'swift-z') {
            glowColor = 0x39ff14; // Neon green
        } else if (type === 'interceptor-gl') {
            glowColor = 0x00ff66; // Bright green
        } else if (type === 'xeno-cargo') {
            glowColor = 0xffa500; // Orange/amber
        } else if (type === 'valkyrie-x') {
            glowColor = 0xff00ff; // Hot pink/magenta
        } else if (type === 'solar-wing') {
            glowColor = 0xff7a00; // Solar orange
        } else if (type === 'cyan-dart') {
            glowColor = 0x00f3ff; // Cyan
        } else if (type === 'sentinel-v') {
            glowColor = 0x0066ff; // Cool blue
        }
        
        if (this.droneGlow) {
            this.droneGlow.color.setHex(glowColor);
        }
    }

    setLightMultiplier(value) {
        this.lightMultiplier = value;
        if (this.currentPreset) {
            this.setLightingPreset(this.currentPreset);
        }
    }

    setLightingPreset(preset) {
        this.currentPreset = preset;
        
        const presets = {
            morning: {
                bg: 0xffb703, // bright sunrise gold-yellow
                fog: 0xffb703,
                fogDensity: 0.007,
                hemiSky: 0xffcc00,
                hemiGround: 0x556b2f,
                hemiIntensity: 0.9,
                warmSunColor: 0xff6200,
                warmSunIntensity: 20.0,
                coolSunColor: 0x7b1fa2,
                coolSunIntensity: 6.0,
                moonLightColor: 0x9b5de5,
                moonLightIntensity: 0.0,
                starfieldOpacity: 0.0,
                auroraOpacity1: 0.0,
                auroraOpacity2: 0.0,
                sunsScale: 0.6,
                moonScale: 0.0
            },
            afternoon: {
                bg: 0x87CEEB, // bright sky blue background
                fog: 0xc6e2ff, // soft day atmospheric depth fog
                fogDensity: 0.005, // very thin fog to see distant green mountains and trees
                hemiSky: 0xffffff, // pure daylight hemi sky reflection
                hemiGround: 0xb4e197, // soft green bounce
                hemiIntensity: 1.25,
                warmSunColor: 0xfff8e7, // warm sunlight
                warmSunIntensity: 28.0,
                coolSunColor: 0xe0f2fe, // cool sky reflections
                coolSunIntensity: 8.0,
                moonLightColor: 0xffffff,
                moonLightIntensity: 0.0,
                starfieldOpacity: 0.0,
                auroraOpacity1: 0.0,
                auroraOpacity2: 0.0,
                sunsScale: 1.0,
                moonScale: 0.0
            },
            evening: {
                bg: 0xe36414, // deep sunset orange-red
                fog: 0xe36414,
                fogDensity: 0.007,
                hemiSky: 0xff5400,
                hemiGround: 0x3d0066,
                hemiIntensity: 0.9,
                warmSunColor: 0xff5c8a,
                warmSunIntensity: 24.0,
                coolSunColor: 0xffb700,
                coolSunIntensity: 10.0,
                moonLightColor: 0x9b5de5,
                moonLightIntensity: 1.0,
                starfieldOpacity: 0.0,
                auroraOpacity1: 0.0,
                auroraOpacity2: 0.0,
                sunsScale: 0.8,
                moonScale: 0.0
            },
            night: {
                bg: 0x070b19, // deep night sky base
                fog: 0x070b19,
                fogDensity: 0.015,
                hemiSky: 0x0d1b2a,
                hemiGround: 0x011627,
                hemiIntensity: 0.4,
                warmSunColor: 0xffdf80,
                warmSunIntensity: 0.0,
                coolSunColor: 0x7b2cbf,
                coolSunIntensity: 0.0,
                moonLightColor: 0x38bdf8,
                moonLightIntensity: 16.0,
                starfieldOpacity: 0.95,
                auroraOpacity1: 0.45,
                auroraOpacity2: 0.40,
                sunsScale: 0.0,
                moonScale: 1.3
            }
        };

        const config = presets[preset] || presets.afternoon;

        // Transition background and fog
        if (this.scene.background) this.scene.background.setHex(config.bg);
        if (this.scene.fog) {
            this.scene.fog.color.setHex(config.fog);
            this.scene.fog.density = config.fogDensity;
        }

        // Transition HemisphereLight
        if (this.hemiLight) {
            this.hemiLight.color.setHex(config.hemiSky);
            this.hemiLight.groundColor.setHex(config.hemiGround);
            this.hemiLight.intensity = config.hemiIntensity * this.lightMultiplier;
        }

        // Transition Sun 1
        if (this.warmSun) {
            this.warmSun.color.setHex(config.warmSunColor);
            this.warmSun.intensity = config.warmSunIntensity * this.lightMultiplier;
        }
        
        // Transition Sun 2
        if (this.coolSun) {
            this.coolSun.color.setHex(config.coolSunColor);
            this.coolSun.intensity = config.coolSunIntensity * this.lightMultiplier;
        }

        // Transition Moon
        if (this.moonLight) {
            this.moonLight.color.setHex(config.moonLightColor);
            this.moonLight.intensity = config.moonLightIntensity * this.lightMultiplier;
        }

        // Update Starfield opacity
        if (this.starfieldMaterial) {
            this.starfieldMaterial.opacity = config.starfieldOpacity;
        }

        // Update Aurora opacity
        if (this.aurora1) this.aurora1.material.opacity = config.auroraOpacity1;
        if (this.aurora2) this.aurora2.material.opacity = config.auroraOpacity2;

        // Scale and style celestial bodies dynamically
        if (this.sun1) {
            this.sun1.scale.setScalar(config.sunsScale);
            this.sun1.visible = config.sunsScale > 0;
            
            // Re-color sun1 to a large golden-yellow sphere in afternoon
            if (preset === 'afternoon') {
                this.sun1.material.color.setHex(0xffcc00); // Golden Sun
                this.sun1.scale.setScalar(config.sunsScale * 1.5); // make it larger/more majestic!
                if (this.sun1Glow) {
                    this.sun1Glow.color.setHex(0xffaa00);
                    this.sun1Glow.intensity = 5.0;
                }
            } else {
                this.sun1.material.color.setHex(0xffffff); // Default White Sun
                if (this.sun1Glow) {
                    this.sun1Glow.color.setHex(0x00f0ff);
                    this.sun1Glow.intensity = config.sunsScale > 0 ? 4.0 : 0.0;
                }
            }
        }
        
        if (this.sun2) {
            // Hide sun2 (second alien sun) in afternoon for a single golden sun look
            if (preset === 'afternoon') {
                this.sun2.visible = false;
                if (this.sun2Glow) this.sun2Glow.intensity = 0.0;
            } else {
                this.sun2.scale.setScalar(config.sunsScale);
                this.sun2.visible = config.sunsScale > 0;
                if (this.sun2Glow) {
                    this.sun2Glow.intensity = config.sunsScale > 0 ? 3.0 : 0.0;
                }
            }
        }
        
        if (this.giantMoon) {
            this.giantMoon.scale.setScalar(config.moonScale);
            this.giantMoon.visible = config.moonScale > 0;
        }
    }

    setOcclusionCulling(enabled) {
        if (this.playground) {
            this.playground.occlusionCullingEnabled = enabled;
        }
    }

    pause() {
        this.isPaused = true;
        if (audio && typeof audio.updateDroneSound === 'function') {
            audio.updateDroneSound(0);
        }
    }

    resume() {
        if (this.isPaused) {
            this.isPaused = false;
            this.clock.getDelta(); // reset delta step
            requestAnimationFrame(() => this.tick());
        }
    }
}
