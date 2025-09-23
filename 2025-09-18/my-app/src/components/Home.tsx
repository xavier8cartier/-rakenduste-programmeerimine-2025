import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";

export default function Home() {
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
      <Box textAlign="center" sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          gutterBottom
          color="primary.light"
          sx={{ fontWeight: 700 }}
        >
          Welcome!
        </Typography>
        <Typography variant="h6" color="text.primary" gutterBottom>
          React + MUI
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Card
          sx={{
            flex: 1,
            minWidth: 250,
            maxWidth: 350,
            mx: "auto",
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              color="text.primary"
              sx={{ fontWeight: 600 }}
            >
              About the project
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography>This project is my home assignment</Typography>
          </CardContent>
          <CardActions>
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
            >
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            flex: 1,
            minWidth: 250,
            maxWidth: 350,
            mx: "auto",
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              color="text.primary"
              sx={{ fontWeight: 600 }}
            >
              Technologies
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography>
              React, TypeScript, Material-UI, React Router, Vite
            </Typography>
          </CardContent>
          <CardActions>
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
            >
              See details
            </Button>
          </CardActions>
        </Card>
      </Stack>

      <Box textAlign="center" sx={{ width: "100%" }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            mx: 4,
            py: 1.5,
            px: 3,
            backgroundColor: (theme) => theme.palette.primary.light,
            color: "#fff",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          }}
        >
          Start
        </Button>
        <Button
          variant="outlined"
          size="large"
          fullWidth={false}
          sx={{
            mx: -2.5,
            py: 1.5,
            px: 3,
            backgroundColor: (theme) => theme.palette.background.default,
            color: "#000",
            borderColor: "#000",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.background.default,
              borderColor: "#000",
              color: "#000",
            },
          }}
        >
          Secondary
        </Button>
      </Box>
    </Stack>
  );
}
