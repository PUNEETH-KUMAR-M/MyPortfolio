export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Skill {
  category: string;
  skills: string[];
  icon?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  date?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
