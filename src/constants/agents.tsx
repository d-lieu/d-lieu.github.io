import neonImg from "../images/neon.png";
import omenImg from "../images/omen.png";

export type AgentInfo = {
  name: string;
  image: string;
};

type Agent =
  | "NEON"
  | "OMEN"
  | "SOVA"
  | "GEKKO"
  | "BRIMSTONE"
  | "BREACH"
  | "FADE"
  | "CYPHER"
  | "SKYE"
  | "KAYO"
  | "HARBOR"
  | "CHAMBER"
  | "ASTRA"
  | "YORU"
  | "JETT"
  | "PHOENIX"
  | "RAZE"
  | "REYNA"
  | "SAGE"
  | "KILLJOY"
  | "VIPER";

export type AgentProps = Partial<Record<Agent, AgentInfo>>;

export const AGENTS = {
  NEON: {
    name: "Neon",
    image: neonImg,
  },
  OMEN: {
    name: "Omen",
    image: omenImg,
  },
  SOVA: {
    name: "Omen",
    image: omenImg,
  },
  GEKKO: {
    name: "Omen",
    image: omenImg,
  },
  BRIMSTONE: {
    name: "Omen",
    image: omenImg,
  },
  BREACH: {
    name: "Omen",
    image: omenImg,
  },
  FADE: {
    name: "Omen",
    image: omenImg,
  },
  CYPHER: {
    name: "Omen",
    image: omenImg,
  },
  SKYE: {
    name: "Omen",
    image: omenImg,
  },
  KAYO: {
    name: "Omen",
    image: omenImg,
  },
  HARBOR: {
    name: "Omen",
    image: omenImg,
  },
  CHAMBER: {
    name: "Omen",
    image: omenImg,
  },
  ASTRA: {
    name: "Omen",
    image: omenImg,
  },
  YORU: {
    name: "Omen",
    image: omenImg,
  },
  JETT: {
    name: "Omen",
    image: omenImg,
  },
  PHOENIX: {
    name: "Omen",
    image: omenImg,
  },
  RAZE: {
    name: "Omen",
    image: omenImg,
  },
  REYNA: {
    name: "Omen",
    image: omenImg,
  },
  SAGE: {
    name: "Omen",
    image: omenImg,
  },
  KILLJOY: {
    name: "Omen",
    image: omenImg,
  },
  VIPER: {
    name: "Omen",
    image: omenImg,
  },
};
