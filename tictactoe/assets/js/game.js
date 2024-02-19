function resetGame() {
    activePlayer = 0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0; i < gameData.length; i++) {
        for (let j = 0; j < gameData[0].length; j++) {
            gameData[i][j] = 0;
            const field = gameBoardElements.children[gameBoardIndex];
            field.textContent = '';
            field.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame(event) {
    if (players[0].name === '' || players[1].name === '') {
        alert('Set custom player names to start a new game');
        return;
    }

    resetGame();

    gameELement.style.display = 'block';
    activePlayerElement.textContent = players[activePlayer].name;
}

function checkGameOver() {
    for (let i = 0; i < gameData.length; i++) { // checking rows
        if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][0] === gameData[i][2]) {
            return gameData[i][0];
        }
    }

    for (let j = 0; j < gameData[0].length; j++) { // checking columns
        if (gameData[0][j] > 0 && gameData[0][j] === gameData[1][j] && gameData[0][j] === gameData[2][j]) {
            return gameData[0][j];
        }
    }

    if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[0][0] === gameData[2][2]) {
        return gameData[0][0];
    }

    else if (gameData[0][2] > 0 && gameData[0][2] === gameData[1][1] && gameData[0][2] === gameData[2][0]) {
        return gameData[0][2];
    }

    else if (currentRound === 9) {
        return -1;
    }

    return 0;
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    }

    else {
        activePlayer = 0;
    }

    activePlayerElement.textContent = players[activePlayer].name;
}

function markField(event) {
    const field = event.target;

    if (field.textContent !== '' || field.tagName !== 'LI') {
        return;
    }

    const row = field.dataset.row - 1;
    const col = field.dataset.col - 1;

    gameData[row][col] = activePlayer + 1;

    field.textContent = players[activePlayer].symbol;
    field.classList.add('disabled');

    const winner = checkGameOver();
    if (winner !== 0) {
        endGame(winner);
    }

    currentRound++;
    switchPlayer();
}

function endGame(winnerId) {
    gameOverElement.style.display = 'block';
    if (winnerId > 0) {
        gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerId - 1].name;
    }
    else {
        gameOverElement.firstElementChild.textContent = 'It\'s a draw!'
    }
}
