interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
}

export async function getLastCommit(path: string): Promise<GitHubCommit | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/dandenney/artificially-intelligent/commits?path=${encodeURIComponent(path)}&per_page=1`
    );
    if (!response.ok) return null;
    const commits: GitHubCommit[] = await response.json();
    return commits[0] ?? null;
  } catch {
    return null;
  }
}
