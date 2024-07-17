import React, { useState } from 'react'
import { useEffect } from 'react'
function UseEffectHook() {
    const [count,setCount]=useState(0)
    function Click(){
        useEffect(()=>{
            document.title=`You click ${count} times`;
        },[count])
    }
  return (
    <div>
<button onClick={()=>setCount((prevCount)=>prevCount+1)}>click {count} times</button>
    </div>
  )
}

export default UseEffectHook