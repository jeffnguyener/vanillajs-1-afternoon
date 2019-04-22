let board = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board)
}

// [1,2,3]
// [4,5,6]
// [7,8,9]

if (t1 !== undefined && t1 === t2 && t1 === t3) {
    alert(`${t1} winner`);
}

if (m4 !== undefined && m4 === m5 && m4 === m6) {
    alert(`$(m4) winner`);
}

if (b7 !== undefined && b7 === b5 && b4 === b6) {
    alert(`$(b7) winner`);
}

if (t2 !== undefined && t2 === t1 && t2 === t3) {
    alert(`$(t2) winner`);
}

if (m5 !== undefined && m5 === m4 && m5 === m6) {
    alert(`$(m5) winner`);
}

if (b8 !== undefined && b8 === b7 && b8 === b9) {
    alert(`$(b8) winner`);
}

if (t3 !== undefined && t3 === t2 && t3 === t1) {
    alert(`$(t3) winner`);
}

if (m6 !== undefined && m6 === m5 && m6 === m4) {
    alert(`$(m6) winner`);
}

if (b9 !== undefined && b9 === b8 && b9 === b7) {
    alert(`$(b9) winner`);
}

const t1 = board[0];
const t2 = board[1];
const t3 = board[2];
const m4 = board[3];
const m5 = board[4];
const m6 = board[5];
const b7 = board[6];
const b8 = board[7];
const b9 = board[8];
