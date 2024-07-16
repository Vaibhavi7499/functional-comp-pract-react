import React, { useState } from 'react'
import "./calculator.css"
function Calculator() {
    const [value,setValue]=useState("")
      
    
  return (
    <div> 
        <h1>Simple Calculator By Using Functional Component</h1>
        <table>
          <tr>
            <td colspan="4">
              <input
              className='inpt1'
                type="text"
                value={value}
              ></input>
            </td>
            
          </tr>

          <tr>
            <td>
              <input
                type="button"
                value={1}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={2}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={3}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"/"}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="button"
                value={4}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={5}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={6}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"*"}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="button"
                value={7}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={8}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={9}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"-"}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="button"
                value={0}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"."}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"00"}
                onClick={e=>setValue(value+e.target.value)}
                className="equal"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"+"}
                onClick={e=>setValue(value + e.target.value)}
                className="btn1"
              ></input>
            </td>
          </tr>
          <tr>
          <td>
              <input
                type="button"
                value={"C"}
                onClick={e=>setValue("")}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"DE"}
                onClick={e=>setValue(value.slice(0,-1))}
                className="btn1"
              ></input>
            </td>
            <td>
            <input
                type="button"
                value={"%"}
                onClick={e=>setValue(value+e.target.value)}
              ></input>
            </td>
            <td>
            <input
                type="button"
                value={"="}
                onClick={e=>setValue(eval(value))}
                className="equal"
              ></input>
            </td>
          </tr>
        </table>
        </div>
  )
}

export default Calculator