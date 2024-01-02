import { useState } from 'react'
import './App.css'
import Createtodo from './components/Createtodo'
import Todos from './components/todos'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
    <div>
      <Createtodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
    </>
  )
}

export default App
