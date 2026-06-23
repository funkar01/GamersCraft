import * as THREE from 'three';
import { Rover } from './Rover.js';
import { Playground } from './Playground.js';

export class WebGLRendererManager {
    constructor(canvasContainerId) {
        this.container = document.getElementById(canvasContainerId);
        if (!this.container) return;

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.clock = new THREE.Clock();

        // Game Entities
        this.rover = null;
        this.playground = null;

        // Camera Follow helpers
        this.currentLookTarget = new THREE.Vector3(0, 0.6, 0);
        
        // Input state passed from main.js
        this.keys = {};

        this.init();
    }

    init() {
        // --- 1. Scene Setup ---
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0c);
        this.scene.fog = new THREE.FogExp2(0x0a0a0c, 0.018);

        // --- 2. Camera Setup ---
        this.camera = new THREE.PerspectiveCamera(
            50,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        );
        
        // Spawn camera slightly behind target
        this.camera.position.set(0, 8, -12);

        // --- 3. Renderer Setup ---
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Setup shadow maps for realistic game feel
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        this.container.appendChild(this.renderer.domElement);

        // --- 4. Lights ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        this.scene.add(ambientLight);

        // Sun light that casts shadows
        const sunLight = new THREE.DirectionalLight(0x00f0ff, 1.5); // Cyan tint
        sunLight.position.set(30, 45, 20);
        sunLight.castShadow = true;
        
        // Soft shadow map resolution
        sunLight.shadow.mapSize.width = 2048;
        sunLight.shadow.mapSize.height = 2048;
        sunLight.shadow.camera.near = 0.5;
        sunLight.shadow.camera.far = 150;
        
        // Orgraphic bounds for directional shadow camera
        const d = 50;
        sunLight.shadow.camera.left = -d;
        sunLight.shadow.camera.right = d;
        sunLight.shadow.camera.top = d;
        sunLight.shadow.camera.bottom = -d;
        
        this.scene.add(sunLight);

        // Warm secondary light
        const fillLight = new THREE.DirectionalLight(0xff0055, 0.6); // Pink tint
        fillLight.position.set(-30, 20, -20);
        this.scene.add(fillLight);

        // --- 5. Spawn Entities ---
        // 5a. Ground Playground Map
        this.playground = new Playground();
        this.scene.add(this.playground.group);

        // 5b. Physics Rover
        this.rover = new Rover();
        this.scene.add(this.rover.mesh);

        // --- 6. Resize Listener ---
        window.addEventListener('resize', () => this.handleResize());

        // --- 7. Start Loop ---
        this.tick();
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

        const delta = Math.min(this.clock.getDelta(), 0.1); // Clamp delta to avoid physics explosion
        const time = this.clock.getElapsedTime();

        // Update physics
        if (this.rover) {
            this.rover.update(delta, this.keys, this.playground);
        }

        // Update playground dynamic obstacles/crates
        if (this.playground) {
            this.playground.update(delta, time, this.rover);
        }

        // --- Camera Spring-Follow Physics Logic ---
        if (this.rover) {
            // Target offset behind the rover heading
            // x: 0, y: 4.8 units above, z: -9 units behind local heading
            const offset = new THREE.Vector3(0, 4.8, -9.0);
            
            // Rotate offset to match rover's current rotation angle
            offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rover.rotationY);
            
            // Ideal camera coordinate target in world space
            const targetCamPos = this.rover.position.clone().add(offset);
            
            // Smoothly interpolate (lerp) camera position
            this.camera.position.lerp(targetCamPos, 0.08);

            // Point camera slightly in front of the rover
            const lookTarget = this.rover.position.clone();
            const lookAhead = new THREE.Vector3(0, 0.5, 2.5);
            lookAhead.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rover.rotationY);
            lookTarget.add(lookAhead);

            // Smoothly lerp lookAt coordinate
            this.currentLookTarget.lerp(lookTarget, 0.1);
            this.camera.lookAt(this.currentLookTarget);
        }

        this.renderer.render(this.scene, this.camera);
    }
}
