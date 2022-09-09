/**
 * An eccentric chessboard maker likes to create strange N x N chessboards.
 * Instead of making all the rows and the columns on his chessboards the same size, 
 * he likes to make chessboards with row and columns of varying sizes:
 * For example, here are the specifications of his latest 5x5 chessboard:

    cs = [ 3, 1, 2, 7, 1 ] contains the 5 widths of the 5 columns.

    rs = [ 1, 8, 4, 5, 2 ] contains the 5 heights of the 5 rows.

 * To be clear, reading the examples of cs and rs above, the width of the 4th column
 * on the chessboard is 7, the height of the 2nd row on the chessboard is 8, etc.

 * Notice, by the way, that since sum(cs) != sum(rs), the total width of the strange
 * chessboard is not necessarily the same as the total height.The chessboard maker 
 * now wants to determine how much white and black wood he needs to cover the areas 
 * in a given chessboard, so is asking you to find the total white area and the total
 * black area on his board.
 
 * Remember, board coloring starts with top left cell => WHITE
 * and then alternates with BLACK as in a usual chessboard.
 * @param {number[]} cols contains the N widths of the N columns of the chessboard
 * @param {number[]} rows contains the N heights of the N rows of the chessboard
 * @returns {number[]} a 2-element array, [totalWhiteArea, totalBlackArea]
 **/

function whiteBlackAreas(cols, rows) {
    
  const totalArea = cols.reduce((prev,curr) => prev + curr, 0) * rows.reduce((prev,curr) => prev + curr, 0) 
  let evenCols = 0;
  let oddCols = 0;
  let evenRows = 0;
  let oddRows = 0
  let whiteArea = 0;
  
  for(let i = 0; i < rows.length; i++) {
    if(i % 2 == 0) {
      evenCols += cols[i];
      evenRows += rows[i];
    } else {
      oddCols += cols[i];
      oddRows += rows[i];
    }
  }
  
  whiteArea = evenCols * evenRows + oddCols * oddRows;
  return [whiteArea, totalArea - whiteArea];
}
