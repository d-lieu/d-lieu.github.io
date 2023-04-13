import "./App.css";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import img from "./bg.jpg";

import { AGENTS } from "./constants/agents";
import { MAPS } from "./constants/maps";
import { VodCard } from "./components/VodCard";

function App() {
  const { NEON, OMEN } = AGENTS;
  const { SPLIT, PEARL } = MAPS;
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      }}
      className="App"
    >
      <Typography pt={6} color="#FFFFFF" variant="h1">
        VODs
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        <VodCard agent={OMEN} map={PEARL} />
        <VodCard agent={NEON} map={PEARL} />
        <VodCard agent={NEON} map={SPLIT} />
        <VodCard agent={OMEN} map={SPLIT} />
      </Box>
    </Box>
  );
}

export default App;
