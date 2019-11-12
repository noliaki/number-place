import React from 'react'

export default ({ index, val, onChangeHandler, size }: any): JSX.Element => {
  const topBold: boolean = index % size === 0

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

  if (Math.floor(index / Math.pow(size, 2)) % size === 0) {
    klasses.push('border-t-4')
  }

  if (index >= Math.pow(size, 4) - Math.pow(size, 2)) {
    klasses.push('border-b-4')
  }

  return (
    <td className={klasses.join(' ')}>
      <input
        type="number"
        className="absolute inset-0 max-w-full py-1 px-2"
        value={val}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          event.stopPropagation()
          onChangeHandler(index, event.currentTarget.value)
        }}
      />
    </td>
  )
}
