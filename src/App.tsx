import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import { todos } from './type/type';
import Message from './components/message';

const App:React.FC=()=>{
  const [todo,setTodo]=useState<string>("")
  const [TodosArray,setTodos]=useState<todos[]>([])

  const addMessage=()=>{
    if(todo){
      setTodos([...TodosArray,{text:todo,id:TodosArray.length+1}])
    }
  }
  const deleteMessage=(id:number)=>{
    setTodos(TodosArray.filter((todo)=>todo.id!==id))
  }


  return (
    <div className="App">
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo}/>
      <Message deleteMessage={deleteMessage} TodosArray={TodosArray} setTodos={setTodos}/>
    </div>
  );
}

export default App;
