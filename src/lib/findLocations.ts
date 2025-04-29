import type { Matrix } from '@/type/matrix'
import { isFibonacciNum, isFibSeq } from './validations';

function findLocationsOfCellsToIncrease(matrix: Matrix, rowIdx: number, colIdx: number) {
  const locations: [number, number][] = []

  for (let i = 0; i <= matrix[rowIdx].length - 1; i++) {
    locations.push([rowIdx, i])
  }

  for (let i = 0; i <= matrix.length - 1; i++) {
    if (i !== rowIdx) {
      locations.push([i, colIdx])
    }
  }

  return locations
}

function findLocationsOfCellsToClear(matrix: Matrix) {
  const locations: [number, number][] = []
  // use for loop to check every cells in matrix's row
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
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

  // use for loop to check every cells in matrix's col
  for (let i = 0; i < matrix.length; i++) {
    const col = []
    for (let j = 0; j < matrix[0].length; j++) {
      const cell = matrix[j][i]
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

export { findLocationsOfCellsToIncrease, findLocationsOfCellsToClear }