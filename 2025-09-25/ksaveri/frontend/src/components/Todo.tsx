import { Box, List, ListItem, Typography, IconButton } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import SubmitTodo from "./SubmitTodo";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type Todo = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

export const TodoContext = createContext<{
  // Context is here
  todos: Todo[];
  fetchTodos: () => void;
  handleEdit: (todo: Todo) => void;
  submitEdit: () => void;
  handleDelete: (id: string) => void;
  editOpen: boolean;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editTodo: Todo | null;
  editTitle: string;
  setEditTitle: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editOpen, setEditOpen] = useState(false);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEdit = (todo: Todo) => {
    setEditTodo(todo);
    setEditTitle(todo.title);
    setEditOpen(true);
  };

  const submitEdit = async () => {
    if (!editTodo) return;
    try {
      const response = await fetch(
        `http://localhost:3000/todos/${editTodo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: editTitle }),
        }
      );
      if (response.ok) {
        fetchTodos();
        setEditOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchTodos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // Context is also here
    <TodoContext.Provider
      value={{
        todos,
        fetchTodos,
        handleEdit,
        submitEdit,
        handleDelete,
        editOpen,
        setEditOpen,
        editTodo,
        editTitle,
        setEditTitle,
      }}
    >
      <Box>
        <Typography variant="h1">Todos</Typography>
        <TodosList />
        <SubmitTodo />
        <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogContent>
            <TextField
              label="Todo title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditOpen(false)}>Cancel</Button>
            <Button onClick={submitEdit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </TodoContext.Provider>
  );
};

const TodosList: React.FC = () => {
  // Context is consumed here
  const context = useContext(TodoContext);
  if (!context) return null;
  const { todos, handleEdit, handleDelete } = context;
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          {JSON.stringify(todo)}
          <IconButton onClick={() => handleEdit(todo)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Todos;
