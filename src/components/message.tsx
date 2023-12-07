import React from 'react'
import { todos } from '../type/type'


type Props={
    TodosArray:todos[],
    setTodos:React.Dispatch<React.SetStateAction<todos[]>>
    deleteMessage:(id:number)=>void
}


const Message:React.FC<Props> = ({TodosArray,setTodos,deleteMessage}) => {
  return (
    <div>
        <ul>
        {TodosArray.map((todo,i)=>(
            <li key={i}>{todo.id + " " + todo.text} <button onClick={()=>deleteMessage(todo.id)}>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}   

export default Message