import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#4d7ba9", light: "#01050a", dark: "#d7dadd" },
    secondary: { main: "#89c3da", light: "#ffc947", dark: "#012027" },
    background: {
      default: "#9b9b9bff",
      paper: "#d5d5d5ff",
    },
    text: {
      primary: "#212b36",
      secondary: "#326fa4",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: "2.5rem", fontWeight: 600 },
    h4: { fontWeight: 500 },
  },
});
