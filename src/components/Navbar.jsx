import { Link } from "react-router-dom";


const Navbar = () => {

  return (

    <div>
        <Link to="/">Home</Link>
        <Link to="/backlog">Backlog</Link>
        <Link to="/todos">Todos</Link>
    </div>

  )
}

export default Navbar;