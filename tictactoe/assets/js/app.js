const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let currentRound = 1;
let editedPlayer = 0;
let activePlayer = 0;
const players = [
    {name: '', symbol: 'X'},
    {name: '', symbol: '0'}
];

const overlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const configErrorElement = document.getElementById('config-errors');
const gameELement = document.getElementById('game');

const cancelBtnElement = document.getElementById('cancel-button');

const player1EditButtonElement = document.getElementById('player1-edit-button');
const player2EditButtonElement = document.getElementById('player2-edit-button');

const startGameButtonElement = document.getElementById('btn-start-game');
const activePlayerElement = document.getElementById('active-player-name');
const gameBoardElements = document.getElementById('board');
gameBoardElements.addEventListener('click', markField);
const gameOverElement = document.getElementById('game-over');

player1EditButtonElement.addEventListener('click', openPlayerConfig);
player2EditButtonElement.addEventListener('click', openPlayerConfig);

cancelBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startGameButtonElement.addEventListener('click', startNewGame);

