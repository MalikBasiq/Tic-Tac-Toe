const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restart = document.getElementById('restart');
let currentPlayer = 'X';
let gameActive = true;
let board = ['', '', '', '', '', '', '', '', '']; //initializing board array

function handleCellClick(event) {
    const cell = event.target;
    console.log(event.target);
    // console.log(cell.dataset);
    const index = parseInt(cell.dataset.index);

    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            message.textContent = `${board[a]} wins!`;
            return;
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        message.textContent = "It's a tie!";
    }
}

function restartfunc() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    // Reset game state variables
    currentPlayer = 'X';
    gameActive = true;
    board = ['', '', '', '', '', '', '', '', ''];

    // Clear message
    message.textContent = '';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restart.addEventListener('click', restartfunc);
