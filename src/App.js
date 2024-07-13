import logo from './logo.svg';
import './App.css';
import PropsPractise from './PropsPractise';
import {useState} from 'react';

function App() {
  const [name,setName]=useState("vaibhavi")
  const [counter,setCounter]=useState(0)
 let changeName=()=>{
    setName("vaibhavi bodke")
  }
  let increaseCounter=()=>{
    setCounter(counter+1)
  }
  let decreaseCounter=()=>{
    if(counter >0){
    setCounter(counter-1)
    }
  }
  let resetAll=()=>{
    setCounter(0)
  }
  return (
    <div className="App">
      <PropsPractise name={name}/>
      <button onClick={changeName} className='btn btn-info'>click</button><br></br>
      <h1>{counter}</h1>
      <button onClick={increaseCounter} className='btn btn-primary'>increase</button>{" "}
      <button onClick={decreaseCounter} className='btn btn-success'>decrease</button>{" "}
      <button onClick={resetAll} className='btn btn-danger'>resetAll</button>

    </div>
  );
}

export default App;
