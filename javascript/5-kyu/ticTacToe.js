/*
 * Description:
 * If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's 
   current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

 * Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 
   1 if it is an "X", or 2 if it is an "O", like so:

  [[0, 0, 1],
   [0, 1, 2],
   [2, 1, 0]]

 * We want our function to return:
   -1 if the board is not yet finished AND no one has won yet (there are empty spots),
    1 if "X" won,
    2 if "O" won,
    0 if it's a cat's game (i.e. a draw).
  
 * You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

function isSolved(board) {
  const isWinner = (symbol, inputs) => inputs.every(cell => cell === symbol);
  // check backward diagonal
  const backDiagonal = [board[0][0], board[1][1], board[2][2]];
  if (isWinner(1, backDiagonal)) {
    return 1;
  } else if (isWinner(2, backDiagonal)) {
    return 2;
  }
  // check forward diagonal
  const forwardDiagonal = [board[2][0], board[1][1], board[0][2]];
  if (isWinner(1, forwardDiagonal)) {
    return 1;
  } else if (isWinner(2, forwardDiagonal)) {
    return 2;
  }
  // check rows
  for (let i = 0; i < 3; i++) {
    const row = board[i];
    if (isWinner(1, row)) {
      return 1;
    } else if (isWinner(2, row)) {
      return 2;
    }
  }
  // check columns
  for (let i = 0; i < 3; i++) {
    const col = [board[0][i], board[1][i], board[2][i]];
    if (isWinner(1, col)) {
      return 1;
    } else if (isWinner(2, col)) {
      return 2;
    }
  }
  // check for 0's
  if (board.some(row => row.some(cell => cell === 0))) {
    return -1;
  }
  // draw
  return 0;
}

// Time to complete: 39min
