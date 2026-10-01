import React from 'react';
import { 
  Code2, Terminal, Cpu, 
  Mail, ArrowUp, Sparkles 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070b] border-t border-white/[0.08] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand & Mission */}
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-lg text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs font-mono text-cyan-400 mt-1">
              Building • Learning • Solving
            </p>
            <p className="text-xs text-slate-500 mt-1">
              B.Tech CSE (Data Science) @ ABES Engineering College
            </p>
          </div>

          {/* Social Profiles Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-400 transition-colors"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={PERSONAL_INFO.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-amber-400 transition-colors"
              title="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.codechefUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-orange-400 transition-colors"
              title="CodeChef"
            >
              <Terminal className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.codeforcesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-sky-400 transition-colors"
              title="Codeforces"
            >
              <Cpu className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & tech details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs font-mono text-slate-500">
          <div>
            © 2026 Divyansh Bhardwaj. Built with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with engineering rigor</span>
            <Sparkles className="w-3 h-3 text-cyan-400" />
          </div>
        </div>

      </div>
    </footer>
  );
};
