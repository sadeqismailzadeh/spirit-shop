import { PotionType } from "@/app/types/github";
import { MAGICAL_TYPES } from "./constant";

export function getMagicalTypeIcon(magicalType: string) {
  return MAGICAL_TYPES.filter((type) => {
    return magicalType === type.id;
  })[0].icon;
}
