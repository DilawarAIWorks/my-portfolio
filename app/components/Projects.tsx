"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code, Github, ExternalLink, ArrowUpRight, Layers3 } from 'lucide-react';
import { projects } from '../data';

interface ProjectsProps {
  darkMode: boolean;
  setCursorVariant: (variant: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode, setCursorVariant }) => {
  const getProjectIcon = (category: string) => {
    if (category === 'ai') return <Brain className="w-5 h-5" />;
    if (category === 'ml') return <Database className="w-5 h-5" />;
    return <Code className="w-5 h-5" />;
  };

  return (
    <section id="projects" className={`section-shell ${darkMode ? 'bg-slate-950/30' : 'bg-white/40'}`}>
      <div className="section-inner">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2 className="section-title">AI projects built for real workflows.</h2>
          </div>
          <p className="section-copy md:ml-auto md:mt-0">
            A focused mix of RAG systems, computer vision models, automation tools,
            and full-stack prototypes that show how I solve practical AI problems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
              className="premium-panel premium-panel-hover group relative flex min-h-[360px] flex-col overflow-hidden p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 via-sky-400 to-amber-300 opacity-80" />
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`grid h-11 w-11 place-items-center rounded-md border ${darkMode ? 'border-white/10 bg-white/[0.04] text-teal-300' : 'border-slate-200 bg-slate-50 text-teal-600'}`}>
                    {getProjectIcon(project.category)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{project.date}</span>
                    <p className="text-sm font-semibold capitalize text-teal-600 dark:text-teal-300">{project.category} project</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="focus-ring rounded-md p-2 text-slate-500 transition-colors hover:bg-teal-500/10 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} demo`}
                      className="focus-ring rounded-md p-2 text-slate-500 transition-colors hover:bg-amber-500/10 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="font-display text-2xl font-bold leading-tight text-slate-950 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-300">{project.title}</h3>
              <p className="mt-4 flex-grow text-base leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className={`rounded-md border px-2.5 py-1 text-xs font-bold ${darkMode ? 'border-white/10 bg-white/[0.04] text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-600'}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-white/10">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                  <Layers3 className="h-4 w-4" />
                  Case study
                </span>
                <ArrowUpRight className="h-5 w-5 text-teal-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
