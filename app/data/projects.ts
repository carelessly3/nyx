export type Project = {
  slug: string;
  name: string;
  motivation: string;
  description: string;
  gitLink: string;
  techStack: string[];
};

export const projectsData: Project[] = [
  {
    slug: 'nyx-terminal',
    name: 'Nyx Terminal',
    motivation: 'To create a digital garden that feels like home for a developer, moving away from standard portfolio templates to something more raw and authentic.',
    description: 'A Next.js based portfolio website built with a terminal emulator aesthetic. It features a custom command-line interface, a modular timeline built like a directory tree, and custom Project views. Designed with strict minimalist principles echoing classic UNIX systems.',
    gitLink: 'https://github.com/carelessly/nyx',
    techStack: ['nextjs', 'react', 'typescript', 'css']
  },
  {
    slug: 'rusty-cli',
    name: 'Rusty CLI Tool',
    motivation: 'To learn Rust while building something genuinely useful to streamline my daily workflow.',
    description: 'A blazing fast command-line utility written in Rust for bulk text parsing and file organization. It leverages multi-threading to process large directories at speeds significantly faster than equivalent Python scripts.',
    gitLink: 'https://github.com/carelessly/rusty-cli',
    techStack: ['rust', 'cli']
  },
  {
    slug: 'go-micro-auth',
    name: 'Go Micro Auth',
    motivation: 'Understanding the intricacies of secure JWT-based authentication in distributed systems.',
    description: 'A lightweight, highly concurrent authentication microservice built in Go. It handles user registration, login, and secure token issuance using Redis for fast session lookup and PostgreSQL for persistent user storage.',
    gitLink: 'https://github.com/carelessly/go-micro-auth',
    techStack: ['go', 'redis', 'postgresql', 'docker']
  }
];
