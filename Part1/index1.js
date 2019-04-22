let board = [];

function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById('clickedId')
    if(playerSpan.innerText === "X") {
        playerSpan.innerText = 'O';
        clickedElement.innerText === "X";
        board[clickedId] = 'X'
    } else if(playerSpan.innerText === "X") {
        playerSpan.innerText = 'O';
        board[clickedId] = 'O'
    }
    console.log(board)
} 
if (topRight !== undefined && topRight === topCenter && topRight === topRight)

const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];
