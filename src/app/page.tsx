import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Box,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <Box className="container mx-auto px-4 py-8">
      <Box className="max-w-3xl mx-auto text-center mb-12">
        <Title
          order={1}
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r
                          from-magic-light-purple via-magic-purple to-magic-pink"
        >
          Open Source Spirit Shop
        </Title>
        <Text className="text-lg text-foreground/80 ">Discover magical potions</Text>
      </Box>
    </Box>

  );
}
