"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Icons } from "./Icons";
import { triggerConfetti } from "@/utils/confetti";

export const Hero: React.FC = () => {
  const titles = [
    "Full Stack Software Developer",
    "Next.js & React Expert",
    "TypeScript & Node.js Specialist",
    "MongoDB & REST API Engineer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [titles.length]);

  const handleDownloadClick = () => {
    triggerConfetti();
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Icons.Github size={20} />;
      case "linkedin":
        return <Icons.Linkedin size={20} />;
      case "twitter":
        return <Icons.Twitter size={20} />;
      case "facebook":
        return <Icons.Facebook size={20} />;
      case "whatsapp":
        return <Icons.Whatsapp size={20} />;
      default:
        return <Icons.Email size={20} />;
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Spheres */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] glow-cyan rounded-full pointer-events-none blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-1/4 w-[36rem] h-[36rem] glow-purple rounded-full pointer-events-none blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Controls */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide shadow-lg shadow-cyan-500/10 cursor-default"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span>{PORTFOLIO_DATA.personal.availability}</span>
            </motion.div>

            {/* Headline Title */}
            <div className="space-y-3">
              <h2 className="text-sm md:text-base font-mono text-cyan-400 font-medium uppercase tracking-widest">
                Hello, I&apos;m {PORTFOLIO_DATA.personal.name}
              </h2>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none min-h-[5rem] sm:min-h-[6rem]">
                <span className="block">{PORTFOLIO_DATA.personal.title}</span>

                <span className="block mt-2 h-16 sm:h-20 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titles[currentTitleIndex]}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-gradient block"
                    >
                      {titles[currentTitleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-cyan-300/80 font-mono tracking-wide">
                {PORTFOLIO_DATA.personal.secondaryDesignation}
              </p>
            </div>

            {/* Intro Summary */}
            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {PORTFOLIO_DATA.personal.heroSummary}
            </p>

            {/* Tech Stack Animated Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {[
                "Next.js",
                "React.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "MongoDB",
              ].map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: "rgba(6, 182, 212, 0.6)",
                  }}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 shadow-md cursor-pointer transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons: Resume Download & Options */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Direct PDF Download Button with Confetti */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={PORTFOLIO_DATA.resume.downloadUrl}
                download={PORTFOLIO_DATA.resume.filename}
                onClick={handleDownloadClick}
                className="group btn-shimmer relative inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-bold rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-slate-950 shadow-xl shadow-cyan-500/25 transition-all"
              >
                <Icons.Download
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
                <span>Download PDF Resume</span>
              </motion.a>

              {/* Online View Google Doc Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={PORTFOLIO_DATA.resume.googleDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-2xl bg-slate-900/90 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500 hover:bg-slate-800 transition-all shadow-md"
              >
                <Icons.ExternalLink size={18} />
                <span>View Google Doc</span>
              </motion.a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-6 border-t border-slate-800/80">
              <span className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                Connect With Me
              </span>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {PORTFOLIO_DATA.socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl bg-slate-900/90 text-slate-400 border border-slate-800/80 ${social.color} hover:bg-slate-800 transition-all shadow-md group`}
                  >
                    {getSocialIcon(social.icon)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Avatar Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer Pulse Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 blur-2xl opacity-60 animate-pulse-slow" />

              {/* Floating Frame */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-500/40 via-indigo-500/40 to-purple-500/40 border border-cyan-500/40 glass-card shadow-2xl overflow-hidden group"
              >
                <Image
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  fill
                  priority
                  className="object-cover rounded-2xl group-hover:scale-108 transition-transform duration-700"
                />

                {/* Floating Badge 1 */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-cyan-500/40 text-white text-xs font-semibold shadow-xl flex items-center gap-2"
                >
                  <Icons.GraduationCap
                    size={14}
                    className="text-cyan-400 animate-spin-slow"
                  />
                  <span>Running Diploma</span>
                </motion.div>

                {/* Floating Badge 2 */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-indigo-500/40 text-white text-xs font-semibold shadow-xl flex items-center gap-2"
                >
                  <Icons.Check size={14} className="text-emerald-400" />
                  <span>
                    {PORTFOLIO_DATA.personal.projectsCompleted} Projects Built
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
