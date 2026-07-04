import * as THREE from 'three';
import { getTerrainHeight } from './TerrainMath.js';

export class Drone {
    constructor() {
        this.mesh = new THREE.Group();
        this.mesh.scale.set(2, 2, 2); // Double scale (2X)
        
        // Hover Physics Attributes
        this.position = new THREE.Vector3(0, 1.4, 0); // Spawn hovering above ground at 1.4 offset
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

        // Pitch, roll & elevation tracking
        this.controlledPitch = 0; // Player-driven pitching deviation
        this.controlledRoll = 0; // Player-driven rolling deviation
        this.hoverHeightOffset = 1.4; // Base height above terrain, dynamically modified by pitching

        // Visual banking variables
        this.pitch = 0;
        this.roll = 0;
        
        // Ramps alignment
        this.targetY = 1.4;
        
        // Mesh parts for visual effects
        this.thrusters = [];
        this.flameMats = [];
        this.currentType = 'default';
        
        this.init();
    }

    init() {
        this.rebuildModel(this.currentType);
    }

    rebuildModel(type) {
        this.currentType = type;
        
        // Remove all children
        while (this.mesh.children.length > 0) {
            this.mesh.remove(this.mesh.children[0]);
        }
        
        this.thrusters = [];
        this.flameMats = [];
        
        if (type === 'swift-z') {
            this.buildSwiftZModel();
        } else if (type === 'interceptor-gl') {
            this.buildInterceptorModel();
        } else if (type === 'xeno-cargo') {
            this.buildXenoCargoModel();
        } else {
            this.buildDefaultModel();
        }
    }

