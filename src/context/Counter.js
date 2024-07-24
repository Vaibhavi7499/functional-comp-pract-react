import React, { createContext, useState } from 'react'
export const myContext = createContext();
const Counter = ({children}) => {
    const [counter, setCounter] = useState(0);
    let sendContext = {
        counter,
        setCounter
    }
  return (
    <myContext.Provider value={sendContext}>
        {children}
    </myContext.Provider>
  )
}

export default Counter