import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import TechStack from './pages/TechStack.jsx';
import Internships from './pages/Internships.jsx';
import Certifications from './pages/Certifications.jsx';
import Activities from './pages/Activities.jsx';
import Contact from './pages/Contact.jsx';
import Loader from './components/Loader.jsx';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFade(true);
      setTimeout(() => setLoading(false), 700); // Fade out duration
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {loading && (
        <div className={`fixed inset-0 z-[9999] transition-opacity duration-700 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Loader />
        </div>
      )}
      <div className="flex flex-col min-h-screen bg-base-100 text-base-content transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/techstack" element={<TechStack />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
