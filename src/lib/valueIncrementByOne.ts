import type { Matrix } from "@/type/matrix"

export default function valueIncrementByOne(matrix: Matrix, rowIdx: number, colIdx: number): Matrix {
  const nextMatrix = matrix.map(row => [...row])

  for (let i = 0; i <= nextMatrix[rowIdx].length - 1; i++) {
    nextMatrix[rowIdx][i] += 1
  }

  for (let i = 0; i <= nextMatrix.length - 1; i++) {
    nextMatrix[i][colIdx] += 1
  }

  // deal with duplicate calculation
  nextMatrix[rowIdx][colIdx] -= 1

  return nextMatrix
}