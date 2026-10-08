import PotionInfo from '@/components/potions/potion-info';
import { fetchRandomTrendingPotion } from '@/lib/github';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'

export const metadata: Metadata = {
  title: "Mystery Potion",
  description: "Mystery Potion",
}

export default async function MysteryPotion() {
  const potion = await fetchRandomTrendingPotion();

  if (!potion) {
    notFound();
  }
  
  return <PotionInfo potion={potion} />;
}
