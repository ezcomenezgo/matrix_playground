'use client'
import type { Matrix } from '@/type/matrix'
import { useState } from 'react'
import valueIncrementByOne from '@/lib/valueIncrementByOne'
import {
  findLocationsOfCellsToClear,
  findLocationsOfCellsToIncrease
} from '@/lib/findLocations'
import clearFibonacciSeqInMatrix from '@/lib/clearFibonacciSeqInMatrix'

export default function Matrix() {
  const [matrix, setMatrix] = useState(
    Array.from({ length: 50 }, () => Array(50).fill(0))
  )

  const [yellowCells, setYellowCells] = useState<[number, number][]>([])
  const [greenCells, setGreenCells] = useState<[number, number][]>([])

  function handleMatrix(matrix: Matrix, rowIdx: number, colIdx: number) {
    // update relative cells increased by 1
    const firstUpdatedMatrix = valueIncrementByOne(matrix, rowIdx, colIdx)

    // find locations about cells to increase
    const increasedCellsLocations = findLocationsOfCellsToIncrease(
      firstUpdatedMatrix,
      rowIdx,
      colIdx
    )

    // find locations about cells to clear
    const clearedCellsLocations =
      findLocationsOfCellsToClear(firstUpdatedMatrix)

    // update the result matrix
    const resultUpdateMatrix = clearFibonacciSeqInMatrix(
      firstUpdatedMatrix,
      clearedCellsLocations
    )

    // update the cell color
    setYellowCells(increasedCellsLocations)
    setTimeout(() => setYellowCells([]), 500)
    setGreenCells(clearedCellsLocations)
    setTimeout(() => setGreenCells([]), 500)

    setMatrix(resultUpdateMatrix)
  }

  function isYellow(rowIdx: number, colIdx: number) {
    return yellowCells.some(([r, c]) => r === rowIdx && c === colIdx)
  }

  function isGreen(rowIdx: number, colIdx: number) {
    return greenCells.some(([r, c]) => r === rowIdx && c === colIdx)
  }

  return (
    <div>
      {matrix.map((row, rowIdx) => (
        <div key={rowIdx} className="flex">
          {row.map((cell, colIdx) => (
            <div
              key={colIdx}
              className={`
                w-6 h-6 border border-gray-300 flex items-center justify-center
                ${isYellow(rowIdx, colIdx) ? 'bg-yellow-500' : ''}
                ${isGreen(rowIdx, colIdx) ? 'bg-green-600' : ''}
              `}
              onClick={() => handleMatrix(matrix, rowIdx, colIdx)}
            >
              {cell !== 0 && cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
