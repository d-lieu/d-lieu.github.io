import "./App.css";
import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import img from "./bg.jpg";

import { AGENTS } from "./constants/agents";
import * as maps from "./constants/maps";
import { VodCard } from "./components/VodCard";
import { AgentInfo } from "./constants/agents";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState<string[]>([]);
  const { PEARL, SPLIT, FRACTURE } = maps;

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#2c2f33",
        backgroundSize: "cover",
        px: "36px",
      }}
      className="App"
    >
      <Stack spacing={5} mb={4}>
        <Typography pt={6} color="#FFFFFF" variant="h1">
          VODs
        </Typography>
        <Autocomplete
          multiple
          options={AGENTS.map((agent) => agent.name)}
          defaultValue={filter}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} label="Filter" />}
          onChange={(_event, newValue) => setFilter(newValue)}
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "80vh",
        }}
      ></Box>
    </Box>
  );
}

export default App;
