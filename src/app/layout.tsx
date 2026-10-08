import type { Metadata } from "next";
import {
  AppShellNavbar,
  Box,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import theme from "./theme";
import "./globals.css";
import Navigation from "@/components/navigation";
import DevClickToComponent from "@/components/dev-click-to-component";

import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Text,
  Title,
} from "@mantine/core";

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>{/* <ColorSchemeScript /> */}</head>
      <body className="antialiased">
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <DevClickToComponent
            projectRoot={
              process.env.NODE_ENV === "development" ? process.cwd() : undefined
            }
          />
          <Box className="container mx-auto px-4 py-8">
            <Navigation />
            <Box className="min-h-screen p-8">{children}</Box>
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
