const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const cell = [];
for (let i = 0; i < 9; ++i) {
    cell[i] = document.getElementById("cell" + i);
}
let turn = 0;
const tbody = document.querySelector('#table tbody');
tbody.addEventListener('click', function (e) {
    const cellTarget = e.target.closest('td');
    if (!cellTarget) {
        return;
    }
    if (cellTarget.innerHTML === "") {
        if (turn % 2 == 1) {
            cellTarget.innerHTML = "0";
            ++turn;
        } else {
            cellTarget.innerHTML = "X";
            ++turn;
        }
    }
    if (turn > 4) {
        checkWinner();
    }
})

function checkWinner() {
    if (turn < 9) {
        for (let i = 0; i < winningCombinations.length; ++i) {
            if (cell[winningCombinations[i][0]].innerHTML === "X" &&
                cell[winningCombinations[i][1]].innerHTML === "X" &&
                cell[winningCombinations[i][2]].innerHTML === "X") {
                    alert("Player(X) Wins");
                    location.reload();
            } else if (cell[winningCombinations[i][0]].innerHTML === "0" &&
                    cell[winningCombinations[i][1]].innerHTML === "0" &&
                    cell[winningCombinations[i][2]].innerHTML === "0") {
                    alert("Player(0) Wins");
                    location.reload();
            }   
        }
    } else {
        alert("Tie");
        location.reload();
    }
}
;
