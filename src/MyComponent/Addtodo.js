import React, { useState } from 'react'
import './Addtodo.css';

export default function Addtodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit =(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("title or description cannot blank")
    }
    else
    {props.addTodo(title, desc);
     setTitle("");
     setDesc("");
    }

  }
  return (
    <div className='form-main-container'>
        <form className='form-container' onSubmit={submit}>
          <h2>Stay Organized and Conquer Your Day: With Your Personal Task List</h2>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Task Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Task Details</label>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}  className="form-control" id="desc"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    </div>
  )
}
