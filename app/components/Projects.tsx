"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data';

interface ProjectsProps {
  darkMode: boolean;
  setCursorVariant: (variant: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode, setCursorVariant }) => {
  return (
    <section id="projects" className={`py-24 px-4 z-10 relative ${darkMode ? 'bg-slate-900/20' : 'bg-slate-50/50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1" />
            <h2 className="text-4xl font-bold text-center">Featured Projects</h2>
            <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
              className={`group relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-slate-950/80 border-slate-800 hover:border-blue-500/30' 
                  : 'bg-white/80 border-slate-200 hover:border-blue-500/30 hover:shadow-blue-500/10'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-slate-900' : 'bg-blue-50'}`}>
                  {project.category === 'ai' ? <Brain className="w-6 h-6 text-purple-500" /> : 
                   project.category === 'ml' ? <Database className="w-6 h-6 text-green-500" /> :
                   <Code className="w-6 h-6 text-blue-500" />}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><Github className="w-5 h-5" /></a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><ExternalLink className="w-5 h-5" /></a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className={`px-3 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-slate-900 text-blue-400 border border-slate-800' : 'bg-slate-100 text-blue-700 border border-blue-100'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;