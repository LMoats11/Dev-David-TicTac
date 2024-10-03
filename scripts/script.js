$(document).ready(function() {
    let currentPlayer = "X";
    const cells = $(".cell");
    const resetButton = $("#resetBtn");

    function checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];
        winPatterns.forEach(pattern => {
            const [a, b, c] = pattern;
            if (cells.eq(a).text() && cells.eq(a).text() === cells.eq(b).text() && cells.eq(a).text() === cells.eq(c).text()) {
                alert(currentPlayer + " wins!");
                resetGame();
            }
        });
    }

    function handleClick() {
        if (!$(this).text()) {
            $(this).text(currentPlayer);
            checkWin();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    function resetGame() {
        cells.text(""); // Clear all cell texts
        currentPlayer = "X"; // Reset current player to X
    }

    // Initialize draggable and droppable functionality
    cells.draggable({
        revert: "invalid", // If not dropped in a valid location, it reverts
        start: function() {
            $(this).addClass('dragging'); // Optional: Add a class when dragging
        },
        stop: function() {
            $(this).removeClass('dragging'); // Remove the class when done
        }
    }).droppable({
        accept: ".cell",
        drop: function(event, ui) {
            if (!$(this).text()) {
                $(this).text(ui.draggable.text()); // Set the dropped element's text
                ui.draggable.position({ of: $(this), my: "left top", at: "left top" }); // Snap to position
                checkWin(); // Check for a win after placing
                currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player
            }
        }
    });

    cells.on('click', handleClick);
    resetButton.on('click', resetGame);
});
