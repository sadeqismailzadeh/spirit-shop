import { ORIGIN_URL } from "@/app/utils";
import PotionInfo from "@/components/potions/potion-info";
import { fetchPotion } from "@/lib/github";
import { JsonInput } from "@mantine/core";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [owner, repo] = slug.split("__");

  if (!owner || !repo) {
    notFound();
  }

  const potion = await fetchPotion(owner, repo);

  return {
    title: `Potion - ${potion?.name}`,
    description: potion?.description,
    alternates: {
      canonical: `/potions/${owner}__${repo}`,
    },
  };
}

export async function generateStaticParams() {
  const popularRepos = [
    "facebook/react",
    "tailwindlabs/tailwindcss",
    "nodejs/node",
    "vercel/next.js",
    "typescript/TypeScript",
  ];
  return popularRepos.map((repo) => {
    return {
      slug: repo.replace("/", "__"),
    };
  });
}

export default async function PotionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [owner, repo] = slug.split("__");

  if (!owner || !repo) {
    notFound();
  }

  const potion = await fetchPotion(owner, repo);

  if (!potion) {
    notFound();
  }

  return <PotionInfo potion={potion} />;
}
