"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText, Download } from 'lucide-react';
import Link from 'next/link'; // <--- Added import for page navigation

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
  // 'Journey' is in the list, but we will treat it differently in the map function
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Journey', 'Contact'];

  const handleScroll = (item: string) => {
    scrollToSection(item);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b ${darkMode ? 'bg-slate-950/70 border-white/10' : 'bg-white/60 border-black/5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="font-bold text-2xl tracking-tighter cursor-none"
            onMouseEnter={() => setCursorVariant('text')} onMouseLeave={() => setCursorVariant('default')}
          >
            <Link href="/">
              Dilawar<span className="text-blue-500">.</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              // LOGIC: If item is "Journey", make it a Link. Otherwise, make it a Scroll Button.
              if (item === 'Journey') {
                return (
                  <Link 
                    key={item} 
                    href="/journey"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors py-1"
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
                  className={`text-sm font-medium transition-all relative py-1 hover:text-blue-500 ${activeSection === item.toLowerCase() ? 'text-blue-500' : 'text-slate-500 dark:text-slate-400'}`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.span layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
            
            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2" />

            <button
                onClick={handleDownloadResume}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className={`p-2 rounded-full transition-all ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
            className={`md:hidden overflow-hidden border-t ${darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'}`}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                item === 'Journey' ? (
                  <Link
                    key={item}
                    href="/journey"
                    className="block w-full text-left text-lg font-medium hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </Link>
                ) : (
                  <button
                    key={item}
                    onClick={() => handleScroll(item)}
                    className="block w-full text-left text-lg font-medium hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </button>
                )
              ))}
              <button 
                onClick={handleDownloadResume}
                className="flex items-center gap-2 w-full text-left text-lg font-medium hover:text-blue-500 transition-colors"
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