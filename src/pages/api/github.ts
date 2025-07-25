export const prerender = false;
export async function GET() {
  try {
    const res = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        "User-Agent": "astro-app",
      },
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "GitHub API error", status: res.status }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const repos = await res.json();

    // Preprocessing
    const totalRepos = repos.length;
    const totalStars = repos.reduce((sum: any, repo: { stargazers_count: any; }) => sum + (repo.stargazers_count || 0), 0);
    const totalForks = repos.reduce((sum: any, repo: { forks_count: any; }) => sum + (repo.forks_count || 0), 0);
    const commitMessages: string[] = [];

    for (const repo of repos) {
      const commitsRes = await fetch(repo.commits_url.replace("{/sha}", ""), {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          "User-Agent": "astro-app",
        },
      });
      if (commitsRes.ok) {
        const commits = await commitsRes.json();
        for (const c of commits) {
          if (c && c.commit && c.commit.message) {
            commitMessages.push(c.commit.message);
          }
        }
      }
    }

    const totalCommits = commitMessages.length;
    const mostCommonFirstWord = (() => {
      const counts: Record<string, number> = {};
      for (const msg of commitMessages) {
        const word = msg.split(" ")[0].toLowerCase();
        if (!word) continue;
        counts[word] = (counts[word] || 0) + 1;
      }
      return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
    })();

    const averageLength =
      commitMessages.reduce((sum, msg) => sum + msg.length, 0) /
      (commitMessages.length || 1);

    const longestMessage =
      commitMessages.sort((a, b) => b.length - a.length)[0] || "";

    const stats = {
      totalCommits,
      mostCommonFirstWord,
      averageLength,
      longestMessage,
      totalRepos,
      totalStars,
      totalForks,
    };

    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
