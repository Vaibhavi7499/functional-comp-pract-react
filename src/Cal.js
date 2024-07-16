import React, { useState } from "react"
function Cal(){
    const [first,setFirstNum]=useState(0)
    const [second,setSecondNum]=useState(0)
    const [result,setResult]=useState(0)
    function FirstNum(e){
setFirstNum(e.target.value)
    }
    function SecondNum(e){
        setSecondNum(e.target.value)
    }
    function Cal(item){
switch(item){
    case "add":
         setResult(Number(first) + Number(second));
        break;
        case "sub":
         setResult(Number(first) - Number(second));
        break;
        case "mul":
         setResult(Number(first) * Number(second));
        break;
        case "div":
         setResult(Number(first) / Number(second));
        break;
        default:
            setResult(0)
}
    }
    return(
        <div>
            <h1>Calculator</h1>
            <input type="text" placeholder="first num" value={first} onChange={(e)=>FirstNum(e)}/>{" "}
            <input type="text" placeholder="second num" value={second} onChange={(e)=>SecondNum(e)}/><br></br>
<button onClick={()=>Cal("add")}>add</button>
<button onClick={()=>Cal("sub")}>sub</button>
<button onClick={()=>Cal("mul")}>mul</button>
<button onClick={()=>Cal("div")}>div</button>
<div>
    <p>{result}</p>
</div>
        </div>
    )
}
export default Cal