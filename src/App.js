import logo from './logo.svg';
import './App.css';
import PropsPractise from './PropsPractise';
import {useState} from 'react';
import Calculator from './Calculator';
import Cal from './Cal';
import Form from './Form';
import Form1 from './Form1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import UserForm from './UserForm';
import UserList from './UserList';
import UseState from './UseState';
import UseEffectHook from './UseEffectHook';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import RefClass from './RefClass';
import RefFunc from './RefFunc';
import Todo from './Todo';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

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
      {/* <PropsPractise name={name}/>
      <button onClick={changeName} className='btn btn-info'>click</button><br></br>
      <h1>{counter}</h1>
      <button onClick={increaseCounter} className='btn btn-primary'>increase</button>{" "}
      <button onClick={decreaseCounter} className='btn btn-success'>decrease</button>{" "}
      <button onClick={resetAll} className='btn btn-danger'>resetAll</button> */}
{/* <Calculator/> */}
{/* <Cal/> */}
{/* <Form/> */}
{/* <Form1/> */}
<BrowserRouter>
<Layout/>
<Routes>
  <Route path='/form' element={<Form/>}/>
  <Route path='/cal' element={<Cal/>}/>
  <Route path='/userform' element={<UserForm/>}/>
  <Route path='/userlist' element={<UserList/>}/>
  <Route path='/userform/:id' element={<UserForm/>}/>
  <Route path='/usestate' element={<UseState/>}/>
  <Route path='/useeffect' element={<UseEffectHook/>}/>
  <Route path='/studentform' element={<StudentForm/>}/>
  <Route path='/studentform/:id' element={<StudentForm/>}/>
  <Route path='/studentlist' element={<StudentList/>}/>
  <Route path='/todo' element={<Todo/>}/>
  <Route path='/todo/:id' element={<Todo/>}/>
  <Route path='/todolist' element={<TodoList/>}/>
  <Route path='/contactform' element={<ContactForm/>}/>
  <Route path='/contactform/:id' element={<ContactForm/>}/>
  <Route path='/contactlist' element={<ContactList/>}/>
</Routes>
</BrowserRouter>
{/* <UseState/> */}
{/* <RefClass/> */}
{/* <RefFunc/> */}
    </div>
  );
}

export default App;
