import { PotionType } from "@/app/types/github";
import { Box, Card, CardSection, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { getMagicalTypeIcon } from "../../../utils";

interface PotionGridProps {
  potions: PotionType[];
}

export default function PotionGrid({ potions }: PotionGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {potions.map(
        (
          {
            full_name,
            name,
            description,
            topics,
            owner: { login, avatar_url },
            magicalType
          }: PotionType,
          index: number,
        ) => {
          return (
            <Card
              key={`${full_name}-${index}`}
              className={
                `potion-card relative group h-full cursor-pointer 
                transition-all duration-300 potion-${magicalType}`
              }
            >
            <div className="absolute right-4 top-4 z-10">{getMagicalTypeIcon(magicalType)}</div>
              {/* card header */}
              <div className="p-6 pb-0">
                <div className="flex items-center mb-2">
                  <div className="w-10 h10 rounded-full bg-secondary/50 mr-3 flex items-center justify-center">
                    <div
                      className="w-10 h-10  rounded-full bg-secondary/50 mr-3 
                    flex items-center justify-center"
                    >
                      <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2  ring-purple-100/20">
                        <Image
                          src={avatar_url}
                          alt={login}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-lg">
                    <h3>{name}</h3>
                    <p className="text-xs text-muted-foreground">{login}</p>
                  </div>
                </div>
              </div>
              <Text> {description}</Text>
              <Box className="flex items-center gap-2">
                {topics.map((topic, idx) => {
                  return <span key={idx}>{topic}</span>;
                })}
              </Box>
            </Card>
          );
        },
      )}
    </div>
  );
}
