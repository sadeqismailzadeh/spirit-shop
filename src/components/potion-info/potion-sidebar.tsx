import { PotionType } from "@/types/github";
import { potionClasses } from "@/utils/constant";
import { CalendarIcon, CodeIcon } from "lucide-react";
import {
  PotionHeader,
  PotionInfoCard,
  PotionStats,
} from "../potions/potion-common";

interface PotionSidebarProps {
  potion: PotionType;
}

export default function PotionSidebar({ potion }: PotionSidebarProps) {
  const {
    name,
    owner,
    stargazers_count,
    forks_count,
    language,
    updated_at,
    magicalType,
    potionEffect,
  } = potion;

  return (
    <div
      className={`p-6 rounded-2xl border
                 border-magic-purple/20 h-full ${potionClasses[magicalType]}`}
    >
      <PotionHeader name={name} owner={owner} size="medium" />
      <div className="space-y-4">
        <PotionInfoCard title="Effect">
          <p>{potionEffect}</p>
        </PotionInfoCard>

        <PotionInfoCard title="Github Stats">
          <PotionStats stars={stargazers_count} forks={forks_count} />
        </PotionInfoCard>

        <PotionInfoCard title="Language">
          <div className="flex items-center gap-2">
            <CodeIcon className="h-4 w-4 text-green-400" />
            <span>{language}</span>
          </div>
        </PotionInfoCard>

        <PotionInfoCard title="Last Updated">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-purple-400" />
            <span>
              {new Date(updated_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </PotionInfoCard>
      </div>
    </div>
  );
}