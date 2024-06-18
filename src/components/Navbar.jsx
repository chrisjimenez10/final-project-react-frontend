import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodosContext } from "../App";


const Navbar = () => {

  const {selectedTodos} = useContext(TodosContext);

  return (

    <div>
        <Link to="/">Home</Link>
        <Link to="/backlog">Backlog</Link>
        <Link to="/todos">Todos ({selectedTodos.length})</Link>
    </div>

  )
}

export default Navbar;