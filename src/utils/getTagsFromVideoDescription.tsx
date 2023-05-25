import { AGENTS } from "../constants/agents";
import { MAPS } from "../constants/maps";
import { assetHandler } from "./assetHandler";

const getAgent = (description: string) => {
  const re =
    /(Omen|Neon|Sova|Gekko|Brimstone|Breach|Fade|Cypher|Skye|Kayo|Harbor|Chamber|Astra|Yoru|Jett|Phoenix|Raze|Sage|Reyna|Killjoy|Viper)/gim;

  const agents = re.exec(description);
  if (agents) {
    return AGENTS.find((AGENT) => AGENT.name === agents[0]);
  }
  return agents;
};

const getMap = (description: string) => {
  const re =
    /(Split|Haven|The Range|Bind|Ascent|Icebox|Breeze|Fracture|Pearl|Lotus)/gim;

  const maps = re.exec(description);
  if (maps) {
    return MAPS.find((MAP) => MAP.name === maps[0]);
  }
  return maps;
};

export const getTagsFromVideoDescription = (description: string) => {
  const agent = getAgent(description);
  const map = getMap(description);
  if (agent && map) {
    return assetHandler(agent.name, map.name);
  }
  return null;
};
