import pearlImg from "../images/pearl.png";
import splitImg from "../images/split.png";

type Maps =
  | "SPLIT"
  | "HAVEN"
  | "THE RANGE"
  | "BIND"
  | "ASCENT"
  | "ICEBOX"
  | "BREEZE"
  | "FRACTURE"
  | "PEARL"
  | "LOTUS";

export type MapInfo = {
  name: string;
  image: string;
};

export const MAPS = {
  SPLIT: {
    name: "Split",
    image: splitImg,
  },
  PEARL: {
    name: "Pearl",
    image: pearlImg,
  },
};
