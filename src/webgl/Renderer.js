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
        const hemiLight = new THREE.HemisphereLight(0x9d4edd, 0x140e28, 0.85); 
        this.scene.add(hemiLight);

        // 4b. Sun 1: Warm Golden Sun (casts shadow)
        const warmSun = new THREE.DirectionalLight(0xffdf80, 1.5); 
        warmSun.position.set(30, 45, -30); // positioned back/right
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
        this.scene.add(warmSun);

        // 4c. Sun 2: Cool Purple Star (rim fill light)
        const coolSun = new THREE.DirectionalLight(0x7b2cbf, 0.9); 
        coolSun.position.set(-30, 25, 20); // positioned front/left
        this.scene.add(coolSun);

        // --- 5. Spawn Entities ---
        // 5a. XenoWorld Map Ground
        this.playground = new XenoWorld();
        this.scene.add(this.playground.group);

        // 5b. Hover Drone
        this.drone = new Drone();
        this.scene.add(this.drone.mesh);

        // 5c. Drone Under-Glow PointLight
        this.droneGlow = new THREE.PointLight(0x00f0ff, 3.5, 10, 1.8);
        this.droneGlow.castShadow = true;
        this.droneGlow.shadow.bias = -0.002;
        this.scene.add(this.droneGlow);

        // --- 6. Atmospheric Assets & Celestial Bodies ---
        this.createStarfield();
        this.createSkyIslands();
        this.createCelestialSky();

        // --- 7. Resize Listener ---
        window.addEventListener('resize', () => this.handleResize());

        // --- 8. Start Loop ---
        this.tick();
    }

    createStarfield() {
        const starCount = 350;
        const geom = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);

        const color1 = new THREE.Color(0xffffff); 
        const color2 = new THREE.Color(0x00f0ff); 
        const color3 = new THREE.Color(0xff0055); 

        for (let i = 0; i < starCount; i++) {
            const radius = 180 + Math.random() * 80;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2.0 * Math.random() - 1.0);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = Math.abs(radius * Math.sin(phi) * Math.sin(theta)) + 15; // float above ground plane
            positions[i * 3 + 2] = radius * Math.cos(phi);

            let starColor = color1;
            const rand = Math.random();
            if (rand > 0.8) {
                starColor = color2;
            } else if (rand < 0.1) {
                starColor = color3;
            }

            colors[i * 3] = starColor.r;
            colors[i * 3 + 1] = starColor.g;
            colors[i * 3 + 2] = starColor.b;
        }

        geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 1.2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true
        });

        this.starfield = new THREE.Points(geom, mat);
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
        moon.position.set(5, 33, -85); // Suspended far behind the boundary
        this.scene.add(moon);

        // --- 2. Glowing White Sun (Left) ---
        const sun1Geom = new THREE.SphereGeometry(5.0, 16, 16);
        const sun1Mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sun1 = new THREE.Mesh(sun1Geom, sun1Mat);
        sun1.position.set(-18, 41, -80);
        this.scene.add(sun1);
        
        // Ambient white halo light
        const sun1Glow = new THREE.PointLight(0x00f0ff, 4.0, 60, 1.2);
        sun1Glow.position.copy(sun1.position);
        this.scene.add(sun1Glow);

        // --- 3. Glowing Yellow Sun (Right) ---
        const sun2Geom = new THREE.SphereGeometry(3.5, 16, 16);
        const sun2Mat = new THREE.MeshBasicMaterial({ color: 0xffb700 });
        const sun2 = new THREE.Mesh(sun2Geom, sun2Mat);
        sun2.position.set(22, 20, -75);
        this.scene.add(sun2);
        
        // Ambient golden warm halo light
        const sun2Glow = new THREE.PointLight(0xffb700, 3.0, 50, 1.2);
        sun2Glow.position.copy(sun2.position);
        this.scene.add(sun2Glow);
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
                    this.drone.position.y - 0.35,
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

        // Camera Spring-Follow Tracing
        if (this.drone) {
            const offset = new THREE.Vector3(0, 5.2, -9.5);
            offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.drone.rotationY);
            
            const targetCamPos = this.drone.position.clone().add(offset);
            this.camera.position.lerp(targetCamPos, 0.08);

            const lookTarget = this.drone.position.clone();
            const lookAhead = new THREE.Vector3(0, 0.4, 2.5);
            lookAhead.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.drone.rotationY);
            lookTarget.add(lookAhead);

            this.currentLookTarget.lerp(lookTarget, 0.1);
            this.camera.lookAt(this.currentLookTarget);
        }

        this.renderer.render(this.scene, this.camera);
    }
}
