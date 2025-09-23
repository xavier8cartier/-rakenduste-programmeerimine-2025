import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Stack,
} from "@mui/material";
import { useState } from "react";

export default function Something() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
      }}
    >
      <Paper
        elevation={4}
        sx={{ p: 4, borderRadius: 3, width: "100%", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#000000ff" }}>
          Something Page
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Stack spacing={2} alignItems="center">
          <TextField
            label="Enter something here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fullWidth
            margin="normal"
            color="secondary"
            InputLabelProps={{
              sx: { color: "#000" },
            }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              mx: 2,
              py: 1.5,
              px: 3,
              backgroundColor: (theme) => theme.palette.primary.light,
              color: "#fff",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
              },
            }}
          >
            Show the input
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: (theme) => theme.palette.background.paper,
              color: "#000",
              borderColor: "#000",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.background.default,
                borderColor: "#000",
                color: "#000",
              },
            }}
            onClick={() => setInputValue("")}
          >
            Clear
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
