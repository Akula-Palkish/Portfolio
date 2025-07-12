import React from 'react';

const dataEngineeringProjects = [
  {
    title: 'ECDC Covid-19 Data Integration and Reporting Solution',
    description: (
      <>
        Designed a scalable data pipeline using Azure Data Flow to transform and process Covid-19 data from ECDC, integrated it into an Azure SQL data warehouse for optimized performance, and built interactive Power BI dashboards to support data-driven decision-making.
      </>
    ),
    tech: ['Azure Data Flow', 'Azure SQL', 'Power BI', 'Data Engineering'],
    github: 'https://github.com/PalkishAkula/DataFactory_Covid_19_Project',
  },
  {
    title: 'Formula 1 Race Data Analysis and Decision Making',
    description: (
      <>
        Leveraged Azure Databricks to ingest and process Formula 1 race data in Delta Lake Storage, implemented ETL workflows to prepare high-quality datasets, optimized storage to reduce data latency by 20%, and delivered actionable insights for tracking race performance.
      </>
    ),
    tech: ['Azure Databricks', 'Delta Lake', 'ETL', 'Data Analytics'],
    github: 'https://github.com/PalkishAkula/DataBricks_Formula1_Project',
  },
];

const webDevProjects = [
  {
    title: 'CodeGlance – Contest Performance Dashboard',
    description: 'A MERN stack dashboard that visualizes coding contest performance, integrates coding profiles via APIs, and provides suggestions for improvement.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'APIs'],
    github: 'https://github.com/PalkishAkula/Cp-Tracker',
  },
  {
    title: 'Real-Time Chat App',
    description: 'A real-time chat application built with React, Socket.IO, and JWT authentication. Features a clean, responsive UI.',
    tech: ['React', 'Socket.IO', 'JWT', 'Node.js'],
    github: 'https://github.com/PalkishAkula/Chat-App',
  },
];

function Projects() {
  return (
    <section className="min-h-[80vh] w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow">My Projects</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A showcase of some of my favorite work—each project is built with passion, modern tech, and a focus on real-world impact.</p>
        </div>
        {/* Data Engineering Projects */}
        <div className="mb-14">
          <h3 className="text-3xl font-bold mb-8 text text-left">Data Engineering Projects</h3>
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            {dataEngineeringProjects.map((proj, idx) => (
              <div
                key={idx}
                className="flex flex-col min-h-[340px] md:min-h-[360px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-transform hover:-translate-y-2 hover:shadow-2xl border border-primary/10"
              >
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{proj.title}</h3>
                  <div className="mb-5 text-gray-700 dark:text-gray-300 flex-1">{proj.description}</div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tech.map(t => (
                      <span key={t} className="inline-block px-3 py-1 rounded-full border border-primary bg-primary/10 text font-semibold text-xs tracking-wide shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Developer Projects */}
        <div className="mb-14">
          <h3 className="text-3xl font-bold mb-8 text text-left">Web Developer Projects</h3>
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            {webDevProjects.map((proj, idx) => (
              <div
                key={idx}
                className="flex flex-col min-h-[340px] md:min-h-[360px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-transform hover:-translate-y-2 hover:shadow-2xl border border-primary/10"
              >
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{proj.title}</h3>
                  <div className="mb-5 text-gray-700 dark:text-gray-300 flex-1">{proj.description}</div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tech.map(t => (
                      <span key={t} className="inline-block px-3 py-1 rounded-full border border-primary bg-primary/10 text font-semibold text-xs tracking-wide shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-6 text">Publications</h3>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-primary/10 p-7 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2">Data Visualization of Blood Bank Distribution Across India</h4>
              <div className="mb-2 text-gray-700 dark:text-gray-300 text-base">
                Published a research paper titled <span className="font-semibold text-primary">“Data Visualization of Blood Bank Distribution Across India”</span> in IJRAR.<br/>
                <span className="inline-block mt-2 px-3 py-1 rounded-full border border-purple-500 bg-purple-100 text-purple-700 font-semibold text-xs tracking-wide shadow-sm mr-2">Tableau</span>
                <span className="inline-block mt-2 px-3 py-1 rounded-full border border-blue-500 bg-blue-100 text-blue-700 font-semibold text-xs tracking-wide shadow-sm">Data Analysis</span>
              </div>
            </div>
            <a
              href="https://github.com/PalkishAkula/Tableau_Project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors"
            >
              View Document
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
