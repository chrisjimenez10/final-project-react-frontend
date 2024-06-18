import {Routes, Route} from "react-router-dom"
import { createContext, useState } from "react";
import { fetchTodos } from "./services/todosService";
import Backlog from "./components/Backlog";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Todos from "./components/Todos";
import Details from "./components/Details";

export const TodosContext = createContext(null);

const App = () => {
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


  return (

      <main>
      <TodosContext.Provider value={{todos, fetchTodosDatabase}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/backlog" element={<Backlog />}>Todos</Route>
        <Route path="/todos" element={<Todos />}>Todos</Route>
        <Route path="/backlog/:todoId" element={<Details />}>Details</Route>
        <Route path="*" element={<h1>Whoops, nothing here!</h1>} />
      </Routes>
      </TodosContext.Provider>
      </main>

  )
}

export default App;
