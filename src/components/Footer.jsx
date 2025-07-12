import React from 'react';
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/akulapalkish', icon: <FaLinkedin /> },
  { label: 'GitHub', url: 'https://github.com/PalkishAkula', icon: <FaGithub /> },
  { label: 'LeetCode', url: 'https://leetcode.com/u/Kx3N6dG4JE/', icon: <FaCode /> },
  { label: 'Email', url: 'mailto:palkishakula22@gmail.com', icon: <FaEnvelope /> },
];

function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-blue-200 via-white to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-t-2xl shadow-inner mt-8 px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="font-bold text-lg mb-1">Palkish Akula &copy; {new Date().getFullYear()}</div>
          
        </div>
        <div className="flex gap-6 text-2xl mb-4 md:mb-0">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:text-primary transition-colors bg-base-100 rounded-full p-2 shadow-md hover:scale-110 duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition-colors"
          aria-label="Back to Top"
        >
          <FaArrowUp />
          <span className="hidden sm:inline">Back to Top</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
