import { GitHubRepo } from "@/app/types/github";
import { MessageCircleDashed } from "lucide-react";
import { MAGICAL_TYPES } from "../app/utils/constant";

const GITHUB_API_URL = "https://api.github.com";

const POTION_EFFECTS = [
  "Grants the power of rapid development",
  "Enhances code clarity and maintanability",
  "Boosts performance and efficiency",
  "Provides magical debugging abilities",
  "Unlocks the secrets of clean architecture",
];

function transformRepoToPotion(repo: GitHubRepo, index: number) {
  return {
    ...repo,
    topics: repo.topics.slice(0, 3),
    // random selection of POTION_EFFECTS and MAGICAL_TYPES
    postionEffect: POTION_EFFECTS[index % POTION_EFFECTS.length],
    magicalType: MAGICAL_TYPES[index % MAGICAL_TYPES.length].id,
  };
}

export async function fetchPotions() {
  const url = `${GITHUB_API_URL}/search/repositories?q=topic:javascript+stars:>5000&sort=stars&order=desc`;

  const githubToken = process.env.GITHUB_TOKEN;
  const headers = {
    Accept: " application/vnd.github+json",
    ...(githubToken && {
      Authorization: `Bearer ${githubToken}`,
    }),
  };
  try {
    const response = await fetch(url, { headers, cache: "force-cache" });
    if (!response.ok) {
      throw new Error(`Failed to fetch potions `);
    }

    const data = await response.json();
    console.log({ data });
    return data.items.map((repo: GitHubRepo, index: number) => {
      return transformRepoToPotion(repo, index);
    });
  } catch (error) {
    console.error("Failed to fetch potion", (error as Error).message);
    return [];
  }
}

export async function fetchPotion(owner: string, repo: string) {
  const url = `${GITHUB_API_URL}/repos/${owner}/${repo}`;

  const githubToken = process.env.GITHUB_TOKEN;
  const headers = {
    Accept: " application/vnd.github+json",
    ...(githubToken && {
      Authorization: `Bearer ${githubToken}`,
    }),
  };
  try {
    const response = await fetch(url, {
      headers,
      next: {
        revalidate: 3600,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch potions `);
    }

    const data = await response.json();
    console.log("fetching potion:", { data });
    return transformRepoToPotion(data, 0);
  } catch (error) {
    console.error("Failed to fetch potion", (error as Error).message);
    return [];
  }
}
