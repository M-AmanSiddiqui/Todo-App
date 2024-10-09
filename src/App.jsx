
import { useState } from 'react'
import './App.css'
import TodoInput from './components/Todoinput'
import TodoList from './components/TodoList';
function App() {
  const [todo , setTodo] = useState("")
 const [todos , setTodos] = useState([
 {
  todo: "Reading Books",
  id: Date.now(),
  completed: false,
 }]);
  return (
    
  <div className='w-3/4 mx-auto'>
    <h1 className='font-bold text-3xl '>Todo App</h1>
  <TodoInput value = {todo} onChange={(e)=> setTodo(e.target.value)}
    onClick={()=> console.log("Clicked on add todo button")}/>
<TodoList todos={todos} />
 <h1>abc</h1>
 </div>

  )};

export default App
