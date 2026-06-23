import * as THREE from 'three';

export class Rover {
    constructor() {
        this.mesh = new THREE.Group();
        
        // Physics attributes
        this.position = new THREE.Vector3(0, 0.4, 0); // Spawn at center
        this.velocity = 0;
        this.maxSpeed = 16.0;
        this.acceleration = 18.0;
        this.deceleration = 15.0;
        this.friction = 0.95;
        
        this.rotationY = 0; // heading angle
        this.steerAngle = 0;
        this.maxSteerAngle = 0.55; // radians (about 30 degrees)
        this.steerSpeed = 3.5;
        this.steerDecay = 6.0;

        // Visual references
        this.wheels = [];
        this.frontLeftWheel = null;
        this.frontRightWheel = null;
        
        // Tilt attributes (for climbing ramps)
        this.targetRotationX = 0;
        this.targetY = 0.4;
        
        this.init();
    }

    init() {
        // --- 1. Main Car Body ---
        const bodyGeom = new THREE.BoxGeometry(1.6, 0.4, 3.0);
        const bodyMat = new THREE.MeshStandardMaterial({
            color: 0x00f0ff, // Neon Cyan
            roughness: 0.2,
            metalness: 0.8
        });
        const body = new THREE.Mesh(bodyGeom, bodyMat);
        body.position.y = 0.2;
        body.castShadow = true;
        body.receiveShadow = true;
        this.mesh.add(body);

        // --- 2. Cockpit / Cabin ---
        const cabinGeom = new THREE.BoxGeometry(1.2, 0.5, 1.4);
        const cabinMat = new THREE.MeshStandardMaterial({
            color: 0x0a0a0c,
            roughness: 0.1,
            metalness: 0.9,
            transparent: true,
            opacity: 0.8
        });
        const cabin = new THREE.Mesh(cabinGeom, cabinMat);
        cabin.position.set(0, 0.65, -0.2); // Positioned slightly back
        cabin.castShadow = true;
        this.mesh.add(cabin);

        // --- 3. Headlights & Beams ---
        const lightGeom = new THREE.BoxGeometry(0.3, 0.15, 0.1);
        const lightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        
        const leftLight = new THREE.Mesh(lightGeom, lightMat);
        leftLight.position.set(-0.6, 0.2, 1.5);
        this.mesh.add(leftLight);

        const rightLight = new THREE.Mesh(lightGeom, lightMat);
        rightLight.position.set(0.6, 0.2, 1.5);
        this.mesh.add(rightLight);

        // Add spot lights for forward beams (cast shadow on playground)
        const spotlight = new THREE.SpotLight(0xffffff, 4, 30, Math.PI / 5, 0.5, 1);
        spotlight.position.set(0, 0.4, 1.6);
        // Create target pointing forward
        const targetObj = new THREE.Object3D();
        targetObj.position.set(0, 0.4, 10);
        this.mesh.add(targetObj);
        spotlight.target = targetObj;
        spotlight.castShadow = true;
        this.mesh.add(spotlight);

        // --- 4. Tail lights ---
        const tailGeom = new THREE.BoxGeometry(0.3, 0.1, 0.05);
        const tailMat = new THREE.MeshBasicMaterial({ color: 0xff0055 });
        
        const leftTail = new THREE.Mesh(tailGeom, tailMat);
        leftTail.position.set(-0.6, 0.2, -1.5);
        this.mesh.add(leftTail);

        const rightTail = new THREE.Mesh(tailGeom, tailMat);
        rightTail.position.set(0.6, 0.2, -1.5);
        this.mesh.add(rightTail);

        // --- 5. Wheels ---
        const wheelGeom = new THREE.CylinderGeometry(0.45, 0.45, 0.4, 12);
        // Rotate cylinder to face sideways
        wheelGeom.rotateZ(Math.PI / 2);
        
        const wheelMat = new THREE.MeshStandardMaterial({
            color: 0x1f2937,
            roughness: 0.8,
            metalness: 0.1
        });

        // Wheel offsets
        const wheelX = 0.95;
        const wheelY = 0.0;
        const wheelZ = 1.0;

        // Front Left Wheel
        this.frontLeftWheel = new THREE.Group();
        const flMesh = new THREE.Mesh(wheelGeom, wheelMat);
        flMesh.castShadow = true;
        this.frontLeftWheel.add(flMesh);
        this.frontLeftWheel.position.set(-wheelX, wheelY, wheelZ);
        this.mesh.add(this.frontLeftWheel);
        this.wheels.push(flMesh);

        // Front Right Wheel
        this.frontRightWheel = new THREE.Group();
        const frMesh = new THREE.Mesh(wheelGeom, wheelMat);
        frMesh.castShadow = true;
        this.frontRightWheel.add(frMesh);
        this.frontRightWheel.position.set(wheelX, wheelY, wheelZ);
        this.mesh.add(this.frontRightWheel);
        this.wheels.push(frMesh);

        // Back Left Wheel
        const blWheel = new THREE.Group();
        const blMesh = new THREE.Mesh(wheelGeom, wheelMat);
        blMesh.castShadow = true;
        blWheel.add(blMesh);
        blWheel.position.set(-wheelX, wheelY, -wheelZ);
        this.mesh.add(blWheel);
        this.wheels.push(blMesh);

        // Back Right Wheel
        const brWheel = new THREE.Group();
        const brMesh = new THREE.Mesh(wheelGeom, wheelMat);
        brMesh.castShadow = true;
        brWheel.add(brMesh);
        brWheel.position.set(wheelX, wheelY, -wheelZ);
        this.mesh.add(brWheel);
        this.wheels.push(brMesh);
    }

