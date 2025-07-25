export async function get(context, req) {
  const res = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      "User-Agent": "astro-app"
    }
  });

  const data = await res.json();

  return {
    status: 200,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
}
