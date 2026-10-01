import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { CodingJourney } from './components/CodingJourney';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { GitHubSection } from './components/GitHubSection';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [viewMode, setViewMode] = useState<'all' | 'recruiter' | 'developer'>('all');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'stats', 'about', 'projects', 'skills', 'coding', 'experience', 'achievements', 'github', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle formatted resume download
  const handleDownloadResume = () => {
    const resumeText = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.githubUrl}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}
LeetCode: ${PERSONAL_INFO.leetcodeUrl} (227 Solved)
CodeChef: ${PERSONAL_INFO.codechefUrl} (2★, 1449 Peak Rating)

## EDUCATION
ABES Engineering College, Ghaziabad (2025–2029)
B.Tech in Computer Science and Engineering (Data Science)

## TECHNICAL SKILLS
- Languages: C++, Python, JavaScript (ES6+), TypeScript, SQL, HTML5/CSS3
- Web & Backend: React, FastAPI, Tailwind CSS, Node.js, Express, REST APIs, CustomTkinter
- Data & AI: Pandas, NumPy, Scikit-Learn, EDA, Machine Learning Pipelines
- Tools: Git, GitHub, Linux/WSL, Playwright, VS Code, Postman, Vite
- Fundamentals: Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Socket Networking

## FEATURED PROJECTS
1. Sentinel — AI-powered autonomous editorial review agent (FastAPI, React, SQLite, LLM)
2. RealTimeChat — Desktop socket chat application with encryption (Python, CustomTkinter, Sockets)
3. Predictive Model — End-to-end machine learning preprocessing & modeling workflow (Python, Scikit-learn)
4. AI Form Filler — Headless PDF parser & automated browser form completion engine (FastAPI, Playwright)
5. Glass Innovations — Enterprise responsive showcase with Framer Motion (React, TypeScript)

## EXPERIENCE & SIMULATIONS
- Thiranex — Data Science Intern (2026)
- Pinnacle Labs — Python Development Intern (2026)
- Walmart Global Tech (via Forage) — Advanced Software Engineering Job Simulation (2026)
- Deloitte Australia (via Forage) — Data Analytics Job Simulation (2026)
- JPMorganChase (via Forage) — Investment Banking Job Simulation (2026)

## HONORS & ACHIEVEMENTS
- Smart India Hackathon 2026: Team "semicolon squad" — Project Idea Setu (Undertrial Release Navigator)
- LeetCode: 227+ problems solved (226 C++, 1 JavaScript)
- CodeChef: 2★ Division Programmer, 1449 Rating, Bronze Badges
`;

    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Divyansh_Bhardwaj_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 relative">
      
      {/* Perspective / Recruiter Banner Mode */}
      {viewMode === 'recruiter' && (
        <div className="fixed bottom-4 right-4 z-40 bg-emerald-950/90 border border-emerald-500/30 text-emerald-200 px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-3 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Recruiter Mode Active</span>
          <button
            onClick={() => setViewMode('all')}
            className="text-[10px] uppercase font-bold text-emerald-400 hover:text-white px-2 py-0.5 rounded bg-emerald-900/60"
          >
            Reset
          </button>
        </div>
      )}

      {viewMode === 'developer' && (
        <div className="fixed bottom-4 right-4 z-40 bg-violet-950/90 border border-violet-500/30 text-violet-200 px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-3 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span>Developer Mode Active</span>
          <button
            onClick={() => setViewMode('all')}
            className="text-[10px] uppercase font-bold text-violet-400 hover:text-white px-2 py-0.5 rounded bg-violet-900/60"
          >
            Reset
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* Main Content Assembly */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onDownloadResume={handleDownloadResume}
        />

        <QuickStats />

        <About />

        <Projects />

        <Skills />

        <CodingJourney />

        <Experience />

        <Achievements />

        <GitHubSection />

        <LearningJourney />

        <Contact
          onDownloadResume={handleDownloadResume}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable / Viewable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onDownload={handleDownloadResume}
      />

    </div>
  );
}

export default App;
