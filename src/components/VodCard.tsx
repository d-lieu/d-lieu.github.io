import { Box, Card, CardMedia, Typography } from "@mui/material";
import { videoData } from "../App";

type VodCardProps = videoData;

export const VodCard = (props: { videos: VodCardProps }) => {
  const { agent, agentImg, map, mapImg, url, thumbnail } = props.videos;
  const textCombiner = "<>";

  return (
    <Card
      sx={{
        height: "200px",
        minWidth: "450px",
        maxWidth: "1000px",
        width: "100%",
        position: "relative",
        display: "flex",
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
          image={agentImg}
        />
        <CardMedia
          sx={{
            position: "absolute",
            objectFit: "contain",
            maxHeight: "170px",
            left: "30%",
            zIndex: 1,
            borderRadius: "5px",
          }}
          component="img"
          image={thumbnail}
          onClick={() => window.open(url, "_blank", "noreferrer")}
        />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            mb="0.8em"
            sx={{ alignSelf: "flex-end" }}
            variant="overline"
            color="#FFFFFF"
          >
            {agent + " " + textCombiner + " " + map}
          </Typography>
          <CardMedia
            sx={{
              position: "absolute",
              bottom: "30%",
              objectFit: "cover",
              maxHeight: "200px",
            }}
            component="img"
            image={mapImg}
          />
        </Box>
      </Box>
    </Card>
  );
};
