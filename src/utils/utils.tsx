async function getGitHubStats() {
  const res = await fetch('https://api.github.com/users/m-ox/repos?per_page=100', {
    headers: {
      Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error('Failed to fetch repos');

  const repos = await res.json();

  const totalStars = repos.reduce(
    (sum: number, repo: { stargazers_count: number }) => sum + repo.stargazers_count,
    0
  );
  const totalForks = repos.reduce(
    (sum: number, repo: { forks_count: number }) => sum + repo.forks_count,
    0
  );

  return { totalRepos: repos.length, totalStars, totalForks };
}


async function getRepos() {
  const res = await fetch('https://api.github.com/users/m-ox/repos?per_page=100', {
    headers: {
      Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error('Failed to fetch repos');

  return await res.json();
}

async function getCommits(repoName: string): Promise<string[]> {

  const res = await fetch(`https://api.github.com/repos/m-ox/${repoName}/commits?per_page=100`, {
    headers: {
      Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) return [];

  const commits = await res.json();
  return commits.map((c: any) => c.commit?.message || '').filter(Boolean);
}

async function analyzeCommitMessages() {
  const repos = await getRepos();
  const allMessages: string[] = [];

  for (const repo of repos) {
    const messages = await getCommits(repo.name);
    allMessages.push(...messages);
  }

  const firstWords = new Map<string, number>();
  let totalLength = 0;
  let longest = '';

  for (const msg of allMessages) {
    const first = msg.split(/\s+/)[0].toLowerCase();
    firstWords.set(first, (firstWords.get(first) || 0) + 1);

    totalLength += msg.length;
    if (msg.length > longest.length) longest = msg;
  }

  const sorted = [...firstWords.entries()].sort((a, b) => b[1] - a[1]);
  const mostCommon = sorted[0]?.[0] || 'n/a';
  const avgLength = allMessages.length ? Math.round(totalLength / allMessages.length) : 0;

  return {
    totalCommits: allMessages.length,
    mostCommonFirstWord: mostCommon,
    averageLength: avgLength,
    longestMessage: longest,
  };
}

export {
  getGitHubStats,
  getRepos,
  getCommits,
  analyzeCommitMessages,
}