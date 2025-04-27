import type { Matrix } from '@/type/matrix'

export default function clearFibonacciSeqInMatrix(matrix: Matrix, locations: [number, number][]) {
  const nextMatrix = matrix

  locations.forEach((location) => {
    const rowIdx = location[0]
    const colIdx = location[1]

    nextMatrix[rowIdx][colIdx] = 0
  })

  return nextMatrix
}