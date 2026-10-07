import { PotionType } from "@/app/types/github";
import { Badge, Box, Card, CardSection, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { getMagicalTypeIcon } from "@/app/utils";
import { Package2Icon, PackageIcon, StarIcon } from "lucide-react";
import { formatNumber, potionClasses } from "@/app/utils/constant";
import Link from "next/link";
import { PotionHeader, PotionStats } from "./potion-common";

export default function PotionCard({
  full_name,
  name,
  description,
  topics,
  owner: { login, avatar_url },
  magicalType,
  potionEffect,
  stargazers_count,
  forks_count,
}: PotionType) {
  return (
    <Link href={`/potions/${full_name.replace("/", "__")}`}>
      <Card
        key={`${full_name}-${name}`}
        className={`potion-card relative group h-full cursor-pointer 
                transition-all duration-300 ${potionClasses[magicalType]}`}
      >
        <div className="absolute right-4 top-4 z-10">
          {getMagicalTypeIcon(magicalType)}
        </div>
        {/* card header */}
        <PotionHeader
          name={name}
          owner={{
            login,
            avatar_url,
          }}
        />
        {/* card content */}
        <div className="p-6 pt-3">
          <p
            className="text-sm text-foreground/70 mt-3 mb-4 line-clamp-3 h-[3.75rem] 
                overflow-hidden text-ellipsis"
          >
            {description}
          </p>
          <div className="mb-4">
            <p
              className="text-sm flex items-center gap-1.5 mb-1
                   text-magic-light-purple"
            >
              <span>✨</span>
              Effect: {potionEffect}
            </p>
            <PotionStats
              stars={stargazers_count}
              forks={forks_count}
              className="items-center text-xs text-muted-foreground"
            />
          </div>
        </div>
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
      </Card>
    </Link>
  );
}
