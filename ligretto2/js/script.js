document.addEventListener('DOMContentLoaded', () => {
    // --- State Manager ---
    const state = {
        view: 'setup', // 'setup' | 'game'
        round: 1,
        players: [],
        history: [], // For undo functionality
        redoStack: [], // For redo functionality
    };

    // --- DOM Elements ---
    const app = document.getElementById('app');
    const setupView = document.getElementById('setup-view');
    const gameView = document.getElementById('game-view');
    const setupForm = document.getElementById('setup-form');
    const playerCountInput = document.getElementById('player-count');
    const playersList = document.getElementById('players-list');
    const roundNumberDisplay = document.getElementById('round-number');
    const calcAllBtn = document.getElementById('calc-all');
    const undoBtn = document.getElementById('undo-round');
    const redoBtn = document.getElementById('redo-round');
    const newGameBtn = document.getElementById('new-game-btn');
    const resetBtn = document.getElementById('reset-game');
    const playerTemplate = document.getElementById('player-card-template');

    // --- Core Logic ---

    const init = () => {
        console.log('Ligretto 2: Initializing...');
        const savedState = localStorage.getItem('ligretto2_state');
        if (savedState) {
            try {
                Object.assign(state, JSON.parse(savedState));
                if (state.players && state.players.length > 0) {
                    renderGame();
                    switchView('game');
                }
            } catch (e) {
                console.error('Failed to load saved state:', e);
                localStorage.removeItem('ligretto2_state');
            }
        }
    };

    const saveState = () => {
        localStorage.setItem('ligretto2_state', JSON.stringify(state));
    };

    const switchView = (viewName) => {
        state.view = viewName;
        [setupView, gameView].forEach(v => v.classList.remove('active'));
        document.getElementById(`${viewName}-view`).classList.add('active');
        saveState();
    };

    const createGame = (count) => {
        console.log('Creating game for', count, 'players');
        if (isNaN(count) || count < 1) return;
        
        state.players = Array.from({ length: count }, (_, i) => ({
            id: i,
            name: `Player ${i + 1}`,
            score: 0,
            currentRound: 0,
            color: getRandomColor()
        }));
        state.round = 1;
        state.history = [];
        state.redoStack = [];
        renderGame();
        switchView('game');
    };

    const updateScore = (playerId, points) => {
        const player = state.players.find(p => p.id === playerId);
        if (player) {
            player.score += points;
            player.currentRound = 0; // Reset input field
            renderPlayer(player);
            updateUndoRedoButtons();
            saveState();
        }
    };

    const calculateAll = () => {
        // Save current state to history before changing
        state.history.push(JSON.parse(JSON.stringify({
            players: state.players,
            round: state.round
        })));

        // Clear redo stack when a new action is performed
        state.redoStack = [];

        // Limit history to last 10 rounds
        if (state.history.length > 10) state.history.shift();

        state.players.forEach(p => {
            const input = document.querySelector(`.player-card[data-player-id="${p.id}"] .round-points-input`);
            const val = parseInt(input.value) || 0;
            p.score += val;
            p.currentRound = 0;
        });

        state.round++;
        renderGame();
        updateUndoRedoButtons();
        saveState();
    };

    const undoLastRound = () => {
        if (state.history.length === 0) return;

        // Save current to redo stack
        state.redoStack.push(JSON.parse(JSON.stringify({
            players: state.players,
            round: state.round
        })));

        const lastState = state.history.pop();
        state.players = lastState.players;
        state.round = lastState.round;

        renderGame();
        updateUndoRedoButtons();
        saveState();
    };

    const redoLastRound = () => {
        if (state.redoStack.length === 0) return;

        // Save current to history
        state.history.push(JSON.parse(JSON.stringify({
            players: state.players,
            round: state.round
        })));

        const nextState = state.redoStack.pop();
        state.players = nextState.players;
        state.round = nextState.round;

        renderGame();
        updateUndoRedoButtons();
        saveState();
    };

    const startNewGame = () => {
        console.log('Starting new game...');
        state.players = [];
        state.history = [];
        state.redoStack = [];
        state.round = 1;
        localStorage.removeItem('ligretto2_state');
        switchView('setup');
    };

    const resetGame = () => {
        console.log('Resetting scores for current players...');
        state.players.forEach(p => {
            p.score = 0;
            p.currentRound = 0;
        });
        state.round = 1;
        state.history = [];
        state.redoStack = [];
        renderGame();
        saveState();
    };

    // --- Rendering ---

    const renderGame = () => {
        roundNumberDisplay.textContent = state.round;
        playersList.innerHTML = '';
        state.players.forEach(p => {
            const clone = playerTemplate.content.cloneNode(true);
            const card = clone.querySelector('.player-card');
            card.dataset.playerId = p.id;
            card.style.setProperty('--player-color', p.color);
            
            const nameInput = clone.querySelector('.player-name-input');
            nameInput.value = p.name;
            nameInput.addEventListener('change', (e) => {
                p.name = e.target.value;
                saveState();
            });

            clone.querySelector('.player-score-badge').textContent = p.score;
            
            const pointsInput = clone.querySelector('.round-points-input');
            pointsInput.addEventListener('input', (e) => {
                p.currentRound = parseInt(e.target.value) || 0;
            });

            clone.querySelector('.add-points-btn').addEventListener('click', () => {
                const val = parseInt(pointsInput.value) || 0;
                updateScore(p.id, val);
                pointsInput.value = '';
            });

            playersList.appendChild(clone);
        });
        updateUndoRedoButtons();
    };

    const renderPlayer = (player) => {
        const card = document.querySelector(`.player-card[data-player-id="${player.id}"]`);
        if (card) {
            card.querySelector('.player-score-badge').textContent = player.score;
            card.querySelector('.round-points-input').value = '';
        }
    };

    const updateUndoRedoButtons = () => {
        undoBtn.disabled = state.history.length === 0;
        redoBtn.disabled = state.redoStack.length === 0;
    };

    // --- Helpers ---

    const getRandomColor = () => {
        const colors = ['#6366f1', '#a855f7', '#14b8a6', '#0ea5e9', '#ef4444', '#f59e0b', '#10b981', '#ec4899'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    // --- Event Listeners ---

    setupForm.addEventListener('submit', (e) => {
        console.log('Form submitted');
        e.preventDefault();
        createGame(parseInt(playerCountInput.value));
    });

    // Fallback click listener
    setupForm.querySelector('button[type="submit"]').addEventListener('click', (e) => {
        console.log('Submit button clicked');
    });

    calcAllBtn.addEventListener('click', calculateAll);
    undoBtn.addEventListener('click', undoLastRound);
    redoBtn.addEventListener('click', redoLastRound);
    newGameBtn.addEventListener('click', startNewGame);
    resetBtn.addEventListener('click', resetGame);

    // Start!
    init();
});
