import React from 'react'
import './Addtodo.css';

export default function TodoItems({todo, onDelete}) {
  return (
    <>
    <div className='todoitem-container'>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm delete' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    <hr></hr>
    </>
  )
}
