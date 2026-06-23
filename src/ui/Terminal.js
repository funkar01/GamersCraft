import { audio } from './AudioEngine.js';

export class Terminal {
    constructor(elementId, options = {}) {
        this.container = document.getElementById(elementId);
        if (!this.container) return;
        
        this.onCommand = options.onCommand || (() => {});
        this.inputLine = null;
        this.history = [];
        this.historyIndex = -1;
        
        this.matrixInterval = null;
        this.lifeInterval = null;
        this.lifeGrid = null;
        
        this.init();
    }

    init() {
        this.container.innerHTML = `
            <div class="terminal-header">
                <span class="terminal-title">SYSTEM_DIAGNOSTICS v1.0.4</span>
                <div class="terminal-buttons">
                    <span class="term-btn term-minimize" title="Minimize">_</span>
                    <span class="term-btn term-close" title="Disable">×</span>
                </div>
            </div>
            <div class="terminal-body">
                <div class="terminal-output"></div>
                <div class="terminal-input-container">
                    <span class="terminal-prompt">C:\\></span>
                    <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false" />
                </div>
            </div>
        `;

        this.output = this.container.querySelector('.terminal-output');
        this.input = this.container.querySelector('.terminal-input');
        
        // Listeners
        this.input.addEventListener('keydown', (e) => this.handleInput(e));
        this.container.addEventListener('click', () => this.input.focus());
        
        // Make draggable
        this.setupDrag();
        
        // Close / Minimize
        const closeBtn = this.container.querySelector('.term-close');
        const minBtn = this.container.querySelector('.term-minimize');
        
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            audio.playClick();
            this.container.style.display = 'none';
        });
        
        minBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            audio.playClick();
            this.container.classList.toggle('minimized');
            if (this.container.classList.contains('minimized')) {
                this.output.style.display = 'none';
                this.container.querySelector('.terminal-input-container').style.display = 'none';
            } else {
                this.output.style.display = 'block';
                this.container.querySelector('.terminal-input-container').style.display = 'flex';
                this.input.focus();
            }
        });
        
        // Boot sequence
        this.bootSequence();
    }

    setupDrag() {
        const header = this.container.querySelector('.terminal-header');
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        header.onmousedown = dragMouseDown.bind(this);
        
        function dragMouseDown(e) {
            e = e || window.event;
            if (e.target.classList.contains('term-btn')) return;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag.bind(this);
        }
        
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            // Adjust bounds
            const newTop = this.container.offsetTop - pos2;
            const newLeft = this.container.offsetLeft - pos1;
            
            this.container.style.top = newTop + "px";
            this.container.style.left = newLeft + "px";
            this.container.style.bottom = "auto";
            this.container.style.right = "auto";
        }
        
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    async bootSequence() {
        this.input.disabled = true;
        this.print('INITIALIZING CORES...', 'system');
        await this.delay(300);
        this.print('LOADING THREE.JS RENDERER [OK]', 'success');
        await this.delay(200);
        this.print('LOADING AUDIO_SYNTH ENGINE [OK]', 'success');
        await this.delay(200);
        this.print('RESOLVING CONTROLLER NODES...', 'system');
        await this.delay(400);
        this.print('-----------------------------------------', 'accent');
        this.print('  GAMERSCRAFT (C) 2026 CODESPACE OS  ', 'info');
        this.print('  TYPE "help" TO SEE LIST OF COMMANDS  ', 'info');
        this.print('-----------------------------------------', 'accent');
        this.input.disabled = false;
        this.input.focus();
    }

    print(text, type = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        line.innerHTML = text;
        this.output.appendChild(line);
        this.output.scrollTop = this.output.scrollHeight;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    handleInput(e) {
        // Typing sounds
        if (e.key.length === 1) {
            audio.playHover();
        }
        
        if (e.key === 'Enter') {
            audio.playClick();
            const cmd = this.input.value.trim();
            this.input.value = '';
            
            if (cmd) {
                this.history.push(cmd);
                this.historyIndex = this.history.length;
                this.print(`C:\\> ${cmd}`, 'cmd-echo');
                this.executeCommand(cmd.toLowerCase());
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.input.value = this.history[this.historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (this.historyIndex < this.history.length - 1) {
                this.historyIndex++;
                this.input.value = this.history[this.historyIndex];
            } else {
                this.historyIndex = this.history.length;
                this.input.value = '';
            }
        }
    }

    executeCommand(cmdStr) {
        // Clear any running terminal animations (Matrix/Conway)
        this.stopTerminalAnimations();

        const args = cmdStr.split(' ');
        const mainCmd = args[0];

        switch(mainCmd) {
            case 'help':
                this.print('Available Commands:');
                this.print('  <span class="highlight">about</span>      - Informational profile of Developer');
                this.print('  <span class="highlight">skills</span>     - Renders ASCII Skill tree');
                this.print('  <span class="highlight">projects</span>   - Shows selected games/quests');
                this.print('  <span class="highlight">simulate</span>   - Switch 3D canvas cartridges');
                this.print('               Usage: simulate [vortex | planet | life]');
                this.print('  <span class="highlight">matrix</span>     - Run system code intrusion overlay');
                this.print('  <span class="highlight">life</span>       - Play Conway\'s Game of Life in terminal');
                this.print('  <span class="highlight">clear</span>      - Wipes current visual log');
                this.print('  <span class="highlight">secret</span>     - Access deep subsystem logs');
                break;
                
            case 'clear':
                this.output.innerHTML = '';
                break;

            case 'about':
                this.print('NAME: Bhanu | CLASS: Creative Technologist', 'success');
                this.print('SPECIALTIES: 3D Graphics, Game Dev, Physics Simulations, Core Systems UI');
                this.print('BACKGROUND: Passionate about blending mechanical engineering/simulation principles with creative web design.');
                break;
                
            case 'skills':
                this.print('<b>SKILL TREE:</b>', 'accent');
                this.print(' ┌── Engines');
                this.print(' │   ├── Unity (5+ Years)');
                this.print(' │   ├── Unreal Engine 5');
                this.print(' │   └── Godot');
                this.print(' ├── Languages');
                this.print(' │   ├── C# / C++');
                this.print(' │   ├── JavaScript / GLSL');
                this.print(' │   └── Python');
                this.print(' └── Toolsets');
                this.print('     └── Blender, Git, Vite, Web Audio');
                break;
                
            case 'projects':
            case 'games':
                this.print('<b>SELECTED QUESTS:</b>', 'accent');
                this.print('1. <span class="highlight">NEON RACER</span> - Cyberpunk hover racer. [Unity / C#]');
                this.print('2. <span class="highlight">VOID WALKER</span> - Atmospheric physics platformer. [Godot]');
                this.print('3. <span class="highlight">CYBER DEFENSE</span> - Voxel grid security grid. [UE5 / C++]');
                this.print('<i>Type "simulate planet" to interact with the visual world.</i>');
                break;
                
            case 'simulate':
                if (args[1] === 'vortex' || args[1] === 'particles') {
                    this.print('Activating Cartridge A: Gravity Particle Vortex...', 'success');
                    this.onCommand('cartridge', 'vortex');
                } else if (args[1] === 'planet' || args[1] === 'world') {
                    this.print('Activating Cartridge B: Voxel Planet Explorer...', 'success');
                    this.onCommand('cartridge', 'planet');
                } else if (args[1] === 'life' || args[1] === 'grid') {
                    this.print('Activating Cartridge C: Cellular Conway Matrix...', 'success');
                    this.onCommand('cartridge', 'life');
                } else {
                    this.print('Error: Missing cartridge type. Choose: [vortex | planet | life]', 'error');
                    audio.playError();
                }
                break;
                
            case 'matrix':
                this.print('INITIATING MATRIX OVERRIDE...', 'success');
                this.startMatrixEffect();
                break;
                
            case 'life':
                this.print('STARTING TEXT CELLULAR AUTOMATA... (Press Enter/Command to exit)', 'success');
                this.startLifeEffect();
                break;
                
            case 'secret':
                audio.playSuccess();
                this.print('🔓 DEEP SECRETS UNLOCKED:', 'success');
                this.print('Did you know? This entire site was designed dynamically');
                this.print('without loading external models or textures, using purely');
                this.print('procedural mathematical math! You are browsing standard-of-art.');
                break;
                
            default:
                this.print(`Error: Command "${mainCmd}" not recognized. Type "help" for a manual.`, 'error');
                audio.playError();
        }
    }

    stopTerminalAnimations() {
        if (this.matrixInterval) {
            clearInterval(this.matrixInterval);
            this.matrixInterval = null;
        }
        if (this.lifeInterval) {
            clearInterval(this.lifeInterval);
            this.lifeInterval = null;
        }
    }

    startMatrixEffect() {
        const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*+-/<>[]{}';
        const cols = 40;
        const rows = 12;
        let grid = Array(rows).fill(0).map(() => Array(cols).fill(' '));
        
        this.matrixInterval = setInterval(() => {
            // Drop letters down
            for (let r = rows - 1; r > 0; r--) {
                grid[r] = [...grid[r-1]];
            }
            
            // Spawn new letters at top
            grid[0] = Array(cols).fill(0).map(() => {
                if (Math.random() > 0.85) {
                    return `<span class="matrix-char">${characters[Math.floor(Math.random() * characters.length)]}</span>`;
                }
                return ' ';
            });
            
            // Display grid
            this.output.innerHTML = grid.map(row => row.join('')).join('<br/>');
            this.output.scrollTop = this.output.scrollHeight;
        }, 100);
    }

    startLifeEffect() {
        const width = 45;
        const height = 12;
        
        // Initialize Conway grid randomly
        this.lifeGrid = Array(height).fill(0).map(() => Array(width).fill(0).map(() => Math.random() > 0.7 ? 1 : 0));
        
        // Inject glider
        if (height > 4 && width > 4) {
            this.lifeGrid[1][2] = 1;
            this.lifeGrid[2][3] = 1;
            this.lifeGrid[3][1] = 1;
            this.lifeGrid[3][2] = 1;
            this.lifeGrid[3][3] = 1;
        }

        const step = () => {
            const nextGrid = this.lifeGrid.map(arr => [...arr]);
            
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    let neighbors = 0;
                    // Count neighbors
                    for (let dy = -1; dy <= 1; dy++) {
                        for (let dx = -1; dx <= 1; dx++) {
                            if (dy === 0 && dx === 0) continue;
                            const ny = (y + dy + height) % height;
                            const nx = (x + dx + width) % width;
                            if (this.lifeGrid[ny][nx] === 1) neighbors++;
                        }
                    }
                    
                    // Apply rules
                    if (this.lifeGrid[y][x] === 1) {
                        if (neighbors < 2 || neighbors > 3) nextGrid[y][x] = 0;
                    } else {
                        if (neighbors === 3) nextGrid[y][x] = 1;
                    }
                }
            }
            
            this.lifeGrid = nextGrid;
            
            // Draw
            this.output.innerHTML = this.lifeGrid.map(row => 
                row.map(cell => cell === 1 ? '<span class="cell-alive">█</span>' : ' ').join('')
            ).join('<br/>');
            this.output.scrollTop = this.output.scrollHeight;
        };

        this.lifeInterval = setInterval(step, 150);
    }
}
