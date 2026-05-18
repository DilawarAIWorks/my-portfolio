"use client";
import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`relative z-10 border-t px-4 py-8 text-sm ${darkMode ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p>© 2026 Dilawar Shah. AI engineering, automation, and full-stack software.</p>
        <p className="font-semibold text-slate-600 dark:text-slate-300">Built with Next.js, React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
