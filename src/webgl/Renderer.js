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
        this.shootingStars = [];
        this.aurora1 = null;
        this.aurora2 = null;

        // Lighting Multiplier settings
        this.lightMultiplier = 1.0;
        this.warmSun = null;
        this.coolSun = null;
        this.moonLight = null;
        this.hemiLight = null;

        // Camera Follow helpers
        this.currentLookTarget = new THREE.Vector3(0, 0.8, 0);
        
        // Input state passed from main.js
        this.keys = {};

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
        this.warmSun = warmSun;

        // 4c. Sun 2: Cool Purple Star (rim fill light, 10X intensity!)
        const coolSun = new THREE.DirectionalLight(0x7b2cbf, 14.0); 
        coolSun.position.set(-30, 25, 20); // positioned front/left
        this.scene.add(coolSun);
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

        // --- 6. Atmospheric Assets & Celestial Bodies ---
        this.createStarfield();
        this.createSkyIslands();
        this.createCelestialSky();
        this.createAurora();
        this.createClouds();

        // --- 7. Resize Listener ---
        window.addEventListener('resize', () => this.handleResize());

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

        // --- 3. Glowing Yellow Sun (Right) ---
        const sun2Geom = new THREE.SphereGeometry(3.5, 16, 16);
        const sun2Mat = new THREE.MeshBasicMaterial({ color: 0xffb700 });
        const sun2 = new THREE.Mesh(sun2Geom, sun2Mat);
        sun2.position.set(22, 16, 65);
        this.scene.add(sun2);
        
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
            color: 0xd6e4f0,
            roughness: 0.75,
            metalness: 0.1,
            transparent: true,
            opacity: 0.72,
            flatShading: true
        });
        
        // Spawn 6 drifting low-poly cloud puff clusters
        for (let i = 0; i < 6; i++) {
            const cloudGroup = new THREE.Group();
            
            // Build 4 to 6 overlapping flat spheroids per cloud
            const puffs = 4 + Math.floor(Math.random() * 3);
            for (let j = 0; j < puffs; j++) {
                const puffGeom = new THREE.DodecahedronGeometry(1.6 + Math.random() * 1.4, 1);
                const puff = new THREE.Mesh(puffGeom, cloudMat);
                puff.scale.set(1.6, 0.75, 1.0); // flat cartoon layout
                puff.position.set(
                    (j - puffs/2) * 1.8,
                    (Math.random() - 0.5) * 0.4,
                    (Math.random() - 0.5) * 1.0
                );
                puff.castShadow = true;
                cloudGroup.add(puff);
            }
            
            const cx = (Math.random() - 0.5) * 80;
            const cy = 20 + Math.random() * 10; // high float altitude
            const cz = -20 + Math.random() * 80; // place in viewing frustum
            
            cloudGroup.position.set(cx, cy, cz);
            this.scene.add(cloudGroup);
            
            this.clouds.push({
                mesh: cloudGroup,
                speed: 0.4 + Math.random() * 0.7
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
                // wrap around boundaries
                if (cloud.mesh.position.x > 60) {
                    cloud.mesh.position.x = -60;
                }
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
        if (this.warmSun) this.warmSun.intensity = 22.0 * this.lightMultiplier;
        if (this.coolSun) this.coolSun.intensity = 14.0 * this.lightMultiplier;
        if (this.moonLight) this.moonLight.intensity = 8.5 * this.lightMultiplier;
        if (this.hemiLight) this.hemiLight.intensity = 0.95 * this.lightMultiplier;
    }
}
