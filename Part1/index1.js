let board = [];

function reset() {
    board.splice(0, 9);
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerText = "";
    }
}

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    let winnerMessage = `PLAYER ${playerSpan.innerText} WINS!`

    if (clickedElement.innerText === '') {
        if (playerSpan.innerText === 'X') {
            playerSpan.innerText = 'O';
            clickedElement.innerText = 'X';
            board[clickedId] = 'X';
        } else {
            playerSpan.innerText = 'X';
            clickedElement.innerText = 'O';
            board[clickedId] = 'O';
        }
    } else {
        window.alert(`Cannot click that box again`)
    }
    // [0,1,2]
    // [3,4,5]
    // [6,7,8]

    if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]) {
        alert(winnerMessage)
        reset()
    } // ROW ONE
    if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]) {
        alert(winnerMessage)
        reset()
    } // ROW TWO
    if (board[6] !== undefined && board[6] === board[7] && board[6] === board[8]) {
        alert(winnerMessage)
        reset()
    } // ROW THREE
    if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]) {
        alert(winnerMessage)
        reset()
    } // COL ONE
    if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]) {
        alert(winnerMessage)
        reset()
    } // COL TWO
    if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]) {
        alert(winnerMessage)
        reset()
    } // COL THREE
    if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]) {
        alert(winnerMessage)
        reset()
    } // DIA ONE
    if (board[6] !== undefined && board[6] === board[4] && board[6] === board[2]) {
        alert(winnerMessage)
        reset()
    }// DIA TWO

    let boardFull = true;
    for (let j = 0; j < 9; j++) {
        if (board[j] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        window.alert(`It's a cats game`)
        reset();
    }
}



