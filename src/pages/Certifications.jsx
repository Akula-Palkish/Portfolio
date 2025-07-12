import React from 'react';

const certs = [
  {
    name: 'Microsoft Certified: Azure Data Scientist Associate',
    provider: 'Microsoft',
    logo: '/microsoft_logo.svg',
    issued: 'Jun 2024',
    expires: 'Jun 2025',
    link: 'https://learn.microsoft.com/en-us/users/akulapalkish-1196/credentials/5186b464bf32f65e?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    name: 'Microsoft Certified: Fabric Data Engineer Associate',
    provider: 'Microsoft',
    logo: '/microsoft_logo.svg', 
    issued: 'Jun 2025',
    expires: 'Jun 2026',
    link: 'https://learn.microsoft.com/en-us/users/AkulaPalkish-1196/credentials/BA09769D53B5CF38?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    name: 'Microsoft Certified: Azure Data Fundamentals',
    provider: 'Microsoft',
    logo: '/microsoft_logo.svg',
    link: 'https://learn.microsoft.com/en-us/users/akulapalkish-1196/credentials/1dbd2e8f26da88f6?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    provider: 'Microsoft',
    logo: '/microsoft_logo.svg',
    link: 'https://learn.microsoft.com/en-us/users/akulapalkish-1196/credentials/b69059cfd50b6edc',
  },
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    provider: 'Microsoft',
    logo: '/microsoft_logo.svg',
    link: 'https://learn.microsoft.com/en-us/users/akulapalkish-1196/credentials/4d6013e72309bf8b',
  },
  {
    name: 'Getting Started with Git and GitHub',
    provider: 'Coursera',
    logo:"/coursera_logo.png",
    link:"https://www.coursera.org/account/accomplishments/records/9TABHW2EKANQ"
  },
  {
    name: 'Hands-on Introduction to Linux Commands and Shell Scripting',
    provider: 'Coursera',
    logo:"/coursera_logo.png",
    link:"https://www.coursera.org/account/accomplishments/records/VGGVNTNERSK3"
  },
  {
    name: 'Python for Data Science, AI & Development',
    provider: 'IBM',
    logo:"/coursera_logo.png",
    link:"https://www.coursera.org/account/accomplishments/records/BUADK5NWU467"
  },
  {
    name: 'Programming with JavaScript',
    provider: 'Coursera',
    logo:"/coursera_logo.png",
    link:"https://www.coursera.org/account/accomplishments/records/UVZ76NHUZYHF"
  },
  {
    name: 'Smart Code',
    provider: 'Smart Interviews',
    link: 'https://smartinterviews.in/certificate/bd048082',
  },
  {
    name: 'Java Fundamentals',
    provider: 'Infosys',
    link: 'https://drive.google.com/file/d/1tmiT2-akX77E6QIUZBDdTjuZFbW8TlJC/view',
  },
  {
    name: 'Google Cloud Foundations',
    provider: 'NPTEL',
    link: 'https://drive.google.com/file/d/1tFvIlukuQzcfTVoSceN8L3dmfNBPvigA/view',
  },
];

function Certifications() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#605dff] drop-shadow-lg">Certifications</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((cert, idx) => (
          <div
            key={idx}
            className="relative bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-primary/20 shadow-xl px-8 py-7 m-2 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/60 group"
            style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              {cert.logo && (
                <img src={cert.logo} alt="logo" className="w-8 h-8 rounded-md bg-white border border-gray-200 shadow-sm mr-2" />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary">{cert.name}</h3>
                {(cert.issued || cert.expires) && (
                  <div className="text-xs text-gray-500 mt-1">
                    {cert.issued && <span>Issued {cert.issued}</span>}
                    {cert.issued && cert.expires && <span> · </span>}
                    {cert.expires && <span>Expires {cert.expires}</span>}
                  </div>
                )}
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">{cert.provider}</span>
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#605dff] text-white font-semibold shadow-md transition-all duration-200 hover:bg-[#4b44c9] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#605dff]/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
