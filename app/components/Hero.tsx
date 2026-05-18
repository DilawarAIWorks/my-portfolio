"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, BrainCircuit, Download, Sparkles, Workflow, ScanSearch } from 'lucide-react';

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
  const serviceKeywords = [
    { label: 'RAG Knowledge Agents', icon: <BrainCircuit className="h-4 w-4" /> },
    { label: 'Computer Vision AI', icon: <ScanSearch className="h-4 w-4" /> },
    { label: 'Workflow Automation', icon: <Workflow className="h-4 w-4" /> },
  ];

  return (
    <section id="home" className="relative z-10 flex min-h-[86svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-28">
        <Image
          src="/assets/resume-automation-pipeline.png"
          alt="AI automation workflow dashboard built by Dilawar Shah"
          width={1200}
          height={760}
          priority
          className="absolute right-[-22rem] top-24 hidden max-w-[980px] rotate-[-4deg] rounded-lg border border-white/20 object-cover shadow-2xl shadow-slate-950/30 md:block"
        />
      </div>

      <div className="section-inner">
        <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={`mb-7 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-bold backdrop-blur-sm ${darkMode ? 'border-teal-300/20 bg-teal-300/10 text-teal-200' : 'border-teal-200 bg-white/75 text-teal-700 shadow-sm'}`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Available for AI engineering and automation projects</span>
        </motion.div>

        <motion.p
          className="mb-4 font-display text-sm font-bold uppercase tracking-[0.3em] text-amber-500 dark:text-amber-300"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.65 }}
        >
          AI Engineer | Full-Stack Developer
        </motion.p>

        <motion.h1 
          className="font-display text-5xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-7xl md:text-8xl"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.75 }}
          onMouseEnter={() => setCursorVariant('text')} onMouseLeave={() => setCursorVariant('default')}
        >
          Dilawar Shah
        </motion.h1>

        <motion.h2 
          className="mt-5 max-w-3xl text-balance text-2xl font-semibold leading-tight text-slate-800 dark:text-slate-100 sm:text-4xl"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.75 }}
        >
          I build clean AI systems that turn messy work into reliable automation.
        </motion.h2>

        <motion.p 
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.65 }}
        >
          Full-stack AI engineer specializing in RAG pipelines, LLM agents, computer vision,
          TensorFlow models, n8n automation, and production-ready web apps for teams that need
          practical intelligence, not buzzwords.
        </motion.p>

        <motion.div 
          className="mt-9 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}
        >
          <motion.button
            whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
            onClick={() => scrollToSection('Projects')}
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-slate-950 px-6 py-4 font-bold text-white shadow-lg shadow-slate-950/20 transition-all hover:bg-teal-600 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200"
          >
            View AI Work
            <ArrowRight className="h-4 w-4" />
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
            onClick={handleDownloadResume}
            className={`focus-ring inline-flex items-center gap-2 rounded-md border px-6 py-4 font-bold transition-all ${darkMode ? 'border-white/10 bg-white/5 text-white hover:border-amber-300/50 hover:bg-white/10' : 'border-slate-200 bg-white/85 text-slate-800 shadow-sm hover:border-amber-300 hover:bg-white'}`}
          >
            <Download className="w-4 h-4" /> Download Resume
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.55 }}
        >
          {serviceKeywords.map((item) => (
            <span
              key={item.label}
              className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold ${darkMode ? 'border-white/10 bg-white/[0.04] text-slate-200' : 'border-slate-200 bg-white/80 text-slate-700'}`}
            >
              <span className="text-teal-500 dark:text-teal-300">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-12 grid max-w-2xl grid-cols-3 gap-3"
        >
          {[
            ['95%', 'CNN accuracy'],
            ['2026', 'Azure AI certified'],
            ['24/7', 'automation mindset'],
          ].map(([value, label]) => (
            <div key={label} className={`rounded-lg border px-4 py-3 ${darkMode ? 'border-white/10 bg-white/[0.035]' : 'border-slate-200 bg-white/70'}`}>
              <div className="font-display text-2xl font-bold text-slate-950 dark:text-white">{value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{label}</div>
            </div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
