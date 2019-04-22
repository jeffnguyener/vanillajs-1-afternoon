let board = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    let winnerMessage = `PLAYER ${playerSpan.innerText} WINS!`

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }

    // [0,1,2]
    // [3,4,5]
    // [6,7,8]

    if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]) {alert(winnerMessage)} // ROW ONE
    if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]) {alert(winnerMessage)} // ROW TWO
    if (board[6] !== undefined && board[6] === board[7] && board[6] === board[8]) {alert(winnerMessage)} // ROW THREE
    if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]) {alert(winnerMessage)} // COL ONE
    if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]) {alert(winnerMessage)} // COL TWO
    if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]) {alert(winnerMessage)} // COL THREE
    if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]) {alert(winnerMessage)} // DIA ONE
    if (board[6] !== undefined && board[6] === board[4] && board[6] === board[2]) {alert(winnerMessage)} // DIA TWO
}
