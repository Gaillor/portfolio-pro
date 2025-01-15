export type ProjectType = 'TP' | 'Pro' | 'Personnel';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  code: string;
  demo: string;
  type: ProjectType;
  role?: string;
  objectives?: string[];
  results?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ExtraContent {
  title: string;
  description: string;
  image?: string;
  link?: string;
}