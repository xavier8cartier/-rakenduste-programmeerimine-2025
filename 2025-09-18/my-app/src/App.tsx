import "./App.css";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PersonIcon from "@mui/icons-material/Person";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ksaveri App
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            startIcon={<InfoIcon />}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/something"
            startIcon={<QuestionMarkIcon />}
          >
            Something
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/profile"
            startIcon={<PersonIcon />}
          >
            Profile
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h1" sx={{ mb: 2 }}></Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("u pressed the button, u get bacon!")}
          sx={{ mb: 4 }}
        >
          press me pls
        </Button>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
