$(document).ready(function() {
    let currentPlayer = "X";
    const cells = $(".cell");
    const resetButton = $("#resetBtn");

    function checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (cells.eq(a).text() && cells.eq(a).text() === cells.eq(b).text() && cells.eq(a).text() === cells.eq(c).text()) {
                alert(currentPlayer + " wins!");
                resetGame();
                return;
            }
        }
    }

    function handleClick() {
        if (!$(this).text()) {
            $(this).text(currentPlayer);
            checkWin();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    function resetGame() {
        cells.text("");
        currentPlayer = "X";
    }

    cells.on('click', handleClick);
    resetButton.on('click', resetGame);
});

    resetButton.on('click', resetGame); 
});
