export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI / ML' | 'Full Stack' | 'Systems & Python' | 'Frontend';
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  caseStudy: {
    problem: string;
    solution: string;
    architectureDescription: string;
    architectureNodes: { id: string; label: string; subtext?: string; type: 'input' | 'process' | 'storage' | 'output' }[];
    architectureFlow: string[];
    technologyDetails: { category: string; tools: string[] }[];
    challenges: string[];
    implementation: string[];
    results: string[];
  };
}

export interface SkillCategory {
  title: string;
  skills: { name: string; iconName?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'Internship' | 'Job Simulation';
  period: string;
  location?: string;
  description: string[];
  skills: string[];
  badgeColor?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathons' | 'Competitive Programming' | 'Academics' | 'Leadership';
  issuer: string;
  date: string;
  description: string;
  tags: string[];
  disclaimer?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  provider: string;
  year: string;
  category: 'Data Science' | 'Python' | 'Web Development' | 'Software Engineering' | 'Data Analytics';
  credentialUrl?: string;
}

export interface LiveStats {
  githubRepos: number;
  leetcodeSolved: number;
  codechefSolved: number;
  codechefRating: number;
  codechefStars: string;
  codechefContests: number;
  codeforcesSolved: number;
  lastUpdated: string;
  isLive: boolean;
}
