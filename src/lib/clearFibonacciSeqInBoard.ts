import type { Board } from '@/type/board'

export default function clearFibonacciSeqInBoard(board: Board, locations: [number, number][]) {
  const nextBoard = board

  locations.forEach((location) => {
    const rowIdx = location[0]
    const colIdx = location[1]

    nextBoard[rowIdx][colIdx] = 0
  })

  return nextBoard
}