"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Sparkles } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
  setCursorVariant: (variant: string) => void;
}

const Contact: React.FC<ContactProps> = ({ darkMode, setCursorVariant }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:dilawarextra1122@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="relative">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">Bring the AI idea, I will help shape the system.</h2>
            <p className="section-copy">
              Need a RAG chatbot, AI automation workflow, computer vision model, or a full-stack AI web app?
              Send the brief and I will reply at{' '}
              <span className="font-bold text-teal-600 dark:text-teal-300">dilawarextra1122@gmail.com</span>.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                'AI agent and RAG pipeline development',
                'Computer vision and TensorFlow model projects',
                'n8n workflow automation and full-stack delivery',
              ].map((item) => (
                <div key={item} className={`flex items-center gap-3 rounded-md border px-4 py-3 text-sm font-bold ${darkMode ? 'border-white/10 bg-white/[0.04]' : 'border-slate-200 bg-white/75'}`}>
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {[
                { icon: <Github />, link: "https://github.com/DilawarAIWorks", label: 'GitHub' },
                { icon: <Linkedin />, link: "https://www.linkedin.com/in/dilawar-shah-544674238", label: 'LinkedIn' },
                { icon: <Mail />, link: "mailto:dilawarextra1122@gmail.com", label: 'Email' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
                  className={`focus-ring grid h-11 w-11 place-items-center rounded-md border transition-all ${darkMode ? 'border-white/10 bg-white/[0.04] text-slate-200 hover:border-teal-300/50 hover:text-teal-200' : 'border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:text-teal-700'}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <form className="premium-panel space-y-4 p-5 sm:p-6" onSubmit={handleSendEmail}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1" htmlFor="contact-name">Your Name</label>
                <input 
                  id="contact-name"
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe" 
                  className={`focus-ring w-full rounded-md border px-4 py-4 transition-all ${darkMode ? 'border-white/10 bg-white/[0.04] placeholder-slate-600' : 'border-slate-200 bg-slate-50 placeholder-slate-400'}`} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1" htmlFor="contact-email">Your Email</label>
                <input 
                  id="contact-email"
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com" 
                  className={`focus-ring w-full rounded-md border px-4 py-4 transition-all ${darkMode ? 'border-white/10 bg-white/[0.04] placeholder-slate-600' : 'border-slate-200 bg-slate-50 placeholder-slate-400'}`} 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1" htmlFor="contact-message">Message</label>
              <textarea 
                id="contact-message"
                required
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell me about your project, data, workflow, and deadline..." 
                className={`focus-ring w-full resize-none rounded-md border px-4 py-4 transition-all ${darkMode ? 'border-white/10 bg-white/[0.04] placeholder-slate-600' : 'border-slate-200 bg-slate-50 placeholder-slate-400'}`} 
              />
            </div>
            <motion.button
              whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
              type="submit"
              className="focus-ring flex w-full items-center justify-center gap-2 rounded-md bg-slate-950 py-4 font-bold text-white shadow-lg shadow-slate-950/20 transition-all hover:bg-teal-600 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200"
            >
              <Send className="w-5 h-5" /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
