import "./App.css";
import { Box, Typography } from "@mui/material";
import img from "./bg.jpg";

import * as agents from "./constants/agents";
import * as maps from "./constants/maps";
import { VodCard } from "./components/VodCard";

function App() {
  const { PEARL, SPLIT, LOTUS, ICEBOX, HAVEN, ASCENT, FRACTURE } = maps;
  const { NEON, OMEN, ASTRA } = agents;

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
        <VodCard agent={ASTRA} map={FRACTURE} />
        <VodCard agent={NEON} map={PEARL} />
        <VodCard agent={NEON} map={SPLIT} />
        <VodCard agent={OMEN} map={SPLIT} />
      </Box>
    </Box>
  );
}

export default App;
