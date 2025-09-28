import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cats from "./components/Cats";
import Todos from "./components/Todo";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/cats">Cats</Link> | <Link to="/todos">Todos</Link>
      </nav>
      <Routes>
        <Route path="/cats" element={<Cats />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
}

export default App;
