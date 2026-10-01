import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2, Terminal, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
  viewMode: 'all' | 'recruiter' | 'developer';
  setViewMode: (mode: 'all' | 'recruiter' | 'developer') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenResume, 
  activeSection, 
  viewMode, 
  setViewMode 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Coding / DSA', href: '#coding', id: 'coding' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'GitHub', href: '#github', id: 'github' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a 
            href="#hero" 
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center p-[1px] shadow-sm group-hover:shadow-cyan-500/25 transition-all">
              <div className="w-full h-full bg-[#0b0f17] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 text-sm">
                  DB
                </span>
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-sm sm:text-base tracking-tight text-white flex items-center gap-2">
                <span>{PERSONAL_INFO.name}</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono hidden md:block">
                Software Dev • Data Science
              </div>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Persona Switcher Quick Shortcut */}
            <div className="hidden xl:flex items-center bg-white/[0.03] p-1 rounded-lg border border-white/[0.06] text-[11px] font-mono">
              <button
                onClick={() => setViewMode('all')}
                className={`px-2 py-1 rounded transition-colors ${viewMode === 'all' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}
                title="Full portfolio view"
              >
                Full
              </button>
              <button
                onClick={() => {
                  setViewMode('recruiter');
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${viewMode === 'recruiter' ? 'bg-emerald-500/20 text-emerald-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}
                title="Shortcut to projects, skills, experience, resume"
              >
                <Briefcase className="w-3 h-3" />
                Recruiter
              </button>
              <button
                onClick={() => {
                  setViewMode('developer');
                  document.querySelector('#coding')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${viewMode === 'developer' ? 'bg-violet-500/20 text-violet-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}
                title="Shortcut to GitHub, LeetCode, CodeChef, architecture"
              >
                <Terminal className="w-3 h-3" />
                Developer
              </button>
            </div>

            {/* Social Icons */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/[0.05] transition-all"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/[0.05] transition-all"
            >
              <LinkedinIcon size={16} />
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400/60 hover:text-white transition-all text-xs font-medium group shadow-sm hover:shadow-cyan-500/20"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs"
              aria-label="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:bg-white/[0.05] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0e17]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 pt-3 pb-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-xs text-slate-400">
              <span>Quick Navigation</span>
              <div className="flex gap-1 font-mono text-[11px]">
                <button
                  onClick={() => { setViewMode('recruiter'); setMobileMenuOpen(false); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300"
                >
                  Recruiter
                </button>
                <button
                  onClick={() => { setViewMode('developer'); setMobileMenuOpen(false); document.querySelector('#coding')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300"
                >
                  Dev
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-cyan-400 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-600 text-xs font-mono">#</span>
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-white/[0.06] flex items-center justify-around">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400"
              >
                <GithubIcon size={14} /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400"
              >
                <LinkedinIcon size={14} /> LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-400"
              >
                <Code2 className="w-4 h-4" /> LeetCode
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
