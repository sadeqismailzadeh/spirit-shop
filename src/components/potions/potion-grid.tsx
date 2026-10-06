import { PotionType } from "@/app/types/github";
import { Badge, Box, Card, CardSection, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { getMagicalTypeIcon } from "../../app/utils";
import { Package2Icon, PackageIcon, StarIcon } from "lucide-react";
import PotionCard from "./potion-card";

interface PotionGridProps {
  potions: PotionType[];
}

export default function PotionGrid({ potions }: PotionGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {potions.map((potion, index: number) => {
        return <PotionCard {...potion}  key={`${potion.name}-${index}`} />;
      })}
    </div>
  );
}
