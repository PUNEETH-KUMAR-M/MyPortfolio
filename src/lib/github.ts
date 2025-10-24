import { GitHubRepo } from '@/types';

const GITHUB_USERNAME = 'PUNEETH-KUMAR-M';
const GITHUB_API_URL = 'https://api.github.com';

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }

    const repos: GitHubRepo[] = await response.json();
    return repos.filter(repo => !repo.name.includes('PUNEETH-KUMAR-M') && !repo.fork);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function fetchPinnedRepos(): Promise<GitHubRepo[]> {
  try {
    // Since GitHub API doesn't have a direct way to get pinned repos,
    // we'll fetch the most starred repos as a fallback
    const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`);

    if (!response.ok) {
      throw new Error('Failed to fetch pinned repositories');
    }

    const repos: GitHubRepo[] = await response.json();
    return repos.filter(repo => !repo.name.includes('PUNEETH-KUMAR-M') && !repo.fork);
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    return [];
  }
}
