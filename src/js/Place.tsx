import React, { useState, useRef, useMemo } from 'react'
import Cell from './Cell'

export default (): JSX.Element => {
  const [size, setSize]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(3)

  const side: number = useMemo<number>((): number => Math.pow(size, 2), [size])

  const numbers = useMemo<(number | null)[]>((): (number | null)[] => {
    const arr: (number | null)[] = []

    for (let i: number = 0, len: number = Math.pow(side, 2); i < len; i++) {
      arr[i] = null
    }

    return arr
  }, [size, side])

  return (
    <>
      <header>
        <input
          type="number"
          name="num"
          id="num"
          value={size}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            event.stopPropagation()
            setSize(parseInt(event.currentTarget.value, 10))
          }}
        />
      </header>
      {numbers.map(
        (val: number | null, i: number): JSX.Element => (
          <Cell key={i} index={val} />
        )
      )}
    </>
  )
}
