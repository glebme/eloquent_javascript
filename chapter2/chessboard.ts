const size = 11;
let chessBoard = "";

for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
        let charToPrint = (row + col) % 2 == 0 ? ' ' : '#'
        chessBoard += charToPrint;
    }
    chessBoard += '\n';
}

console.log(chessBoard);