import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { TodosContext } from "../App";
import { editTodo, deleteTodo } from "../services/todosService";
import Form from "./Form";


const Details = () => {

    //State
    const [todoToEdit, setTodoToEdit] = useState(null);
    const [renderForm, setRenderForm] = useState("");


    const navigate = useNavigate();

    const {todos, fetchTodosDatabase} = useContext(TodosContext);
    //Display Selected Todo by Id
    const {todoId} = useParams();
    const singleTodo = todos.find((todo)=>{
        return todo.id === Number(todoId);
    });
    console.log(singleTodo)
    
    //Functions
    const handleDeleteTodo = async (id) => {
        try{
          await deleteTodo(id);
          fetchTodosDatabase();
          navigate("/backlog");  
        }catch(error){
          console.error(error.message);
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

      const handleEdit = (todoData) => {
        setTodoToEdit(todoData);
        if(renderForm === ""){
            setRenderForm("form");
        }
        if(renderForm === "form"){
            setRenderForm("");
        }
      };
    
    
  return (

    <>
        <h1>Todo</h1>
        <h3>Task: {singleTodo.name}</h3>
        <h3>Description: {singleTodo.description}</h3>
        <button onClick={()=> handleDeleteTodo(singleTodo.id)}>delete</button>
        <button onClick={()=> handleEdit(singleTodo)}>edit</button>

        {renderForm === "form" && (
            <Form 
            todoToEdit={todoToEdit}
            setTodoToEdit={setTodoToEdit}
            handleEditTodo={handleEditTodo}  
            />
        )}

    </>

  )
}

export default Details;