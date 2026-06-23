import * as THREE from 'three';

export class CompanionBot {
    constructor() {
        this.mesh = new THREE.Group();
        this.core = null;
        this.shell = null;
        this.ring = null;
        
        // Status parameters
        this.isInteracting = false;
        this.pulseSpeed = 2.0;
        this.rotationSpeed = 1.0;
        
        this.init();
    }

    init() {
        // --- 1. Inner Glowing Core ---
        const coreGeom = new THREE.OctahedronGeometry(0.5, 1);
        const coreMat = new THREE.MeshStandardMaterial({
            color: 0x00f0ff,
            emissive: 0x00f0ff,
            emissiveIntensity: 1.5,
            roughness: 0.1,
            metalness: 0.9
        });
        this.core = new THREE.Mesh(coreGeom, coreMat);
        this.mesh.add(this.core);

        // --- 2. Outer Wireframe Shell ---
        const shellGeom = new THREE.IcosahedronGeometry(0.9, 0);
        const shellMat = new THREE.MeshBasicMaterial({
            color: 0x54b334,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });
        this.shell = new THREE.Mesh(shellGeom, shellMat);
        this.mesh.add(this.shell);

        // --- 3. Outer Orbiting Ring ---
        const ringGeom = new THREE.RingGeometry(1.2, 1.25, 32);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0xffb700,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.5
        });
        this.ring = new THREE.Mesh(ringGeom, ringMat);
        this.ring.rotation.x = Math.PI / 2.5;
        this.mesh.add(this.ring);

        // Position helper
        this.mesh.position.set(0, 0, 8); // Floating in front of background
    }

    setAlert(state) {
        this.isInteracting = state;
        if (state) {
            this.pulseSpeed = 6.0;
            this.rotationSpeed = 3.5;
            this.core.material.color.setHex(0xff0055); // Change color to Alert Pink
            this.core.material.emissive.setHex(0xff0055);
            this.shell.material.color.setHex(0xffb700); // Gold shell
        } else {
            this.pulseSpeed = 2.0;
            this.rotationSpeed = 1.0;
            this.core.material.color.setHex(0x00f0ff); // Back to Teal
            this.core.material.emissive.setHex(0x00f0ff);
            this.shell.material.color.setHex(0x54b334); // Green shell
        }
    }

    update(delta, time, mouse) {
        // Project mouse vector to floating plane (closer to screen, z=8)
        const targetX = mouse.x * 12.5;
        const targetY = mouse.y * 9.5;
        
        // Lerp position to follow mouse smoothly
        this.mesh.position.x += (targetX - this.mesh.position.x) * 0.08;
        this.mesh.position.y += (targetY - this.mesh.position.y) * 0.08;
        
        // Hovering bob motion (Sin wave offset)
        this.mesh.position.y += Math.sin(time * 2.0) * 0.008;
        this.mesh.position.x += Math.cos(time * 1.5) * 0.005;

        // Core pulsing light effect
        const pulse = 1.0 + Math.sin(time * this.pulseSpeed) * 0.3;
        this.core.scale.set(pulse, pulse, pulse);
        this.core.material.emissiveIntensity = 1.2 + Math.sin(time * this.pulseSpeed) * 0.6;

        // Rotate wireframe shell and orbital rings
        this.shell.rotation.y += 0.3 * delta * this.rotationSpeed;
        this.shell.rotation.x += 0.15 * delta * this.rotationSpeed;
        
        this.ring.rotation.z -= 0.5 * delta * this.rotationSpeed;
    }
}
