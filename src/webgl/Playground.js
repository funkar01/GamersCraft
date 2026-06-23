import * as THREE from 'three';

export class Playground {
    constructor() {
        this.group = new THREE.Group();
        this.ramps = [];
        this.crates = [];
        this.projectZones = [];
        this.contactZone = null;
        
        // Callback handlers triggered on zone entry
        this.onEnterZone = () => {};
        
        this.init();
    }

    init() {
        // --- 1. Ground and Grid ---
        const groundGeom = new THREE.PlaneGeometry(100, 100);
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x111115,
            roughness: 0.9,
            metalness: 0.2
        });
        const ground = new THREE.Mesh(groundGeom, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.group.add(ground);

        // Ground grid lines
        const grid = new THREE.GridHelper(100, 50, 0x00f0ff, 0x1f2937);
        grid.position.y = 0.01;
        this.group.add(grid);

        // Tech Borders (limiting wall blocks)
        const wallMat = new THREE.MeshStandardMaterial({ color: 0x1e1e24, roughness: 0.5 });
        const addBorder = (x, z, w, d) => {
            const block = new THREE.Mesh(new THREE.BoxGeometry(w, 1.2, d), wallMat);
            block.position.set(x, 0.6, z);
            block.castShadow = true;
            block.receiveShadow = true;
            this.group.add(block);
        };

        // Outermost borders
        addBorder(0, 50, 100, 2);
        addBorder(0, -50, 100, 2);
        addBorder(50, 0, 2, 100);
        addBorder(-50, 0, 2, 100);

        // --- 2. Ramps Setup ---
        // A single steep ramp for testing jumps & physics near Welcome Zone
        this.createRamp(0, -10, 5, 12, 1.8);

        // --- 3. Dynamic Collidable Crates ---
        const crateGeom = new THREE.BoxGeometry(1.2, 1.2, 1.2);
        const crateMat = new THREE.MeshStandardMaterial({
            color: 0xffb700, // Gold boxes
            roughness: 0.4,
            metalness: 0.4
        });

        // Stack crates in a pyramid/wall structure (easy to knock over)
        const stackCoords = [
            // Row 1 (Bottom)
            { x: -5, z: -18 }, { x: -3.5, z: -18 }, { x: -2, z: -18 }, 
            { x: -5, z: -19.5 }, { x: -3.5, z: -19.5 },
            // Row 2 (Middle)
            { x: -4.25, z: -18, y: 1.2 }, { x: -2.75, z: -18, y: 1.2 },
            { x: -4.25, z: -19.5, y: 1.2 },
            // Row 3 (Top)
            { x: -3.5, z: -18.75, y: 2.4 }
        ];

        stackCoords.forEach(c => {
            const mesh = new THREE.Mesh(crateGeom, crateMat);
            mesh.position.set(c.x, c.y || 0.6, c.z);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            this.group.add(mesh);
            
            // Push to dynamic list
            this.crates.push({
                mesh: mesh,
                pos: mesh.position.clone(),
                vel: new THREE.Vector3(),
                rot: new THREE.Vector3(),
                rotVel: new THREE.Vector3(),
                width: 1.2,
                height: 1.2,
                depth: 1.2,
                mass: 1.0
            });
        });

        // --- 4. Interactive Zone Signs (Canvas Textures) ---
        // Zone 2: Profile (About Me)
        this.createSignBoard(
            "PLAYER 1 // BIO",
            [
                "NAME: BHANU",
                "CLASS: CREATIVE TECHNOLOGIST & SIM DEV",
                "BIO: Passionate about games, graphics,",
                "and mechanical vector math systems.",
                "I craft real-time physics sandbox",
                "modules that compile instantly on the client."
            ],
            -18, 12, 10, 6, 0x00f0ff
        );

        // Zone 4: Skill Trees
        this.createSignBoard(
            "SYSTEMS // TECHNOLOGY FOREST",
            [
                "ENGINES: Unity, Unreal 5, Godot",
                "LANGUAGES: C++, C#, JS, GLSL, Python",
                "STANDARDS: WebGL, Three.js, Web Audio",
                "TOOLS: Blender, Git, Vite, Rollup"
            ],
            18, 18, 8, 5, 0x54b334
        );

        // --- 5. Stylized Low-Poly Pine Trees (Skill Forest) ---
        const treeBaseX = 25;
        const treeBaseZ = 20;
        const treeTrunkGeom = new THREE.CylinderGeometry(0.2, 0.3, 1.5, 6);
        const treeLeavesGeom1 = new THREE.ConeGeometry(1.4, 2.0, 6);
        const treeLeavesGeom2 = new THREE.ConeGeometry(1.0, 1.5, 6);
        
        const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, flatShading: true });
        const leavesMat = new THREE.MeshStandardMaterial({ color: 0x277825, flatShading: true });

        for (let i = 0; i < 9; i++) {
            const tree = new THREE.Group();
            
            const trunk = new THREE.Mesh(treeTrunkGeom, trunkMat);
            trunk.position.y = 0.75;
            trunk.castShadow = true;
            tree.add(trunk);

            const leaves1 = new THREE.Mesh(treeLeavesGeom1, leavesMat);
            leaves1.position.y = 2.2;
            leaves1.castShadow = true;
            tree.add(leaves1);

            const leaves2 = new THREE.Mesh(treeLeavesGeom2, leavesMat);
            leaves2.position.y = 3.2;
            leaves2.castShadow = true;
            tree.add(leaves2);
            
            // Random distribution
            const offsetAngle = (i / 9) * Math.PI * 2;
            const radius = 4 + Math.random() * 4;
            const tx = treeBaseX + Math.cos(offsetAngle) * radius;
            const tz = treeBaseZ + Math.sin(offsetAngle) * radius;
            
            tree.position.set(tx, 0, tz);
            this.group.add(tree);
        }

        // --- 6. Project Gateways (Zone 3) ---
        // Neon Racer Gate (Green, -15, -30)
        this.createProjectGate("neon", -16, -32, 0x54b334);
        
        // Void Walker Gate (Pink, 0, -32)
        this.createProjectGate("void", 0, -32, 0xff0055);
        
        // Cyber Defense Gate (Cyan, 16, -32)
        this.createProjectGate("defense", 16, -32, 0x00f0ff);

        // --- 7. Satellite Communications Tower (Zone 5: Contact) ---
        const towerGroup = new THREE.Group();
        const baseCone = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.6, 6, 8), wallMat);
        baseCone.position.y = 3.0;
        baseCone.castShadow = true;
        towerGroup.add(baseCone);

        // Rotating Satellite Dish
        this.dishMesh = new THREE.Group();
        this.dishMesh.position.y = 6.0;
        
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.5), wallMat);
        arm.position.y = 0.75;
        this.dishMesh.add(arm);
        
        const bowl = new THREE.Mesh(
            new THREE.CylinderGeometry(1.6, 0.4, 0.8, 12, 1, true),
            new THREE.MeshStandardMaterial({ color: 0x5c8a8f, side: THREE.DoubleSide, flatShading: true })
        );
        bowl.position.y = 1.2;
        bowl.rotation.x = Math.PI / 3; // slanted
        this.dishMesh.add(bowl);

        const receptor = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.6, 4), new THREE.MeshBasicMaterial({ color: 0x00f0ff }));
        receptor.position.set(0, 1.8, 0.3);
        this.dishMesh.add(receptor);

        towerGroup.add(this.dishMesh);
        towerGroup.position.set(0, 0, 35); // back center area
        this.group.add(towerGroup);

        // Glowing target contact trigger ring
        const ringGeom = new THREE.RingGeometry(3.5, 3.7, 32);
        ringGeom.rotateX(-Math.PI / 2);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x00f0ff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.6
        });
        const contactRing = new THREE.Mesh(ringGeom, ringMat);
        contactRing.position.set(0, 0.05, 35);
        this.group.add(contactRing);

        this.contactZone = {
            center: new THREE.Vector3(0, 0, 35),
            radius: 3.8
        };
    }

    createRamp(x, z, width, depth, height) {
        const angle = Math.atan2(height, depth);
        const rampGroup = new THREE.Group();
        
        const geom = new THREE.BoxGeometry(width, 0.2, depth);
        const mat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 });
        const board = new THREE.Mesh(geom, mat);
        
        // Center rotation around bottom edge
        board.position.set(0, height / 2, 0);
        board.rotation.x = angle;
        board.castShadow = true;
        board.receiveShadow = true;
        rampGroup.add(board);
        
        rampGroup.position.set(x, 0, z);
        this.group.add(rampGroup);

        this.ramps.push({
            position: new THREE.Vector3(x, 0, z),
            width: width,
            depth: depth,
            height: height,
            angle: angle
        });
    }

    createSignBoard(titleText, bodyLines, x, z, w, h, neonColor) {
        const signGroup = new THREE.Group();
        
        // Pillars
        const pillGeom = new THREE.CylinderGeometry(0.1, 0.1, 4, 8);
        const pillMat = new THREE.MeshStandardMaterial({ color: 0x1f2937 });
        
        const leftPill = new THREE.Mesh(pillGeom, pillMat);
        leftPill.position.set(-w / 2 + 0.3, 2, 0);
        signGroup.add(leftPill);
        
        const rightPill = new THREE.Mesh(pillGeom, pillMat);
        rightPill.position.set(w / 2 - 0.3, 2, 0);
        signGroup.add(rightPill);

        // Draw Canvas texture
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');

        // Draw background
        ctx.fillStyle = '#0f0f15';
        ctx.fillRect(0, 0, 512, 256);
        
        // Draw neon border outline
        ctx.strokeStyle = `#${neonColor.toString(16).padStart(6, '0')}`;
        ctx.lineWidth = 10;
        ctx.strokeRect(5, 5, 502, 246);
        
        // Header Text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 32px Courier New';
        ctx.textAlign = 'center';
        ctx.fillText(titleText, 256, 50);

        // Body Text
        ctx.fillStyle = '#94a3b8';
        ctx.font = '20px Courier New';
        bodyLines.forEach((line, idx) => {
            ctx.fillText(line, 256, 100 + idx * 28);
        });

        const texture = new THREE.CanvasTexture(canvas);
        const boardGeom = new THREE.PlaneGeometry(w, h);
        const boardMat = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
        });
        const boardMesh = new THREE.Mesh(boardGeom, boardMat);
        boardMesh.position.y = 4.0;
        signGroup.add(boardMesh);

        signGroup.position.set(x, 0, z);
        this.group.add(signGroup);
    }

    createProjectGate(name, x, z, colorHex) {
        const gateGroup = new THREE.Group();
        const frameMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.5 });
        
        const leftPost = new THREE.Mesh(new THREE.BoxGeometry(0.6, 5, 0.6), frameMat);
        leftPost.position.set(-2, 2.5, 0);
        leftPost.castShadow = true;
        gateGroup.add(leftPost);

        const rightPost = new THREE.Mesh(new THREE.BoxGeometry(0.6, 5, 0.6), frameMat);
        rightPost.position.set(2, 2.5, 0);
        rightPost.castShadow = true;
        gateGroup.add(rightPost);

        const crossBar = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.6, 0.6), frameMat);
        crossBar.position.set(0, 5.0, 0);
        crossBar.castShadow = true;
        gateGroup.add(crossBar);

        // Glowing Arch Sign (Canvas text)
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0a0a0c';
        ctx.fillRect(0, 0, 256, 64);
        ctx.fillStyle = `#${colorHex.toString(16).padStart(6, '0')}`;
        ctx.font = 'bold 24px Courier New';
        ctx.textAlign = 'center';
        ctx.fillText(name.toUpperCase(), 128, 40);

        const texture = new THREE.CanvasTexture(canvas);
        const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(3, 0.8), new THREE.MeshBasicMaterial({ map: texture }));
        signMesh.position.set(0, 4.0, 0.35);
        gateGroup.add(signMesh);

        // Glowing trigger archway frame inside
        const triggerGeom = new THREE.PlaneGeometry(3.4, 4.4);
        const triggerMat = new THREE.MeshBasicMaterial({
            color: colorHex,
            transparent: true,
            opacity: 0.15,
            side: THREE.DoubleSide
        });
        const triggerMesh = new THREE.Mesh(triggerGeom, triggerMat);
        triggerMesh.position.set(0, 2.2, 0);
        gateGroup.add(triggerMesh);

        gateGroup.position.set(x, 0, z);
        this.group.add(gateGroup);

        this.projectZones.push({
            name: name,
            center: new THREE.Vector3(x, 0, z),
            radius: 2.5
        });
    }

    update(delta, time, rover) {
        // Rotate satellite dish dish
        if (this.dishMesh) {
            this.dishMesh.rotation.y = time * 0.2;
        }

        // --- 1. Dynamic Physics Collision for Stacked Crates ---
        const gLimit = 0.6; // Ground height limit
        const grav = 9.8;
        
        this.crates.forEach(c => {
            // Apply gravity if falling
            if (c.pos.y > gLimit) {
                c.vel.y -= grav * delta;
            } else {
                c.pos.y = gLimit;
                c.vel.y = 0;
            }

            // Apply friction/decay to speeds
            c.vel.x *= 0.94;
            c.vel.z *= 0.94;
            c.rotVel.y *= 0.94;

            // Apply displacement
            c.pos.addScaledVector(c.vel, delta);
            c.mesh.position.copy(c.pos);

            // Apply rotation
            c.mesh.rotation.y += c.rotVel.y * delta;

            // Border clamp crates
            const borderLimit = 48.0;
            c.pos.x = THREE.MathUtils.clamp(c.pos.x, -borderLimit, borderLimit);
            c.pos.z = THREE.MathUtils.clamp(c.pos.z, -borderLimit, borderLimit);

            // --- Rover collision check ---
            if (rover) {
                const dist = c.pos.distanceTo(rover.position);
                const collisionThreshold = 1.4; // Rover width/2 + crate width/2 approx
                
                if (dist < collisionThreshold) {
                    // Collision vector
                    const pushDir = c.pos.clone().sub(rover.position).setY(0).normalize();
                    const impactForce = Math.abs(rover.velocity) * 1.5;
                    
                    if (impactForce > 0.5) {
                        c.vel.x = pushDir.x * impactForce * 1.2;
                        c.vel.z = pushDir.z * impactForce * 1.2;
                        c.rotVel.y = (Math.random() - 0.5) * impactForce * 6.0;
                        
                        // Small bounce up
                        if (c.pos.y === gLimit) {
                            c.vel.y = impactForce * 0.4;
                        }
                    }
                }
            }
        });

        // --- 2. Interactive Trigger Detections ---
        if (rover) {
            let activeZone = null;
            
            // Check Projects Zones
            for (const zone of this.projectZones) {
                const dist = rover.position.distanceTo(zone.center);
                if (dist < zone.radius) {
                    activeZone = { type: 'project', name: zone.name };
                    break;
                }
            }

            // Check Contact Zone
            if (!activeZone && this.contactZone) {
                const dist = rover.position.distanceTo(this.contactZone.center);
                if (dist < this.contactZone.radius) {
                    activeZone = { type: 'contact' };
                }
            }

            // Fire callback
            this.onEnterZone(activeZone);
        }
    }
}
