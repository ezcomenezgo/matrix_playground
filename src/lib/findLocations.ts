import type { Board } from '@/type/board'
import { isFibonacciNum, isFibSeq } from './validations';

export default function findLocations(board: Board) {
  const locations: [number, number][] = [];
  // use for loop to check every cells in board's row
  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    for (let j = 0; j < row.length; j++) {
      const curNum = row[j]
      if (isFibonacciNum(curNum)) {
        const fiveNumAfterCurFibNum = [
          curNum, row[j + 1], row[j + 2], row[j + 3], row[j + 4]
        ]
        if (isFibSeq(fiveNumAfterCurFibNum)) {
          locations.push([i, j], [i, j + 1], [i, j + 2], [i, j + 3], [i, j + 4])
        }
      }
    }
  }

  // use for loop to check every cells in board's col
  for (let i = 0; i < board.length; i++) {
    const col = []
    for (let j = 0; j < board[0].length; j++) {
      const cell = board[j][i]
      col.push(cell)
    }

    for (let j = 0; j < col.length; j++) {
      const curNum = col[j]
      if (isFibonacciNum(curNum)) {
        const fiveNumAfterCurFibNum = [
          curNum, col[j + 1], col[j + 2], col[j + 3], col[j + 4]
        ]
        if (isFibSeq(fiveNumAfterCurFibNum)) {
          locations.push([j, i], [j + 1, i], [j + 2, i], [j + 3, i], [j + 4, i])
        }
      }
    }
  }

  return locations
}