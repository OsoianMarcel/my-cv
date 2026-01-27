export interface Skill {
  name: string;
  progress: number;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Employment {
  position: string;
  company: string;
  periodFrom: string;
  periodTo: string;
  responsibilities: string[];
  skills?: string[];
}

export interface GitHubLink {
  url: string;
  label: string;
}

export interface Content {
  headline: string;
  address: string;
  email: string;
  github: GitHubLink;
  skills: Skill[];
  languages: Language[];
  description: string;
  employmentHistory: Employment[];
  educationHistory: Employment[];
}
