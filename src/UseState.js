import React from 'react'
import { useState } from 'react'
function UseState() {
    const [name,setName]=useState({
        firstname:"",
        lastname:""
    })
    const [items,setItems]=useState([])
    const addItem=()=>{
        setItems([
            ...items,
            {
                id:items.length,
                value:Math.floor(Math.random()*10)+1
            }
        ])
    }
    console.log(items)
  return (
    <div>
        <div className="border border-warning border-3">
        <h1>useState with object</h1>
        <input type='text' value={name.firstname} onChange={(e)=>setName({...name,firstname:e.target.value})}></input>
        <input type='text' value={name.lastname} onChange={(e)=>setName({...name,lastname:e.target.value})}></input>
<h1>first name={name.firstname}</h1>
<h1>last name={name.lastname}</h1>
<h1>{JSON.stringify(name)}</h1>
</div>
<div className="border border-info border-3">
    <h1>useState with array</h1>
    <button onClick={addItem}>addItems</button>
    <ul>
        {
            items.map((e)=>(
                <li>{e.value}</li>
            ))
        }
    </ul>
</div>
    </div>
  )
}

export default UseState