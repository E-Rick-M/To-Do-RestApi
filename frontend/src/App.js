import React,{useEffect,useState} from 'react'
import './App.css';
import ToDoForm from './components/todoForm';
import { addTodos, deleteTodos, fetchTodos, updateTodos } from './api/api';
import TodoList from './components/todoList';

function App() {
  const [todos,setTodos] =useState([])
  // console.log(todos)

  const loadTodos=async()=>{
    const {data}=await fetchTodos();
    setTodos(data.todos||[])
  }

  useEffect(()=>{
    loadTodos()
  },[])

  const handleAddingHandler=async(title)=>{
    const {data}=await addTodos(title);
    setTodos((prevTodos)=>([
      ...prevTodos,
      data
    ]))
  }

  const onUpdateHandler= async(id,updateData)=>{
    console.log("Updating Todo:", id, updateData); 
    const {data}=await updateTodos(id,updateData);
    setTodos(todos.map(todo=>todo.id ===id ? data:todo))
  }

  const onDeleteHandler=async(id)=>{
    await deleteTodos(id)
    setTodos(todos.filter(todo=>todo.id !==id))
  }


  return (
   <div>
    <h1>To-do List Dummy (With A Rest API!)</h1>
    <ToDoForm onAdd={handleAddingHandler}/>
    <TodoList todos={todos} onUpdate={onUpdateHandler} onDelete={onDeleteHandler}/>
   </div>
  );
}

export default App;
