import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
// Context is imported
import { TodoContext } from "./Todo";

const SubmitTodo = () => {
  // Context is consumed here
  const context = useContext(TodoContext);
  if (!context) return null;
  const { fetchTodos } = context;
  const [title, setTitle] = useState("");

  const submitTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title }),
      });

      if (response.ok) {
        setTitle("");
        fetchTodos();
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitTodo();
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Todo title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Button variant="contained" color="success" type="submit">
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitTodo;
