// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from './MyComponents/AddTodo';
import React, {useState, useEffect} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
    
  }
  
  const onDelete = (todo) =>{
    console.log("I am onDelete",todo);

  setTodos(todos.filter((e) => {
    return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
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

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  
  
  return (

    <div className="App">
      <Header title="My List" searchBar={true}/>
      <AddTodo  addTodo={addTodo}/>  
      
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />

    </div>
  );
}

export default App;
