"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import Backgrounds from './components/Backgrounds';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dilawarshah.dev';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dilawar Shah',
  url: siteUrl,
  jobTitle: 'AI Engineer and Full-Stack Developer',
  email: 'mailto:dilawarextra1122@gmail.com',
  sameAs: [
    'https://github.com/DilawarAIWorks',
    'https://github.com/DilawarShah25',
    'https://www.linkedin.com/in/dilawar-shah-544674238',
  ],
  knowsAbout: [
    'Retrieval-Augmented Generation',
    'RAG knowledge agents',
    'Computer vision',
    'Workflow automation',
    'n8n automation',
    'LangChain',
    'TensorFlow',
    'React and Next.js',
    'Azure AI',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI automation and RAG development',
        description:
          'Custom AI agents, retrieval-augmented generation pipelines, computer vision applications, and full-stack automation workflows.',
      },
    },
  ],
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  
  // Cursor Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [cursorVariant, setCursorVariant] = useState('default');

  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth Cursor Physics
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  const cursorVariants = {
    default: { height: 30, width: 30, opacity: 1, backgroundColor: "transparent", border: "1px solid rgba(20, 184, 166, 0.62)" },
    hover: { height: 58, width: 58, opacity: 1, backgroundColor: darkMode ? "rgba(20, 184, 166, 0.12)" : "rgba(15, 23, 42, 0.06)", border: "0px solid transparent" },
    text: { height: 100, width: 100, opacity: 1, backgroundColor: darkMode ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)", mixBlendMode: "difference" as const }
  };

  const scrollToSection = (section: string) => {
    const id = section.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    
    // UPDATED PATH: Added leading slash '/' for correct public folder access
    link.href = '/assets/dilawarshah_resume.pdf'; 
    
    link.download = 'Dilawar_Shah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className={`relative min-h-screen overflow-hidden transition-colors duration-700 font-sans ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        
        <Backgrounds darkMode={darkMode} />

        {/* Scroll Progress Bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-sky-400 to-amber-300 origin-left z-[10001]" style={{ scaleX }} />

        {/* --- Advanced Custom Cursor --- */}
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full hidden md:flex items-center justify-center mix-blend-difference"
          style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
          animate={cursorVariant}
          variants={cursorVariants}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          <div className="w-1 h-1 bg-white rounded-full absolute" />
        </motion.div>

        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          handleDownloadResume={handleDownloadResume}
          setCursorVariant={setCursorVariant}
        />

        <main>
          <Hero 
            darkMode={darkMode} 
            scrollToSection={scrollToSection} 
            handleDownloadResume={handleDownloadResume}
            setCursorVariant={setCursorVariant}
          />

          <About 
            darkMode={darkMode} 
            setCursorVariant={setCursorVariant} 
          />

          <Projects 
            darkMode={darkMode} 
            setCursorVariant={setCursorVariant} 
          />

          <Skills darkMode={darkMode} />

          <Contact 
            darkMode={darkMode} 
            setCursorVariant={setCursorVariant} 
          />
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </>
  );
};

export default Portfolio;
