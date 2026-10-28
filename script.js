// Dictionnaire multilingue FR / EN pour Paryaj Pam
const I18N = {
    fr: {
        levelWord: "Niveau",
        scoreWord: "Mots trouvés",
        instruction: "Consigne : Glisse ton doigt ou ta souris de manière fluide d'une lettre à l'autre pour relier et trouver les mots cachés.",
        wordsTitle: "Mots à chercher :",
        modalSuccessTitle: "Match Gagné ! ⚽",
        modalSuccessDesc: "Prêt pour le niveau suivant ?",
        modalFinalTitle: "Tournoi Remporté ! 🏆",
        modalFinalDesc: "Félicitations, tu as complété les 20 niveaux de football Paryaj Pam !",
        nextBtn: "Niveau Suivant",
        replayBtn: "Rejouer depuis le début"
    },
    en: {
        levelWord: "Level",
        scoreWord: "Words found",
        instruction: "Instruction: Slide your finger or mouse smoothly from letter to letter to connect and find the hidden words.",
        wordsTitle: "Words to find:",
        modalSuccessTitle: "Match Won! ⚽",
        modalSuccessDesc: "Ready for the next level?",
        modalFinalTitle: "Tournament Won! 🏆",
        modalFinalDesc: "Congratulations, you completed all 20 Paryaj Pam football levels!",
        nextBtn: "Next Level",
        replayBtn: "Play Again from Start"
    }
};

// 20 Niveaux de football (terrains, équipements, services, jargon, événements) adaptés à une grille 10x10
const LEVELS = [
    {
        title: { fr: "1. Le Terrain & Infras", en: "1. Pitch & Infrastructure" },
        words: { fr: ["BUT", "GAZON", "LIGNE", "FILET", "COIN"], en: ["GOAL", "GRASS", "LINE", "NET", "CORNER"] }
    },
    {
        title: { fr: "2. Équipement & Matériel", en: "2. Equipment & Gear" },
        words: { fr: ["BALLON", "CRAMPON", "MAILLOT", "GAGNE", "GANTS"], en: ["BALL", "CLEATS", "SHIRT", "WIN", "GLOVES"] }
    },
    {
        title: { fr: "3. Le Corps Arbitral", en: "3. Refereeing" },
        words: { fr: ["ARBITRE", "SIFFLET", "CARTON", "TOUCHE", "VAR"], en: ["REFEREE", "WHISTLE", "CARD", "LINES", "VAR"] }
    },
    {
        title: { fr: "4. Postes & Joueurs", en: "4. Positions & Players" },
        words: { fr: ["ATTAQUE", "DEFENSE", "GARDIEN", "MILIEU", "CAPITAINE"], en: ["ATTACK", "DEFENSE", "KEEPER", "MID", "CAPTAIN"] }
    },
    {
        title: { fr: "5. Actions de Jeu", en: "5. Match Actions" },
        words: { fr: ["PASSE", "TIR", "CENTRE", "DRIBBLE", "TACLE"], en: ["PASS", "SHOT", "CROSS", "DRIBBLE", "TACKLE"] }
    },
    {
        title: { fr: "6. Arrêts & Défenses", en: "6. Saves & Defenses" },
        words: { fr: ["PARADE", "BLOC", "MUR", "INTER", "COUPE"], en: ["SAVE", "BLOCK", "WALL", "INTER", "CUP"] }
    },
    {
        title: { fr: "7. Coups de Pied Arrêtés", en: "7. Set Pieces" },
        words: { fr: ["PENALTY", "FOUL", "COUPFRANC", "CORNER", "PEN"], en: ["PENALTY", "FOUL", "FREEKICK", "CORNER", "SPOT"] }
    },
    {
        title: { fr: "8. Sanctions & Cartons", en: "8. Sanctions & Cards" },
        words: { fr: ["ROUGE", "JAUNE", "FAUTE", "EXPELL", "SUSPEND"], en: ["RED", "YELLOW", "FOUL", "BAN", "SUSPEND"] }
    },
    {
        title: { fr: "9. Tactique & Stratégie", en: "9. Tactics & Strategy" },
        words: { fr: ["TACTIQUE", "PRESS", "BLOC", "COACH", "SCHEMA"], en: ["TACTIC", "PRESS", "BLOCK", "COACH", "SCHEME"] }
    },
    {
        title: { fr: "10. Le Match & Temps", en: "10. Match & Time" },
        words: { fr: ["MATCH", "CHRONO", "TEMPS", "PROLO", "SCORE"], en: ["MATCH", "CLOCK", "TIME", "EXTRA", "SCORE"] }
    },
    {
        title: { fr: "11. Événements & Tournois", en: "11. Events & Tournaments" },
        words: { fr: ["COUPE", "LIGUE", "FINALE", "MONDIAL", "TROPHEE"], en: ["CUP", "LEAGUE", "FINAL", "WORLD", "TROPHY"] }
    },
    {
        title: { fr: "12. Services & Paris (Paryaj)", en: "12. Services & Betting" },
        words: { fr: ["PARIS", "COTE", "GAGNANT", "PRODUIT", "SERVICE"], en: ["BET", "ODDS", "WINNER", "PRODUCT", "SERVICE"] }
    },
    {
        title: { fr: "13. Jargon & Expressions", en: "13. Jargon & Expressions" },
        words: { fr: ["LOB", "REPRISE", "TETE", "LOBE", "LOBBY"], en: ["LOB", "VOLLEY", "HEAD", "LOBE", "CHIP"] }
    },
    {
        title: { fr: "14. Statistiques & Score", en: "14. Stats & Score" },
        words: { fr: ["BUTS", "POINTS", "CLASSE", "RANG", "TABLE"], en: ["GOALS", "POINTS", "RANK", "SLOT", "TABLE"] }
    },
    {
        title: { fr: "15. Stade & Ambiance", en: "15. Stadium & Atmosphere" },
        words: { fr: ["STADE", "TRIBUNE", "PUBLIC", "CHANT", "FOUTREL"], en: ["STADIUM", "STAND", "CROWD", "CHANT", "NOISE"] }
    },
    {
        title: { 
            fr: "16. Mercato & Transferts", 
            en: "16. Transfers & Market" 
        },
        wordsMap: {
            fr: ["CONTRAT", "ACHAT", "VENTE", "CLUB", "PRO"],
            en: ["DEAL", "BUY", "SELL", "CLUB", "PRO"]
        },
        words: { fr: ["CONTRAT", "ACHAT", "VENTE", "CLUB", "PRO"], en: ["DEAL", "BUY", "SELL", "CLUB", "PRO"] }
    },
    {
        title: { fr: "17. Célébrations & Buts", en: "17. Celebrations & Goals" },
        words: { fr: ["JOIE", "DANSE", "CRIE", "FOLIE", "FTE"], en: ["JOY", "DANCE", "SHOUT", "CRAZY", "PARTY"] }
    },
    {
        title: { fr: "18. Compétitions Internationales", en: "18. International Comps" },
        words: { fr: ["EURO", "COPA", "FIFA", "CAF", "CONCA"], en: ["EURO", "COPA", "FIFA", "CAF", "CONCA"] }
    },
    {
        title: { fr: "19. L'Exploit Sportif", en: "19. The Athletic Feat" },
        words: { fr: ["RECORD", "LEGENDE", "ETOILE", "OR", "SIGNE"], en: ["RECORD", "LEGEND", "STAR", "GOLD", "SIGN"] }
    },
    {
        title: { fr: "20. Paryaj Pam Ultime", en: "20. Ultimate Paryaj Pam" },
        words: { fr: ["PARYAJ", "PAM", "FOOT", "MATCH", "GOP"], en: ["BET", "HOME", "FOOT", "MATCH", "WIN"] }
    }
];

