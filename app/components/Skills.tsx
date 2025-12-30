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
    <section id="skills" className="py-24 px-4 z-10 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-slate-500">The tools I use to bring ideas to life</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsByCategory).map(([category, catSkills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800 hover:bg-slate-900' : 'bg-white/60 border-slate-200 hover:bg-white hover:shadow-lg'}`}
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-500 border-b border-slate-200 dark:border-slate-800 pb-2">{category}</h3>
              <div className="space-y-3">
                {catSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 group">
                    <div className="group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300">{skill.icon}</div>
                    <span className="text-sm font-medium group-hover:text-black dark:group-hover:text-white transition-colors">{skill.name}</span>
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