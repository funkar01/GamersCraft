import * as THREE from 'three';
import { Drone } from '../webgl/Drone.js';
import { audio } from './AudioEngine.js';

export class LabDroneViewer {
    constructor(containerId = 'lab-drone-canvas') {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.droneGroup = null;
        this.currentDrone = null;
        this.activeType = 'cyan-dart';
        this.animId = null;
        this.isDragging = false;
        this.prevMouseX = 0;
        this.prevMouseY = 0;
        this.autoRotate = true;
        this.wireframeMode = false;

        this.init();
    }

    init() {
        this.scene = new THREE.Scene();

        const width = this.container.clientWidth || 600;
        const height = this.container.clientHeight || 400;

        // Perspective Camera
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        this.camera.position.set(0, 1.0, 3.2);

        // WebGL Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Tech Grid in base
        const gridHelper = new THREE.GridHelper(6, 12, 0x00f0ff, 0x222233);
        gridHelper.position.y = -0.7;
        this.scene.add(gridHelper);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
        this.scene.add(ambientLight);

        const keyLight = new THREE.DirectionalLight(0xffdf80, 2.0);
        keyLight.position.set(4, 5, 3);
        this.scene.add(keyLight);

        const rimLight = new THREE.DirectionalLight(0x00f0ff, 1.8);
        rimLight.position.set(-4, 3, -3);
        this.scene.add(rimLight);

        const fillLight = new THREE.DirectionalLight(0xff0055, 1.0);
        fillLight.position.set(0, -3, 2);
        this.scene.add(fillLight);

        // Drone Group
        this.droneGroup = new THREE.Group();
        this.scene.add(this.droneGroup);

        this.loadDroneModel(this.activeType);
        this.bindEvents();
        this.tick();
    }

    loadDroneModel(type) {
        this.activeType = type;
        if (this.currentDrone) {
            this.droneGroup.remove(this.currentDrone.mesh);
        }

        this.currentDrone = new Drone();
        this.currentDrone.rebuildModel(type);
        this.currentDrone.mesh.scale.set(1.15, 1.15, 1.15);
        this.droneGroup.add(this.currentDrone.mesh);

        // Update active UI cards in the chassis selector
        document.querySelectorAll('.lab-chassis-pill').forEach(btn => {
            if (btn.dataset.drone === type) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    setWireframe(wireframe) {
        this.wireframeMode = wireframe;
        if (!this.currentDrone || !this.currentDrone.mesh) return;
        this.currentDrone.mesh.traverse((child) => {
            if (child.isMesh && child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => m.wireframe = wireframe);
                } else {
                    child.material.wireframe = wireframe;
                }
            }
        });
    }

    bindEvents() {
        // Mouse rotation
        this.container.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.autoRotate = false;
            this.prevMouseX = e.clientX;
            this.prevMouseY = e.clientY;
        });

        window.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            const deltaX = e.clientX - this.prevMouseX;
            const deltaY = e.clientY - this.prevMouseY;
            this.prevMouseX = e.clientX;
            this.prevMouseY = e.clientY;

            this.droneGroup.rotation.y += deltaX * 0.008;
            this.droneGroup.rotation.x += deltaY * 0.008;
            this.droneGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, this.droneGroup.rotation.x));
        });

        window.addEventListener('mouseup', () => {
            this.isDragging = false;
        });

        // Touch controls
        this.container.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                this.isDragging = true;
                this.autoRotate = false;
                this.prevMouseX = e.touches[0].clientX;
                this.prevMouseY = e.touches[0].clientY;
            }
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (!this.isDragging || e.touches.length !== 1) return;
            const deltaX = e.touches[0].clientX - this.prevMouseX;
            const deltaY = e.touches[0].clientY - this.prevMouseY;
            this.prevMouseX = e.touches[0].clientX;
            this.prevMouseY = e.touches[0].clientY;

            this.droneGroup.rotation.y += deltaX * 0.008;
            this.droneGroup.rotation.x += deltaY * 0.008;
            this.droneGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, this.droneGroup.rotation.x));
        }, { passive: true });

        window.addEventListener('touchend', () => {
            this.isDragging = false;
        });

        // Zoom scroll
        this.container.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.camera.position.z += e.deltaY * 0.002;
            this.camera.position.z = Math.max(1.8, Math.min(4.8, this.camera.position.z));
        }, { passive: false });

        // Resize Observer
        this.resizeObserver = new ResizeObserver(() => {
            if (!this.container || !this.camera || !this.renderer) return;
            const width = this.container.clientWidth || 600;
            const height = this.container.clientHeight || 400;
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
        this.resizeObserver.observe(this.container);

        // Bind chassis pills in DOM
        document.querySelectorAll('.lab-chassis-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                const droneType = btn.dataset.drone;
                if (droneType) {
                    audio.playClick();
                    this.loadDroneModel(droneType);
                }
            });
        });

        // Wireframe toggle button
        const wireframeBtn = document.getElementById('lab-wireframe-toggle');
        if (wireframeBtn) {
            wireframeBtn.addEventListener('click', () => {
                audio.playClick();
                this.setWireframe(!this.wireframeMode);
                wireframeBtn.classList.toggle('active', this.wireframeMode);
            });
        }

        // Auto-spin toggle button
        const spinBtn = document.getElementById('lab-spin-toggle');
        if (spinBtn) {
            spinBtn.addEventListener('click', () => {
                audio.playClick();
                this.autoRotate = !this.autoRotate;
                spinBtn.classList.toggle('active', this.autoRotate);
            });
        }
    }

    tick() {
        this.animId = requestAnimationFrame(() => this.tick());

        if (this.autoRotate && !this.isDragging) {
            this.droneGroup.rotation.y += 0.007;
        }

        // Hover bobbing effect
        const time = performance.now() * 0.0015;
        this.droneGroup.position.y = Math.sin(time * 2.0) * 0.06;

        // Thruster flame flicker
        if (this.currentDrone && this.currentDrone.thrusters) {
            const flameScale = 0.85 + Math.sin(time * 30) * 0.2;
            this.currentDrone.thrusters.forEach(t => {
                t.scale.set(1, 1, flameScale);
            });
        }

        this.renderer.render(this.scene, this.camera);
    }

    destroy() {
        if (this.animId) {
            cancelAnimationFrame(this.animId);
            this.animId = null;
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        if (this.renderer && this.renderer.domElement) {
            this.container.removeChild(this.renderer.domElement);
            this.renderer.dispose();
        }
    }
}
