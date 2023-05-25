import neonImg from "../images/neon.png";
import omenImg from "../images/omen.png";
import brimImg from "../images/brimstone.png";
import viperImg from "../images/viper.png";
import killImg from "../images/killjoy.png";
import cypherImg from "../images/cypher.png";
import sovaImg from "../images/sova.png";
import sageImg from "../images/sage.png";
import phoenixImg from "../images/phoenix.png";
import jettImg from "../images/jett.png";
import reynaImg from "../images/reyna.png";
import razeImg from "../images/raze.png";
import breachImg from "../images/breach.png";
import skyeImg from "../images/skye.png";
import yoruImg from "../images/yoru.png";
import astraImg from "../images/astra.png";
import kayoImg from "../images/kayo.png";
import chamberImg from "../images/chamber.png";
import fadeImg from "../images/fade.png";
import harborImg from "../images/harbor.png";
import gekkoImg from "../images/gekko.png";

export type AgentInfo = {
  name: Agent;
  image: string;
};

export type Agent =
  | "Neon"
  | "Omen"
  | "Sova"
  | "Gekko"
  | "Brimstone"
  | "Breach"
  | "Fade"
  | "Cypher"
  | "Skye"
  | "Kayo"
  | "Harbor"
  | "Chamber"
  | "Astra"
  | "Yoru"
  | "Jett"
  | "Phoenix"
  | "Raze"
  | "Reyna"
  | "Sage"
  | "Killjoy"
  | "Viper";

export type AgentProps = Partial<Record<Agent, AgentInfo>>;

export const AGENTS = [
  {
    name: "Neon",
    image: neonImg,
  },
  {
    name: "Omen",
    image: omenImg,
  },
  {
    name: "Sova",
    image: sovaImg,
  },
  {
    name: "Gekko",
    image: gekkoImg,
  },
  {
    name: "Brimstone",
    image: brimImg,
  },
  {
    name: "Breach",
    image: breachImg,
  },
  {
    name: "Fade",
    image: fadeImg,
  },
  {
    name: "Cypher",
    image: cypherImg,
  },
  {
    name: "Skye",
    image: skyeImg,
  },
  {
    name: "Kayo",
    image: kayoImg,
  },
  {
    name: "Harbor",
    image: harborImg,
  },
  {
    name: "Chamber",
    image: chamberImg,
  },
  {
    name: "Astra",
    image: astraImg,
  },
  {
    name: "Yoru",
    image: yoruImg,
  },
  {
    name: "Jett",
    image: jettImg,
  },
  {
    name: "Phoenix",
    image: phoenixImg,
  },
  {
    name: "Raze",
    image: razeImg,
  },
  {
    name: "Reyna",
    image: reynaImg,
  },
  {
    name: "Sage",
    image: sageImg,
  },
  {
    name: "Killjoy",
    image: killImg,
  },
  {
    name: "Viper",
    image: viperImg,
  },
] as const;

export const NEON: AgentInfo = {
  name: "Neon",
  image: neonImg,
};
export const OMEN: AgentInfo = {
  name: "Omen",
  image: omenImg,
};
export const SOVA: AgentInfo = {
  name: "Sova",
  image: sovaImg,
};
export const GEKKO: AgentInfo = {
  name: "Gekko",
  image: gekkoImg,
};
export const BRIMSTONE: AgentInfo = {
  name: "Brimstone",
  image: brimImg,
};
export const BREACH: AgentInfo = {
  name: "Breach",
  image: breachImg,
};
export const FADE: AgentInfo = {
  name: "Fade",
  image: fadeImg,
};
export const CYPHER: AgentInfo = {
  name: "Cypher",
  image: cypherImg,
};
export const SKYE: AgentInfo = {
  name: "Skye",
  image: skyeImg,
};
export const KAYO: AgentInfo = {
  name: "Kayo",
  image: kayoImg,
};
export const HARBOR: AgentInfo = {
  name: "Harbor",
  image: harborImg,
};
export const CHAMBER: AgentInfo = {
  name: "Chamber",
  image: chamberImg,
};
export const ASTRA: AgentInfo = {
  name: "Astra",
  image: astraImg,
};
export const YORU: AgentInfo = {
  name: "Yoru",
  image: yoruImg,
};
export const JETT: AgentInfo = {
  name: "Jett",
  image: jettImg,
};
export const PHOENIX: AgentInfo = {
  name: "Phoenix",
  image: phoenixImg,
};
export const RAZE: AgentInfo = {
  name: "Raze",
  image: razeImg,
};
export const REYNA: AgentInfo = {
  name: "Reyna",
  image: reynaImg,
};
export const SAGE: AgentInfo = {
  name: "Sage",
  image: sageImg,
};
export const KILLJOY: AgentInfo = {
  name: "Killjoy",
  image: killImg,
};
export const VIPER: AgentInfo = {
  name: "Viper",
  image: viperImg,
};
