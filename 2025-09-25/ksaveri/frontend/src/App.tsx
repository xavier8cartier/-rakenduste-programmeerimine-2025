import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cats from "./components/Cats";
import Todos from "./components/Todo";
import Admin from "./components/Admin";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/cats">Cats</Link> | <Link to="/todos">Todos</Link> |{" "}
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/cats" element={<Cats />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
