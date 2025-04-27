import type { Board } from "@/type/board"

export default function updateRelativeCellsOfClickedCell(board: Board, rowIdx: number, colIdx: number): Board {
  const nextBoard = board.map(row => [...row])

  for (let i = 0; i <= nextBoard[rowIdx].length - 1; i++) {
    nextBoard[rowIdx][i] += 1
  }

  for (let i = 0; i <= nextBoard.length - 1; i++) {
    nextBoard[i][colIdx] += 1
  }

  // deal with duplicate calculation
  nextBoard[rowIdx][colIdx] -= 1

  return nextBoard
}