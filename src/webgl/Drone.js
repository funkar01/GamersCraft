import * as THREE from 'three';
import { getTerrainHeight } from './TerrainMath.js';

export class Drone {
    constructor() {
        this.mesh = new THREE.Group();
        
        // Hover Physics Attributes
        this.position = new THREE.Vector3(0, 0.8, 0); // Spawn hovering above ground
        this.velocity = 0;
        this.maxSpeed = 18.0;
        this.acceleration = 24.0;
        this.deceleration = 18.0;
        this.drag = 0.93; // Slides smoothly like a hovercraft
        
        this.rotationY = 0; // heading angle
        this.steerAngle = 0;
        this.maxSteerAngle = 0.6; // steering turn limit
        this.steerSpeed = 4.0;
        this.steerDecay = 6.0;

        // Visual banking variables
        this.pitch = 0;
        this.roll = 0;
        
        // Ramps alignment
        this.targetY = 0.8;
        
        // Mesh parts for visual effects
        this.thrusters = [];
        this.flameMats = [];
        
        this.init();
    }

    init() {
        // --- 1. Central Core Cockpit Dome ---
        const domeGeom = new THREE.SphereGeometry(0.55, 16, 16);
        const domeMat = new THREE.MeshStandardMaterial({
            color: 0x00f0ff,
            emissive: 0x00f0ff,
            emissiveIntensity: 0.8,
            roughness: 0.1,
            metalness: 0.9,
            transparent: true,
            opacity: 0.75
        });
        const dome = new THREE.Mesh(domeGeom, domeMat);
        dome.position.y = 0.1;
        this.mesh.add(dome);

        // --- 2. Torus Chassis Ring ---
        const ringGeom = new THREE.TorusGeometry(0.75, 0.1, 8, 24);
        ringGeom.rotateX(Math.PI / 2);
        
        const ringMat = new THREE.MeshStandardMaterial({
            color: 0x1f2937,
            roughness: 0.4,
            metalness: 0.8
        });
        const ring = new THREE.Mesh(ringGeom, ringMat);
        ring.castShadow = true;
        ring.receiveShadow = true;
        this.mesh.add(ring);

        // --- 3. Left & Right Thruster Pods ---
        const podGeom = new THREE.CylinderGeometry(0.18, 0.22, 0.7, 8);
        podGeom.rotateX(Math.PI / 2);
        const podMat = new THREE.MeshStandardMaterial({ color: 0x374151, metalness: 0.7 });
        
        const leftPodGroup = new THREE.Group();
        const leftPod = new THREE.Mesh(podGeom, podMat);
        leftPod.castShadow = true;
        leftPodGroup.add(leftPod);
        leftPodGroup.position.set(-0.95, 0, 0);
        this.mesh.add(leftPodGroup);
        this.thrusters.push(leftPodGroup);

        const rightPodGroup = new THREE.Group();
        const rightPod = new THREE.Mesh(podGeom, podMat);
        rightPod.castShadow = true;
        rightPodGroup.add(rightPod);
        rightPodGroup.position.set(0.95, 0, 0);
        this.mesh.add(rightPodGroup);
        this.thrusters.push(rightPodGroup);

        // --- 4. Jet Thruster Fire Flames ---
        const flameGeom = new THREE.ConeGeometry(0.12, 0.4, 6);
        flameGeom.rotateX(-Math.PI / 2);
        
        const flameMat = new THREE.MeshBasicMaterial({
            color: 0xff0055,
            transparent: true,
            opacity: 0.8
        });

        const leftFlame = new THREE.Mesh(flameGeom, flameMat);
        leftFlame.position.set(0, 0, -0.45);
        leftPodGroup.add(leftFlame);
        this.flameMats.push(flameMat);

        const rightFlame = new THREE.Mesh(flameGeom, flameMat);
        rightFlame.position.set(0, 0, -0.45);
        rightPodGroup.add(rightFlame);

        // --- 5. Volumetric Headlight Visor ---
        const visorGeom = new THREE.BoxGeometry(0.4, 0.1, 0.1);
        const visorMat = new THREE.MeshBasicMaterial({ color: 0xff0055 });
        const visor = new THREE.Mesh(visorGeom, visorMat);
        visor.position.set(0, 0.2, 0.45);
        this.mesh.add(visor);

        // Projector light beam
        const spotLight = new THREE.SpotLight(0x00f0ff, 5, 25, Math.PI / 4, 0.5, 1);
        spotLight.position.set(0, 0, 0.6);
        
        const targetObj = new THREE.Object3D();
        targetObj.position.set(0, 0, 8);
        this.mesh.add(targetObj);
        spotLight.target = targetObj;
        spotLight.castShadow = true;
        this.mesh.add(spotLight);
    }

