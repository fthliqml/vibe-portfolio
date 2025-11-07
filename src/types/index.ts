export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  repoUrl: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  email: string;
  description: string;
  social: {
    linkedin: string;
    instagram: string;
    email: string;
  };
};
