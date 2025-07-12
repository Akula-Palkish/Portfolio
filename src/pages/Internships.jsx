import React from 'react';

function Internships() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white  bg-clip-text bg-gradient-to-r from-primary  drop-shadow-lg text-white">Internships</h2>
      <div className="max-w-lg mx-auto bg-white/70 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl border border-primary/20 p-0 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl" style={{ WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)' }}>
        {/* Card Header: Title & Duration */}
        <div className="flex items-center w-full px-8 py-5 border-b border-primary/20 bg-gradient-to-r from-primary/10 to-purple-100 dark:from-primary/20 dark:to-gray-900 rounded-t-3xl">
          <div className="border-l-4 border-primary pl-4 flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-primary">AWS Cloud Virtual Internship</h3>
          </div>
          <span className="ml-4 px-4 py-1 rounded-full bg-primary/20 text-primary font-semibold text-xs md:text-sm">Jan 2024 – Mar 2024</span>
        </div>
        {/* Highlights */}
        <ul className="space-y-3 w-full px-8 py-6">
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200 text-base"><span className="w-3 h-3 rounded-full bg-primary inline-block"></span>Worked with EC2, S3, Lambda, and RDS services</li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200 text-base"><span className="w-3 h-3 rounded-full bg-primary inline-block"></span>Configured scalable applications using AWS Console and CLI</li>
        </ul>
        {/* View Certificate Button */}
        <a
          href="https://drive.google.com/file/d/1ENzq1fxR-xYa2qAjpps-e4bfw94kxJZs/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0 mb-6 md:mb-8 w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#605dff] text-white font-semibold shadow-md transition-all duration-200 hover:bg-[#4b44c9] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#605dff]/50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          View Certificate
        </a>
      </div>
    </section>
  );
}

export default Internships;
