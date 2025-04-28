import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaDocker, 
  FaGitAlt,
  FaGithub,
  FaJira,
  FaAws,
  FaPython,
  FaJava
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiFirebase,
  SiCircleci,
  SiGithubactions,
  SiRender,
  SiCloudinary,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiCypress,
  SiJest,
  SiPytest,
  SiApachejmeter,
  SiK6,
  SiMocha,
  SiPostman,
  SiCplusplus,
  SiC
} from 'react-icons/si';

import { TbApi } from 'react-icons/tb';
import { GrTest, GrDocumentTest } from 'react-icons/gr';
import { MdDeveloperMode, MdOutlineIntegrationInstructions } from 'react-icons/md';
import { GoServer } from 'react-icons/go';
import { BsDatabaseFill } from 'react-icons/bs';

export const SKILL_ICONS: Record<string, any> = {
  // Frontend
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "TailwindCSS": SiTailwindcss,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  
  // Backend
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "FastAPI": SiFastapi,
  "Flask": SiFlask,
  "REST APIs": TbApi,
  "Python": FaPython,
  "Java": FaJava,
  "C++": SiCplusplus,
  "C": SiC,
  
  // DevOps & Cloud
  "Docker": FaDocker,
  "Firebase": SiFirebase,
  "CI/CD": SiGithubactions,
  "CircleCI": SiCircleci,
  "GitHub Actions": SiGithubactions,
  "Render": SiRender,
  "AWS EC2": FaAws,
  "Cloudinary": SiCloudinary,
  
  // Databases
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  
  // Testing & QA
  "Cypress": SiCypress,
  "Jest": SiJest,
  "Pytest": SiPytest,
  "Unit Testing": GrTest,
  "Integration Testing": MdOutlineIntegrationInstructions,
  "JMeter": SiApachejmeter,
  "k6": SiK6,
  "Mocha": SiMocha,
  
  // Tools & Collaboration
  "Git": FaGitAlt,
  "GitHub": FaGithub,
  "Jira": FaJira,
  "Qase": GrDocumentTest,
  "Postman": SiPostman,
  "Agile Development": MdDeveloperMode,
  "TDD": GrDocumentTest,
  "Microservices": GoServer
};

export const getCategoryIcon = (category: string) => {
  const categoryIcons: Record<string, any> = {
    "Frontend Development": FaReact,
    "Backend Development": FaNodeJs,
    "DevOps & Cloud": FaDocker,
    "Databases": BsDatabaseFill,
    "Testing & QA": GrTest,
    "Tools & Collaboration": FaGitAlt
  };
  
  return categoryIcons[category] || MdDeveloperMode;
}; 