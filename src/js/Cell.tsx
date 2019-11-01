import React from 'react'

export default ({ index, val, onChangeHandler }: any): JSX.Element => {
  return (
    <td className="border border-gray-200 px-2 py-6 relative">
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
