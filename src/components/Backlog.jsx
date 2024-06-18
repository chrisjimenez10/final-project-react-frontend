//Import
import { createTodo } from "../services/todosService";
import { useState, useEffect, useContext } from "react";
import { TodosContext } from "../App";
import { useNavigate } from "react-router-dom";
import Form from "./Form";


const Backlog = () => {

  const {todos, fetchTodosDatabase, addToSelectedTodos, selectedTodos} = useContext(TodosContext);

  console.log(selectedTodos)
  const navigate = useNavigate();

//State
const [renderForm, setRenderForm] = useState("");

//Functions
const handleRenderForm = () => {
  if(renderForm === ""){
  setRenderForm("form");
  }
  if(renderForm === "form"){
    setRenderForm("");
  }
};

//Create
const handleCreateTodo = async (todoData) => {
  try{
    await createTodo(todoData);
    fetchTodosDatabase();
  }catch(error){
    console.error(error.message)
  }
};

  useEffect(()=>{
    fetchTodosDatabase();
  }, []);

  const handleNavigate = (id) => {
    navigate(`/backlog/${id}`);
  };

  return (

    <>
    
    <h1>Backlog</h1>
      <ul>
        {todos.map((todo)=>{
          return(
            <li key={todo.id}>
              <dd>Task: {todo.name}</dd>
              <button onClick={()=> addToSelectedTodos(todo)}>+</button>
              <button onClick={()=> handleNavigate(todo.id)}>view</button>
            </li>
          )
        })}
      </ul>

      <button onClick={handleRenderForm}>Create</button>
      {renderForm === "form" && (
              <Form 
              handleCreateTodo={handleCreateTodo}   
            />
      )}

    </>

  )
}

export default Backlog;