    update(delta, keys, playground) {
        // --- 1. Keyboard Driving Inputs ---
        let accelerating = false;
        let braking = false;

        if (keys['w'] || keys['arrowup']) {
            this.velocity += this.acceleration * delta;
            accelerating = true;
        }
        if (keys['s'] || keys['arrowdown']) {
            this.velocity -= this.deceleration * delta;
            braking = true;
        }

        // Apply friction when not accelerating
        if (!accelerating && !braking) {
            this.velocity *= this.friction;
            if (Math.abs(this.velocity) < 0.05) this.velocity = 0;
        }

        // Clamp speed
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

        // Auto-re-center steering when not turning
        if (!steering) {
            this.steerAngle -= this.steerAngle * this.steerDecay * delta;
            if (Math.abs(this.steerAngle) < 0.01) this.steerAngle = 0;
        }

        // Clamp steering angle
        this.steerAngle = THREE.MathUtils.clamp(this.steerAngle, -this.maxSteerAngle, this.maxSteerAngle);

        // --- 3. Compute Direction Vector & Heading ---
        // Turn the car body heading based on steering and forward velocity
        if (Math.abs(this.velocity) > 0.1) {
            // Turning is faster at moderate speeds, slower at extreme speeds, and reverses steering in reverse
            const reverseFactor = this.velocity < 0 ? -1 : 1;
            this.rotationY += this.steerAngle * reverseFactor * (Math.abs(this.velocity) / this.maxSpeed + 0.3) * 1.8 * delta;
        }

        // Move vehicle forward along heading axis (using local forward direction [Z])
        const moveX = Math.sin(this.rotationY) * this.velocity * delta;
        const moveZ = Math.cos(this.rotationY) * this.velocity * delta;
        
        this.position.x += moveX;
        this.position.z += moveZ;

        // Ground bounds clamp (-48 to 48 to prevent falling off the 3D grid)
        const limit = 48.0;
        this.position.x = THREE.MathUtils.clamp(this.position.x, -limit, limit);
        this.position.z = THREE.MathUtils.clamp(this.position.z, -limit, limit);

        // --- 4. Ramp Climb & Tilt Physics (simplified) ---
        // Ask playground if we are intersecting any ramps
        let finalY = 0.4;
        let finalTiltX = 0;
        
        if (playground && playground.ramps) {
            for (const ramp of playground.ramps) {
                const isInside = this.checkRampIntersection(ramp);
                if (isInside) {
                    // Compute Y height based on how far we are along the ramp z-dimension
                    const relativeZ = this.position.z - (ramp.position.z - ramp.depth/2);
                    const pct = relativeZ / ramp.depth; // 0 (bottom) to 1 (top)
                    
                    if (pct >= 0 && pct <= 1) {
                        finalY = 0.4 + pct * ramp.height;
                        finalTiltX = -ramp.angle; // tilt car pitch to match ramp slant
                    }
                    break;
                }
            }
        }

        // Lerp Y and pitch angle for smooth transitions when hitting ramps
        this.position.y += (finalY - this.position.y) * 0.15;
        this.targetRotationX += (finalTiltX - this.targetRotationX) * 0.15;

        // Apply physical movements to 3D mesh
        this.mesh.position.copy(this.position);
        this.mesh.rotation.set(this.targetRotationX, this.rotationY, 0);

        // --- 5. Visual Wheel Rotations ---
        // Spin wheels based on distance traveled (velocity)
        const spinFactor = (this.velocity * delta) / 0.45; // dist / wheel radius
        this.wheels.forEach(wheel => {
            wheel.rotation.x += spinFactor;
        });

        // Turn front wheels visually to match steering angle
        this.frontLeftWheel.rotation.y = this.steerAngle;
        this.frontRightWheel.rotation.y = this.steerAngle;
    }

    checkRampIntersection(ramp) {
        // Simple AABB check for ramp width/depth
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
        this.position.set(x, 0.4, z);
        this.velocity = 0;
        this.rotationY = heading;
        this.steerAngle = 0;
        this.mesh.position.copy(this.position);
        this.mesh.rotation.set(0, this.rotationY, 0);
    }
}
