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

type Maps =
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
  name: Maps;
  image: string;
};

export const SPLIT: MapInfo = {
  name: "Split",
  image: splitImg,
};

export const PEARL: MapInfo = {
  name: "Pearl",
  image: pearlImg,
};
export const RANGE: MapInfo = {
  name: "The Range",
  image: rangeImg,
};
export const HAVEN: MapInfo = {
  name: "Haven",
  image: havenImg,
};
export const BIND: MapInfo = {
  name: "Bind",
  image: bindImg,
};

export const ASCENT: MapInfo = {
  name: "Ascent",
  image: ascentImg,
};
export const ICEBOX: MapInfo = {
  name: "Icebox",
  image: iceboxImg,
};
export const FRACTURE: MapInfo = {
  name: "Fracture",
  image: fractureImg,
};
export const BREEZE: MapInfo = {
  name: "Breeze",
  image: breezeImg,
};

export const LOTUS: MapInfo = {
  name: "Lotus",
  image: lotusImg,
};
