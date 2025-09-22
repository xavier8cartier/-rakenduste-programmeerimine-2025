import "./App.css";
import { Button, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <Container maxWidth="md">
      <h1>Ksaveri</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert("u pressed the button, u get bacon!")}
      >
        press me pls
      </Button>
      <nav style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
        <Link to="/something">Something</Link>
      </nav>
      <Outlet />
    </Container>
  );
}

export default App;
