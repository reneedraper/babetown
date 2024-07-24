

export type TokenValue = 1 | 2 | 0;
export default function checkConnect4Outcome(board: TokenValue[][]): TokenValue | null {
  const numRows = 6;
  const numColumns = 7;

  const checkDraw = (board: TokenValue[][]): TokenValue | null => {
    for (let row = 0; row < numRows; row++) {
      for (let column = 0; column < numColumns; column++) {
        if (board[row][column] === 0) {
          return null; // The game is not over yet
        }
      }
    } return 0 //draw
  }

  const isWinningConnect4 = (tokenPositions: TokenValue[]): boolean => {
    return tokenPositions[0] !== 0 && tokenPositions.every((tokenValue) => tokenValue === tokenPositions[0])
  }

  const checkHorizontalWin = (board: TokenValue[][]): TokenValue | null => {
    for (let row = 0; row < numRows; row++) {
      for (let column = 0; column <= numColumns - 4; column++) {
        if (isWinningConnect4([board[row][column], board[row][column + 1], board[row][column + 2], board[row][column + 3]])) {
          return board[row][column];
        }
      }
    } return null;
  }

  const checkVerticalWin = (board: TokenValue[][]): TokenValue | null => {
    for (let column = 0; column < numColumns; column++) {
      for (let row = 0; row <= numRows - 4; row++) {
        if (isWinningConnect4([board[row][column], board[row + 1][column], board[row + 2][column], board[row + 3][column]])) {
          return board[row][column];
        }
      }
    } return null;
  }


  const checkAscendingDiagonalWin = (board: TokenValue[][]): TokenValue | null => {
    for (let row = 0; row <= numRows - 4; row++) {
      for (let column = 0; column <= numColumns - 4; column++) {
        if (isWinningConnect4([board[row][column], board[row + 1][column + 1], board[row + 2][column + 2], board[row + 3][column + 3]])) {
          return board[row][column];
        }
      }
    } return null
  }

  const checkDescendingDiagonalWin = (board: TokenValue[][]): TokenValue | null => {
    for (let row = 3; row < numRows; row++) {
      for (let column = 0; column <= numColumns - 4; column++) {
        if (isWinningConnect4([board[row][column], board[row - 1][column + 1], board[row - 2][column + 2], board[row - 3][column + 3]])) {
          return board[row][column];
        }
      }
    } return null;
  }

  return (
    checkHorizontalWin(board) ||
    checkVerticalWin(board) ||
    checkAscendingDiagonalWin(board) ||
    checkDescendingDiagonalWin(board) ||
    checkDraw(board)
  );
}

