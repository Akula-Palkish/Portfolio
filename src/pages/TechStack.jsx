import React, { useState } from 'react';

const techList = [
  // Programming
  { name: 'JavaScript', category: 'Programming' },
  { name: 'Python', category: 'Programming' },
  { name: 'Java', category: 'Programming' },
  { name: 'C++', category: 'Programming' },
  { name: 'Spark', category: 'Programming' },
  { name: 'SQL', category: 'Programming' },
  { name: 'NoSQL', category: 'Programming' },

  // Web Development
  { name: 'React', category: 'Web Development' },
  { name: 'Node.js', category: 'Web Development' },
  { name: 'Express', category: 'Web Development' },
  { name: 'MongoDB', category: 'Web Development' },
  { name: 'HTML', category: 'Web Development' },
  { name: 'CSS', category: 'Web Development' },
  { name: 'Tailwind CSS', category: 'Web Development' },
  { name: 'DaisyUI', category: 'Web Development' },
  { name: 'GitHub', category: 'Web Development' },
  { name: 'Postman', category: 'Web Development' },

  // Cloud
  { name: 'Azure', category: 'Cloud' },

  // Data Engineering Tools
  { name: 'Microsoft Azure', category: 'Data Engineering Tools' },
  { name: 'Microsoft Fabric', category: 'Data Engineering Tools' },
  { name: 'Databricks', category: 'Data Engineering Tools' },
  { name: 'Apache Spark', category: 'Data Engineering Tools' },
  { name: 'Airflow', category: 'Data Engineering Tools' },
  { name: 'Kafka', category: 'Data Engineering Tools' },
  { name: 'Snowflake', category: 'Data Engineering Tools' },
];

const filterOptions = [
  { label: 'All Tech', value: 'All' },
  { label: 'Programming', value: 'Programming' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'Cloud', value: 'Cloud' },
  { label: 'Data Engineering Tools', value: 'Data Engineering Tools' },
];

function TechStack() {
  const [filter, setFilter] = React.useState('All');
  const filteredTech = filter === 'All' ? techList : techList.filter(t => t.category === filter);

  return (
    <section className="min-h-[80vh] w-full bg-[#1d232a] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow">Tech Stack</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Technologies I use regularly for building scalable, modern applications and data solutions.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filterOptions.map(opt => (
            <button
              key={opt.value}
              className={`px-4 py-2 rounded-full font-semibold transition-colors border shadow-sm focus:outline-none ${filter === opt.value ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-primary border-primary/30 hover:bg-primary/10'}`}
              onClick={() => setFilter(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {filteredTech.map((tech, idx) => (
            <div
              key={tech.name}
              className="flex items-center min-h-[110px] rounded-2xl bg-[#1d232a] shadow-2xl border-2 border-[#605dff]/10 transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl hover:border-[#605dff] group"
            >
              {/* Accent bar or icon */}
              <div className="w-3 h-12 rounded-xl bg-[#605dff] mr-4 ml-3 hidden sm:block group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200" />
              <span className="text-2xl font-extrabold text-white tracking-wide text-center flex-1 px-4 py-6 select-none">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
