"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Languages, BookOpen, Award, ExternalLink, Cpu, Workflow } from 'lucide-react';
import { certifications } from '../data';

interface AboutProps {
  darkMode: boolean;
  setCursorVariant: (variant: string) => void;
}

const About: React.FC<AboutProps> = ({ darkMode, setCursorVariant }) => {
  const strengths = [
    {
      icon: <Cpu className="h-5 w-5" />,
      title: 'AI Product Thinking',
      text: 'I turn model capability into usable software: prompts, retrieval, interfaces, and measurable workflows.',
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: 'Automation Mindset',
      text: 'I design systems that remove repetitive work with clean data flow, OCR, APIs, and orchestration.',
    },
  ];

  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
        >
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">About</span>
            <h2 className="section-title">A practical AI builder with a full-stack edge.</h2>
            <p className="section-copy">
              I help teams build searchable knowledge systems, computer vision tools, workflow automation,
              and AI-powered web products that are clear enough to maintain after the demo.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">
            <div className="space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              <p>
                I am a passionate AI Engineer with a robust background in Deep Learning and Full Stack development. 
                My expertise revolves around creating <strong className="font-semibold text-teal-600 dark:text-teal-300">Retrieval-Augmented Generation (RAG)</strong> systems 
                and <strong className="font-semibold text-teal-600 dark:text-teal-300">Computer Vision</strong> applications that deliver tangible results.
              </p>
              <p>
                Holding a BS in Computer Science from Riphah International University, I have honed my skills through rigorous 
                academic projects and professional certifications. My goal is to leverage AI agents, automation pipelines, and intelligent interfaces to
                speed up decision-making and reduce manual work.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                {strengths.map((item) => (
                  <div key={item.title} className="premium-panel p-5">
                    <div className="mb-4 inline-flex rounded-md bg-teal-500/10 p-2 text-teal-600 dark:text-teal-300">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold ${darkMode ? 'border-white/10 bg-white/[0.04]' : 'border-slate-200 bg-white/80 shadow-sm'}`}>
                  <Languages className="w-4 h-4 text-amber-500" />
                  Pashto | Urdu | English
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <motion.div 
                whileHover={{ y: -4 }}
                className="premium-panel premium-panel-hover p-6"
              >
                <BookOpen className="w-7 h-7 text-teal-500 mb-4" />
                <h3 className="font-display text-xl font-bold mb-1">Education</h3>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">BS Computer Science</p>
                <p className="text-sm text-slate-500">Riphah International University</p>
              </motion.div>
              <motion.div 
                  whileHover={{ y: -4 }}
                  className="premium-panel premium-panel-hover p-6"
              >
                <Award className="w-7 h-7 text-amber-500 mb-4" />
                <h3 className="font-display text-xl font-bold mb-1">Expertise</h3>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">AI Agents & Automation</p>
                <p className="text-sm text-slate-500">Deep Learning Specialist</p>
              </motion.div>
            </div>
          </div>

          <div className="mt-16">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow">Credentials</span>
                <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">Certified and always learning.</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                Azure AI, machine learning, Python, Linux, and automation foundations.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((cert, idx) => (
                <motion.a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
                  className="premium-panel premium-panel-hover flex items-center justify-between p-4"
                >
                  <div>
                    <h4 className="pr-4 text-sm font-bold text-slate-900 dark:text-white">{cert.name}</h4>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{cert.year}</span>
                  </div>
                  {cert.link && <ExternalLink className="w-4 h-4 text-teal-500" />}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
