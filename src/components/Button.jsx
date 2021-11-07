import React, { useState } from 'react'

export default function Button() {

  let [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <button onClick={increment}>{counter}</button>
  )
}
