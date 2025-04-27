'use client'
import type { Board } from '@/type/board'
import { useState } from 'react'
import updateRelativeCellsOfClickedCell from '@/lib/valueIncrementByOne'
import findLocations from '@/lib/findLocations'
import clearFibonacciSeqInBoard from '@/lib/clearFibonacciSeqInBoard'

export default function Board() {
  const [board, setBoard] = useState(
    Array.from({ length: 50 }, () => Array(50).fill(0))
  )

  const [highlightCells, setHighlightCells] = useState<[number, number][]>([])
  const [greenCells, setGreenCells] = useState<[number, number][]>([])

  function handleBoard(board: Board, rowIdx: number, colIdx: number) {
    // update relative cells increased by 1
    const firstUpdatedMatrix = updateRelativeCellsOfClickedCell(
      board,
      rowIdx,
      colIdx
    )

    // find locations
    const locations = findLocations(firstUpdatedMatrix)

    // update the result board
    const resultUpdateMatrix = clearFibonacciSeqInBoard(
      firstUpdatedMatrix,
      locations
    )

    // update the cell color
    highlightYellowToIncreasedCells(resultUpdateMatrix, rowIdx, colIdx)
    setGreenCells(locations)
    setTimeout(() => setGreenCells([]), 500)

    setBoard(resultUpdateMatrix)
  }

  function highlightYellowToIncreasedCells(
    resultUpdateMatrix: Board,
    rowIdx: number,
    colIdx: number
  ) {
    const highlightYellowCells: [number, number][] = []

    for (let i = 0; i < resultUpdateMatrix[rowIdx].length; i++) {
      highlightYellowCells.push([rowIdx, i])
    }

    for (let i = 0; i < resultUpdateMatrix.length; i++) {
      if (i !== rowIdx) {
        highlightYellowCells.push([i, colIdx])
      }
    }

    setHighlightCells(highlightYellowCells)

    setTimeout(() => setHighlightCells([]), 500)
  }

  function isHighlighted(rowIdx: number, colIdx: number) {
    return highlightCells.some(([r, c]) => r === rowIdx && c === colIdx)
  }

  function isGreen(rowIdx: number, colIdx: number) {
    return greenCells.some(([r, c]) => r === rowIdx && c === colIdx)
  }

  return (
    <div>
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className="flex">
          {row.map((cell, colIdx) => (
            <div
              key={colIdx}
              className={`
                w-6 h-6 border border-gray-300 flex items-center justify-center
                ${isHighlighted(rowIdx, colIdx) ? 'bg-yellow-500' : ''}
                ${isGreen(rowIdx, colIdx) ? 'bg-green-600' : ''}
              `}
              onClick={() => handleBoard(board, rowIdx, colIdx)}
            >
              {cell !== 0 && cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
