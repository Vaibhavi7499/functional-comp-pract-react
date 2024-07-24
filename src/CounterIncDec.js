import React, { useContext } from 'react'
import { myContext } from './context/Counter'

const CounterIncDec = () => {
    const {counter, setCounter} = useContext(myContext);

    let inc = () => {
        setCounter(counter+1)
    }
  return (
    <div>
        <button onClick={inc}>IncCounter</button>
    </div>
  )
}

export default CounterIncDec