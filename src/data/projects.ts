export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export const myProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Una experiencia de compra minimalista centrada en la velocidad.",
    tags: ["React", "TypeScript", "Stripe"],
    githubUrl: "https://github.com/raulmaciasdev/project1",
    liveUrl: "https://raulmaciasdev.github.io/project1",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Visualización de datos climáticos con animaciones fluidas.",
    tags: ["Vite", "Framer Motion", "API"],
    githubUrl: "https://github.com/raulmaciasdev/project2",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
  },
];
