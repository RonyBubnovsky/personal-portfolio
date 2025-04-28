import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDocker,
  FaAws,
  FaGithub,
  FaJira,
  FaGitAlt,
  FaDatabase,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiExpress, 
  SiTailwindcss, 
  SiCplusplus, 
  SiC, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiJest, 
  SiCypress, 
  SiFirebase, 
  SiCircleci, 
  SiCloudinary,
  SiFastapi,
  SiFlask,
  SiPython,
  SiGithubactions,
  SiRender,
  SiMocha,
  SiK6,
  SiApachejmeter,
  SiPostman,
  SiQase
} from "react-icons/si";
import { DiPython } from "react-icons/di";
import { TbApi, TbBrandCypress } from "react-icons/tb";
import { GrTest, GrDocumentTest } from "react-icons/gr";
import { GoServer } from "react-icons/go";
import { MdOutlineIntegrationInstructions, MdDeveloperMode } from "react-icons/md";
import React from "react";

interface SkillIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const SkillIcon = ({ name, size = 24, className = "" }: SkillIconProps) => {
  const iconProps = {
    size,
    className: `text-blue-400 ${className}`,
  };

  // Map skill names to their respective icons
  const iconMap: { [key: string]: React.ReactNode } = {
    // Frontend
    "React": <FaReact {...iconProps} />,
    "Next.js": <SiNextdotjs {...iconProps} />,
    "HTML": <FaHtml5 {...iconProps} />,
    "CSS": <FaCss3Alt {...iconProps} />,
    "JavaScript": <FaJsSquare {...iconProps} />,
    "TypeScript": <SiTypescript {...iconProps} />,
    "TailwindCSS": <SiTailwindcss {...iconProps} />,
    "Tailwind": <SiTailwindcss {...iconProps} />,
    "Tailwind CSS": <SiTailwindcss {...iconProps} />,
    
    // Backend
    "Node.js": <FaNode {...iconProps} />,
    "Express.js": <SiExpress {...iconProps} />,
    "Express": <SiExpress {...iconProps} />,
    "FastAPI": <SiFastapi {...iconProps} />,
    "Flask": <SiFlask {...iconProps} />,
    "REST APIs": <TbApi {...iconProps} />,
    "Python": <DiPython {...iconProps} />,
    "Java": <FaJava {...iconProps} />,
    "C++": <SiCplusplus {...iconProps} />,
    "C": <SiC {...iconProps} />,
    
    // DevOps & Cloud
    "Docker": <FaDocker {...iconProps} />,
    "Firebase": <SiFirebase {...iconProps} />,
    "CI/CD": <SiGithubactions {...iconProps} />,
    "CircleCI": <SiCircleci {...iconProps} />,
    "GitHub Actions": <SiGithubactions {...iconProps} />,
    "Render": <SiRender {...iconProps} />,
    "AWS": <FaAws {...iconProps} />,
    "AWS EC2": <FaAws {...iconProps} />,
    "Cloudinary": <SiCloudinary {...iconProps} />,
    
    // Databases
    "MongoDB": <SiMongodb {...iconProps} />,
    "PostgreSQL": <SiPostgresql {...iconProps} />,
    "Redis": <SiRedis {...iconProps} />,
    "Database": <FaDatabase {...iconProps} />,
    
    // Testing & QA
    "Cypress": <TbBrandCypress {...iconProps} />,
    "Jest": <SiJest {...iconProps} />,
    "Pytest": <SiPython {...iconProps} />,
    "Unit Testing": <GrTest {...iconProps} />,
    "Integration Testing": <MdOutlineIntegrationInstructions {...iconProps} />,
    "JMeter": <SiApachejmeter {...iconProps} />,
    "k6": <SiK6 {...iconProps} />,
    "Mocha": <SiMocha {...iconProps} />,
    
    // Tools & Collaboration
    "Git": <FaGitAlt {...iconProps} />,
    "GitHub": <FaGithub {...iconProps} />,
    "Jira": <FaJira {...iconProps} />,
    "Qase": <GrDocumentTest {...iconProps} />,
    "Postman": <SiPostman {...iconProps} />,
    "Agile Development": <MdDeveloperMode {...iconProps} />,
    "TDD": <GrDocumentTest {...iconProps} />,
    "Microservices": <GoServer {...iconProps} />
  };

  // Return the icon or a fallback
  return iconMap[name] || (
    <div className="flex items-center justify-center w-full h-full rounded-md bg-blue-500/10 p-1">
      <span className="text-[10px] font-medium text-blue-400 text-center leading-tight">
        {name.length > 8 ? `${name.slice(0, 8)}...` : name}
      </span>
    </div>
  );
}; 