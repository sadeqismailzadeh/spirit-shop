import PotionInfo from '@/components/potions/potion-info';
import { fetchRandomTrendingPotion } from '@/lib/github';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function MysteryPotion() {
  const potion = await fetchRandomTrendingPotion();

  if (!potion) {
    notFound();
  }
  
  return <PotionInfo potion={potion} />;
}
