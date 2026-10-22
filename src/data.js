// edit file.

export const PROFILE = {
  name: 'Alejandro Vargas',
  role: 'Full-Stack Developer',
  tagline: 'Passionate about building production-ready software and making real-world data useful.',
  city: 'Riverside, CA',
  openToWork: true,
  photo: '/profile.jpg',
  cover: '/cover.jpg',
  email: 'avargasdev@gmail.com',
  github: 'https://github.com/Avarg116',
  linkedin: 'https://www.linkedin.com/in/alejandro-vargas-802a281b8',
  resume: '/resume.pdf',
}

export const BIO = [
  "Hi 👋, my name is Alejandro. I'm a full-stack developer with a B.S. in Computer Science from the University of California, Riverside, seeking opportunities to build reliable software that solves real-world problems.",
  "I work across the full stack, with a focus on backend development. I enjoy taking projects from prototype to production by building well-tested services, containerizing applications, and deploying them to the cloud. I'm also interested in bringing AI into production software, from serving machine learning models through APIs to building LLM-powered agents and tools.",
  "I'm also a native Spanish speaker, always happy to work across languages.",
]

export const EDUCATION = {
  degree: 'B.S. in Computer Science',
  schoolFull: 'University of California, Riverside',
  year: '2024',
}

export const SKILL_GROUPS = [
  { label: 'Languages', color: 'blue', skills: ['Python', 'C++', 'JavaScript', 'HTML/CSS', 'SQL'] },
  { label: 'Frameworks & APIs', color: 'green', skills: ['React', 'Node.js', 'Express.js', 'RESTful APIs', 'FastAPI'] },
  { label: 'Databases', color: 'yellow', skills: ['PostgreSQL', 'MongoDB'] },
  { label: 'Data & ML', color: 'orange', skills: ['NumPy', 'Pandas', 'Matplotlib', 'scikit-learn'] },
  { label: 'AI & LLMs', color: 'purple', skills: ['RAG', 'AI Agents', 'LangChain', 'Claude API', 'OpenAI API'] },
  { label: 'Cloud & DevOps', color: 'pink', skills: ['Docker', 'CI/CD (GitHub Actions)', 'AWS (EC2, RDS, S3, etc.)', 'Firebase'] },
  { label: 'Developer Tools', color: 'gray', skills: ['Git & GitHub', 'Linux', 'Bash', 'pytest'] },
]

export const PROJECTS = [
  {
    title: 'Fraud Detection API',
    description:
      'A fraud-scoring service: FastAPI validates each transaction, a versioned scikit-learn model scores it, and every decision is logged to PostgreSQL with its model version and threshold for auditability. Trained on 284K card transactions with a leakage-safe time split, and verified by replaying 42K transactions through the deployed API to match offline results exactly.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'scikit-learn', 'Docker', 'AWS', 'GitHub Actions'],
    status: 'Completed',
    repo: 'https://github.com/Avarg116/fraud-detection-api',
    live: '',
    image: '',
    featured: true,
  },
  {
    title: 'RAG Study Tool',
    description:
      'A PDF study assistant deployed on AWS: users upload notes or textbooks and get answers grounded only in their documents, cited to the exact page. A Claude Haiku agent searches PostgreSQL with pgvector and rewrites weak queries before Claude Sonnet writes the answer, raising top-1 retrieval accuracy from 62.5% to 95% over plain vector search on a 40-question benchmark.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Claude API', 'React', 'Docker', 'AWS', 'GitHub Actions'],
    status: 'Completed',
    repo: 'https://github.com/Avarg116/rag-study-tool',
    live: '',
    image: '',
  },
  {
    title: 'Project Three',
    description:
      'A REST API serving [what it does], containerized with Docker and deployed via GitHub Actions.',
    stack: ['FastAPI', 'Docker', 'GitHub Actions'],
    status: 'In progress',
    repo: 'https://github.com/yourusername/project-three',
    live: '',
    image: '',
  },
]
