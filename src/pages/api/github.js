export async function GET() {
  const res = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      "User-Agent": "astro-app"
    }
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
