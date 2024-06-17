//Import
import { fetchTodos, createTodo, editTodo, deleteTodo } from "../services/todosService";
import { useState, useEffect } from "react";

const Todos = () => {

//State
const [todos, setTodos] = useState([]);

//Functions
const fetchTodosDatabase = async () => {
try{
    const listOfTodos = await fetchTodos();
    setTodos(listOfTodos);
}catch(error){
    console.error(error.message);
}
};

//CRUD
const handleCreateTodo = async (todoData) => {
  try{
    await createTodo(todoData);
    fetchTodosDatabase();
  }catch(error){
    console.error(error.message)
  }
};

const handleEditTodo = async (id, todoData) => {
  try{
    await editTodo(id, todoData);
    fetchTodosDatabase();
  }catch(error){
    console.error(error.message)
  }
};

const handleDeleteTodo = async (id) => {
  try{
    await deleteTodo(id);
    fetchTodosDatabase();
  }catch(error){
    console.error(error.message)
  }
};

  useEffect(()=>{
    fetchTodosDatabase();
  }, [])

  return (

    <>
    
    <h1>Todos</h1>
      <ul>
        {todos.map((todo)=>{
          return(
            <li key={todo.id}>
              <dd>Task: {todo.name}</dd>
              <dd>Description: {todo.description}</dd>
              
            </li>
          )
        })}
      </ul>

    </>

  )
}

export default Todos;