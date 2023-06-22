import React from 'react'
import TodoItems from '../MyComponent/TodoItems';
import './Addtodo.css';

export default function Todos(props) {
  return (
    <div className='main-container'>
      <div className='container'>
        <h2 className='text-center'>Task List</h2>
        {props.todos.length===0 ? "No Todos to display":
        props.todos.map((todo)=>{
            return (
            <TodoItems todo ={todo} key={todo.sno} onDelete={props.onDelete}/>
            )
        })}
        </div>  
    </div>
  )
    }
