// This is an example of one method to keep score using a switch case and a nested reusable function. This is intended to be incredibly generic.

let playerOne = 0;
let playerTwo = 0;

function score(a, b) {
    return a + b
};

switch (player) {
    case 'PLAYER-ONE':
        let playerOnesTurn = score(5, 5);
        playerOne += playerOnesTurn;
        break;
    case 'PLAYER-TWO':
        let playerTwosTurn = score(5, 5);
        playerTwo += playerTwosTurn;
    default:
        break;
}
