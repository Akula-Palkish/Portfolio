import React from 'react';

const education = [
  {
    school: 'Prasad V Potluri Siddhartha Institute of Technology',
    years: '2022–2026',
    degree: 'BTech IT (Honors)',
    score: 'CGPA 9.24/10',
  },
  {
    school: 'SRI Bhavishya Jr College',
    years: '2020–2022',
    degree: 'Intermediate',
    score: '92.4%',
  },
  {
    school: 'Nalanda Vidya Niketan',
    years: '2019–2020',
    degree: '10 Grade',
    score: '76.8%',
  },
];

function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-16">
      {/* Section 1: Personal Philosophy */}
      <div className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-tr from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            As a coder, I thrive on solving real-world problems through logic, creativity, and relentless curiosity. I believe great software is crafted with clean, purposeful code—balancing structure and innovation. Whether I’m architecting seamless user experiences or unraveling complex data puzzles, I strive to build solutions that are robust, elegant, and impactful. For me, coding isn’t just a skill—it’s a mindset of continuous learning, collaboration, and leaving every system better than I found it.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/about_image.png" alt="Avatar" className="w-100 h-100 rounded-xl shadow-xl object-cover" />
        </div>
      </div>

      {/* Section 2: Interesting Fields */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-primary text-center">My Interesting Fields</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex-1 max-w-xs bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-primary hover:scale-105 transition-transform">
            <span className="text-4xl mb-4 text-blue-500">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83.48-5.54-.3-7.61-2.01l1.43-1.43a7.007 7.007 0 0 0 9.19-9.19l1.43-1.43c1.71 2.07 2.49 4.78 2.01 7.61A8.014 8.014 0 0 1 13 19.93z"></path></svg>
            </span>
            <h4 className="text-xl font-bold mb-2">Cloud & Data Engineering</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">Building scalable cloud solutions, data pipelines, and analytics platforms that turn raw data into actionable insights.</p>
          </div>
          <div className="flex-1 max-w-xs bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-primary hover:scale-105 transition-transform">
            <span className="text-4xl mb-4 text-purple-500">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm0 2h14v14H5V5zm2 3v8h10V8H7zm2 2h6v4H9v-4z"></path></svg>
            </span>
            <h4 className="text-xl font-bold mb-2">MERN Stack Developer</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">Creating modern web applications using MongoDB, Express, React, and Node.js with a focus on performance and UX.</p>
          </div>
        </div>
      </div>

      {/* Section 3: Education */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Education</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {education.map((edu, idx) => (
            <div key={idx} className="flex-1 max-w-xs bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border-b-4 border-primary">
              <div className="font-bold text-lg mb-2 text-center">{edu.school}</div>
              <div className="font-semibold mb-1 text-primary">{edu.degree}</div>
              <div className="text-gray-600 dark:text-gray-300 mb-1">{edu.score}</div>
              {edu.years && <div className="text-xs text-gray-500">{edu.years}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
