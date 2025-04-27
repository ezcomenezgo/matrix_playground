'use client'
import type { Board } from '@/type/board'
import { useState } from 'react'
import updateRelativeCellsOfClickedCell from '@/lib/valueIncrementByOne'

export default function Board() {
  const [board, setBoard] = useState(
    Array.from({ length: 50 }, () => Array(50).fill(0))
  )

  function handleBoard(board: Board, rowIdx: number, colIdx: number) {
    // update relative cells increased by 1
    const firstUpdatedMatrix = updateRelativeCellsOfClickedCell(
      board,
      rowIdx,
      colIdx
    )

    setBoard(firstUpdatedMatrix)
  }

  return (
    <div>
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className="flex">
          {row.map((cell, colIdx) => (
            <div
              key={colIdx}
              className="w-6 h-6 border border-gray-300 flex items-center justify-center"
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
