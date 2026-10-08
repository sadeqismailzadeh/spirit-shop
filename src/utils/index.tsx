import { PotionType } from "@/types/github";
import { MAGICAL_TYPES } from "./constant";

export function getMagicalTypeIcon(magicalType: string) {
  return MAGICAL_TYPES.filter((type) => {
    return magicalType === type.id;
  })[0].icon;
}



export const getFilterPillColor = (id: string) => {
  return id === "fire"
    ? "from-element-fire/20"
    : id === "ice"
    ? "from-element-ice/20"
    : id === "electric"
    ? "from-element-electric/20"
    : "from-magic-purple/20";
};



const isDev = process.env.NODE_ENV === "development";
export const ORIGIN_URL = isDev ? "http://localhost:3000/" : "";
