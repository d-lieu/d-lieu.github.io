import "./App.css";
import {
  Autocomplete,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { AGENTS, Agent } from "./constants/agents";
import { MAPS, Map } from "./constants/maps";

import { VodCard } from "./components/VodCard";
import { useState } from "react";
import { getPlaylistItems } from "./apis/playlistItemsAPI";
import { applyAgentMapFilters } from "./utils/applyAgentMapFilters";

export type videoData = {
  agent: Agent;
  agentImg: string;
  map: Map;
  mapImg: string;
  tags: (Agent | Map)[];
};

function App() {
  const [searchFilter, setSearchFilter] = useState<string[]>([]);
  const [videos, setVideos] = useState<videoData[]>([]);
  const [playlistLink, setPlaylistLink] = useState<string>("");

  const handleVideoData = async () => {
    const response = await getPlaylistItems(playlistLink);
    setVideos(response);
  };

  // Create searchable tags
  const agentNames: string[] = AGENTS.map((agent) => agent.name);
  const mapNames: string[] = MAPS.map((map) => map.name);
  const searchTags: string[] = mapNames.concat(agentNames);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#2c2f33",
      }}
      className="App"
    >
      <Stack spacing={5} mb={4} px={6}>
        <Typography pt={6} color="#FFFFFF" variant="h1">
          VODs
        </Typography>

        <Paper elevation={12}>
          <Box my={4} mx={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "start",
                maxHeight: "80px",
              }}
            >
              <TextField
                sx={{ width: "80%", minHeight: "56px" }}
                margin="normal"
                variant="outlined"
                onChange={(e) => setPlaylistLink(e.target.value)}
              />
              <Button
                variant="outlined"
                sx={{ minHeight: "56px", mx: "12px" }}
                onClick={() => handleVideoData()}
              >
                Get Playlist
              </Button>
            </Box>

            <Box sx={{ display: "flex", minHeight: "80px" }}>
              <Autocomplete
                multiple
                options={searchTags}
                defaultValue={searchFilter}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField {...params} label="Filter" />
                )}
                onChange={(_event, newValue) => setSearchFilter(newValue)}
              />
            </Box>
          </Box>
        </Paper>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "fit-content",
          backgroundColor: "#2c2f33",
          px: 6,
        }}
      >
        {videos.length
          ? videos
              .filter(
                // need better filter
                (video) =>
                  searchFilter.length
                    ? applyAgentMapFilters(searchFilter, video.tags)
                    : true
              )
              .map((video) => <VodCard videos={video} />)
          : null}
      </Box>
    </Box>
  );
}

export default App;
