import './App.css';
import Header from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';
import { useEffect, useState } from 'react';
import Addtodo from './MyComponent/Addtodo';
import About from './MyComponent/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem('todos')) {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  } else {
    initTodo = [];
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route path="/" element={<Home addTodo={addTodo} todos={todos} onDelete={onDelete} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

function Home({ addTodo, todos, onDelete }) {
  return (
    <>
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
