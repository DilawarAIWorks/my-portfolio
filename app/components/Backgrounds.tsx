"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundsProps {
  darkMode: boolean;
}

const Backgrounds: React.FC<BackgroundsProps> = ({ darkMode }) => {
  return (
    <>
      {/* Dark Mode Background: Starry/Grid */}
      <div className={`fixed inset-0 z-0 transition-opacity duration-700 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]"></div>
      </div>

      {/* Light Mode Background: "Fascinating" Auroras */}
      <div className={`fixed inset-0 z-0 transition-opacity duration-700 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
        {/* Soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
        {/* Moving Auroras */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-[100vw] h-[100vw] bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full blur-[100px]"
        />
        {/* Texture overlay for premium feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-soft-light"></div>
      </div>
    </>
  );
};

export default Backgrounds;