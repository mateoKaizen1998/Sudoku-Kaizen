const board = [];
board.fill("0");

// for(var i=0; i<9; i++) {
//     board[i] = [];
//     for(var j=0; j<9; j++) {
//         board[i][j] = undefined;
//     }
// };

const Model = {
  board,
  selectedCell: null
};

export default Model;
