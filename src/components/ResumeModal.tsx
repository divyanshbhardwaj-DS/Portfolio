import React, { useEffect } from 'react';
import { 
  X, Download, Printer, Mail, 
  MapPin, Award, Code2, GraduationCap, Briefcase 
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c101a] border border-white/[0.12] rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col">
        
        {/* Sticky Header Actions */}
        <div className="sticky top-0 bg-[#0c101a]/95 backdrop-blur-md px-6 py-4 border-b border-white/[0.08] flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-base sm:text-lg">
              Curriculum Vitae — Divyansh Bhardwaj
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              ATS-Optimized Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Print Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onDownload}
              className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold transition-all flex items-center gap-1.5 text-xs"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-300 border border-white/[0.08] transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body (A4 Clean Minimalist Style) */}
        <div className="p-6 sm:p-10 text-slate-200 text-xs sm:text-sm font-sans space-y-6 bg-[#090d16]">
          
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6">
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-mono text-cyan-400 text-xs sm:text-sm mt-1">
              B.Tech Computer Science & Engineering (Data Science)
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-3 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Ghaziabad / Delhi NCR, India
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.email}
              </span>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline">
                <GithubIcon size={14} />
                github.com/{PERSONAL_INFO.githubUsername}
              </a>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline">
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
              <a href={PERSONAL_INFO.leetcodeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-amber-400 hover:underline">
                <Code2 className="w-3.5 h-3.5" />
                LeetCode (227 Solved)
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-white">ABES Engineering College</div>
                <div className="text-slate-300 text-xs">
                  Bachelor of Technology in Computer Science & Engineering (Specialization: Data Science)
                </div>
              </div>
              <div className="text-xs font-mono text-slate-400 text-right">
                2025 – 2029
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="space-y-1.5 text-xs font-mono">
              <div><strong className="text-white">Languages:</strong> C++, Python, JavaScript (ES6+), TypeScript, SQL, HTML5/CSS3</div>
              <div><strong className="text-white">Frameworks & Web:</strong> React, FastAPI, Tailwind CSS, Node.js, Express, REST APIs, CustomTkinter</div>
              <div><strong className="text-white">Data Science & ML:</strong> Pandas, NumPy, Scikit-Learn, Exploratory Data Analysis, Data Cleaning, Model Pipelines</div>
              <div><strong className="text-white">Developer Tools:</strong> Git, GitHub, Linux/WSL, Playwright, VS Code, Postman, Vite, Jupyter Notebook</div>
              <div><strong className="text-white">Core Fundamentals:</strong> Data Structures & Algorithms, Object-Oriented Design, DBMS, Socket Networking</div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold mb-3 flex items-center gap-1.5">
              <span>Featured Engineering Projects</span>
            </h2>
            <div className="space-y-4">
              {PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white text-sm">{p.title}</span>
                    <span className="font-mono text-[11px] text-slate-400">{p.stack.slice(0, 4).join(', ')}</span>
                  </div>
                  <div className="text-cyan-300 text-[11px] font-mono mb-1">{p.tagline}</div>
                  <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                    {p.highlights.slice(0, 2).map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Job Simulations */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Experience & Enterprise Simulations</span>
            </h2>
            <div className="space-y-3">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold text-white">{exp.role}</span>
                      <span className="text-slate-400 font-mono"> — {exp.organization}</span>
                      <span className="ml-2 text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/[0.04] text-slate-300">
                        {exp.type}
                      </span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 space-y-0.5 mt-1">
                    {exp.description.slice(0, 2).map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Milestones */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Achievements & Competitive Milestones</span>
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
              <li><strong className="text-white">Smart India Hackathon 2026:</strong> Team "semicolon squad" — Built "Idea Setu", an undertrial release navigator pipeline with OCR and rule screening.</li>
              <li><strong className="text-white">LeetCode:</strong> 227+ problems solved (226 C++, 1 JavaScript) spanning Arrays, Strings, Hash Tables, and Binary Search.</li>
              <li><strong className="text-white">CodeChef:</strong> 2★ rated programmer (1449 peak rating, 59 problems solved, 10 rated contests, Bronze badges).</li>
            </ul>
          </div>

        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-[#0c101a]/95 backdrop-blur-md px-6 py-3 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Available for immediate software engineering / data science internships
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-300 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
