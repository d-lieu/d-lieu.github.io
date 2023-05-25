import { AGENTS, Agent } from "../constants/agents";
import { MAPS, Map } from "../constants/maps";

export const assetHandler = (agent: Agent, map: Map) => {
  const selectedAgent = AGENTS.find((AGENT) => AGENT.name === agent);
  const agentImg = selectedAgent?.image;
  const selectedMap = MAPS.find((MAP) => MAP.name === map);
  const mapImg = selectedMap?.image;
  const tags = [agent, map];

  return {
    agent,
    agentImg,
    map,
    mapImg,
    tags,
  };
};
