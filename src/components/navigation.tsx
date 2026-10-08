import { AppShellNavbar } from "@mantine/core";
import { Sparkles, SparklesIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <header className="container mx-auto py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <SparklesIcon className="h-6 w-6 text-magic-purple" />
        <span className="font-bold text-xl text-magic-purple">Spirit shop</span>
      </Link>

      <Link
        href="/mystery-potion"
        className="px-4 py-2 rounded-lg bg-secondary text-foreground
         hover:bg-secondary/80 transition-colors"
      >
        Mystrey Potion 🔥
      </Link>
    </header>
  );
}
