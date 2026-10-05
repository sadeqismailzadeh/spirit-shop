const GITHUB_API_URL = "https://api.github.com";

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
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Failed to fetch potions `);
    }

    const data = await response.json();
    console.log({ data });
    return data;
  } catch (error) {
    console.error("Failed to fetch potion", (error as Error).message);
    return [];
  }
}