let currentLang = 'fr';
let currentLevelIndex = 0;
let grid = [];
let placedWords = [];
let foundWords = new Set();
let selectedCells = [];
let isInteracting = false;
let startCell = null;

const GRID_SIZE = 10;

document.addEventListener('DOMContentLoaded', () => {
    initLevel(currentLevelIndex);

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateUIStaticTexts();
        initLevel(currentLevelIndex);
    });

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        document.body.classList.toggle('theme-dark');
        const btn = document.getElementById('themeToggleBtn');
        btn.innerText = document.body.classList.contains('theme-dark') ? '☀️' : '🌙';
    });

    document.getElementById('nextLevelBtn').addEventListener('click', () => {
        document.getElementById('levelModal').classList.add('hidden');
        currentLevelIndex++;
        if (currentLevelIndex >= LEVELS.length) {
            currentLevelIndex = 0;
        }
        initLevel(currentLevelIndex);
    });

    window.addEventListener('mouseup', endSelection);
    window.addEventListener('touchend', endSelection);
});

function updateUIStaticTexts() {
    const t = I18N[currentLang];
    document.getElementById('gameInstruction').innerText = t.instruction;
    document.getElementById('wordsToFindTitle').innerText = t.wordsTitle;
}

function initLevel(levelIdx) {
    const levelData = LEVELS[levelIdx];
    const t = I18N[currentLang];
    
    let wordsForLang = levelData.wordsMap ? (levelData.wordsMap[currentLang] || levelData.wordsMap.fr) : levelData.words[currentLang];
    
    document.getElementById('levelDisplay').innerText = `${t.levelWord} ${levelIdx + 1} / ${LEVELS.length}`;
    document.getElementById('levelThemeTitle').innerText = levelData.title[currentLang] || levelData.title.fr;
    updateUIStaticTexts();
    
    foundWords.clear();
    generateGrid(wordsForLang);
    renderWordList(wordsForLang);
    renderGrid();
}

