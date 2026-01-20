"use client";
import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 text-center text-sm border-t relative z-10 ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
      <p>© 2026 Dilawar Shah. Crafted with precision using Next.js & React.</p>
    </footer>
  );
};

export default Footer;