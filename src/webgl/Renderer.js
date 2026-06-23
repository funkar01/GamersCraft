import * as THREE from 'three';

export class WebGLRendererManager {
    constructor(canvasContainerId) {
        this.container = document.getElementById(canvasContainerId);
        if (!this.container) return;

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.activeCartridge = null;
        this.cartridges = {};
        this.companion = null;
        
        this.mouse = new THREE.Vector2(0, 0);
        this.targetMouse = new THREE.Vector2(0, 0);
        this.clock = new THREE.Clock();
        
        this.init();
    }

    init() {
        // Setup Scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x0a0a0c, 0.015);

        // Setup Camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 0, 30);

        // Setup WebGLRenderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x0a0a0c, 1);
        
        // Shadow mapping for planet mode
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        this.container.appendChild(this.renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
        dirLight.position.set(10, 20, 15);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        this.scene.add(dirLight);

        const pointLight = new THREE.PointLight(0xff0055, 1.5, 50);
        pointLight.position.set(-10, -10, 10);
        this.scene.add(pointLight);

        // Listeners
        window.addEventListener('resize', () => this.handleResize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));

        // Start Loop
        this.tick();
    }

    handleResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    handleMouseMove(e) {
        // Normalize mouse coordinates (-1 to 1)
        this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }

    registerCartridge(name, cartridgeInstance) {
        this.cartridges[name] = cartridgeInstance;
        // Bind manager context
        cartridgeInstance.manager = this;
    }

    registerCompanion(companionInstance) {
        this.companion = companionInstance;
        this.companion.manager = this;
        this.scene.add(this.companion.mesh);
    }

    async switchCartridge(name) {
        if (!this.cartridges[name]) return;
        
        const oldCartridge = this.activeCartridge;
        const newCartridge = this.cartridges[name];
        
        // Transition animation out
        if (oldCartridge) {
            await oldCartridge.transitionOut();
            this.scene.remove(oldCartridge.group);
        }
        
        this.activeCartridge = newCartridge;
        this.scene.add(newCartridge.group);
        
        // Reset camera positions depending on mode
        if (name === 'planet') {
            this.camera.position.set(0, 15, 25);
            this.camera.lookAt(0, 0, 0);
        } else {
            this.camera.position.set(0, 0, 30);
            this.camera.lookAt(0, 0, 0);
        }
        
        await newCartridge.transitionIn();
    }

    tick() {
        requestAnimationFrame(() => this.tick());

        const delta = this.clock.getDelta();
        const time = this.clock.getElapsedTime();

        // Smooth mouse movement (lerp)
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.1;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.1;

        // Update active cartridge
        if (this.activeCartridge) {
            this.activeCartridge.update(delta, time, this.mouse);
        }

        // Update companion
        if (this.companion) {
            this.companion.update(delta, time, this.mouse);
        }

        this.renderer.render(this.scene, this.camera);
    }
}