function generateGrid(words) {
    grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    placedWords = [];

    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        const cleanWord = word.replace(/[^A-Z]/g, '');

        while (!placed && attempts < 100) {
            attempts++;
            const direction = Math.floor(Math.random() * 3); 
            let row = Math.floor(Math.random() * GRID_SIZE);
            let col = Math.floor(Math.random() * GRID_SIZE);

            if (canPlaceWord(cleanWord, row, col, direction)) {
                placeWord(cleanWord, row, col, direction);
                placedWords.push({ word: cleanWord, coords: getWordCoords(cleanWord, row, col, direction) });
                placed = true;
            }
        }
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

function canPlaceWord(word, row, col, dir) {
    const len = word.length;
    if (dir === 0 && col + len > GRID_SIZE) return false;
    if (dir === 1 && row + len > GRID_SIZE) return false;
    if (dir === 2 && (col + len > GRID_SIZE || row + len > GRID_SIZE)) return false;

    for (let i = 0; i < len; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            return false;
        }
    }
    return true;
}

function placeWord(word, row, col, dir) {
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        grid[r][c] = word[i];
    }
}

function getWordCoords(word, row, col, dir) {
    let coords = [];
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        coords.push(`${r}-${c}`);
    }
    return coords;
}

function renderGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.innerText = grid[r][c];

            cell.addEventListener('mousedown', (e) => { e.preventDefault(); startSelection(r, c); });
            cell.addEventListener('mouseenter', () => { if (isInteracting) updateSelection(r, c); });

            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startSelection(r, c);
            }, { passive: false });

            cell.addEventListener('touchmove', (e) => {
                e.preventDefault();
                if (!isInteracting) return;
                const touch = e.touches[0];
                const target = document.elementFromPoint(touch.clientX, touch.clientY);
                if (target && target.classList.contains('grid-cell')) {
                    updateSelection(parseInt(target.dataset.row), parseInt(target.dataset.col));
                }
            }, { passive: false });

            container.appendChild(cell);
        }
    }
}

function renderWordList(words) {
    const container = document.getElementById('wordList');
    container.innerHTML = '';
    const t = I18N[currentLang];
    words.forEach(word => {
        const chip = document.createElement('div');
        chip.classList.add('word-chip');
        chip.id = `chip-${word}`;
        chip.innerText = word;
        container.appendChild(chip);
    });
    document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : 0 / ${words.length}`;
}

function startSelection(r, c) {
    isInteracting = true;
    startCell = { r, c };
    selectedCells = [`${r}-${c}`];
    updateCellStyles();
}

function updateSelection(r, c) {
    if (!isInteracting || !startCell) return;

    let dr = r - startCell.r;
    let dc = c - startCell.c;
    
    let steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) {
        selectedCells = [`${startCell.r}-${startCell.c}`];
        updateCellStyles();
        return;
    }

    let stepR = dr === 0 ? 0 : dr / steps;
    let stepC = dc === 0 ? 0 : dc / steps;

    if (Math.abs(stepR) !== Math.abs(stepC) && stepR !== 0 && stepC !== 0) {
        return;
    }

    selectedCells = [];
    for (let i = 0; i <= steps; i++) {
        let currR = Math.round(startCell.r + (i * stepR));
        let currC = Math.round(startCell.c + (i * stepC));
        selectedCells.push(`${currR}-${currC}`);
    }

    updateCellStyles();
}

function endSelection() {
    if (!isInteracting) return;
    isInteracting = false;
    startCell = null;

    let formedWord = selectedCells.map(key => {
        const [r, c] = key.split('-').map(Number);
        return grid[r][c];
    }).join('');

    const levelData = LEVELS[currentLevelIndex];
    const currentWords = levelData.wordsMap ? (levelData.wordsMap[currentLang] || levelData.wordsMap.fr) : levelData.words[currentLang];
    
    let matched = placedWords.find(pw => pw.word === formedWord || pw.word === formedWord.split('').reverse().join(''));
    const t = I18N[currentLang];

    if (matched && currentWords.includes(matched.word) && !foundWords.has(matched.word)) {
        foundWords.add(matched.word);
        
        selectedCells.forEach(key => {
            const cell = document.querySelector(`[data-row='${key.split('-')[0]}'][data-col='${key.split('-')[1]}']`);
            if (cell) cell.classList.add('found');
        });

        const chip = document.getElementById(`chip-${matched.word}`);
        if (chip) chip.classList.add('found');

        document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : ${foundWords.size} / ${currentWords.length}`;

        if (foundWords.size === currentWords.length) {
            setTimeout(showLevelModal, 400);
        }
    }

    selectedCells = [];
    updateCellStyles();
}

function updateCellStyles() {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        const key = `${cell.dataset.row}-${cell.dataset.col}`;
        if (selectedCells.includes(key)) {
            cell.classList.add('selected');
        } else {
            cell.classList.remove('selected');
        }
    });
}

function showLevelModal() {
    const modal = document.getElementById('levelModal');
    const t = I18N[currentLang];
    
    if (currentLevelIndex === LEVELS.length - 1) {
        document.getElementById('modalTitle').innerText = t.modalFinalTitle;
        document.getElementById('modalDesc').innerText = t.modalFinalDesc;
        document.getElementById('nextLevelBtn').innerText = t.replayBtn;
    } else {
        document.getElementById('modalTitle').innerText = t.modalSuccessTitle;
        document.getElementById('modalDesc').innerText = t.modalSuccessDesc;
        document.getElementById('nextLevelBtn').innerText = t.nextBtn;
    }
    modal.classList.remove('hidden');
}