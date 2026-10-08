import { PotionType } from "@/types/github";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { PotionInfoCard } from "../potions/potion-common";

interface PotionRepositoryDetailsProps {
  potion: PotionType;
}

export default function PotionRepositoryDetails({
  potion,
}: PotionRepositoryDetailsProps) {
  const { name, owner, description, topics } = potion;

  return (
    <div
      className={`p-6 rounded-2xl border
                 border-magic-purple/20`}
    >
      <div className="flex items-center justify-betweens">
        <h2
          className="text-2xl font-bold mb-4 mr-4 text-transparent bg-linear-to-r
              bg-clip-text  from-magic-light-purple via-magic-purple
              to-magic-pink"
        >
          Repository Details
        </h2>
        <a
          href={`https://github.com/${owner.login}/${name}`}
          className="inline-flex items-center  gap-2 px-4 py-2 rounded-md bg-magic-pink
              hover:bg-magic-pink/80 transition-colors duration-300"
        >
          <SiGithub className="w-4 h-4" />
          View on Github
        </a>
      </div>
      <p className="text-foreground/80 mb-6 ">{description}</p>

      <div className="grid cols-1  md:grid-cols-2 gap-6 mb-6">
        <PotionInfoCard title={"Organization"}>
          <div className="flex items-center gap-2">
            <div
              className={`relative overflow-hidden rounded-full ring-2 
                 ring-purple-100/20`}
            >
              <Image
                src={owner.avatar_url}
                alt={owner.login}
                fill
                className="object-cover"
              />
            </div>
            <span>{owner.login}</span>
          </div>
        </PotionInfoCard>

        <PotionInfoCard title={"Repository name"}>
          <span>{name}</span>
        </PotionInfoCard>

        <div className="mb-6">
          <PotionInfoCard title={"Repository name"}>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, idx) => {
                return (
                  // badges
                  <div
                    key={`${topic}-${idx}`}
                    className="text-xs px-2 py-1 bg-magic-purple/15
                     text-white/80 hover:bg-magic-purple/25"
                  >
                    {topic}
                  </div>
                );
              })}
            </div>
          </PotionInfoCard>
        </div>
      </div>
    </div>
  );
}