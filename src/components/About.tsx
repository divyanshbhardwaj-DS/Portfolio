import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Hammer, Trophy, 
  Briefcase, Rocket, Sparkles, CheckCircle2, MapPin, Calendar 
} from 'lucide-react';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      id: 'learn',
      title: 'Learn',
      icon: BookOpen,
      badge: 'Core CS & Theory',
      description: 'Digging deep into Data Structures, Object-Oriented Design, Operating Systems, Machine Learning algorithms, and modern frontend/backend frameworks through academic rigor and documentation.',
      takeaways: ['Data Structures & C++ Fundamentals', 'Statistical Machine Learning Mathematics', 'Clean Code Architecture']
    },
    {
      id: 'build',
      title: 'Build',
      icon: Hammer,
      badge: 'End-to-End Projects',
      description: 'Transforming theoretical insights into working software — from AI editorial agents with FastAPI and SQLite to multi-threaded Python desktop socket applications and full-stack web platforms.',
      takeaways: ['Sentinel AI Editorial Agent', 'RealTimeChat Desktop Sockets', 'Predictive Modeling Pipeline']
    },
    {
      id: 'compete',
      title: 'Compete',
      icon: Trophy,
      badge: 'DSA & Hackathons',
      description: 'Testing algorithmic speed, memory constraints, and teamwork. Solved 227+ LeetCode problems, reached CodeChef 2★ (1449 rating), and built automated legal aid workflows in Smart India Hackathon 2026.',
      takeaways: ['227 LeetCode (226 C++, 1 JS)', 'CodeChef 2★ (1449 rating, 10 contests)', 'Smart India Hackathon 2026 (Idea Setu)']
    },
    {
      id: 'intern',
      title: 'Intern',
      icon: Briefcase,
      badge: 'Industry Practice',
      description: 'Applying skills under professional guidance through Data Science and Python development internships, complemented by enterprise software engineering simulations with Walmart, Deloitte, and JPMorganChase.',
      takeaways: ['Thiranex Data Science Internship', 'Pinnacle Labs Python Internship', 'Forage Enterprise Simulations']
    },
    {
      id: 'ship',
      title: 'Ship',
      icon: Rocket,
      badge: 'Continuous Delivery',
      description: 'Writing maintainable code, publishing open-source repositories to GitHub, deploying responsive web apps with high Lighthouse scores, and sharing development milestones in public.',
      takeaways: ['25+ Public Repositories', 'Clean Documentation & Case Studies', 'Production Web Deployments']
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Philosophy & Background</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Engineering with Purpose & Curiosity
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Combining computer science fundamentals, algorithmic problem-solving, and practical full-stack execution.
          </p>
        </div>

        {/* Top Grid: Bio + Academic Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2">
                <span>Who is Divyansh?</span>
              </h3>
              
              <p className="mb-4">
                I'm <strong className="text-white font-semibold">Divyansh Bhardwaj</strong>, a B.Tech Computer Science and Engineering student specializing in Data Science at ABES Engineering College (2025–2029). I focus on bridging algorithmic problem-solving with dependable software engineering.
              </p>
              
              <p className="mb-4 text-slate-300">
                My development work spans <span className="text-cyan-300 font-mono">React</span>, <span className="text-cyan-300 font-mono">FastAPI</span>, <span className="text-cyan-300 font-mono">Python</span>, <span className="text-cyan-300 font-mono">C++</span>, data analysis, and machine learning pipelines. Whether developing an autonomous editorial agent or building low-latency desktop socket chat servers, I treat software engineering as an iterative craft.
              </p>
              
              <p className="text-slate-400 text-sm">
                Outside coursework and personal projects, I spend significant time practicing DSA on LeetCode and CodeChef, competing in hackathons with my team, and writing clean, reproducible code.
              </p>
            </div>
          </div>

          {/* Education & College Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center mb-5 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <span className="text-xs font-mono uppercase text-violet-400 tracking-wider">
                  Formal Education
                </span>
                
                <h4 className="font-display font-bold text-xl text-white mt-1 mb-2">
                  B.Tech in Computer Science & Engineering
                </h4>
                
                <div className="inline-block px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
                  Specialization: Data Science
                </div>

                <div className="space-y-2 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                    <span>ABES Engineering College, Ghaziabad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>Graduation: 2025 – 2029</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>Delhi NCR, India</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono text-slate-400">
                  Relevant Coursework: Data Structures, Algorithms, DBMS, OOP, Operating Systems, Machine Learning Foundations, Statistics & Linear Algebra.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Developer Workflow: Learn → Build → Compete → Intern → Ship */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-widest">
                Interactive Engineering Cycle
              </span>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                Learn → Build → Compete → Intern → Ship
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Click a step to view details
            </span>
          </div>

          {/* Stepper Buttons Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-cyan-500/20 to-violet-500/10 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                  </div>
                  <div className={`font-display font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Card */}
          <div className="bg-[#0b0f19] p-5 sm:p-6 rounded-xl border border-white/[0.06] transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white font-display">
                  Phase {activeStep + 1}: {workflowSteps[activeStep].title}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {workflowSteps[activeStep].badge}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {workflowSteps[activeStep].description}
            </p>

            <div className="pt-3 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-slate-400 block mb-2">Key Milestones & Evidence:</span>
              <div className="flex flex-wrap gap-2">
                {workflowSteps[activeStep].takeaways.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-200 border border-white/[0.08]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
