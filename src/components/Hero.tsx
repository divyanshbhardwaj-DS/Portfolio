import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Download, Code2, 
  Terminal, Sparkles, Cpu, ChevronDown, CheckCircle2, Copy 
} from 'lucide-react';
import { PERSONAL_INFO, INITIAL_STATS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onDownloadResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glow Orbs & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-violet-600/15 to-transparent rounded-full blur-[110px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs text-slate-200 mb-6 backdrop-blur-md shadow-lg shadow-emerald-500/5 hover:border-emerald-500/50 transition-all">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-emerald-400 font-medium">{PERSONAL_INFO.status}</span>
        </div>

        {/* Small Intro Greeting */}
        <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium mb-3 tracking-wide">
          Hi, I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
        </p>

        {/* Large Animated Heading */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-6 leading-[1.1]">
          I build software that{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 glow-text-cyan">
            solves real problems.
          </span>
        </h1>

        {/* Rotating Identity Tagline */}
        <div className="h-8 mb-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-slate-300 bg-white/[0.04] px-4 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-sm transition-all duration-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-300 font-medium">Focus:</span>
            <span className="transition-opacity duration-300 text-slate-100">
              {PERSONAL_INFO.taglines[currentRoleIndex]}
            </span>
          </div>
        </div>

        {/* Supporting Bio Paragraph */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
          B.Tech CSE (Data Science) student focused on <span className="text-slate-200 font-medium">Software Development</span>, <span className="text-slate-200 font-medium">Data Science</span>, <span className="text-slate-200 font-medium">Frontend Engineering</span> and <span className="text-slate-200 font-medium">Problem Solving</span>.
        </p>

        {/* Primary and Secondary Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center gap-2 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-sm border border-white/10 hover:border-cyan-500/40 transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5"
          >
            <span>View Resume</span>
          </button>

          <button
            onClick={onDownloadResume}
            className="px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-sm border border-white/10 transition-all duration-200 flex items-center gap-2"
            title="Download PDF Resume"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Download</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="px-3.5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-sm border border-white/10 transition-all flex items-center gap-1.5"
            title="Copy email address"
          >
            {emailCopied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-emerald-400 font-mono">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono hidden md:inline">divyanshbhardwaj.dev</span>
              </>
            )}
          </button>
        </div>

        {/* Social Profile Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono text-slate-400 mb-12">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
          >
            <GithubIcon size={14} />
            <span>GitHub ({INITIAL_STATS.githubRepos})</span>
          </a>

          <a
            href={PERSONAL_INFO.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/[0.06] hover:border-amber-500/40 hover:text-amber-300 transition-all"
          >
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            <span>LeetCode ({INITIAL_STATS.leetcodeSolved})</span>
          </a>

          <a
            href={PERSONAL_INFO.codechefUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/[0.06] hover:border-orange-500/40 hover:text-orange-300 transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-orange-400" />
            <span>CodeChef ({INITIAL_STATS.codechefStars} • 1449)</span>
          </a>

          <a
            href={PERSONAL_INFO.codeforcesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/[0.06] hover:border-sky-500/40 hover:text-sky-300 transition-all"
          >
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>Codeforces</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/[0.06] hover:border-blue-500/40 hover:text-blue-300 transition-all"
          >
            <LinkedinIcon size={14} className="text-blue-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center">
          <a
            href="#stats"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex flex-col items-center text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <span>EXPLORE PROFILE</span>
            <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
