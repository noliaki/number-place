import React, { useState, useRef, useMemo } from 'react'
import Cell from './Cell'

export default (): JSX.Element => {
  const [size, setSize] = useState(3)

  const numbers = useMemo(() => {
    const arr: number[] = []

    for (let i: number = 0, len: number = Math.pow(size, 2); i < len; i++) {
      arr[i] = i
    }

    return arr
  }, [size])

  return (
    <>
      {numbers.map(
        (val: number, i: number): JSX.Element => (
          <Cell index={val} key={i} />
        )
      )}
    </>
  )
}
