"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText, Download } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
  scrollToSection: (section: string) => void;
  handleDownloadResume: () => void;
  setCursorVariant: (variant: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  setDarkMode, 
  activeSection, 
  scrollToSection, 
  handleDownloadResume,
  setCursorVariant
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Journey', 'Contact'];

  const handleScroll = (item: string) => {
    scrollToSection(item);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-2xl transition-all duration-300 ${darkMode ? 'bg-slate-950/78 border-white/10' : 'bg-white/78 border-slate-200/80'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="cursor-none font-display text-xl font-bold tracking-normal"
            onMouseEnter={() => setCursorVariant('text')} onMouseLeave={() => setCursorVariant('default')}
          >
            <Link href="/" aria-label="Dilawar Shah home" className="inline-flex items-center gap-2 focus-ring rounded-md">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-slate-950 text-sm text-white dark:bg-white dark:text-slate-950">
                DS
              </span>
              <span>Dilawar<span className="text-teal-500">.</span></span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-1 rounded-lg border p-1 ${darkMode ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-slate-50/70'}`}>
            {navItems.map((item) => {
              if (item === 'Journey') {
                return (
                  <Link 
                    key={item} 
                    href="/journey"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors focus-ring ${activeSection === 'journey' ? 'bg-teal-500 text-white' : 'text-slate-600 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'}`}
                  >
                    {item}
                  </Link>
                );
              }
              
              return (
                <button
                  key={item}
                  onClick={() => handleScroll(item)}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className={`relative rounded-md px-3 py-2 text-sm font-semibold transition-all focus-ring ${activeSection === item.toLowerCase() ? 'text-slate-950 dark:text-white' : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'}`}
                >
                  {activeSection === item.toLowerCase() && (
                    <motion.span layoutId="activeSection" className="absolute inset-0 -z-10 rounded-md bg-white shadow-sm dark:bg-white/10" />
                  )}
                  {item}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">

            <button
                onClick={handleDownloadResume}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                className={`focus-ring flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold transition-colors ${darkMode ? 'border-white/10 text-slate-200 hover:border-teal-300/50 hover:text-teal-200' : 'border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:text-teal-700'}`}
            >
              <FileText className="w-4 h-4" />
              Resume
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className={`focus-ring p-2 rounded-md border transition-all ${darkMode ? 'border-white/10 bg-white/5 text-amber-300 hover:bg-white/10' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}`}
              aria-label="Toggle color theme"
              aria-pressed={darkMode}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="focus-ring rounded-md p-2"
              aria-label="Toggle color theme"
              aria-pressed={darkMode}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus-ring rounded-md p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-t ${darkMode ? 'border-white/10 bg-slate-950/95' : 'border-slate-200 bg-white/95'}`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                item === 'Journey' ? (
                  <Link
                    key={item}
                    href="/journey"
                    className="block w-full rounded-md px-3 py-3 text-left text-base font-semibold transition-colors hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-300"
                  >
                    {item}
                  </Link>
                ) : (
                  <button
                    key={item}
                    onClick={() => handleScroll(item)}
                    className="block w-full rounded-md px-3 py-3 text-left text-base font-semibold transition-colors hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-300"
                  >
                    {item}
                  </button>
                )
              ))}
              <button 
                onClick={handleDownloadResume}
                className="flex w-full items-center gap-2 rounded-md px-3 py-3 text-left text-base font-semibold transition-colors hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-300"
              >
                <Download className="w-5 h-5" /> Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
