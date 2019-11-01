import React, { useState, useRef, useMemo, useCallback } from 'react'
import Cell from './Cell'

export default (): JSX.Element => {
  const [size, setSize]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(3)

  const numbers: (number | undefined)[] = useMemo<(number | undefined)[]>(
    (): (number | undefined)[] => new Array(Math.pow(size, 4)).fill(undefined),
    [size]
  )

  const onChangeNumber: (index: number, val: number) => void = useCallback<
    (index: number, val: number) => void
  >(
    (index: number, val: number): void => {
      numbers[index] = val
    },
    [numbers]
  )

  const numbersEl: JSX.Element[] = useMemo<JSX.Element[]>((): JSX.Element[] => {
    const row: JSX.Element[] = []
    const side: number = Math.sqrt(numbers.length)

    for (let i: number = 0; i < side; i++) {
      const col: JSX.Element[] = []

      for (let j: number = 0; j < side; j++) {
        const index: number = i * side + j
        col.push(
          <Cell
            key={`col${index}`}
            index={index}
            val={numbers[index]}
            onChangeHandler={onChangeNumber}
          />
        )
      }

      row.push(<tr key={`row${i}`}>{col}</tr>)
    }

    return row
  }, [numbers])

  return (
    <>
      <div className="m-4">
        <header>
          <input
            type="number"
            name="num"
            id="num"
            min="2"
            className="border py-1 px-2"
            value={size}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              event.stopPropagation()
              setSize(Math.max(parseInt(event.currentTarget.value, 10), 2))
            }}
          />
        </header>
        <table className="table-fixed w-full mt-4">
          <tbody>{numbersEl}</tbody>
        </table>
      </div>
    </>
  )
}
