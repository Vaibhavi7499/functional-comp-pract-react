import React, { useEffect, useRef, useState } from "react";

function RefFunc(){
    const [isUpdate,setUpdate]=useState(false)
    const myRef=useRef()

    useEffect(()=>{
        console.log(myRef.current, "abc")
        if(isUpdate){
            myRef.current.focus()
        }
    },[isUpdate])

    let clickMe=()=>{
        setUpdate(true)
    }
return(
    <div>
<input type="text" ref={myRef} />
<button onClick={clickMe}>click</button>
    </div>
)
}
export default RefFunc