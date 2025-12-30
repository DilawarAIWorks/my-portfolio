"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Languages, BookOpen, Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

interface AboutProps {
  darkMode: boolean;
  setCursorVariant: (variant: string) => void;
}

const About: React.FC<AboutProps> = ({ darkMode, setCursorVariant }) => {
  return (
    <section id="about" className="py-24 px-4 z-10 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am a passionate AI Engineer with a robust background in Deep Learning and Full Stack development. 
                My expertise revolves around creating <strong className="text-blue-500">Retrieval-Augmented Generation (RAG)</strong> systems 
                and <strong className="text-blue-500">Computer Vision</strong> applications that deliver tangible results.
              </p>
              <p>
                Holding a BS in Computer Science from Riphah International University, I have honed my skills through rigorous 
                academic projects and professional certifications. My goal is to leverage AI to automate workflows and enhance decision-making processes.
              </p>
              <div className="flex items-center gap-4 pt-4">
                  <div className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium ${darkMode ? 'bg-slate-900' : 'bg-white shadow-sm'}`}>
                    <Languages className="w-4 h-4 text-purple-500" />
                    Pashto • Urdu • English
                  </div>
              </div>
            </div>

            {/* Stats / Quick Info */}
            <div className="space-y-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/60 border-slate-200 shadow-lg shadow-blue-500/5'}`}
              >
                <BookOpen className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="font-bold text-xl mb-1">Education</h3>
                <p className="text-sm text-slate-500">BS Computer Science</p>
                <p className="text-xs text-slate-400">Riphah International Univ.</p>
              </motion.div>
              <motion.div 
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl border backdrop-blur-sm ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/60 border-slate-200 shadow-lg shadow-purple-500/5'}`}
              >
                <Award className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-bold text-xl mb-1">Expertise</h3>
                <p className="text-sm text-slate-500">AI Agents & Automation</p>
                <p className="text-xs text-slate-400">Deep Learning Specialist</p>
              </motion.div>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, idx) => (
                <motion.a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${darkMode ? 'bg-slate-900/30 border-slate-800 hover:border-blue-500/50' : 'bg-white/70 border-slate-200 hover:border-blue-400 hover:shadow-md'}`}
                >
                  <div>
                    <h4 className="font-medium pr-4">{cert.name}</h4>
                    <span className="text-xs text-slate-500">{cert.year}</span>
                  </div>
                  {cert.link && <ExternalLink className="w-4 h-4 text-slate-400" />}
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