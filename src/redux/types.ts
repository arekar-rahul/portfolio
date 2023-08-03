export interface AppState {
  data: MyData;
}

export interface Skill {
  title: string;
  text: string;
}

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  duration?: string; // Optional property for 'duration'
  description: string;
}

interface Project {
  projectName: string;
  company: string;
  projectScope: string;
  technologiesUsed: string[];
}

interface Education {
  degree: string;
  college?: string; // Optional property for 'college'
  board?: string; // Optional property for 'board'
  location: string;
  year: string;
  score: string;
}

export interface MyData {
  name: string;
  prof: string;
  age: number;
  description: string;
  content: {
    skills: Skill[];
    experiences: Experience[];
    projects: Project[];
    education: Education[];
  };
}
