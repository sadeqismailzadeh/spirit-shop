import {
  Flame,
  FlameIcon,
  SnowflakeIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";

export const MAGICAL_TYPES = [
  {
    id: "fire",
    value: "🔥",
    label: "Fire-type",
    icon: <FlameIcon className="text-element-fire" />,
  },
  {
    id: "ice",
    value: "🧊",
    label: "Ice-type",
    icon: <SnowflakeIcon className="text-element-ice" />,
  },
  {
    id: "electric",
    value: "⚡️",
    label: "Electric-type",
    icon: <ZapIcon className="text-element-electric" />,
  },
  {
    id: "all",
    value: "✨",
    label: "All Types",
    icon: <SparklesIcon className="text-magic-purple" />,
  },
];

export function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  } else {
    return num.toString()
  }
}
