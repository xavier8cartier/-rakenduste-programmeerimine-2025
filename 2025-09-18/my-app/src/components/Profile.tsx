import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Stack,
  Paper,
  Avatar,
  Divider,
} from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Profile() {
  const [name] = useLocalStorage("userName", "Ksaveri");
  const [interests] = useLocalStorage("userInterests", [
    "Cooking",
    "MMA",
    "Beer",
    "Sunset driving",
  ]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
    setMessage("");
    setEmail("");
  };

  return (
    <Stack
      spacing={4}
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        maxWidth: 600,
        mx: "auto",
        minHeight: "70vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            sx={{
              bgcolor: "primary.main",
              color: "black",
              width: 64,
              height: 64,
            }}
          >
            {name[0]}
          </Avatar>
          <Typography variant="h4" gutterBottom sx={{ color: "#000000ff" }}>
            {name}
          </Typography>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            My hobbies:
          </Typography>
          <List>
            {interests.map((interest, index) => (
              <ListItem key={index}>
                <ListItemText primary={`• ${interest}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>

      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: "#000000ff" }}>
          Leave a message
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Stack spacing={2} alignItems="center">
            <TextField
              label="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              color="primary"
              InputLabelProps={{
                sx: { color: "#000" },
              }}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              fullWidth
              color="primary"
              InputLabelProps={{
                sx: { color: "#000" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                alignSelf: "center",
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                },
              }}
            >
              Send message
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
}
