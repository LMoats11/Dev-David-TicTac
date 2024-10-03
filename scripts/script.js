let currentPlayer = "X";
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            alert(currentPlayer + " wins!");
            resetGame();
        }
    });
}

function handleClick() {
    if (!this.textContent) {
        this.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);