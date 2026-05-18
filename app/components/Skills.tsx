"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { skills, Skill } from '../data';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="eyebrow justify-center">Skills</span>
          <h2 className="section-title">The toolkit behind the work.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            AI engineering, automation, frontend development, data systems, and cloud fundamentals in one practical stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillsByCategory).map(([category, catSkills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="premium-panel premium-panel-hover p-5"
            >
              <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-3 dark:border-white/10">
                <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{category}</h3>
                <span className={`rounded-md px-2 py-1 text-xs font-bold ${darkMode ? 'bg-white/[0.06] text-teal-300' : 'bg-teal-50 text-teal-700'}`}>
                  {catSkills.length}
                </span>
              </div>
              <div className="space-y-2">
                {catSkills.map((skill) => (
                  <div key={skill.name} className={`group flex items-center gap-3 rounded-md border px-3 py-2 transition-all ${darkMode ? 'border-white/5 bg-white/[0.03] text-slate-300 hover:border-teal-300/25 hover:bg-teal-300/10' : 'border-slate-200/70 bg-slate-50/80 text-slate-600 hover:border-teal-200 hover:bg-white'}`}>
                    <div className="text-teal-600 transition-transform duration-300 group-hover:scale-110 dark:text-teal-300 [&>svg]:h-4 [&>svg]:w-4">{skill.icon}</div>
                    <span className="text-sm font-bold transition-colors group-hover:text-slate-950 dark:group-hover:text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
