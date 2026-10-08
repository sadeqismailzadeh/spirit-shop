import { PotionType } from "@/types/github";
import { StarIcon } from "lucide-react";
import { PotionInfoCard } from "../potions/potion-common";

interface PotionMagicalPropertiesProps {
  potion: PotionType;
}

export default function PotionMagicalProperties({
  potion,
}: PotionMagicalPropertiesProps) {
  const { stargazers_count, forks_count } = potion;

  const brewingDifficulty = (forks_count / (stargazers_count || 1)) * 100;

  const potency = Math.min(
    5,
    Math.max(1, Math.floor(stargazers_count / 50_000)),
  );

  return (
    <div
      className={`p-6 mt-6 rounded-2xl border
                 border-magic-purple/20`}
    >
      <h3
        className="text-xl font-semibold mb-4 mr-4 text-transparent bg-linear-to-r
              bg-clip-text  from-magic-light-purple via-magic-purple
              to-magic-pink"
      >
        Magical Properties
      </h3>

      <div className="grid cols-1  md:grid-cols-2 gap-6 mb-6">
        <PotionInfoCard title={"Brewing difficulty"}>
          <div className="flex items-center gap-2">
            <div
              className="relative w-full h-2 bg-secondary/50 rounded-full
                    overflow-hidden"
            >
              <div
                className="absolute h-full bg-linear-to-r
                      from-magic-purple to-magic-pink rounded-full"
                style={{ width: `${brewingDifficulty}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm">
              {brewingDifficulty.toFixed(0)}%
            </span>
          </div>
        </PotionInfoCard>

        <PotionInfoCard title={"Potency"}>
          <div className="flex ">
            {Array.from({ length: potency }).map((_, i) => {
              return (
                <span key={i} className="text-yellow-400">
                  <StarIcon fill="currentColor" className="h-5 w-5" />
                </span>
              );
            })}
          </div>
        </PotionInfoCard>
      </div>

      <div className="mb-6">
        <PotionInfoCard title="Notes from the Alchemist">
          <p className="italic text-sm">
            &quot;This powerful brew contains the essence of open source magic,
            harnessed from the contributions of developers worldwide. Use it
            wisely to enhance your coding abilities and bring your digital
            creations to life.&quot;
          </p>
        </PotionInfoCard>
      </div>
    </div>
  );
}