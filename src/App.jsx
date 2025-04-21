import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './component/TodoForm'
import TodoItem from './component/TodoItem'
import { useTodo,TodoContext,TodoProvider } from './context/todoContext'
function App() {
  
  const [Todos, setTodos] = useState([]);
  
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.lenght > 0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(Todos));
  },[Todos])

  const addTodo = (todo)=>{
    setTodos((prev)=>[...prev,{id : Date.now(), ...todo }]);
  }

  const updateTodo = (id , todo) =>{
    setTodos((prev)=> prev.map((e)=> (e.id === id) ? todo : e))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((e) =>  e.id !== id))
  }
  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((e)=> (e.id === id) ?  {...e,completed : !e.completed} : e))
  }

  // const {addTodo,deleteTodo,updateTodo ,toggleCOmplete, todos} = TodoContext;

  return (
    <TodoProvider value = {{addTodo,deleteTodo,updateTodo ,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm/>
            {/* Todo form goes here */} 
        </div>
        <div className="flex flex-wrap gap-y-3">
            <TodoItem/>
            {/*Loop and Add TodoItem here */}
        </div>
    </div>
</div>
</TodoProvider>
  )
}

export default App
