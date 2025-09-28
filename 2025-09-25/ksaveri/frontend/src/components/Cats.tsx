import { Box, List, ListItem, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat.tsx";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [editOpen, setEditOpen] = useState(false);
  const [editCat, setEditCat] = useState<Cat | null>(null);
  const [editName, setEditName] = useState("");

  const fetchCats = async () => {
    const response = await fetch("http://localhost:3000/cats");
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const handleEdit = (cat: Cat) => {
    setEditCat(cat);
    setEditName(cat.name);
    setEditOpen(true);
  };

  const submitEdit = async () => {
    if (!editCat) return;
    try {
      const response = await fetch(`http://localhost:3000/cats/${editCat.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editName }),
      });
      if (response.ok) {
        fetchCats();
        setEditOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchCats();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Typography variant="h1">Cats</Typography>
      <CatsList cats={cats} onEdit={handleEdit} onDelete={handleDelete} />
      <SubmitCat fetchCats={fetchCats} />
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Cat</DialogTitle>
        <DialogContent>
          <TextField
            label="Cat name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
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
  );
};

type CatsListProps = {
  cats: Cat[];
  onEdit: (cat: Cat) => void;
  onDelete: (id: string) => void;
};

const CatsList: React.FC<CatsListProps> = ({ cats, onEdit, onDelete }) => {
  return (
    <List>
      {cats.map((cat) => (
        <ListItem key={cat.id}>
          {JSON.stringify(cat)}
          <IconButton onClick={() => onEdit(cat)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(cat.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Cats;
