import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Tech Stack', path: '/techstack' },
  { label: 'Internships', path: '/internships' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Activities', path: '/activities' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/60 dark:bg-gray-900/70 shadow-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 rounded-b-xl mx-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        <div className="text-2xl font-bold tracking-tight text-primary drop-shadow-sm">
          <Link to="/"><img className="w-15 h-8" src="logo1.png" alt="" /></Link>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={
                `text-white hover:text-primary transition-colors px-2 py-1 rounded-lg font-medium` +
                (window.location.pathname === link.path ? ' bg-primary/10 text-primary' : '')
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open Menu"
            className="btn btn-ghost btn-sm mr-2"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu size={26} />
          </button>
        </div>

      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] flex">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300" onClick={() => setMenuOpen(false)} />
          <div className="fixed top-0 right-0 w-screen h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800/95 backdrop-blur-md border-l-2 border-primary/20 flex flex-col animate-slideInRight p-0 overflow-y-auto z-[1000]">
            {/* Profile/Avatar Section */}
            <div className="flex items-center gap-3 px-8 pt-8 pb-6 border-b border-gray-700">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">AP</div>
              <div>
                <div className="font-semibold text-lg text-white">Akula Palkish</div>
                <div className="text-xs text-gray-400">Portfolio</div>
              </div>
              <button
                aria-label="Close Menu"
                className="ml-auto btn btn-ghost btn-sm text-white"
                onClick={() => setMenuOpen(false)}
              >
                <FiX size={28} />
              </button>
            </div>
            {/* Nav Links */}
            <nav className="flex flex-col gap-4 px-8 pt-8 pb-8 flex-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={
                    `text-xl px-4 py-3 rounded-xl font-semibold transition-colors duration-200 text-white hover:bg-primary/20 hover:text-primary` +
                    (window.location.pathname === link.path ? ' bg-primary/30 text-primary' : '')
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
      <style>{`
        @keyframes slideInRight {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
