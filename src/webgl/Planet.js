import * as THREE from 'three';

export class PlanetCartridge {
    constructor() {
        this.group = new THREE.Group();
        this.terrain = null;
        this.water = null;
        this.clouds = [];
        this.ship = null;
        this.landmarks = {};
        
        // Target camera views for cinematic pathing
        this.targetCamPos = new THREE.Vector3(0, 15, 25);
        this.targetCamLook = new THREE.Vector3(0, 0, 0);
        
        this.init();
    }

    init() {
        // --- 1. Procedural Terrain ---
        const terrainGeom = new THREE.IcosahedronGeometry(6, 3);
        
        // Jitter vertices to create mountains & valleys
        const posAttr = terrainGeom.attributes.position;
        const colorArr = new Float32Array(posAttr.count * 3);
        
        const v = new THREE.Vector3();
        for (let i = 0; i < posAttr.count; i++) {
            v.fromBufferAttribute(posAttr, i);
            
            // Generate simple noise-like height map using sine/cos frequencies
            const noise = Math.sin(v.x * 0.5) * Math.cos(v.y * 0.5) * Math.sin(v.z * 0.5) * 1.5;
            
            // Only apply height above a certain threshold (land vs mountains)
            let heightOffset = noise;
            if (noise > 0.5) {
                heightOffset += (noise - 0.5) * 1.2; // Extra height for mountains
            }
            
            v.normalize().multiplyScalar(6 + heightOffset);
            posAttr.setXYZ(i, v.x, v.y, v.z);

            // Procedural colors based on vertex radius (height)
            const dist = v.length();
            let color = new THREE.Color(0x277825); // Land Green
            
            if (dist < 5.8) {
                color = new THREE.Color(0x35632a); // Deep Green / Shore
            } else if (dist > 6.7) {
                color = new THREE.Color(0x5c8a8f); // Stone Gray / Blue Slate
            } else if (dist > 7.1) {
                color = new THREE.Color(0xffffff); // Snowy peaks
            }
            
            colorArr[i * 3] = color.r;
            colorArr[i * 3 + 1] = color.g;
            colorArr[i * 3 + 2] = color.b;
        }
        
        terrainGeom.setAttribute('color', new THREE.BufferAttribute(colorArr, 3));
        terrainGeom.computeVertexNormals();

        const terrainMat = new THREE.MeshStandardMaterial({
            vertexColors: true,
            roughness: 0.8,
            metalness: 0.1,
            flatShading: true
        });
        
        this.terrain = new THREE.Mesh(terrainGeom, terrainMat);
        this.terrain.castShadow = true;
        this.terrain.receiveShadow = true;
        this.group.add(this.terrain);

        // --- 2. Ocean water sphere ---
        const waterGeom = new THREE.SphereGeometry(5.85, 32, 32);
        const waterMat = new THREE.MeshStandardMaterial({
            color: 0x00f0ff,
            transparent: true,
            opacity: 0.65,
            roughness: 0.2,
            metalness: 0.8,
            emissive: 0x005c8a,
            emissiveIntensity: 0.4
        });
        this.water = new THREE.Mesh(waterGeom, waterMat);
        this.group.add(this.water);

        // --- 3. Floating Clouds ---
        const cloudGroup = new THREE.Group();
        const cloudMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.9,
            flatShading: true,
            transparent: true,
            opacity: 0.85
        });

        for (let i = 0; i < 8; i++) {
            const singleCloud = new THREE.Group();
            const boxesCount = 3 + Math.floor(Math.random() * 3);
            
            for (let j = 0; j < boxesCount; j++) {
                const boxGeom = new THREE.BoxGeometry(
                    1 + Math.random() * 1.5,
                    0.8 + Math.random() * 0.5,
                    1 + Math.random() * 1.2
                );
                const cloudBox = new THREE.Mesh(boxGeom, cloudMat);
                cloudBox.position.set(j * 0.8 - (boxesCount * 0.3), Math.random() * 0.2 - 0.1, Math.random() * 0.2 - 0.1);
                singleCloud.add(cloudBox);
            }
            
            // Orbit position
            const u = Math.random();
            const w = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * w - 1.0);
            const radius = 8 + Math.random() * 1.5;
            
            singleCloud.position.set(
                radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.sin(phi) * Math.sin(theta),
                radius * Math.cos(phi)
            );
            
            singleCloud.lookAt(0, 0, 0);
            cloudGroup.add(singleCloud);
            this.clouds.push(singleCloud);
        }
        this.group.add(cloudGroup);

        // --- 4. Project Landmarks ---
        // Landmark A: Neon Spire (Neon Racer) - located at North Pole
        const spireGeom = new THREE.ConeGeometry(0.5, 3, 5);
        const spireMat = new THREE.MeshStandardMaterial({
            color: 0x54b334,
            emissive: 0x54b334,
            emissiveIntensity: 1.5,
            flatShading: true
        });
        const spire = new THREE.Mesh(spireGeom, spireMat);
        spire.position.set(0, 7.2, 0); // Spans up from North Pole
        this.terrain.add(spire);
        this.landmarks['neon'] = spire;

        // Landmark B: Void Crystal (Void Walker) - located on Equator East
        const cryGeom = new THREE.OctahedronGeometry(0.8, 0);
        const cryMat = new THREE.MeshStandardMaterial({
            color: 0xff0055,
            emissive: 0xff0055,
            emissiveIntensity: 1.8,
            flatShading: true
        });
        const crystal = new THREE.Mesh(cryGeom, cryMat);
        crystal.position.set(7.0, 0, 0);
        this.terrain.add(crystal);
        this.landmarks['void'] = crystal;

        // Landmark C: Mainframe Castle (Cyber Defense) - located Equator West Front
        const castleGroup = new THREE.Group();
        const castleMat = new THREE.MeshStandardMaterial({
            color: 0x00f0ff,
            emissive: 0x00f0ff,
            emissiveIntensity: 1.0,
            flatShading: true
        });
        
        // Draw voxel castle structures
        const coreTower = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2, 0.8), castleMat);
        coreTower.position.set(0, 1, 0);
        castleGroup.add(coreTower);
        
        for (let i = 0; i < 4; i++) {
            const wall = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.2, 0.4), castleMat);
            const angle = (i / 4) * Math.PI * 2;
            wall.position.set(Math.cos(angle) * 0.7, 0.6, Math.sin(angle) * 0.7);
            castleGroup.add(wall);
        }
        
        castleGroup.position.set(-5.0, 3.5, 3.5);
        castleGroup.lookAt(0, 0, 0);
        castleGroup.rotateX(Math.PI / 2); // align outward
        this.terrain.add(castleGroup);
        this.landmarks['defense'] = castleGroup;

        // --- 5. Orbiting Spaceship ---
        this.ship = new THREE.Group();
        const fuselage = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.8, 4), new THREE.MeshStandardMaterial({ color: 0xffb700, flatShading: true }));
        fuselage.rotateX(Math.PI / 2);
        this.ship.add(fuselage);
        
        const wings = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 0.3), new THREE.MeshStandardMaterial({ color: 0xff3c00 }));
        wings.position.set(0, 0, -0.1);
        this.ship.add(wings);
        
        this.ship.position.set(9, 0, 0);
        this.group.add(this.ship);

        // Scale group down initially
        this.group.scale.set(0.001, 0.001, 0.001);
    }

    focusLandmark(name) {
        // Set camera target positions based on landmark
        if (name === 'neon') {
            // Mount Neon spires (Top)
            this.targetCamPos.set(0, 16, 5);
            this.targetCamLook.set(0, 5, 0);
        } else if (name === 'void') {
            // Void Crystal (Right East)
            this.targetCamPos.set(13, 1, 6);
            this.targetCamLook.set(6, 0, 0);
        } else if (name === 'defense') {
            // Mainframe Keep (Front Left)
            this.targetCamPos.set(-11, 7, 10);
            this.targetCamLook.set(-4, 3, 3);
        } else {
            // Reset to global orbit overview
            this.targetCamPos.set(0, 15, 25);
            this.targetCamLook.set(0, 0, 0);
        }
    }

    update(delta, time, mouse) {
        // Spin the planet slowly
        this.terrain.rotation.y = time * 0.1;
        this.terrain.rotation.x = Math.sin(time * 0.05) * 0.08;
        
        // Orbit the ship around the planet
        const shipAngle = time * 0.8;
        const shipRadius = 10;
        this.ship.position.set(
            Math.cos(shipAngle) * shipRadius,
            Math.sin(shipAngle * 0.3) * 3, // gentle oscillation
            Math.sin(shipAngle) * shipRadius
        );
        
        // Align spaceship forward tangent
        const shipTangent = new THREE.Vector3(
            -Math.sin(shipAngle) * shipRadius,
            Math.cos(shipAngle * 0.3) * 0.9,
            Math.cos(shipAngle) * shipRadius
        ).normalize();
        
        const shipTarget = this.ship.position.clone().add(shipTangent);
        this.ship.lookAt(shipTarget);

        // Slow hover animation for clouds
        this.clouds.forEach((cloud, index) => {
            cloud.position.y += Math.sin(time + index) * 0.002;
        });

        // Intercept/Lerp camera position smoothly for cinematic pathing
        if (this.manager && this.manager.camera) {
            const cam = this.manager.camera;
            cam.position.lerp(this.targetCamPos, 0.04);
            
            // Create a target vector and lerp lookAt
            const currentLook = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion).add(cam.position);
            const targetLook = this.targetCamLook.clone();
            currentLook.lerp(targetLook, 0.04);
            cam.lookAt(currentLook);
        }
    }

    transitionIn() {
        return new Promise(resolve => {
            const start = performance.now();
            const duration = 800;
            
            this.targetCamPos.set(0, 15, 25);
            this.targetCamLook.set(0, 0, 0);

            const animate = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                
                const scale = Math.sin(progress * Math.PI * 0.5);
                this.group.scale.set(scale, scale, scale);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            requestAnimationFrame(animate);
        });
    }

    transitionOut() {
        return new Promise(resolve => {
            const start = performance.now();
            const duration = 500;
            
            const animate = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                
                const scale = 1 - progress;
                this.group.scale.set(scale, scale, scale);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            requestAnimationFrame(animate);
        });
    }
}
