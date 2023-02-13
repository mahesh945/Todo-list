import React from 'react'
import { TodoItem } from './TodoItem'


export const Todos = (props) => {
  
  return (
    <div className='container'>
    
      <h4 className="text-center">Todos List</h4>

      {props.todos.length===0 ? "No tasks to display": 
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })
      }
     
    </div>
  )
}
