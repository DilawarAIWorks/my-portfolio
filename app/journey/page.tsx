"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { journeyData } from '../data';
import { 
  ArrowLeft, Calendar, Link as LinkIcon, 
  Github, ExternalLink, Twitter, Hash, 
  Check, Copy, ChevronDown, ChevronUp, Terminal,
  Facebook, Linkedin, Instagram, Youtube
} from 'lucide-react';
import Link from 'next/link';

// --- SUB-COMPONENT: VS Code Style Block ---
const CodeBlock = ({ code, language, filename }: { code: string, language?: string, filename?: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      // Check if code is longer than 180px (approx 8 lines)
      setIsOverflowing(codeRef.current.scrollHeight > 180);
    }
  }, [code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden bg-[#1e1e1e] border border-[#333] shadow-2xl group/code relative font-mono text-sm">
      
      {/* Window Header (VS Code Style) */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#252526] border-b border-[#333]">
        
        {/* Traffic Lights */}
        <div className="flex items-center gap-1.5 w-20">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>

        {/* Filename */}
        <div className="text-slate-400 text-xs flex items-center gap-2">
          {language !== 'text' && <Terminal className="w-3 h-3" />}
          <span className="opacity-90">{filename || (language ? `${language}.snippet` : 'code.txt')}</span>
        </div>

        {/* Copy Button */}
        <div className="w-20 flex justify-end">
          <button 
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400 hover:text-white transition-colors"
          >
            {isCopied ? (
              <>
                <Check className="w-3 h-3 text-green-400" />
                <span className="text-green-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className={`relative transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-none' : 'max-h-48 overflow-hidden'}`}>
        <div className="p-4 overflow-x-auto scrollbar-thin scrollbar-thumb-[#444] scrollbar-track-transparent">
          <pre ref={codeRef} className="leading-relaxed min-w-full">
            <code className={language === 'python' ? 'text-blue-300' : language === 'javascript' ? 'text-yellow-300' : 'text-slate-300'}>
              {code}
            </code>
          </pre>
        </div>

        {/* Fade Overlay */}
        {isOverflowing && !isExpanded && (
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1e1e1e] to-transparent pointer-events-none" />
        )}
      </div>

      {/* Expand/Collapse Toggle */}
      {isOverflowing && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-500 hover:text-slate-300 bg-[#252526] hover:bg-[#2d2d2d] transition-colors border-t border-[#333]"
        >
          {isExpanded ? (
            <><ChevronUp className="w-3 h-3" /> Collapse Code</>
          ) : (
            <><ChevronDown className="w-3 h-3" /> Expand Code</>
          )}
        </button>
      )}
    </div>
  );
};

// --- Main Page Component ---
export default function JourneyPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleNavScroll = (section: string) => {
    if (section === 'Journey') return;
    window.location.href = `/#${section.toLowerCase()}`;
  };

  const emptyFunc = () => {}; 
  
  // Icon Helper Function
  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'github': return <Github className="w-3.5 h-3.5" />;
      case 'linkedin': return <Linkedin className="w-3.5 h-3.5" />;
      case 'facebook': return <Facebook className="w-3.5 h-3.5" />;
      case 'instagram': return <Instagram className="w-3.5 h-3.5" />;
      case 'youtube': return <Youtube className="w-3.5 h-3.5" />;
      case 'twitter': return <Twitter className="w-3.5 h-3.5" />;
      case 'demo': return <ExternalLink className="w-3.5 h-3.5" />;
      default: return <LinkIcon className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Backgrounds */}
      <div className={`fixed inset-0 z-0 transition-opacity duration-700 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1e] to-black"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150"></div>
      </div>
      <div className={`fixed inset-0 z-0 transition-opacity duration-700 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
         <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
      </div>

      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        activeSection="journey"
        scrollToSection={handleNavScroll}
        handleDownloadResume={() => window.open('/assets/dilawarshah_resume.pdf', '_blank')}
        setCursorVariant={emptyFunc}
      />

      <main className="relative z-10 pt-32 pb-24 px-4 max-w-3xl mx-auto">
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              My Journey
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              A timeline of code, milestones, and everything in between.
            </p>
          </motion.div>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-0 space-y-16">
          {journeyData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"></div>
              
              {/* Date */}
              <div className="text-sm font-mono text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider font-semibold">
                {item.date}
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl border transition-all duration-300 bg-white dark:bg-[#111827] border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-none hover:border-blue-500/50 hover:shadow-xl">
                
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border 
                    ${item.category === 'milestone' ? 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800' :
                      item.category === 'project' ? 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800' :
                      'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800'}`}>
                    {item.category}
                  </span>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                )}

                {/* Image */}
                {item.image && (
                  <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-black/40">
                    <img src={item.image} alt={item.imageAlt} className="w-full h-auto object-cover max-h-96 hover:scale-105 transition-transform duration-500" />
                  </div>
                )}

                {/* VS Code Block */}
                {item.codeSnippet && (
                  <CodeBlock 
                    code={item.codeSnippet} 
                    language={item.language} 
                    filename={item.filename} 
                  />
                )}

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-md">
                        <Hash className="w-3 h-3 text-slate-400" /> {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                {item.links && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                    {item.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 group/btn"
                      >
                        {/* Use custom icon from data if present, else fallback to type logic */}
                        {link.icon ? link.icon : getLinkIcon(link.type)}
                        {link.label || 'View Link'}
                        <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}