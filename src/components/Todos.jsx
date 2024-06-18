import { useContext } from "react";
import { TodosContext } from "../App";

const Todos = () => {

    const {selectedTodos, removeSelectedTodos} = useContext(TodosContext);

  return (

    <>
        <h1>Todos</h1>
        {selectedTodos.length === 0 ? <h2>-- Add Tasks --</h2>
        :
        <ol>
            {selectedTodos.map((todo, index)=>{
                return(
                    <li key={index}>
                        <dt>{todo.name}</dt>
                        <dd>{todo.description}</dd>
                        <button onClick={()=> removeSelectedTodos(index)}>-</button>
                    </li>
                )
            })}
        </ol>
        }   
    </>

  )
}

export default Todos;