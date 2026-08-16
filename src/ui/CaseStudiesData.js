export const caseStudies = [
    {
        id: 'the-tanks',
        title: 'the Tanks',
        disciplines: 'GAME • UNITY 3D • WEBGL • MULTIPLAYER',
        image: 'images/tanks_dp.png',
        tagline: 'Multiplayer tactical tank combat game built with Unity 3D, deterministic ballistic physics, and real-time WebGL networking.',
        category: 'game-dev',
        categoryLabel: 'Game Engine',
        year: '2025',
        engine: 'Unity 3D // WebGL',
        languages: ['C#', 'HLSL', 'Networking'],
        accentColor: '#ffb700',
        accentGlow: 'rgba(255, 183, 0, 0.35)',
        stats: [
            { label: 'Platform', value: 'WebGL / Standalone' },
            { label: 'Physics', value: 'Deterministic 60Hz' },
            { label: 'Networking', value: 'Multiplayer Sync' },
            { label: 'Engine', value: 'Unity 3D' }
        ],
        overview: 'An engaging multiplayer tactical tank combat experience featuring realistic projectile trajectories, arena collision mechanics, and low-latency browser networking in Unity 3D.',
        challenge: 'Synchronizing high-speed ballistic physics and vehicle suspension across networked clients with minimal latency and jitter in WebGL.',
        solution: 'Implemented client-side prediction, tick-based reconciliation, and custom lightweight particle impact shaders.',
        technicalHighlights: [
            'Real-time multiplayer synchronization with client-side interpolation.',
            'Deterministic ballistic trajectory physics and explosive blast radiuses.',
            'Custom vehicle suspension and turret tracking mechanics.',
            'Optimized low-draw-call assets for smooth 60 FPS WebGL execution.'
        ],
        codeSnippet: `// Ballistic Shell Trajectory & Network Tick Sync
public void FireShell(Vector3 muzzlePos, Vector3 fireVelocity, int fireTick) {
    GameObject shell = ObjectPool.Spawn(shellPrefab, muzzlePos, Quaternion.LookRotation(fireVelocity));
    ShellController sc = shell.GetComponent<ShellController>();
    sc.Initialize(fireVelocity, fireTick, OnShellImpact);
    NetworkManager.SendFireEvent(muzzlePos, fireVelocity, fireTick);
}`,
        tags: ['Unity 3D', 'C#', 'WebGL', 'Multiplayer', 'Physics Sim'],
        githubUrl: 'https://github.com',
        liveUrl: '#contact'
    },
    {
        id: 'helo',
        title: 'HELO',
        disciplines: 'SIMULATION • UNITY • VR • META QUEST',
        image: 'images/helo_dp.jpg',
        tagline: 'Immersive helicopter flight physics and VR cockpit simulation engineered for Meta Quest in Unity 3D.',
        category: 'xr-spatial',
        categoryLabel: 'Virtual Reality',
        year: '2025',
        engine: 'Unity 3D // Meta OpenXR',
        languages: ['C#', 'HLSL', 'OpenXR SDK'],
        accentColor: '#00f0ff',
        accentGlow: 'rgba(0, 240, 255, 0.35)',
        stats: [
            { label: 'Platform', value: 'Meta Quest 3 / Pro' },
            { label: 'Frame Rate', value: '90 FPS Lock' },
            { label: 'Controls', value: '6DoF VR Cockpit' },
            { label: 'SDK', value: 'Unity OpenXR' }
        ],
        overview: 'A high-fidelity VR flight simulation placing pilots inside an interactive 6DoF helicopter cockpit with real-time aerodynamics, cyclic/collective controls, and spatial audio feedback.',
        challenge: 'Accurate rotor blade aerodynamics, torque physics, and high-performance cockpit rendering maintaining fixed 90 FPS on standalone Quest hardware.',
        solution: 'Blade element momentum theory calculations combined with Single-Pass Stereo Instanced rendering and dynamic foveation.',
        technicalHighlights: [
            'Interactive 6DoF virtual cockpit with tactile cyclic, collective, and throttle interaction.',
            'Aerodynamic simulation modeling ground effect, translational lift, and vortex ring state.',
            'Spatialized binaural engine acoustics and rotor blade slap harmonics.',
            'Zero-reprojection 90 FPS performance on standalone Meta Quest via SRP batching.'
        ],
        codeSnippet: `// Helicopter Aerodynamic Lift & Torque Calculation
public void CalculateRotorPhysics(float collectiveInput, float cyclicPitch, float cyclicRoll, float pedalYaw) {
    Vector3 mainRotorThrust = transform.up * (baseLift * collectiveInput * airDensityRatio);
    Vector3 cyclicTorque = new Vector3(cyclicPitch * pitchSensitivity, pedalYaw * tailRotorAuthority, -cyclicRoll * rollSensitivity);
    rb.AddForceAtPosition(mainRotorThrust, mainRotorHub.position, ForceMode.Force);
    rb.AddTorque(transform.TransformDirection(cyclicTorque), ForceMode.Force);
}`,
        tags: ['Unity', 'VR', 'Meta Quest', 'OpenXR', 'Flight Simulation'],
        githubUrl: 'https://github.com',
        liveUrl: '#contact'
    },
    {
        id: 'void-walker',
        title: 'Void Walker',
        disciplines: 'GAME DESIGN • GODOT • PHYSICS • SHADERS',
        image: 'images/project_space.png',
        tagline: 'Dimensional shift platformer exploring non-Euclidean geometry and dynamic gravity tensor fields.',
        category: 'game-dev',
        categoryLabel: 'Game Engine',
        year: '2024',
        engine: 'Godot 4.3 // C#',
        languages: ['C#', 'GLSL'],
        accentColor: '#ff0055',
        accentGlow: 'rgba(255, 0, 85, 0.35)',
        stats: [
            { label: 'Physics Frame', value: '240 Hz' },
            { label: 'Frame Rate', value: '144 FPS Lock' },
            { label: 'Custom Shaders', value: '18 GLSL' },
            { label: 'Engine', value: 'Godot 4.3' }
        ],
        overview: 'An atmospheric puzzle platformer where players warp between overlapping spatial dimensions with variable physical constants.',
        challenge: 'Simultaneous dual-dimension rendering and momentum vector preservation across spatial thresholds.',
        solution: 'Engineered custom stencil-masking GLSL shaders combined with dual-world collision matrices.',
        technicalHighlights: [
            'Dual-phase stencil buffer rendering for portal windows.',
            'Vector tensor gravitational fields that curve player trajectories.',
            'Screen-space chromatic aberration reacting to velocity shifts.',
            'Dynamic proximity-based audio mixing engine.'
        ],
        codeSnippet: `// Gravitational Tensor Anomaly Calculation
public Vector2 CalculateGravity(Vector2 pos) {
    Vector2 net = BaseGravity;
    foreach (var a in Anomalies) {
        Vector2 diff = a.Position - pos;
        float d2 = Mathf.Max(diff.LengthSquared(), 0.05f);
        if (d2 < a.RadiusSq) net += diff.Normalized() * (a.Mass / d2);
    }
    return net;
}`,
        tags: ['Godot 4.3', 'C#', 'GLSL Shaders', 'Non-Euclidean'],
        githubUrl: 'https://github.com',
        liveUrl: '#contact'
    },
    {
        id: 'cyber-defense',
        title: 'Cyber Defense',
        disciplines: 'UNREAL ENGINE 5 • C++ • AI • VOLUMETRICS',
        image: 'images/project_neon.png',
        tagline: 'Procedural tactical mainframe defense with multi-threaded C++ AI agent waves in Unreal 5.',
        category: 'game-dev',
        categoryLabel: 'Game Engine',
        year: '2024',
        engine: 'Unreal Engine 5.4',
        languages: ['C++', 'Niagara VFX'],
        accentColor: '#00f0ff',
        accentGlow: 'rgba(0, 240, 255, 0.35)',
        stats: [
            { label: 'Active AI', value: '1,500+ Agents' },
            { label: 'Render Target', value: '60 FPS 4K' },
            { label: 'Particles', value: '500K / sec' },
            { label: 'Multithreading', value: 'Async Tasks' }
        ],
        overview: 'A procedural tactical defense simulation in Unreal Engine 5 featuring massive autonomous agent waves and destructible mainframe grids.',
        challenge: 'Simulating over 1,500 pathfinding agents in real-time without CPU game thread bottlenecks.',
        solution: 'Multi-threaded Mass Entity C++ flow-field navigation coupled with GPU-driven Niagara particle computation.',
        technicalHighlights: [
            'Multi-threaded C++ flow-field steering for 1,500+ dynamic entities.',
            'Procedurally generated hexagonal mainframe terrain via HISM.',
            'Volumetric laser diffraction beams with real-time illumination.',
            '3D world-space holographic UI shaders with depth buffer clipping.'
        ],
        codeSnippet: `// Parallel Flow-Field Agent Compute
void UMainframeFlowField::ComputeVelocities_Parallel(TArrayView<FAgentData> Agents, float DT) {
    ParallelFor(Agents.Num(), [this, &Agents, DT](int32 i) {
        FAgentData& a = Agents[i];
        FVector2D flow = SampleFlowField(WorldToGrid(a.Position));
        a.Velocity = FMath::Vector2DInterpTo(a.Velocity, flow * a.MaxSpeed, DT, a.Steering);
    });
}`,
        tags: ['Unreal Engine 5', 'C++', 'Niagara VFX', 'Multi-Threading'],
        githubUrl: 'https://github.com',
        liveUrl: '#contact'
    },
    {
        id: 'xeno-explorer',
        title: 'Xeno-Explorer 3D',
        disciplines: 'WEB • THREE.JS • 3D • PROCEDURAL AUDIO',
        image: 'images/project_space.png',
        tagline: 'Real-time browser 3D universe with 35,000 instanced flora, drone flight physics, and procedural audio.',
        category: 'webgl-shaders',
        categoryLabel: 'WebGL & Three.js',
        year: '2025',
        engine: 'Three.js // WebGL 2.0',
        languages: ['JavaScript', 'Web Audio API'],
        accentColor: '#54b334',
        accentGlow: 'rgba(84, 179, 52, 0.35)',
        stats: [
            { label: 'Instanced Grass', value: '35,000 Blades' },
            { label: 'Active Foliage', value: '15,000+ Quads' },
            { label: 'Sound Engine', value: 'Procedural Synth' },
            { label: 'Bundle Size', value: '< 700 KB gzip' }
        ],
        overview: 'The browser-native 3D world engine powering GamersCraft, featuring alien terrain physics, shatterable crystals, instanced flora, and procedural audio synthesis.',
        challenge: 'Console-grade fidelity and rock-solid 60 FPS in lightweight, dependency-free WebGL.',
        solution: 'Single-draw-call InstancedMesh pipelines combined with frustum distance culling and a zero-asset procedural Web Audio synthesizer.',
        technicalHighlights: [
            '35,000 blade instanced grass system with procedural wind displacement.',
            'Hovercraft drone flight physics with banking springs and ground clamping.',
            'Multi-oscillator Web Audio synthesizer with frequency modulation.',
            'Destructible crystal matrices with impulse vector scattering.'
        ],
        codeSnippet: `// Web Audio Harmonic Synthesizer
playHarmonicChord(rootFreq, type = 'sine') {
    [1.0, 1.25, 1.5, 1.875].forEach(ratio => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(rootFreq * ratio, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 3.5);
        osc.connect(gain); gain.connect(this.masterGain);
        osc.start(); osc.stop(this.ctx.currentTime + 3.6);
    });
}`,
        tags: ['Three.js', 'WebGL 2.0', 'Web Audio API', 'InstancedMesh'],
        githubUrl: 'https://github.com',
        liveUrl: '#game'
    },
    {
        id: 'aetheris-gpgpu',
        title: 'Aetheris GPGPU',
        disciplines: 'CREATIVE TECH • GLSL GPGPU • PARTICLES • AUDIO',
        image: 'images/project_space.png',
        tagline: 'Real-time 250,000 particle simulation computed on the GPU with audio-reactive 3D curl noise.',
        category: 'creative-tech',
        categoryLabel: 'Creative Tech',
        year: '2025',
        engine: 'WebGL 2.0 // GPGPU',
        languages: ['GLSL', 'JavaScript'],
        accentColor: '#ffb700',
        accentGlow: 'rgba(255, 183, 0, 0.35)',
        stats: [
            { label: 'Particles', value: '250,000' },
            { label: 'Compute Unit', value: 'GPU FBO Texture' },
            { label: 'Framerate', value: '60 FPS Lock' },
            { label: 'FFT Latency', value: '< 5 ms' }
        ],
        overview: 'A GPU-accelerated particle system computing 250,000 independent particle positions in fragment shaders via Floating-Point Framebuffer Objects.',
        challenge: 'Updating and rendering hundreds of thousands of particles in the browser without CPU overhead.',
        solution: 'Ping-pong Float32 render targets computing curl noise and mouse repulsion entirely on the GPU.',
        technicalHighlights: [
            'Ping-pong Float32Array texture pipeline updating 250,000 particles at 60 FPS.',
            '3D Simplex Curl Noise field generating fluid-like vortices.',
            'Interactive optical mouse/touch repulsion force with falloff damping.',
            'FFT audio frequency analyzer binding bass frequencies to particle velocity.'
        ],
        codeSnippet: `// GPGPU Velocity Fragment Shader
void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 pos = texture2D(texturePosition, uv).xyz;
    vec3 vel = texture2D(textureVelocity, uv).xyz;
    vel += computeCurl(pos * 0.08 + time * 0.1) * 0.015;
    vec3 toMouse = pos - mousePosition;
    float d = length(toMouse);
    if (d < mouseRadius && d > 0.01) vel += (toMouse / d) * (1.0 - d / mouseRadius) * 0.08;
    gl_FragColor = vec4(vel * 0.96, 1.0);
}`,
        tags: ['WebGL 2.0', 'GLSL GPGPU', 'Curl Noise', 'Audio Reactive'],
        githubUrl: 'https://github.com',
        liveUrl: '#labs'
    }
];
