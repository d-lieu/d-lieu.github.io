import { getTagsFromVideoDescription } from "../utils/getTagsFromVideoDescription";

const parsePlaylistData = (items) => {
  return items.map((item) => {
    const descData = getTagsFromVideoDescription(item.snippet.description);
    return {
      title: item.snippet.title,
      url: "https://youtube.com/watch?v=" + item.snippet.resourceId.videoId,
      thumbnail: item.snippet.thumbnails.high.url,
      description: item.snippet.description,
      agent: descData?.agent,
      map: descData?.map,
      agentImg: descData?.agentImg,
      mapImg: descData?.mapImg,
      tags: [descData?.agent, descData?.map],
    };
  });
};

export const getPlaylistItems = async (playlistId) => {
  const response = await fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?" +
      new URLSearchParams({
        part: "snippet",
        key: "AIzaSyBNV-aIb1y3KVeRdOtCU8_XqRFtu7GaJPc", //TODO: remove this
        playlistId: playlistId,
        maxResults: 50, // need a fetch all or db storage
      })
  );
  const jsonData = await response.json();
  return parsePlaylistData(jsonData.items);
};