    update(delta, keys, playground, time) {
        // --- 1. Thrust Inputs ---
        let thrusting = false;
        let braking = false;

        if (keys['w'] || keys['arrowup']) {
            this.velocity += this.acceleration * delta;
            thrusting = true;
        }
        if (keys['s'] || keys['arrowdown']) {
            this.velocity -= this.deceleration * delta;
            braking = true;
        }

        // Apply slide drag
        if (!thrusting && !braking) {
            this.velocity *= this.drag;
            if (Math.abs(this.velocity) < 0.05) this.velocity = 0;
        }

        // Clamp speed limit
        this.velocity = THREE.MathUtils.clamp(this.velocity, -this.maxSpeed * 0.4, this.maxSpeed);

        // --- 2. Steering Inputs ---
        let steering = false;
        if (keys['a'] || keys['arrowleft']) {
            this.steerAngle += this.steerSpeed * delta;
            steering = true;
        }
        if (keys['d'] || keys['arrowright']) {
            this.steerAngle -= this.steerSpeed * delta;
            steering = true;
        }

        // Center steering
        if (!steering) {
            this.steerAngle -= this.steerAngle * this.steerDecay * delta;
            if (Math.abs(this.steerAngle) < 0.01) this.steerAngle = 0;
        }

        this.steerAngle = THREE.MathUtils.clamp(this.steerAngle, -this.maxSteerAngle, this.maxSteerAngle);

        // --- 3. Compute Yaw / heading turn ---
        if (Math.abs(this.velocity) > 0.1) {
            const reverseFactor = this.velocity < 0 ? -1 : 1;
            this.rotationY += this.steerAngle * reverseFactor * (Math.abs(this.velocity) / this.maxSpeed + 0.3) * 1.5 * delta;
        }

        // Translate coordinates
        const moveX = Math.sin(this.rotationY) * this.velocity * delta;
        const moveZ = Math.cos(this.rotationY) * this.velocity * delta;
        
        this.position.x += moveX;
        this.position.z += moveZ;

        // Sand boundaries clamp
        const limit = 48.0;
        this.position.x = THREE.MathUtils.clamp(this.position.x, -limit, limit);
        this.position.z = THREE.MathUtils.clamp(this.position.z, -limit, limit);

        // --- 4. Hover Suspensions & Ramps/Hills Checks ---
        let baseHoverY = 0.8 + getTerrainHeight(this.position.x, this.position.z);
        let surfacePitch = 0;

        // Snapping check for magnetic ramps
        if (playground && playground.ramps) {
            for (const ramp of playground.ramps) {
                const isInside = this.checkRampIntersection(ramp);
                if (isInside) {
                    const relativeZ = this.position.z - (ramp.position.z - ramp.depth/2);
                    const pct = relativeZ / ramp.depth;
                    
                    if (pct >= 0 && pct <= 1) {
                        const rampBaseY = ramp.position.y - 0.1; // remove offset
                        baseHoverY = rampBaseY + 0.8 + pct * ramp.height;
                        surfacePitch = -ramp.angle;
                    }
                    break;
                }
            }
        }

        // Add float bobbing
        const bob = Math.sin(time * 3.5) * 0.06;
        this.targetY = baseHoverY + bob;
        
        this.position.y += (this.targetY - this.position.y) * 0.15;

        // --- 5. Calculate Local Terrain Slope (Pitch & Roll Angles) ---
        // Sample height 0.6 units in front and behind
        const forwardX = this.position.x + Math.sin(this.rotationY) * 0.6;
        const forwardZ = this.position.z + Math.cos(this.rotationY) * 0.6;
        const backwardX = this.position.x - Math.sin(this.rotationY) * 0.6;
        const backwardZ = this.position.z - Math.cos(this.rotationY) * 0.6;
        
        const hForward = getTerrainHeight(forwardX, forwardZ);
        const hBackward = getTerrainHeight(backwardX, backwardZ);
        
        // Approximate pitch slant angle (relative to slope)
        const slopePitch = -Math.atan2(hForward - hBackward, 1.2);

        // Sample height 0.6 units left and right
        const leftX = this.position.x + Math.sin(this.rotationY + Math.PI/2) * 0.6;
        const leftZ = this.position.z + Math.cos(this.rotationY + Math.PI/2) * 0.6;
        const rightX = this.position.x - Math.sin(this.rotationY + Math.PI/2) * 0.6;
        const rightZ = this.position.z - Math.cos(this.rotationY + Math.PI/2) * 0.6;
        
        const hLeft = getTerrainHeight(leftX, leftZ);
        const hRight = getTerrainHeight(rightX, rightZ);
        
        // Approximate roll slant angle (relative to slope)
        const slopeRoll = Math.atan2(hLeft - hRight, 1.2);

        // --- 6. Bank / Pitch Visual Tilts ---
        // Final Pitch = Acceleration Tilt + Ground Slope Pitch
        const targetPitch = (this.velocity / this.maxSpeed) * 0.28 + slopePitch + surfacePitch;
        this.pitch += (targetPitch - this.pitch) * 0.12;

        // Final Roll = Steering Bank + Ground Slope Roll
        const targetRoll = -this.steerAngle * (Math.abs(this.velocity) / this.maxSpeed + 0.2) * 0.85 + slopeRoll;
        this.roll += (targetRoll - this.roll) * 0.1;

        // Apply physical translations to 3D mesh
        this.mesh.position.copy(this.position);
        this.mesh.rotation.set(
            this.pitch,
            this.rotationY,
            this.roll,
            'YXZ'
        );

        const leftPodGroup = this.thrusters[0];
        const rightPodGroup = this.thrusters[1];

        // --- 7. Jet Flame Flicker animation ---
        const flameScale = Math.abs(this.velocity) / this.maxSpeed * 0.8 + 0.5 + Math.sin(time * 40) * 0.15;
        this.flameMats.forEach(mat => {
            mat.opacity = thrusting ? 0.95 : 0.4;
            leftPodGroup.scale.set(1, 1, thrusting ? flameScale : 0.5);
            rightPodGroup.scale.set(1, 1, thrusting ? flameScale : 0.5);
        });

        const targetPodTilt = thrusting ? 0.15 : (braking ? -0.15 : 0);
        
        leftPodGroup.rotation.x += (targetPodTilt - leftPodGroup.rotation.x) * 0.1;
        rightPodGroup.rotation.x += (targetPodTilt - rightPodGroup.rotation.x) * 0.1;
    }

    checkRampIntersection(ramp) {
        const halfWidth = ramp.width / 2;
        const halfDepth = ramp.depth / 2;
        
        return (
            this.position.x >= ramp.position.x - halfWidth &&
            this.position.x <= ramp.position.x + halfWidth &&
            this.position.z >= ramp.position.z - halfDepth &&
            this.position.z <= ramp.position.z + halfDepth
        );
    }

    teleportTo(x, z, heading = 0) {
        const gy = getTerrainHeight(x, z);
        this.position.set(x, gy + 0.8, z);
        this.velocity = 0;
        this.rotationY = heading;
        this.steerAngle = 0;
        this.pitch = 0;
        this.roll = 0;
        this.mesh.position.copy(this.position);
        this.mesh.rotation.set(0, this.rotationY, 0);
    }
}
