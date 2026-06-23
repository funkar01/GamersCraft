// Procedural Terrain Height Equation
export function getTerrainHeight(x, z) {
    const dist = Math.sqrt(x * x + z * z);
    
    // Spawning pad (center) is kept completely flat
    if (dist <= 7.5) {
        return 0;
    }

    // Rolling hills math (low frequency waves for main hills + higher frequency ripples)
    let h = Math.sin(x * 0.07) * Math.cos(z * 0.07) * 2.8; // major hills
    h += Math.sin(x * 0.22) * Math.cos(z * 0.22) * 0.55;    // medium ridges
    h += Math.sin(x * 0.45) * Math.cos(z * 0.45) * 0.15;    // minor soil bumps

    // Smooth transition dampening (dampens height near spawner circle)
    const damp = Math.min((dist - 7.5) / 12.0, 1.0);
    return h * damp;
}
