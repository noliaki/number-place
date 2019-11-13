import React from 'react'

export default ({ index, val, onChangeHandler, size }: any): JSX.Element => {
  const powSize: number = Math.pow(size, 2)

  const row: number = Math.floor(index / powSize)
  const col: number = index % powSize
  const area: number = Math.floor(col / size) + Math.floor(row / size) * size

  const klasses: string[] = [
    'border',
    'border-gray-200',
    'px-2',
    'py-6',
    'relative'
  ]

  if (index % size === 0) {
    klasses.push('border-l-4')
  }

  if (index % size === size - 1) {
    klasses.push('border-r-4')
  }

  if (Math.floor(index / powSize) % size === 0) {
    klasses.push('border-t-4')
  }

  if (index >= Math.pow(size, 4) - powSize) {
    klasses.push('border-b-4')
  }

  return (
    <td className={klasses.join(' ')}>
      <input
        type="number"
        className="absolute inset-0 max-w-full py-1 px-2 block w-full h-full"
        min="1"
        max={powSize}
        value={val}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          event.stopPropagation()
          onChangeHandler(index, parseInt(event.currentTarget.value, 10))
        }}
      />
      <p>row: {row}</p>
      <p>col: {col}</p>
      <p>area: {area}</p>
    </td>
  )
}
