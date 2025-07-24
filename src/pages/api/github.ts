import { analyzeCommitMessages, getGitHubStats } from "../../utils/utils";

export async function GET() {
  try {
    const [commitStats, repoStats] = await Promise.all([
      analyzeCommitMessages(),
      getGitHubStats(),
    ]);

    return new Response(JSON.stringify({ ...commitStats, ...repoStats }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('GitHub API error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal error', detail: String(err) }),
      { status: 500 }
    );
  }
}
