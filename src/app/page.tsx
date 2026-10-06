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
import { PotionType } from "./types/github";


export default async function Home() {
  const potions = await fetchPotions();

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

      <Box>
        {potions.map(
          (
            { full_name, name, description, topics }: PotionType,
            index: number,
          ) => {
            return (
              <Card key={`${full_name}-${index}`}>
                <CardSection>{name}</CardSection>
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
      </Box>
    </main>
  );
}
