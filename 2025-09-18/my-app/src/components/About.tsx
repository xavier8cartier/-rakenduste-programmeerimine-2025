import { Box, Typography, Stack, Paper, Divider } from "@mui/material";

export default function About() {
  return (
    <Stack
      spacing={3}
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
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 600,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#000000ff" }}>
          About
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" paragraph>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore.
          </Typography>
        </Box>
      </Paper>
    </Stack>
  );
}
