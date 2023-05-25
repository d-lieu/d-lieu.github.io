import pearlImg from "../images/pearl.png";
import splitImg from "../images/split.png";
import havenImg from "../images/haven.png";
import rangeImg from "../images/the range.png";
import bindImg from "../images/bind.png";
import ascentImg from "../images/ascent.png";
import iceboxImg from "../images/icebox.png";
import breezeImg from "../images/breeze.png";
import fractureImg from "../images/fracture.png";
import lotusImg from "../images/lotus.png";

export type Map =
  | "Split"
  | "Haven"
  | "The Range"
  | "Bind"
  | "Ascent"
  | "Icebox"
  | "Breeze"
  | "Fracture"
  | "Pearl"
  | "Lotus";

export type MapInfo = {
  name: Map;
  image: string;
};

export const MAPS = [
  {
    name: "Split",
    image: splitImg,
  },
  {
    name: "Pearl",
    image: pearlImg,
  },
  {
    name: "The Range",
    image: rangeImg,
  },
  {
    name: "Haven",
    image: havenImg,
  },
  {
    name: "Bind",
    image: bindImg,
  },

  {
    name: "Ascent",
    image: ascentImg,
  },
  {
    name: "Icebox",
    image: iceboxImg,
  },
  {
    name: "Fracture",
    image: fractureImg,
  },
  {
    name: "Breeze",
    image: breezeImg,
  },
  {
    name: "Lotus",
    image: lotusImg,
  },
] as const;
