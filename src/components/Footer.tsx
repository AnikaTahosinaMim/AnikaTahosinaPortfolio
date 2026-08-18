'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Icons } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Icons.Github size={18} />;
      case 'linkedin': return <Icons.Linkedin size={18} />;
      case 'twitter': return <Icons.Twitter size={18} />;
      case 'facebook': return <Icons.Facebook size={18} />;
      case 'whatsapp': return <Icons.Whatsapp size={18} />;
      default: return <Icons.Email size={18} />;
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-slate-950 text-sm">
                AT
              </div>
              <span className="font-bold text-white text-lg">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              {PORTFOLIO_DATA.personal.designation}. Building scalable Next.js applications and Node/MongoDB services.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href={PORTFOLIO_DATA.resume.downloadUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Top Trigger */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <div className="flex items-center gap-2">
              {PORTFOLIO_DATA.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-slate-950 transition-all ml-2"
            >
              <Icons.ArrowUp size={18} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
          <p className="font-mono text-cyan-400/80">Built with Next.js, React, TypeScript & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};
