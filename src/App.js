// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import React, {useState} from 'react';

function App() {
  const onDelete = (todo) =>{
    console.log("I am onDelete",todo);

  setTodos(todos.filter((e) => {
    return e!==todo;
    }))
    // let index= todos.indexOf(todo);//Won't work in React
    // todos.splice(index, 1);
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"Market",
      desc:"go to market",
    },
    {
      sno:2,
      title:"Mall",
      desc:"go to mall",
    },
    {
      sno:3,
      title:"Mill",
      desc:"go to mill",
    },
  ]);
  
  
  return (

    <div className="App">
      <Header title="My List" searchBar={true}/>
      
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />

    </div>
  );
}

export default App;
