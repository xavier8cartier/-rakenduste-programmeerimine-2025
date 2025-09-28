import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#4caf50" },
    error: { main: "#f44336" },
    background: { default: "#242424", paper: "#1a1a1a" },
    text: { primary: "#ffffff" },
  },
  typography: {
    h1: { color: "#ffffff" },
  },
});

export default theme;
