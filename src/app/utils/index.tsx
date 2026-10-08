import { PotionType } from "@/app/types/github";
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
