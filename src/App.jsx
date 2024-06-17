import {Routes, Route} from "react-router-dom"
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {



  return (

      <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/todos" element={<Todos />}>Todos</Route>
      </Routes>
      </main>

  )
}

export default App;
