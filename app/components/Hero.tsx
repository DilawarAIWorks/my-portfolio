"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  scrollToSection: (section: string) => void;
  handleDownloadResume: () => void;
  setCursorVariant: (variant: string) => void;
}

const Hero: React.FC<HeroProps> = ({ 
  darkMode, 
  scrollToSection, 
  handleDownloadResume,
  setCursorVariant 
}) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden z-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border backdrop-blur-sm ${darkMode ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-white/60 text-blue-600 border-blue-200 shadow-sm'}`}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold">Available for Hire</span>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          onMouseEnter={() => setCursorVariant('text')} onMouseLeave={() => setCursorVariant('default')}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">Dilawar Shah</span>
        </motion.h1>

        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 text-slate-500 dark:text-slate-400"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
        >
          Building the <span className="font-semibold text-slate-800 dark:text-slate-200">AI-Powered</span> Future
        </motion.h2>

        <motion.p 
          className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        >
          Specialized in RAG Pipelines, Computer Vision, and Automation. 
          I transform complex problems into intelligent, scalable software solutions.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
            onClick={() => scrollToSection('Projects')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all"
          >
            View Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
            onClick={handleDownloadResume}
            className={`px-8 py-4 rounded-xl font-semibold border flex items-center gap-2 transition-all ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'bg-white/80 border-slate-200 hover:bg-white shadow-sm'}`}
          >
            <Download className="w-4 h-4" /> Download Resume
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;