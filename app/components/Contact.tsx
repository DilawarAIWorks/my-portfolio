"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

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
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`p-8 md:p-12 rounded-[2rem] border overflow-hidden relative ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-2xl shadow-blue-500/10'}`}
        >
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-slate-500">
              Ready to start a project? Send me a message directly at <br/>
              <span className="text-blue-500 font-semibold selection:bg-purple-500 selection:text-white">dilawarextra1122@gmail.com</span>
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12 relative z-10">
             {[
               { icon: <Github />, link: "https://github.com/DilawarAIWorks" },
               { icon: <Linkedin />, link: "https://www.linkedin.com/in/dilawar-shah-544674238" },
               { icon: <Mail />, link: "mailto:dilawarextra1122@gmail.com" }
             ].map((social, i) => (
               <motion.a
                 key={i}
                 href={social.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ y: -5 }}
                 onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
                 className={`p-4 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900 border-slate-800 hover:bg-blue-600 hover:border-blue-500 hover:text-white' : 'bg-slate-50 border-slate-200 hover:bg-blue-600 hover:text-white hover:shadow-lg'}`}
               >
                 {social.icon}
               </motion.a>
             ))}
          </div>

          <form className="space-y-4 relative z-10" onSubmit={handleSendEmail}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe" 
                  className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800 placeholder-slate-600' : 'bg-slate-50 border-slate-200 placeholder-slate-400'}`} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Your Email</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com" 
                  className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800 placeholder-slate-600' : 'bg-slate-50 border-slate-200 placeholder-slate-400'}`} 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Message</label>
              <textarea 
                required
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell me about your project..." 
                className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800 placeholder-slate-600' : 'bg-slate-50 border-slate-200 placeholder-slate-400'}`} 
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow flex items-center justify-center gap-2"
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