    buildDefaultModel() {
        // High-poly smooth central core cockpit dome (32 segments)
        const domeGeom = new THREE.SphereGeometry(0.55, 32, 32);
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

        // Smooth Torus Chassis Ring
        const ringGeom = new THREE.TorusGeometry(0.75, 0.1, 16, 48);
        ringGeom.rotateX(Math.PI / 2);
        const ringMat = new THREE.MeshStandardMaterial({
            color: 0x1f2937,
            roughness: 0.35,
            metalness: 0.85
        });
        const ring = new THREE.Mesh(ringGeom, ringMat);
        ring.castShadow = true;
        ring.receiveShadow = true;
        this.mesh.add(ring);

        // Aerodynamic structural panels (High-poly trim plates)
        const trimMat = new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.4, metalness: 0.7 });
        const leftWinglet = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.4), trimMat);
        leftWinglet.position.set(-0.9, 0.05, -0.15);
        leftWinglet.rotation.y = Math.PI / 6;
        leftWinglet.castShadow = true;
        this.mesh.add(leftWinglet);

        const rightWinglet = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.4), trimMat);
        rightWinglet.position.set(0.9, 0.05, -0.15);
        rightWinglet.rotation.y = -Math.PI / 6;
        rightWinglet.castShadow = true;
        this.mesh.add(rightWinglet);

        // Left & Right Cylindrical Thruster Pods (16 segments, smooth)
        const podGeom = new THREE.CylinderGeometry(0.18, 0.22, 0.7, 16);
        podGeom.rotateX(Math.PI / 2);
        
        const leftPodGroup = new THREE.Group();
        const leftPod = new THREE.Mesh(podGeom, trimMat);
        leftPod.castShadow = true;
        leftPodGroup.add(leftPod);
        leftPodGroup.position.set(-0.95, 0, 0);
        this.mesh.add(leftPodGroup);
        this.thrusters.push(leftPodGroup);

        const rightPodGroup = new THREE.Group();
        const rightPod = new THREE.Mesh(podGeom, trimMat);
        rightPod.castShadow = true;
        rightPodGroup.add(rightPod);
        rightPodGroup.position.set(0.95, 0, 0);
        this.mesh.add(rightPodGroup);
        this.thrusters.push(rightPodGroup);

        // Jet flames (Cone, pink/red)
        const flameGeom = new THREE.ConeGeometry(0.12, 0.45, 12);
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

        // Volumetric Headlight Visor
        const visorGeom = new THREE.BoxGeometry(0.4, 0.1, 0.1);
        const visorMat = new THREE.MeshBasicMaterial({ color: 0xff0055 });
        const visor = new THREE.Mesh(visorGeom, visorMat);
        visor.position.set(0, 0.2, 0.45);
        this.mesh.add(visor);

        // Projector light beam (longer, brighter for 2X scale)
        const spotLight = new THREE.SpotLight(0x00f0ff, 8, 40, Math.PI / 4, 0.5, 1);
        spotLight.position.set(0, 0, 0.6);
        const targetObj = new THREE.Object3D();
        targetObj.position.set(0, 0, 16);
        this.mesh.add(targetObj);
        spotLight.target = targetObj;
        spotLight.castShadow = true;
        this.mesh.add(spotLight);
    }

    buildSwiftZModel() {
        // --- 1. Canopy Body (Aerodynamic orange cockpit shell, high-poly smooth) ---
        const bodyGeom = new THREE.BoxGeometry(0.7, 0.5, 1.25);
        const bodyMat = new THREE.MeshStandardMaterial({
            color: 0xff7a00,
            roughness: 0.25,
            metalness: 0.5,
            flatShading: false
        });
        const canopy = new THREE.Mesh(bodyGeom, bodyMat);
        canopy.castShadow = true;
        canopy.receiveShadow = true;
        canopy.position.y = 0.05;
        this.mesh.add(canopy);

        // Aerodynamic slanted cockpit window (Glossy black visor)
        const visorGeom = new THREE.BoxGeometry(0.64, 0.22, 0.42);
        const visorMat = new THREE.MeshStandardMaterial({
            color: 0x080808,
            roughness: 0.05,
            metalness: 0.95
        });
        const visor = new THREE.Mesh(visorGeom, visorMat);
        visor.position.set(0, 0.18, 0.45);
        this.mesh.add(visor);

        // Blue circle nose emblem plate with white "Z" symbol
        const emblemMat = new THREE.MeshStandardMaterial({
            color: 0x0066cc,
            roughness: 0.35,
            metalness: 0.8
        });
        const emblemRingGeom = new THREE.CylinderGeometry(0.2, 0.2, 0.04, 24);
        emblemRingGeom.rotateX(Math.PI / 2);
        const emblemRing = new THREE.Mesh(emblemRingGeom, emblemMat);
        emblemRing.position.set(0, 0.08, 0.63);
        this.mesh.add(emblemRing);

        // Small white Z emblem made of boxes
        const zMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const zBar1 = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.03, 0.02), zMat);
        zBar1.position.set(0, 0.14, 0.65);
        const zBar2 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.15, 0.02), zMat);
        zBar2.rotation.z = -Math.PI / 4;
        zBar2.position.set(0, 0.08, 0.65);
        const zBar3 = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.03, 0.02), zMat);
        zBar3.position.set(0, 0.02, 0.65);
        this.mesh.add(zBar1);
        this.mesh.add(zBar2);
        this.mesh.add(zBar3);

        // White side aerodynamic intake vents
        const sideMat = new THREE.MeshStandardMaterial({
            color: 0xeeeeee,
            roughness: 0.25,
            metalness: 0.45
        });
        const leftSide = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.25, 1.05), sideMat);
        leftSide.position.set(-0.38, 0.02, 0.02);
        leftSide.castShadow = true;
        this.mesh.add(leftSide);

        const rightSide = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.25, 1.05), sideMat);
        rightSide.position.set(0.38, 0.02, 0.02);
        rightSide.castShadow = true;
        this.mesh.add(rightSide);

        // Rear Wing Spoiler (aerodynamic race style)
        const spoilerWing = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.04, 0.25), bodyMat);
        spoilerWing.position.set(0, 0.4, -0.6);
        spoilerWing.castShadow = true;
        this.mesh.add(spoilerWing);

        const spoilerLeftSupport = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.25, 0.1), emblemMat);
        spoilerLeftSupport.position.set(-0.5, 0.22, -0.6);
        this.mesh.add(spoilerLeftSupport);

        const spoilerRightSupport = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.25, 0.1), emblemMat);
        spoilerRightSupport.position.set(0.5, 0.22, -0.6);
        this.mesh.add(spoilerRightSupport);

        // Antenna
        const antBase = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.04, 8), new THREE.MeshStandardMaterial({ color: 0x222222 }));
        antBase.position.set(0, 0.3, -0.3);
        this.mesh.add(antBase);

        const antRod = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.38, 6), new THREE.MeshStandardMaterial({ color: 0xffaa00 }));
        antRod.rotation.x = Math.PI / 6;
        antRod.position.set(0, 0.48, -0.38);
        this.mesh.add(antRod);

        // --- 2. Under Chassis Support Arms (Blue) ---
        const armMat = new THREE.MeshStandardMaterial({
            color: 0x00bcd4,
            roughness: 0.35,
            metalness: 0.8
        });
        const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 0.16), armMat);
        leftArm.rotation.z = -Math.PI / 12;
        leftArm.position.set(-0.52, -0.15, -0.1);
        leftArm.castShadow = true;
        this.mesh.add(leftArm);

        const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 0.16), armMat);
        rightArm.rotation.z = Math.PI / 12;
        rightArm.position.set(0.52, -0.15, -0.1);
        rightArm.castShadow = true;
        this.mesh.add(rightArm);

        // --- 3. Thrusters and Pods (White/Orange/Blue) ---
        const podGeom = new THREE.CylinderGeometry(0.2, 0.24, 0.65, 16);
        podGeom.rotateX(Math.PI / 2);
        const podMat = new THREE.MeshStandardMaterial({
            color: 0xeeeeee,
            roughness: 0.25,
            metalness: 0.5,
            flatShading: false
        });
        const rimMat = new THREE.MeshStandardMaterial({ color: 0xff7a00, roughness: 0.2 });

        // Left Pod
        const leftPodGroup = new THREE.Group();
        const leftPod = new THREE.Mesh(podGeom, podMat);
        leftPod.castShadow = true;
        leftPod.receiveShadow = true;
        leftPodGroup.add(leftPod);
        
        const leftRim = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.08, 16), rimMat);
        leftRim.geometry.rotateX(Math.PI / 2);
        leftRim.position.set(0, 0, 0.32);
        leftPodGroup.add(leftRim);

        leftPodGroup.position.set(-0.95, -0.22, -0.1);
        this.mesh.add(leftPodGroup);
        this.thrusters.push(leftPodGroup);

        // Right Pod
        const rightPodGroup = new THREE.Group();
        const rightPod = new THREE.Mesh(podGeom, podMat);
        rightPod.castShadow = true;
        rightPodGroup.add(rightPod);

        const rightRim = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.08, 16), rimMat);
        rightRim.geometry.rotateX(Math.PI / 2);
        rightRim.position.set(0, 0, 0.32);
        rightPodGroup.add(rightRim);

        rightPodGroup.position.set(0.95, -0.22, -0.1);
        this.mesh.add(rightPodGroup);
        this.thrusters.push(rightPodGroup);

        // --- 4. Wing Fins (Yellow/Orange angled on pods) ---
        const wingMat = new THREE.MeshStandardMaterial({
            color: 0xffb700,
            roughness: 0.2,
            metalness: 0.5
        });
        
        // Left wings
        const leftWing = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.65, 0.16), wingMat);
        leftWing.rotation.z = Math.PI / 4;
        leftWing.position.set(-0.24, 0.3, 0.05);
        leftWing.castShadow = true;
        leftPodGroup.add(leftWing);

        const leftStab = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 0.12), wingMat);
        leftStab.rotation.z = -Math.PI / 6;
        leftStab.position.set(-0.16, -0.26, -0.05);
        leftStab.castShadow = true;
        leftPodGroup.add(leftStab);

        // Right wings
        const rightWing = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.65, 0.16), wingMat);
        rightWing.rotation.z = -Math.PI / 4;
        rightWing.position.set(0.24, 0.3, 0.05);
        rightWing.castShadow = true;
        rightPodGroup.add(rightWing);

        const rightStab = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 0.12), wingMat);
        rightStab.rotation.z = Math.PI / 6;
        rightStab.position.set(0.16, -0.26, -0.05);
        rightStab.castShadow = true;
        rightPodGroup.add(rightStab);

        // --- 5. Jet flames (Green) ---
        const flameGeom = new THREE.ConeGeometry(0.12, 0.45, 12);
        flameGeom.rotateX(-Math.PI / 2);
        const flameMat = new THREE.MeshBasicMaterial({
            color: 0x39ff14,
            transparent: true,
            opacity: 0.8
        });
        
        const leftFlame = new THREE.Mesh(flameGeom, flameMat);
        leftFlame.position.set(0, 0, -0.42);
        leftPodGroup.add(leftFlame);
        this.flameMats.push(flameMat);

        const rightFlame = new THREE.Mesh(flameGeom, flameMat);
        rightFlame.position.set(0, 0, -0.42);
        rightPodGroup.add(rightFlame);

        // Spotlight
        const spotLight = new THREE.SpotLight(0x39ff14, 8, 40, Math.PI / 4, 0.5, 1);
        spotLight.position.set(0, 0, 0.6);
        const targetObj = new THREE.Object3D();
        targetObj.position.set(0, 0, 16);
        this.mesh.add(targetObj);
        spotLight.target = targetObj;
        spotLight.castShadow = true;
        this.mesh.add(spotLight);
    }

    buildInterceptorModel() {
        // --- 1. Center Core Body Disc (Sleek high-poly) ---
        const discGeom = new THREE.CylinderGeometry(0.65, 0.68, 0.12, 24);
        discGeom.rotateX(Math.PI / 2);
        const bodyMat = new THREE.MeshStandardMaterial({
            color: 0xeeeeee,
            roughness: 0.2,
            metalness: 0.7,
            flatShading: false
        });
        const disc = new THREE.Mesh(discGeom, bodyMat);
        disc.castShadow = true;
        disc.receiveShadow = true;
        this.mesh.add(disc);

        // Green Energy core ring
        const ringMat = new THREE.MeshStandardMaterial({
            color: 0x00ff66,
            emissive: 0x00ff66,
            emissiveIntensity: 1.2,
            roughness: 0.1
        });
        const greenRing = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.05, 12, 32), ringMat);
        greenRing.rotation.x = Math.PI / 2;
        greenRing.position.y = 0.08;
        this.mesh.add(greenRing);

        // Glowing center core sphere
        const sphereMat = new THREE.MeshStandardMaterial({
            color: 0x00ff66,
            emissive: 0x00ff66,
            emissiveIntensity: 0.9,
            transparent: true,
            opacity: 0.85
        });
        const centerSphere = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), sphereMat);
        this.mesh.add(centerSphere);

        // Aerodynamic front nose cone (Sleek fighter nose)
        const noseGeom = new THREE.ConeGeometry(0.28, 0.6, 16);
        noseGeom.rotateX(Math.PI / 2);
        const nose = new THREE.Mesh(noseGeom, bodyMat);
        nose.position.set(0, 0, 0.68);
        nose.castShadow = true;
        this.mesh.add(nose);

        const noseStripe = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.4), ringMat);
        noseStripe.position.set(0, 0.08, 0.52);
        this.mesh.add(noseStripe);

        // Elegant curved tail cone
        const tailGeom = new THREE.ConeGeometry(0.18, 0.75, 16);
        tailGeom.rotateX(-Math.PI / 2);
        const tail = new THREE.Mesh(tailGeom, bodyMat);
        tail.position.set(0, -0.04, -0.65);
        tail.castShadow = true;
        this.mesh.add(tail);

        // Green tail stabilizer fins
        const finMat = new THREE.MeshStandardMaterial({
            color: 0x00cc44,
            roughness: 0.3,
            metalness: 0.6,
            flatShading: false
        });
        const leftTailFin = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.03, 0.16), finMat);
        leftTailFin.rotation.y = Math.PI / 4;
        leftTailFin.position.set(-0.22, -0.04, -0.6);
        leftTailFin.castShadow = true;
        this.mesh.add(leftTailFin);

        const rightTailFin = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.03, 0.16), finMat);
        rightTailFin.rotation.y = -Math.PI / 4;
        rightTailFin.position.set(0.22, -0.04, -0.6);
        rightTailFin.castShadow = true;
        this.mesh.add(rightTailFin);

        // --- 2. Curved Outward Wing Arcs (White/Green) ---
        // Left Wing Group
        const leftWingGroup = new THREE.Group();
        const leftWingBar = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.06, 0.28), bodyMat);
        leftWingBar.position.set(-0.48, 0, -0.05);
        leftWingBar.castShadow = true;
        leftWingGroup.add(leftWingBar);

        const leftOuterFin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, 0.75), finMat);
        leftOuterFin.position.set(-0.76, 0, -0.05);
        leftOuterFin.castShadow = true;
        leftWingGroup.add(leftOuterFin);
        this.mesh.add(leftWingGroup);

        // Right Wing Group
        const rightWingGroup = new THREE.Group();
        const rightWingBar = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.06, 0.28), bodyMat);
        rightWingBar.position.set(0.48, 0, -0.05);
        rightWingBar.castShadow = true;
        rightWingGroup.add(rightWingBar);

        const rightOuterFin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, 0.75), finMat);
        rightOuterFin.position.set(0.76, 0, -0.05);
        rightOuterFin.castShadow = true;
        rightWingGroup.add(rightOuterFin);
        this.mesh.add(rightWingGroup);

        // --- 3. Engine Pods & Flames (Mounted on Wingtips) ---
        const engineGeom = new THREE.CylinderGeometry(0.12, 0.15, 0.55, 16);
        engineGeom.rotateX(Math.PI / 2);
        const engineMat = new THREE.MeshStandardMaterial({
            color: 0xdddddd,
            roughness: 0.3,
            metalness: 0.8
        });

        // Left Engine Group
        const leftEngineGroup = new THREE.Group();
        const leftEngine = new THREE.Mesh(engineGeom, engineMat);
        leftEngine.castShadow = true;
        leftEngineGroup.add(leftEngine);
        leftEngineGroup.position.set(-1.08, 0, 0);
        this.mesh.add(leftEngineGroup);
        this.thrusters.push(leftEngineGroup);

        // Right Engine Group
        const rightEngineGroup = new THREE.Group();
        const rightEngine = new THREE.Mesh(engineGeom, engineMat);
        rightEngine.castShadow = true;
        rightEngineGroup.add(rightEngine);
        rightEngineGroup.position.set(1.08, 0, 0);
        this.mesh.add(rightEngineGroup);
        this.thrusters.push(rightEngineGroup);

        // Flames (Green)
        const flameGeom = new THREE.ConeGeometry(0.09, 0.38, 12);
        flameGeom.rotateX(-Math.PI / 2);
        const flameMat = new THREE.MeshBasicMaterial({
            color: 0x00ff66,
            transparent: true,
            opacity: 0.8
        });

        const leftFlame = new THREE.Mesh(flameGeom, flameMat);
        leftFlame.position.set(0, 0, -0.35);
        leftEngineGroup.add(leftFlame);
        this.flameMats.push(flameMat);

        const rightFlame = new THREE.Mesh(flameGeom, flameMat);
        rightFlame.position.set(0, 0, -0.35);
        rightEngineGroup.add(rightFlame);

        // Visor Green headlight
        const visorGeom = new THREE.BoxGeometry(0.18, 0.04, 0.04);
        const visorMat = new THREE.MeshBasicMaterial({ color: 0x00ff66 });
        const visor = new THREE.Mesh(visorGeom, visorMat);
        visor.position.set(0, 0.06, 0.72);
        this.mesh.add(visor);

        // Spotlight
        const spotLight = new THREE.SpotLight(0x00ff66, 8, 40, Math.PI / 4, 0.5, 1);
        spotLight.position.set(0, 0, 0.65);
        const targetObj = new THREE.Object3D();
        targetObj.position.set(0, 0, 16);
        this.mesh.add(targetObj);
        spotLight.target = targetObj;
        spotLight.castShadow = true;
        this.mesh.add(spotLight);
    }

    buildXenoCargoModel() {
        // --- 1. Heavy Boxy Hull (Aerodynamic corners) ---
        const bodyMat = new THREE.MeshStandardMaterial({
            color: 0x1d4d4f,
            roughness: 0.45,
            metalness: 0.45,
            flatShading: false
        });
        const bodyGeom = new THREE.BoxGeometry(0.62, 0.46, 1.35);
        const fuselage = new THREE.Mesh(bodyGeom, bodyMat);
        fuselage.castShadow = true;
        fuselage.receiveShadow = true;
        this.mesh.add(fuselage);

        // Slanted cockpit visor (Solid orange glass canopy, simple and stylish)
        const cockpitGeom = new THREE.BoxGeometry(0.46, 0.28, 0.4);
        const cockpitMat = new THREE.MeshStandardMaterial({
            color: 0xff8800,
            emissive: 0xff5500,
            emissiveIntensity: 0.5,
            roughness: 0.15,
            transparent: true,
            opacity: 0.9
        });
        const canopy = new THREE.Mesh(cockpitGeom, cockpitMat);
        canopy.position.set(0, 0.18, 0.48);
        canopy.castShadow = true;
        this.mesh.add(canopy);

        // Cyberpunk side armor plate covers
        const plateMat = new THREE.MeshStandardMaterial({
            color: 0x2d3748,
            roughness: 0.4,
            metalness: 0.7
        });
        const leftPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.8), plateMat);
        leftPlate.position.set(-0.33, 0, 0.05);
        this.mesh.add(leftPlate);

        const rightPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.8), plateMat);
        rightPlate.position.set(0.33, 0, 0.05);
        this.mesh.add(rightPlate);

        // Yellow detailing plates on top
        const yellowMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, roughness: 0.35, metalness: 0.5 });
        const leftSpinePanel = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 0.25), yellowMat);
        leftSpinePanel.position.set(-0.14, 0.25, -0.15);
        this.mesh.add(leftSpinePanel);

        const rightSpinePanel = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 0.25), yellowMat);
        rightSpinePanel.position.set(0.14, 0.25, -0.15);
        this.mesh.add(rightSpinePanel);

        // --- 2. Broad Wings ---
        const wing = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.06, 0.32), bodyMat);
        wing.position.set(0, -0.05, -0.1);
        wing.castShadow = true;
        this.mesh.add(wing);

        // --- 3. Cylinder Engine Pods at Wingtips ---
        const engineGeom = new THREE.CylinderGeometry(0.24, 0.24, 0.62, 16);
        engineGeom.rotateX(Math.PI / 2);
        const engineMat = new THREE.MeshStandardMaterial({
            color: 0x1a202c,
            roughness: 0.35,
            metalness: 0.75
        });

        // Left Engine Group
        const leftEngineGroup = new THREE.Group();
        const leftEngine = new THREE.Mesh(engineGeom, engineMat);
        leftEngine.castShadow = true;
        leftEngineGroup.add(leftEngine);
        
        // Rotating engine fan blades detail inside cylinders (highly stylish)
        const fanRim = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.05, 16), yellowMat);
        fanRim.geometry.rotateX(Math.PI / 2);
        fanRim.position.set(0, 0, 0.3);
        leftEngineGroup.add(fanRim);

        // 3D fan center hub
        const fanHub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.08, 8), plateMat);
        fanHub.geometry.rotateX(Math.PI / 2);
        fanHub.position.set(0, 0, 0.32);
        leftEngineGroup.add(fanHub);

        // Blades
        const bladeGeom = new THREE.BoxGeometry(0.18, 0.02, 0.02);
        for (let i = 0; i < 4; i++) {
            const blade = new THREE.Mesh(bladeGeom, plateMat);
            blade.position.set(0, 0, 0.32);
            blade.rotation.z = (Math.PI / 4) * i;
            leftEngineGroup.add(blade);
        }

        leftEngineGroup.position.set(-1.12, -0.05, -0.1);
        this.mesh.add(leftEngineGroup);
        this.thrusters.push(leftEngineGroup);

        // Right Engine Group
        const rightEngineGroup = new THREE.Group();
        const rightEngine = new THREE.Mesh(engineGeom, engineMat);
        rightEngine.castShadow = true;
        rightEngineGroup.add(rightEngine);

        const rightRim = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.05, 16), yellowMat);
        rightRim.geometry.rotateX(Math.PI / 2);
        rightRim.position.set(0, 0, 0.3);
        rightEngineGroup.add(rightRim);

        const rightHub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.08, 8), plateMat);
        rightHub.geometry.rotateX(Math.PI / 2);
        rightHub.position.set(0, 0, 0.32);
        rightEngineGroup.add(rightHub);

        for (let i = 0; i < 4; i++) {
            const blade = new THREE.Mesh(bladeGeom, plateMat);
            blade.position.set(0, 0, 0.32);
            blade.rotation.z = (Math.PI / 4) * i;
            rightEngineGroup.add(blade);
        }

        rightEngineGroup.position.set(1.12, -0.05, -0.1);
        this.mesh.add(rightEngineGroup);
        this.thrusters.push(rightEngineGroup);

        // Flames (Orange/Red)
        const flameGeom = new THREE.ConeGeometry(0.14, 0.42, 12);
        flameGeom.rotateX(-Math.PI / 2);
        const flameMat = new THREE.MeshBasicMaterial({
            color: 0xff4500,
            transparent: true,
            opacity: 0.8
        });

        const leftFlame = new THREE.Mesh(flameGeom, flameMat);
        leftFlame.position.set(0, 0, -0.38);
        leftEngineGroup.add(leftFlame);
        this.flameMats.push(flameMat);

        const rightFlame = new THREE.Mesh(flameGeom, flameMat);
        rightFlame.position.set(0, 0, -0.38);
        rightEngineGroup.add(rightFlame);

        // --- 4. Boxy Aerodynamic Tail Fins ---
        const tail = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.03, 0.2), bodyMat);
        tail.position.set(0, 0.1, -0.7);
        tail.castShadow = true;
        this.mesh.add(tail);

        const vertFin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.26, 0.2), bodyMat);
        vertFin.position.set(0, 0.24, -0.7);
        vertFin.castShadow = true;
        this.mesh.add(vertFin);

        // Headlight details
        const visorGeom = new THREE.BoxGeometry(0.2, 0.04, 0.04);
        const visorMat = new THREE.MeshBasicMaterial({ color: 0xffb700 });
        const visor = new THREE.Mesh(visorGeom, visorMat);
        visor.position.set(0, -0.12, 0.68);
        this.mesh.add(visor);

        // Spotlight
        const spotLight = new THREE.SpotLight(0xffa500, 8, 40, Math.PI / 4, 0.5, 1);
        spotLight.position.set(0, 0, 0.68);
        const targetObj = new THREE.Object3D();
        targetObj.position.set(0, 0, 16);
        this.mesh.add(targetObj);
        spotLight.target = targetObj;
        spotLight.castShadow = true;
        this.mesh.add(spotLight);
    }

    update(delta, keys, playground, time) {
        // --- 1. Thrust / Speed Controls (Space/Shift, Q/E, or Arrow Up/Down) ---
        let thrusting = false;
        let braking = false;

        if (keys[' '] || keys['q'] || keys['arrowup']) {
            this.velocity += this.acceleration * delta;
            thrusting = true;
        }
        if (keys['shift'] || keys['e'] || keys['arrowdown']) {
            this.velocity -= this.deceleration * delta;
            braking = true;
        }

        // Apply slide drag
        if (!thrusting && !braking) {
            this.velocity *= this.drag;
            if (Math.abs(this.velocity) < 0.05) this.velocity = 0;
        }
        this.velocity = THREE.MathUtils.clamp(this.velocity, -this.maxSpeed * 0.4, this.maxSpeed);

        // --- 2. Pitch Controls (W / S only - Arrow Up/Down are for thrust!) ---
        let pitching = false;
        if (keys['w']) {
            this.controlledPitch += 1.8 * delta; // W pitches nose UP (climb)
            pitching = true;
        }
        if (keys['s']) {
            this.controlledPitch -= 1.8 * delta; // S pitches nose DOWN (dive)
            pitching = true;
        }
        if (!pitching) {
            this.controlledPitch -= this.controlledPitch * 2.2 * delta; // slowly auto-level pitch when released
            if (Math.abs(this.controlledPitch) < 0.01) this.controlledPitch = 0;
        }
        // Unclamped controlledPitch (no limits)

        // --- 3. Yaw / Steering & Roll Controls (A / D or Arrow Left / Right) ---
        let yawing = false;
        if (keys['a'] || keys['arrowleft']) {
            this.rotationY += 1.8 * delta; // steer yaw left
            this.controlledRoll += (0.35 - this.controlledRoll) * 8.0 * delta; // bank left
            yawing = true;
        }
        if (keys['d'] || keys['arrowright']) {
            this.rotationY -= 1.8 * delta; // steer yaw right
            this.controlledRoll += (-0.35 - this.controlledRoll) * 8.0 * delta; // bank right
            yawing = true;
        }
        if (!yawing) {
            this.controlledRoll -= this.controlledRoll * 6.0 * delta;
            if (Math.abs(this.controlledRoll) < 0.01) this.controlledRoll = 0;
        }
        this.controlledRoll = THREE.MathUtils.clamp(this.controlledRoll, -0.45, 0.45);

        // --- 4. 3D Aerodynamic Translation ---
        // moves forward in the direction the nose points (yaw + pitch)
        const cosP = Math.cos(this.controlledPitch);
        const moveX = Math.sin(this.rotationY) * cosP * this.velocity * delta;
        const moveZ = Math.cos(this.rotationY) * cosP * this.velocity * delta;
        const moveY = Math.sin(this.controlledPitch) * this.velocity * delta;

        this.position.x += moveX;
        this.position.z += moveZ;
        this.position.y += moveY;

        // Ground collision floor barrier (no upper altitude limit)
        const minHeight = getTerrainHeight(this.position.x, this.position.z) + 1.4;
        if (this.position.y < minHeight) {
            this.position.y = minHeight;
        }

        // --- 5. Slope tilt effects ---
        // Sample terrain height in front and behind
        const forwardX = this.position.x + Math.sin(this.rotationY) * 1.2;
        const forwardZ = this.position.z + Math.cos(this.rotationY) * 1.2;
        const backwardX = this.position.x - Math.sin(this.rotationY) * 1.2;
        const backwardZ = this.position.z - Math.cos(this.rotationY) * 1.2;
        
        const hForward = getTerrainHeight(forwardX, forwardZ);
        const hBackward = getTerrainHeight(backwardX, backwardZ);
        const slopePitch = -Math.atan2(hForward - hBackward, 2.4);

        // Sample terrain height left and right
        const leftX = this.position.x + Math.sin(this.rotationY + Math.PI/2) * 1.2;
        const leftZ = this.position.z + Math.cos(this.rotationY + Math.PI/2) * 1.2;
        const rightX = this.position.x - Math.sin(this.rotationY + Math.PI/2) * 1.2;
        const rightZ = this.position.z - Math.cos(this.rotationY + Math.PI/2) * 1.2;
        
        const hLeft = getTerrainHeight(leftX, leftZ);
        const hRight = getTerrainHeight(rightX, rightZ);
        const slopeRoll = Math.atan2(hLeft - hRight, 2.4);

        // --- 6. Bank / Pitch Visual Tilts ---
        // Mix user pitch and terrain slope pitch (fade out slope pitch as they fly higher!)
        const heightFactor = Math.max(0, Math.min(1, (this.position.y - minHeight) / 5.0)); // 1 when high up, 0 when on ground
        const currentSlopePitch = THREE.MathUtils.lerp(slopePitch, 0, heightFactor);
        const currentSlopeRoll = THREE.MathUtils.lerp(slopeRoll, 0, heightFactor);

        const targetPitch = this.controlledPitch + currentSlopePitch;
        this.pitch += (targetPitch - this.pitch) * 0.12;

        const targetRoll = this.controlledRoll + currentSlopeRoll;
        this.roll += (targetRoll - this.roll) * 0.15;

        // Apply physical translations to 3D mesh
        const bob = Math.sin(time * 3.5) * 0.08;
        this.mesh.position.copy(this.position);
        this.mesh.position.y += bob;
        this.mesh.rotation.set(
            this.pitch,
            this.rotationY,
            this.roll,
            'YXZ'
        );

        if (this.thrusters && this.thrusters.length >= 2) {
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
        this.position.set(x, gy + 1.4, z); // snap at 1.4 height
        this.velocity = 0;
        this.rotationY = heading;
        this.steerAngle = 0;
        this.pitch = 0;
        this.roll = 0;
        this.mesh.position.copy(this.position);
        this.mesh.rotation.set(0, this.rotationY, 0);
    }
}
