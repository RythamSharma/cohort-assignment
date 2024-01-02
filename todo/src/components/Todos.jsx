import React, { useEffect, useState } from "react";
import axios from "axios";

function Todos(props) {

  const handlemarkdone = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:3000/updatetodos", {
        id: e.target.id,
      });
      const response1 = await axios.get("http://localhost:3000/gettodos");
      props.setTodos(response1.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/gettodos");
        props.setTodos(response.data);
        // console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, []);

  return (
    <div className="todo-container" >
      <h1>TODOS - DO IT</h1>
      {props.todos.map((todo) => (
        <div className="todo-item" key={todo._id}>
          {todo.title} <br />
          {todo.description} <br />
          <button className='button' onClick={handlemarkdone} id={todo._id} >{todo.done? "completed ✅": "mark as completed"}</button>
        </div>
      ))}
    </div>
  );
}


export default Todos;
