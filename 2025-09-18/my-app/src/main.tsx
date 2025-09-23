import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { theme } from "./theme/theme";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Something from "./components/Something";
import Profile from "./components/Profile";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/something", element: <Something /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{ body: { background: theme.palette.background.default } }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
