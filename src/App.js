// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from './MyComponents/AddTodo';
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
  const addTodo = (title, desc) => {
    console.log("Adding todo", title, desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
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
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />

    </div>
  );
}

export default App;
