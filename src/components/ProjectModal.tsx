import React, { useEffect } from 'react';
import { 
  X, ExternalLink, Cpu, CheckCircle2, 
  AlertTriangle, Layers, ArrowRight, ShieldCheck 
} from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c101a] border border-white/[0.12] rounded-2xl shadow-2xl shadow-cyan-950/30 overflow-y-auto z-10 flex flex-col">
        
        {/* Top Sticky Header */}
        <div className="sticky top-0 bg-[#0c101a]/95 backdrop-blur-md px-6 py-4 border-b border-white/[0.08] flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
              title="View GitHub Repository"
            >
              <GithubIcon size={16} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-300 border border-white/[0.08] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 text-slate-300 text-sm">
          
          {/* Subtitle & Tagline */}
          <div className="bg-gradient-to-r from-cyan-950/30 via-violet-950/20 to-transparent p-4 rounded-xl border border-cyan-500/20">
            <p className="text-base text-cyan-200 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Visual System Architecture Diagram */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>System Architecture & Pipeline</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Interactive Blueprint</span>
            </div>
            
            <p className="text-xs text-slate-400 mb-4">
              {caseStudy.architectureDescription}
            </p>

            {/* Architecture Node Flowchart */}
            <div className="p-5 rounded-xl bg-[#080b13] border border-white/[0.08] relative overflow-x-auto">
              <div className="flex items-center gap-2 min-w-[620px] justify-between py-2">
                {caseStudy.architectureNodes.map((node, i) => (
                  <React.Fragment key={node.id}>
                    <div className="flex-1 p-3 rounded-lg border border-white/[0.1] bg-slate-900/80 text-center shadow-sm relative group hover:border-cyan-500/50 transition-colors">
                      <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-1">
                        {node.type}
                      </div>
                      <div className="font-display font-semibold text-xs text-white">
                        {node.label}
                      </div>
                      {node.subtext && (
                        <div className="text-[10px] font-mono text-cyan-400 mt-1">
                          {node.subtext}
                        </div>
                      )}
                    </div>
                    {i < caseStudy.architectureNodes.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-cyan-500/60 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Data Flow Steps List */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">Execution Steps:</span>
                {caseStudy.architectureFlow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="font-mono text-cyan-400 text-[10px] mt-0.5">[{idx + 1}]</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Stack Categories */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
              <Cpu className="w-4 h-4" />
              <span>Technology Stack & Modules</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.technologyDetails.map((cat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs font-mono font-semibold text-slate-200 mb-2">
                    {cat.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges & Implementation Decisions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
                Key Engineering Challenges
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {caseStudy.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                Implementation Choices
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {caseStudy.implementation.map((imp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Measurable Results */}
          <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Measurable Results & Outcomes</span>
            </div>
            <div className="space-y-2">
              {caseStudy.results.map((res, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#0c101a]/95 backdrop-blur-md px-6 py-3 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Source repository available on GitHub
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={14} />
              <span>Inspect Code</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
