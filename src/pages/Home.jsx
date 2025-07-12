import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

const socials = [
  { label: "GitHub", url: "https://github.com/PalkishAkula", icon: <FaGithub /> },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/akulapalkish", icon: <FaLinkedin /> },
  { label: "LeetCode", url: "https://leetcode.com/u/Kx3N6dG4JE/", icon: <FaCode /> },
  { label: "Email", url: "mailto:palkishakula22@gmail.com", icon: <FaEnvelope /> },
];

function Home() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 py-12 bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8">
        {/* Left Section: Text and Typewriter */}
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 flex items-center gap-2">
            Hi There!
            <span role="img" aria-label="wave" className="animate-wave">👋🏻</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            I'M <span className="text-primary">PALKISH AKULA</span>
          </h2>
          <div className="mb-6 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "MERN Stack Developer",
                  "Cloud & Data Engineer",
                  "Hackathon Enthusiast"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <p className="mb-6 max-w-xl text-base md:text-lg text-gray-600 dark:text-gray-400">
            I fell in love with programming and have a passion for building scalable apps and solving real-world problems.<br/>
            Fluent in <span className="text-primary font-semibold">Python, JavaScript, C++</span>.<br/>
            Interests: <span className="text-primary font-semibold">Full Stack Web Development, Cloud, Data Engineering</span>.<br/>
            I love working with <span className="text-primary font-semibold">Microsoft Azure, Databricks, Node.js, React.js</span> and modern frameworks.
          </p>
          <div className="flex gap-4 mb-8">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-2xl bg-base-100 rounded-full p-2 shadow-md hover:text-primary hover:scale-110 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary btn-lg shadow-xl transition-transform transform hover:scale-105">view resume</button>
          </a>
        </div>
        {/* Right Section: Avatar with Tilt */}
        <div className="flex-1 flex justify-center items-center">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.0} className="w-fit">
            <img
              src="photo.png"
              alt="Modern Avatar"
              className="w-110 h-96  rounded-xl shadow-2xl object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default Home;
