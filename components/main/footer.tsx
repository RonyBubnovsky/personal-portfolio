import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <span className="text-white font-bold text-2xl cursor-pointer">
                Rony<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="mt-2 max-w-md">
              Junior Full Stack Developer with expertise in building modern, scalable web applications.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {SOCIAL_LINKS.github && (
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub size={24} />
              </a>
            )}
            {SOCIAL_LINKS.linkedin && (
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin size={24} />
              </a>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 