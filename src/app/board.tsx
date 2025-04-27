export default function Board() {
  const board = Array.from({ length: 50 }, () => Array(50).fill(0))

  return (
    <div>
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className="flex">
          {row.map((cell, colIdx) => (
            <div
              key={colIdx}
              className="w-6 h-6 border border-gray-300 flex items-center justify-center"
            >
              {cell !== 0 && cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
