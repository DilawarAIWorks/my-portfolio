"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundsProps {
  darkMode: boolean;
}

const Backgrounds: React.FC<BackgroundsProps> = ({ darkMode }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 transition-opacity duration-700 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(20,184,166,0.12)_34%,transparent_48%,rgba(245,158,11,0.08)_72%,transparent_100%)]" />
        <motion.div
          animate={{ x: ['-18%', '12%', '-18%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-18%] top-20 h-24 w-[145%] rotate-[-8deg] bg-[linear-gradient(90deg,transparent,rgba(20,184,166,0.2),rgba(125,211,252,0.1),transparent)] blur-2xl"
        />
        <motion.div
          animate={{ x: ['10%', '-10%', '10%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-28 left-[-12%] h-20 w-[125%] rotate-[7deg] bg-[linear-gradient(90deg,transparent,rgba(250,204,21,0.12),rgba(45,212,191,0.12),transparent)] blur-2xl"
        />
      </div>

      <div className={`absolute inset-0 transition-opacity duration-700 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-[#f8fafc]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.85)_0%,transparent_26%,rgba(20,184,166,0.08)_52%,rgba(245,158,11,0.08)_78%,rgba(255,255,255,0.8)_100%)]" />
        <motion.div
          animate={{ x: ['-12%', '9%', '-12%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-[-10%] h-16 w-[118%] rotate-[-6deg] bg-[linear-gradient(90deg,transparent,rgba(20,184,166,0.18),rgba(14,165,233,0.12),transparent)] blur-xl"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.06)_48%,rgba(2,6,23,0.16)_100%)] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.05)_0%,rgba(2,6,23,0.4)_100%)]" />
    </div>
  );
};

export default Backgrounds;
