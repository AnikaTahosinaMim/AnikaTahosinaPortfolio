'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Icons } from './Icons';
import { triggerConfetti } from '@/utils/confetti';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3.5 shadow-xl shadow-cyan-950/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-white text-lg">
                AT
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase">
                {PORTFOLIO_DATA.personal.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-slate-800/80">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.resume.downloadUrl}
              download={PORTFOLIO_DATA.resume.filename}
              onClick={triggerConfetti}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl border border-slate-700 bg-slate-900/60 text-slate-200 hover:border-cyan-500/50 hover:text-cyan-400 transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <Icons.Download size={14} />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20 hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 text-slate-300 border border-slate-800 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <Icons.Close size={22} /> : <Icons.Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer  jhhghhkg*/}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-800/80 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href={PORTFOLIO_DATA.resume.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-xl border border-slate-700 bg-slate-900 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
            >
              <Icons.Download size={16} />
              <span>View Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg"
            >
              Hire Me Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
