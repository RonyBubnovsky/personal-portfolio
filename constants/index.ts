export const NAV_LINKS = [
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Contact", path: "#contact" },
];

export const PERSONAL_INFO = {
  name: "Rony Bubnovsky",
  title: "Junior Full Stack Developer | Software Engineer",
  description: "Junior Full Stack Developer with expertise in JavaScript, React, Node.js, Express.js, and MongoDB, specializing in scalable and secure web applications. Skilled in REST APIs, authentication, and cloud deployment, with hands-on experience in CI/CD pipelines and containerization. Strong problem-solving skills and Agile development experience.",
  email: "rony.bubnovsky@gmail.com",
  phone: "+972508465858",
  location: "Ashdod, Israel"
};

export const SKILLS = [
  {
    title: "Frontend Development",
    technologies: ["React", "Next.js", "HTML", "CSS", "TailwindCSS", "TypeScript", "JavaScript"]
  },
  {
    title: "Backend Development",
    technologies: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "Python", "Java", "C++", "C"]
  },
  {
    title: "DevOps & Cloud",
    technologies: ["Docker", "Firebase", "CI/CD", "CircleCI", "GitHub Actions", "Render", "AWS EC2", "Cloudinary"]
  },
  {
    title: "Databases",
    technologies: ["MongoDB", "PostgreSQL", "Redis"]
  },
  {
    title: "Testing & QA",
    technologies: ["Cypress", "Jest", "Pytest", "Unit Testing", "Integration Testing", "JMeter", "k6", "Mocha"]
  },
  {
    title: "Tools & Collaboration",
    technologies: ["Git", "GitHub", "Jira", "Qase", "Postman", "Agile Development", "TDD", "Microservices"]
  }
];

export const PROJECTS = [
  {
    title: "TikTour – Social Network for Travelers",
    description: "A full-stack social platform for travelers to share experiences and connect. Built with React, Node.js (Express), and MongoDB. Features secure authentication, token management, and Firebase for image storage.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase", "CircleCI", "Cypress"],
    duration: "July 2024 – August 2024",
    images: [
      "/projects/tiktour.png",
      "/projects/tiktour1.png",
      "/projects/tiktour2.png",
      "/projects/tiktour3.png"
    ],
    link: "#",
    github: {
      client: "https://github.com/RonyBubnovsky/tiktour-client",
      server: "https://github.com/RonyBubnovsky/tiktour-server"
    }
  },
  {
    title: "Career Agent – AI-Powered Job Search Platform",
    description: "Full-stack job search platform using React, Node.js (Express), and Tailwind CSS. Features weighted job matching algorithm and Google Generative API for AI-driven CV analysis and job recommendations.",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "Cloudinary", "GitHub Actions", "Google Generative API"],
    duration: "October 2024 – Present",
    images: [
      "/projects/careeragent.png",
      "/projects/careeragent1.png",
      "/projects/careeragent2.png",
      "/projects/careeragent3.png",
      "/projects/careeragent4.png",
      "/projects/careeragent5.png",
      "/projects/careeragent6.png",
      "/projects/careeragent7.png",
      "/projects/careeragent8.png"
    ],
    link: "https://careeragent-ai.online",
    github: "https://github.com/Bar-Levi/CareerAgent"
  },
  {
    title: "CrowdCapture – Shared Event Album Platform",
    description: "A responsive full-stack web application for creating shared photo albums for celebratory and business events. Guests can scan QR codes to access event pages and upload media. Built with React + Vite frontend and Node.js backend, utilizing AWS services for scalable media storage and processing. Deployed on AWS Lightsail servers.",
    technologies: ["React", "Vite", "Node.js", "MongoDB", "AWS S3", "AWS SQS", "AWS Lambda", "Docker", "AWS ECR", "AWS Lightsail"],
    duration: "2025",
    images: [
      "/projects/cc1.png",
      "/projects/cc2.png",
      "/projects/cc3.png",
      "/projects/cc4.png",
      "/projects/cc5.png",
      "/projects/cc6.png",
      "/projects/cc7.png"
    ],
    link: "https://crowdcapture.co.il",
    github: ""
  },
  {
    title: "Next.js Chess App – Full-Stack Chess with AI",
    description: "Full-stack chess application with real-time gameplay and AI opponent using the minimax algorithm with alpha-beta pruning. Features Clerk authentication and Redis for user statistics.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redis", "Clerk", "Render"],
    duration: "March 2025",
    images: [
      "/projects/chess.png",
      "/projects/chess1.png",
      "/projects/chess2.png",
      "/projects/chess3.png",
      "/projects/chess4.png"
    ],
    link: "https://ronychess.vercel.app/",
    github: "https://github.com/RonyBubnovsky/Chess-Next.js"
  }
];

export const WORK_EXPERIENCE = [
  {
    title: "Logistics Specialist & Electronics Administrator",
    company: "Israel Defense Forces",
    duration: "October 2017 – June 2020",
    description: "Managed 60+ computing stations, troubleshooting hardware/software issues. Utilized Oracle ERP to optimize system workflows and inventory tracking. Collaborated with defense tech contractors on system integrations. Awarded the Colonel Excellence Award for outstanding performance."
  },
  {
    title: "Student Tutor",
    company: "Perach",
    duration: "October 2022 - Present",
    description: "Provided programming and academic support to students throughout the semester, helping improve understanding and problem-solving skills."
  }
];

export const EDUCATION = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "SCE Academic College of Engineering",
    duration: "Expected July 2025",
    gpa: "91.5",
    description: "Focusing on software engineering principles, algorithms, data structures, and modern development methodologies."
  }
];

export const LANGUAGES = [
  { language: "Hebrew", proficiency: "Native" },
  { language: "Russian", proficiency: "Advanced" },
  { language: "English", proficiency: "Full Professional Proficiency" }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/RonyBubnovsky",
  linkedin: "https://www.linkedin.com/in/rony-bubnovsky-software-developer",
  email: "rony.bubnovsky@gmail.com"
}; 