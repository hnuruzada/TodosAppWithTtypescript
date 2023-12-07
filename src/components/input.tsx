import React from 'react'

type Props={
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
    addMessage:()=>void
}

const Input:React.FC<Props> = ({todo,setTodo,addMessage}) => {
  return (
    <div>
        <input type="text" onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={addMessage}>Add</button>
    </div>
  )
}

export default Input