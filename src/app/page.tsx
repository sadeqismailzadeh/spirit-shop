import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import { fetchPotions } from "@/lib/github";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Badge,
  Box,
  Button,
  Card,
  CardSection,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { PotionType } from "../types/github";
import PotionGrid from "@/components/potions/potion-grid";
import { PotionFilters } from "@/components/potions/potion-filters";

type PageType = {
  searchParams: Promise<{
    type: string;
  }>;
};

export default async function Home({ searchParams }: PageType) {
  const potions = await fetchPotions();
  const { type } = await searchParams;

  const filteredPotions = type
    ? potions.filter((potion: PotionType) => {
        return potion.magicalType === type;
      })
    : potions;

  return (
    <main className="container mx-auto px-4 py-8">
      <Box className="max-w-3xl mx-auto text-center mb-12">
        <Title
          order={1}
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r
                          from-magic-light-purple via-magic-purple to-magic-pink"
        >
          Open Source Spirit Shop
        </Title>
        <Text className="text-lg text-foreground/80 ">
          Discover magical potions
        </Text>
      </Box>
      <div className="flex justify-center mb-6">
        <PotionFilters />
      </div>
      <Box>
        <PotionGrid potions={filteredPotions} />
      </Box>
    </main>
  );
}
