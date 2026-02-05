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
    default: { height: 32, width: 32, opacity: 1, backgroundColor: "transparent", border: "2px solid rgba(59, 130, 246, 0.5)" },
    hover: { height: 60, width: 60, opacity: 1, backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)", border: "0px solid transparent" },
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
    // @ts-ignore
    <div className={`relative min-h-screen transition-colors duration-700 font-sans selection:bg-blue-500/30 ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      <Backgrounds darkMode={darkMode} />

      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-[10001]" style={{ scaleX }} />

      {/* --- Advanced Custom Cursor --- */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full hidden md:flex items-center justify-center mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        // @ts-ignore
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

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Portfolio;