// data available for awards:
// total forks, total stars, average length of commit history

export const awards = (data: { totalForks: number; totalStars: number; averageLength: number; }) => [
  // fork
  data.totalForks > 0 ? "🌱 Forkling: Sole monarch of clinging mediocrity." : null,
  data.totalForks > 5 ? "🌿 Forklet: A small but significant contribution to the fork ecosystem." : null,
  data.totalForks > 10 ? "🌳 Fork Forest: A thriving ecosystem of forks." : null,
  data.totalForks > 50 ? "🌲 Forkzilla: A monstrous collection of forks." : null,

  // stars
  data.totalStars === 0 ? "🌑 Zero Stars Club: Unloved. Undiscovered. Unbothered." : null,
  data.totalStars > 0 ? "⭐ Star Gazer: A beacon of hope in the vast sea of GitHub." : null,
  data.totalStars > 10 ? "🌟 Star Collector: A burgeoning connoisseur of... writing things people like." : null,
  data.totalStars > 50 ? "✨ Star Master: A master of the art of writing things people like." : null,
  data.totalStars > 100 ? "🌌 Star Lord: Terrifyingly important." : null,

  // average length
  data.averageLength < 20 ? "✂️ Conciseness Award: Less is more." : null,
  data.averageLength < 50 ? "📝 Brevity is Key: Not too long winded." : null,
  data.averageLength > 100 ? "📜 Verbosity Award: Why say little when you can say everything?" : null,

  // combo awards amde by chat gpt because it amused me
  data.totalStars === 0 && data.totalForks > 10
    ? "🧪 Quantum Nuisance: Unstarred, yet cloned relentlessly. Are you a glitch in the Matrix?"
    : null,
  data.totalStars > 50 && data.averageLength > 100
    ? "📢 Cult Leader of Commits: Loud, loved, and entirely too detailed."
    : null,
  data.totalForks === 0 && data.totalStars === 0 && data.averageLength < 20
    ? "🚫 Invisible Developer: No forks, no stars, no fluff. You may be a bot."
    : null,
  data.totalForks > 50 && data.totalStars === 0
    ? "🧬 Genetic Dead-End: Everyone copies you, no one likes you."
    : null,
  data.totalStars > 100 && data.totalForks > 100
    ? "👑 GitHub Demigod: Born in a .gitignore, destined for README scripture."
    : null,
  data.totalStars < 5 && data.averageLength > 200
    ? "🎭 Tragedian: Writing epics into the void."
    : null,
].filter(Boolean);
