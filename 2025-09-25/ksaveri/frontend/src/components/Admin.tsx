import { Box, List, ListItem, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

type Todo = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Admin = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/admin/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleToggle = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/admin/todos/${id}/toggle`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        fetchTodos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Typography variant="h1">Admin Todos</Typography>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            {JSON.stringify(todo)}
            <Button
              onClick={() => handleToggle(todo.id)}
              color={todo.deleted ? "success" : "error"}
              variant="contained"
              sx={{ ml: 2 }}
            >
              {todo.deleted ? "Restore" : "Archive"}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Admin;
