import { Box, Card, CardMedia, Typography } from "@mui/material";
import { AgentInfo } from "../constants/agents";
import { MapInfo } from "../constants/maps";

type VodCardProps = { agent: AgentInfo; map: MapInfo };

export const VodCard = (props: VodCardProps) => {
  const textCombiner = "<>";
  return (
    <Card
      sx={{
        height: "200px",
        minWidth: "250px",
        maxWidth: "1500px",
        position: "relative",
        display: "flex",
        mx: 18,
        backgroundColor: "#0a0a0a",
        mb: 4,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <CardMedia
          sx={{
            position: "absolute",
            objectFit: "contain",
            maxHeight: "200px",
            right: "30%",
            zIndex: 1,
          }}
          component="img"
          image={props.agent.image}
        />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            gutterBottom
            sx={{ alignSelf: "flex-end" }}
            variant="overline"
            color="#FFFFFF"
          >
            {props.agent.name + " " + textCombiner + " " + props.map.name}
          </Typography>
          <CardMedia
            sx={{
              position: "absolute",
              bottom: "30%",
              objectFit: "cover",
              maxHeight: "200px",
            }}
            component="img"
            image={props.map.image}
          />
        </Box>
      </Box>
    </Card>
  );
};
