import React from 'react';

const activities = [
  'Smart India Hackathon – Built “DreamsTour” application',
  'Microsoft AI Skills Challenge – Participant',
  '2nd Place – KGF Coding Competition (LBRCE College)',
  'Honored as Cloud Domain Master by Google Developer Groups',
];

function Activities() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#605dff] drop-shadow-lg">Extracurricular Activities</h2>
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {activities.map((act, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-[#605dff]/20 shadow-lg px-6 py-5 m-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
            style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
          >
            <div className="w-3 h-10 rounded-lg bg-[#605dff] mt-1" />
            <div className="flex-1 text-lg text-gray-800 dark:text-gray-100 font-medium">
              {act}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
