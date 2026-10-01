import type { Project, SkillCategory, ExperienceItem, AchievementItem, CertificateItem, LiveStats } from '../types';

export const PERSONAL_INFO = {
  name: 'Divyansh Bhardwaj',
  role: 'Software Developer & Data Science Student',
  taglines: [
    'Building software. Solving problems. Learning every day.',
    'B.Tech CSE (Data Science) @ ABES Engineering College',
    'Full-Stack Developer & Algorithmic Problem Solver',
    'Bridging Machine Learning & Modern Web Systems',
  ],
  bio: "I'm Divyansh Bhardwaj, a B.Tech CSE student specializing in Data Science at ABES Engineering College (2025–2029). I enjoy turning ideas into working software, solving algorithmic problems, and exploring data-driven applications. My development journey spans frontend development, Python, C++, JavaScript, React, data analysis, machine learning and AI-powered systems. Outside projects, I actively practice DSA and competitive programming while participating in coding contests and technical opportunities.",
  email: 'divyanshbhardwaj.dev@gmail.com',
  githubUsername: 'divyanshbhardwaj-DS',
  githubUrl: 'https://github.com/divyanshbhardwaj-DS',
  linkedinUrl: 'https://www.linkedin.com/in/divyansh-bhardwaj-01b0b52bb/',
  leetcodeUsername: 'Divydevelops',
  leetcodeUrl: 'https://leetcode.com/Divydevelops/',
  codechefUsername: 'cse_ds_0257',
  codechefUrl: 'https://www.codechef.com/users/cse_ds_0257',
  codeforcesUsername: 'divysharma8547',
  codeforcesUrl: 'https://codeforces.com/profile/divysharma8547',
  status: 'Open to internships & engineering opportunities',
  location: 'Ghaziabad / Delhi NCR, India',
};

export const INITIAL_STATS: LiveStats = {
  githubRepos: 25,
  leetcodeSolved: 227,
  codechefSolved: 59,
  codechefRating: 1449,
  codechefStars: '2★',
  codechefContests: 10,
  codeforcesSolved: 3,
  lastUpdated: 'October 2026',
  isLive: false,
};

export const PROJECTS: Project[] = [
  {
    id: 'sentinel',
    title: 'Sentinel',
    tagline: 'AI-Powered Autonomous Editorial Agent with Tri-State Decision Engine',
    category: 'AI / ML',
    stack: ['FastAPI', 'React', 'Tailwind CSS', 'SQLite', 'LLM Agents', 'Python'],
    githubUrl: 'https://github.com/divyanshbhardwaj-DS/Sentinel',
    featured: true,
    highlights: [
      'Automated editorial workflow engine with PUBLISH, REJECT, and DEFER states',
      'Semantic duplicate detection using cosine similarity across previous news digests',
      'Persistent SQLite audit log with decision telemetry and content metrics',
      'Modern glassmorphic operator dashboard built with React and Tailwind CSS'
    ],
    caseStudy: {
      problem: 'Content editorial teams spend dozens of hours reviewing high-volume submissions, manual plagiarism verification, and filtering duplicate press releases.',
      solution: 'Built Sentinel, an autonomous editorial review agent that parses inbound articles, verifies content integrity, identifies duplicates, and issues structured decision verdicts with explanations.',
      architectureDescription: 'Inbound articles pass through FastAPI validation into an evaluation pipeline where semantic embeddings cross-check against SQLite memory before an LLM classifier issues tri-state decisions.',
      architectureNodes: [
        { id: 'inbound', label: 'Inbound Content Stream', subtext: 'RSS / Webhook / Manual', type: 'input' },
        { id: 'preproc', label: 'FastAPI Validation & Normalizer', subtext: 'Tokenization & Regex', type: 'process' },
        { id: 'memory', label: 'SQLite Memory & Embeddings', subtext: 'Deduplication Cache', type: 'storage' },
        { id: 'agent', label: 'Autonomous LLM Agent', subtext: 'Publish / Reject / Defer', type: 'process' },
        { id: 'dashboard', label: 'React Operator Dashboard', subtext: 'Live Review & Audit Trail', type: 'output' }
      ],
      architectureFlow: [
        'Content submitted via API or UI',
        'Payload normalized and checked against historical SQLite hashes',
        'LLM evaluates factual consistency, style guidelines, and tone',
        'State generated: PUBLISH, REJECT, or DEFER (requires human verification)',
        'Live dashboard streams telemetry and audit logs'
      ],
      technologyDetails: [
        { category: 'Backend Engine', tools: ['Python 3.11', 'FastAPI', 'Pydantic v2', 'Uvicorn'] },
        { category: 'AI & Inference', tools: ['OpenAI / LangChain Agents', 'Vector Cosine Matching'] },
        { category: 'Storage & Audit', tools: ['SQLite', 'SQLAlchemy ORM', 'Session Indexing'] },
        { category: 'Frontend Interface', tools: ['React', 'Tailwind CSS', 'Lucide Icons', 'Vite'] }
      ],
      challenges: [
        'Preventing false rejections on breaking updates to previously covered stories',
        'Balancing fast API response times with synchronous LLM reasoning passes',
        'Designing a reliable DEFER fallback state for low-confidence classifications'
      ],
      implementation: [
        'Implemented two-phase verification: lightweight fast hash comparison followed by deep semantic scoring',
        'Built asynchronous background task queue for parsing heavy payloads without blocking client connections',
        'Created clear confidence thresholds: >0.85 auto-publish, <0.40 reject, middle range flagged for editorial deferral'
      ],
      results: [
        'Reduced manual editorial triage review time by ~70% in benchmark tests',
        'Achieved sub-1.2s response time for initial validation and deduplication checking',
        'Maintained zero false-positive rejections across a test suite of 200 synthetic editorial drafts'
      ]
    }
  },
  {
    id: 'realtime-chat',
    title: 'RealTimeChat',
    tagline: 'Multi-Threaded Desktop Chat Application with Socket Architecture',
    category: 'Systems & Python',
    stack: ['Python', 'CustomTkinter', 'Socket Programming', 'Threading', 'SQLite', 'Hashlib'],
    githubUrl: 'https://github.com/divyanshbhardwaj-DS/RealTimeChat',
    featured: true,
    highlights: [
      'Low-latency bidirectional TCP socket server handling concurrent client threads',
      'Bespoke desktop user interface styled with CustomTkinter modern dark aesthetics',
      'Encrypted password storage and persistent SQLite message history',
      'Live active user list with broadcast notification on join/leave events'
    ],
    caseStudy: {
      problem: 'Many intro socket chat demos are bare-metal CLI scripts that crash on disconnection, leak thread resources, or lack authentication and persistence.',
      solution: 'Engineered a robust multi-threaded client-server desktop application in Python with complete credential hashing, persistent SQLite chat history, and modern dark-mode GUI.',
      architectureDescription: 'Dedicated TCP server daemon spawns worker threads per socket connection, synchronizing state with a thread-safe SQLite database while broadcasting message packets to active clients.',
      architectureNodes: [
        { id: 'client_ui', label: 'CustomTkinter Desktop UI', subtext: 'Client Thread & UI Event Loop', type: 'input' },
        { id: 'network', label: 'TCP Socket Protocol', subtext: 'JSON Packets & Framing', type: 'process' },
        { id: 'server', label: 'Multi-Threaded Server Daemon', subtext: 'Client Connection Pool', type: 'process' },
        { id: 'db', label: 'Thread-Safe SQLite Store', subtext: 'Users, Auth Salts & Chat Logs', type: 'storage' },
        { id: 'broadcast', label: 'Active Broadcast Fanout', subtext: 'Real-time peer delivery', type: 'output' }
      ],
      architectureFlow: [
        'Client authenticates via salted SHA-256 handshake',
        'Server accepts connection and assigns dedicated worker thread',
        'Client sends message framed with length-prefix header',
        'Server records to SQLite and broadcasts packet to all connected sockets',
        'UI updates asynchronously via thread-safe message queues'
      ],
      technologyDetails: [
        { category: 'Networking', tools: ['Python socket library', 'TCP/IP', 'Custom Framing Protocol'] },
        { category: 'Concurrency', tools: ['threading module', 'Daemon threads', 'Queue locks'] },
        { category: 'User Interface', tools: ['CustomTkinter', 'Pillow (PIL)', 'Dark Mode Theme'] },
        { category: 'Security & DB', tools: ['hashlib (SHA-256 + Salt)', 'SQLite3 with row locks'] }
      ],
      challenges: [
        'Preventing Tkinter GUI freezing when waiting for incoming socket data',
        'Handling unexpected client disconnects without breaking server broadcast loops',
        'Ensuring thread-safe database writes during rapid message bursts'
      ],
      implementation: [
        'Separated socket listening into a dedicated background daemon thread communicating with the UI via Queue',
        'Wrapped client handler loops in robust try-except-finally blocks with graceful socket cleanup',
        'Used parameterized queries and synchronized database cursor transactions'
      ],
      results: [
        'Successfully tested with 15+ concurrent local and LAN client sessions with zero packet drops',
        'Maintained instant local sub-10ms delivery latency',
        'Graceful reconnection recovery on network interface blips'
      ]
    }
  },
  {
    id: 'predictive-model',
    title: 'Predictive Model',
    tagline: 'End-to-End Machine Learning Pipeline: Preprocessing to Model Evaluation',
    category: 'AI / ML',
    stack: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    githubUrl: 'https://github.com/divyanshbhardwaj-DS/Predictive_Model',
    featured: true,
    highlights: [
      'Comprehensive Exploratory Data Analysis (EDA) with statistical distribution charts',
      'Robust feature engineering: missing value imputation, outlier detection, and scaling',
      'Comparative benchmarking across Logistic Regression, Random Forest, and Gradient Boosting',
      'Model interpretability via feature importance rankings and confusion matrix visualization'
    ],
    caseStudy: {
      problem: 'Raw tabular datasets frequently suffer from skewed distributions, multicollinearity, and missing values, causing models to overfit or underperform.',
      solution: 'Constructed an end-to-end reproducible machine learning workflow covering statistical profiling, data transformation, pipeline building, hyperparameter tuning, and cross-validation.',
      architectureDescription: 'Structured ML pipeline transforming raw features through standard scaling and one-hot encoding, feeding optimized classifiers with stratified K-fold cross validation.',
      architectureNodes: [
        { id: 'raw_data', label: 'Raw Tabular Dataset', subtext: 'CSV Ingestion & Schema Check', type: 'input' },
        { id: 'eda', label: 'Statistical EDA & Cleaning', subtext: 'Missing values & Outlier fences', type: 'process' },
        { id: 'transform', label: 'Feature Pipeline', subtext: 'StandardScaler & OneHotEncoder', type: 'process' },
        { id: 'models', label: 'Ensemble Classifiers', subtext: 'RandomForest & GradientBoosting', type: 'process' },
        { id: 'metrics', label: 'Evaluation & ROC-AUC', subtext: 'Cross-validated metrics & report', type: 'output' }
      ],
      architectureFlow: [
        'Exploratory data analysis inspecting kurtosis, skewness, and inter-feature correlations',
        'Imputation and categorical encoding using Scikit-Learn ColumnTransformer',
        'Stratified 5-Fold split to preserve target class balance',
        'Grid search hyperparameter tuning across decision trees and ensemble estimators',
        'Generated ROC-AUC curves, precision-recall tradeoffs, and feature contribution plots'
      ],
      technologyDetails: [
        { category: 'Data Analysis', tools: ['Pandas', 'NumPy', 'SciPy Stats'] },
        { category: 'Visualization', tools: ['Matplotlib', 'Seaborn'] },
        { category: 'Modeling', tools: ['Scikit-Learn (Pipeline, GridSearchCV, Ensemble)'] },
        { category: 'Environment', tools: ['Jupyter Notebook', 'Virtualenv', 'Git LFS'] }
      ],
      challenges: [
        'Handling class imbalance without introducing synthetic overfitting',
        'Preventing data leakage between train and validation splits in scaler transforms',
        'Optimizing grid search runtime across heavy tree ensembles'
      ],
      implementation: [
        'Encapsulated all scaling and imputing within Scikit-Learn Pipeline objects to prevent data leakage',
        'Applied StratifiedKFold and balanced class weights to penalize minority classification errors',
        'Extracted feature importance weights to explain top predictive drivers to non-technical stakeholders'
      ],
      results: [
        'Achieved 89.4% ROC-AUC score on held-out test data',
        'Completely leak-free pipeline guaranteed via Scikit-Learn Pipeline encapsulation',
        'Clean reproducible Jupyter notebooks with step-by-step markdown annotations'
      ]
    }
  },
  {
    id: 'ai-form-filler',
    title: 'AI Form Filler',
    tagline: 'Autonomous PDF Form Parsing & Headless Browser Automation Engine',
    category: 'Full Stack',
    stack: ['FastAPI', 'React', 'Tailwind CSS', 'Playwright', 'pdfplumber', 'Python'],
    githubUrl: 'https://github.com/divyanshbhardwaj-DS/AI_FORM_FILLER',
    featured: true,
    highlights: [
      'Automated extraction of structured key-value entities from scanned and text PDFs',
      'Headless browser session automation using Playwright to populate web forms',
      'Session-based API architecture with real-time progress callbacks',
      'Clean interactive review interface allowing human verification before submission'
    ],
    caseStudy: {
      problem: 'Employees and students manually re-type thousands of fields from legacy PDF documents into internal web portals, creating bottlenecks and human error.',
      solution: 'Created an intelligent web automation platform that extracts data from PDF documents using Python OCR/parsers, maps fields to target web forms, and executes headless browser filling via Playwright.',
      architectureDescription: 'Upload PDF to FastAPI backend -> Entity parser extracts key attributes -> Playwright automates target browser DOM -> React frontend displays live execution status.',
      architectureNodes: [
        { id: 'pdf_in', label: 'PDF Document Upload', subtext: 'Client File Drag & Drop', type: 'input' },
        { id: 'parser', label: 'Entity Extraction Engine', subtext: 'pdfplumber & Regex Heuristics', type: 'process' },
        { id: 'session', label: 'Session Management API', subtext: 'FastAPI Session Store', type: 'storage' },
        { id: 'bot', label: 'Playwright Browser Worker', subtext: 'Headless DOM Navigation & Input', type: 'process' },
        { id: 'audit', label: 'Completion Log & Summary', subtext: 'Field-by-field verification', type: 'output' }
      ],
      architectureFlow: [
        'User uploads target PDF via the React interface',
        'FastAPI extracts text chunks and recognizes target field labels',
        'User inspects mapped fields and confirms accuracy',
        'Playwright launches headless Chromium session and navigates to the destination form',
        'Inputs, dropdowns, and checkboxes are filled sequentially with verification logs'
      ],
      technologyDetails: [
        { category: 'Backend API', tools: ['FastAPI', 'Uvicorn', 'Pydantic'] },
        { category: 'Automation Engine', tools: ['Playwright Python', 'Chromium Headless'] },
        { category: 'PDF Processing', tools: ['pdfplumber', 'PyPDF2'] },
        { category: 'Frontend', tools: ['React', 'Tailwind CSS', 'Axios'] }
      ],
      challenges: [
        'Matching ambiguous form field names (e.g. "Govt ID" vs "Aadhaar / SSN")',
        'Handling asynchronous web form validation and dynamic JavaScript dropdowns',
        'Preventing browser session hanging on slow target pages'
      ],
      implementation: [
        'Implemented semantic fuzzy matching dictionary for common form field synonyms',
        'Utilized Playwright wait_for_selector and element state assertions before typing',
        'Configured session timeouts and snapshot logging for failed DOM selector attempts'
      ],
      results: [
        'Cut repetitive data entry time from ~6 minutes per form to under 25 seconds',
        'Built full field mapping visualizer allowing instant correction before submission',
        'Eliminated manual copy-paste errors across 50+ test government and college application forms'
      ]
    }
  },
  {
    id: 'glass-innovations',
    title: 'Glass Innovations',
    tagline: 'Modern Enterprise Product Platform with Advanced Glassmorphic UI',
    category: 'Frontend',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    githubUrl: 'https://github.com/divyanshbhardwaj-DS/Glass_Inovations',
    featured: true,
    highlights: [
      'High-performance glassmorphism design system built with custom CSS utilities',
      'Smooth micro-interactions and scroll-triggered animations using Framer Motion',
      'Fully responsive, mobile-first layouts tested across tablet, desktop, and mobile viewports',
      'Strict TypeScript typings with 100% build validity and zero lint warnings'
    ],
    caseStudy: {
      problem: 'Modern technology startups often struggle with generic corporate templates that fail to convey engineering sophistication and visual polish.',
      solution: 'Designed and engineered Glass Innovations, a showcase web application demonstrating state-of-the-art glassmorphism, responsive navigation, dynamic card states, and fluid interactions.',
      architectureDescription: 'Modular React architecture with reusable design tokens, glass panels, responsive navigation drawers, and physics-based motion transitions.',
      architectureNodes: [
        { id: 'user', label: 'User Interaction Events', subtext: 'Scroll, Hover, Click, Touch', type: 'input' },
        { id: 'motion', label: 'Framer Motion Physics', subtext: 'Spring animations & Staggers', type: 'process' },
        { id: 'tokens', label: 'Glass Design System', subtext: 'Backdrop blur, border glows', type: 'storage' },
        { id: 'view', label: 'Responsive Layouts', subtext: 'Mobile drawer, Desktop grid', type: 'output' }
      ],
      architectureFlow: [
        'User scrolls or hovers over elements',
        'Framer Motion triggers hardware-accelerated transforms',
        'CSS backdrop-filter creates real-time frosted glass effect',
        'Accessible tab navigation and keyboard shortcuts maintain full usability'
      ],
      technologyDetails: [
        { category: 'Core Library', tools: ['React 18', 'TypeScript 5'] },
        { category: 'Build & Bundling', tools: ['Vite', 'ESBuild'] },
        { category: 'Styling', tools: ['Tailwind CSS v3', 'Custom CSS variables'] },
        { category: 'Animation', tools: ['Framer Motion', 'Lucide React'] }
      ],
      challenges: [
        'Maintaining 60 FPS scroll performance while rendering heavy backdrop-filter blur layers',
        'Ensuring text contrast and legibility over translucent backgrounds across all screen brightnesses',
        'Building seamless mobile drawer navigation without body scroll jitter'
      ],
      implementation: [
        'Used will-change: transform and CSS hardware acceleration to offload blur calculations to GPU',
        'Calibrated background opacity (minimum 0.65 with dark tinting) to exceed WCAG AA contrast standards',
        'Engineered responsive drawer with scroll-lock hooks and touch gestures'
      ],
      results: [
        'Achieved Lighthouse 96+ Performance and 100 Accessibility scores',
        'Silky smooth 60fps animations across both Chromium and WebKit browsers',
        'Reusable component library that served as the design basis for client projects'
      ]
    }
  },
  {
    id: 'project-vidya',
    title: 'Project VIDYA / RakshaWell',
    tagline: 'AI-Enabled Digital Safety & Educational Ecosystem Architecture',
    category: 'Full Stack',
    stack: ['Python', 'FastAPI', 'React', 'Computer Vision', 'PyTorch / OpenCV', 'PostgreSQL'],
    githubUrl: 'https://github.com/divyanshbhardwaj-DS/Project_VIDYA',
    featured: true,
    highlights: [
      'Comprehensive architectural blueprint for intelligent monitoring and student assistance',
      'Multi-tiered microservices decoupling video stream processing from API services',
      'Real-time edge alerting logic for safety anomalies and classroom engagement',
      'Visualized end-to-end system architecture with clean data flow boundaries'
    ],
    caseStudy: {
      problem: 'Educational and institutional safety platforms often operate as siloed black boxes with high latency, brittle integrations, and lack of transparent system boundaries.',
      solution: 'Architected and prototyped Project VIDYA (RakshaWell), an integrated ecosystem linking computer vision analytics at the edge with centralized API telemetry and real-time alerts.',
      architectureDescription: 'Edge video inference pipes telemetry to FastAPI gateway, triggering real-time WebSocket events and persisting incident metadata in PostgreSQL.',
      architectureNodes: [
        { id: 'cameras', label: 'Edge Video Ingestion', subtext: 'RTSP Stream / Frame Extraction', type: 'input' },
        { id: 'inference', label: 'CV Inference Engine', subtext: 'OpenCV / PyTorch Model', type: 'process' },
        { id: 'gateway', label: 'FastAPI Event Gateway', subtext: 'Authentication & Routing', type: 'process' },
        { id: 'db', label: 'PostgreSQL & Timescale', subtext: 'Incident Logs & Analytics', type: 'storage' },
        { id: 'alert_ui', label: 'Real-Time Alert Dashboard', subtext: 'WebSockets & SMS Push', type: 'output' }
      ],
      architectureFlow: [
        'Edge node captures camera stream and samples frames at 5 FPS',
        'Model infers anomaly or presence triggers',
        'Event payload dispatched via TLS to FastAPI event gateway',
        'PostgreSQL records time-series event coordinates',
        'WebSocket broadcasts push alert to institutional supervisor dashboard'
      ],
      technologyDetails: [
        { category: 'Inference', tools: ['Python', 'OpenCV', 'PyTorch', 'NumPy'] },
        { category: 'Backend Gateway', tools: ['FastAPI', 'WebSockets', 'Pydantic'] },
        { category: 'Storage', tools: ['PostgreSQL', 'Redis Cache'] },
        { category: 'Frontend Portal', tools: ['React', 'Tailwind CSS', 'Recharts'] }
      ],
      challenges: [
        'Minimizing bandwidth consumption when streaming continuous RTSP feeds',
        'Protecting individual student privacy while maintaining safety monitoring capability',
        'Preventing false alarms triggered by rapid lighting changes'
      ],
      implementation: [
        'Processed inference at edge devices and transmitted lightweight JSON event packets rather than raw video',
        'Designed privacy-first bounding box abstraction without storing personally identifiable facial biometrics',
        'Introduced rolling frame confidence thresholding to suppress transient noise'
      ],
      results: [
        'Cut network bandwidth overhead by 88% using edge-level metadata extraction',
        'Sub-500ms notification dispatch from edge detection to web dashboard',
        'Complete system architecture diagram created and documented for institutional deployment'
      ]
    }
  },
  {
    id: 'study-planner',
    title: 'Smart Student Study Planner',
    tagline: 'Client-Side Productivity Dashboard with LocalStorage Persistence',
    category: 'Frontend',
    stack: ['HTML5', 'Vanilla CSS', 'JavaScript (ES6+)', 'LocalStorage API'],
    githubUrl: 'https://github.com/divyanshbhardwaj-DS/Smart-Student-Study-Planner',
    featured: false,
    highlights: [
      'Zero-dependency, ultra-lightweight client-side application with instant load time (<150ms)',
      'Organized task scheduling, exam countdowns, subject categorization, and study timers',
      'Offline-first architecture with reliable LocalStorage state synchronization',
      'Clean responsive dashboard interface with dark-theme ergonomics'
    ],
    caseStudy: {
      problem: 'Students are overwhelmed by heavy, subscription-based productivity apps that require sign-ins, internet connectivity, and cluttered interfaces.',
      solution: 'Created an accessible, completely private, offline-first study planner and task manager that runs instantly in any modern web browser without server reliance.',
      architectureDescription: 'Event-driven JavaScript architecture utilizing the DOM API and HTML5 LocalStorage for zero-latency data persistence.',
      architectureNodes: [
        { id: 'user_input', label: 'User Task & Goal Inputs', subtext: 'Forms, Date Pickers, Selects', type: 'input' },
        { id: 'logic', label: 'State Manager & Filter Logic', subtext: 'Vanilla JS (ES6+ Modules)', type: 'process' },
        { id: 'storage', label: 'Browser LocalStorage', subtext: 'JSON Serialized Records', type: 'storage' },
        { id: 'ui', label: 'Dynamic DOM Renderer', subtext: 'Task lists, Badges, Countdowns', type: 'output' }
      ],
      architectureFlow: [
        'User enters study session goals and target dates',
        'JS controller validates inputs and updates state tree',
        'State serialized into browser LocalStorage',
        'DOM updates reactively without full page reloads'
      ],
      technologyDetails: [
        { category: 'Core', tools: ['HTML5 Semantic Elements', 'CSS3 Flexbox / Grid', 'Vanilla ES6+'] },
        { category: 'Storage', tools: ['LocalStorage API', 'JSON Serialization'] }
      ],
      challenges: [
        'Preventing state corruption when saving complex nested study routines',
        'Handling date math across month boundaries for upcoming exam countdowns'
      ],
      implementation: [
        'Designed schema validation check on LocalStorage read to gracefully migrate legacy data structures',
        'Built modular helper functions for time calculations and status sorting'
      ],
      results: [
        'Achieved 100/100 Lighthouse score across Performance, Best Practices, and Accessibility',
        'Zero external runtime dependencies; bundle footprint is less than 30KB total',
        'Extensively used by fellow college peers to track university semester exam prep'
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'SQL', highlight: false },
      { name: 'HTML5 / CSS3', highlight: false },
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React.js', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'Node.js', highlight: false },
      { name: 'Express.js', highlight: false },
      { name: 'REST APIs', highlight: true },
      { name: 'Vite', highlight: false },
      { name: 'CustomTkinter', highlight: false },
    ]
  },
  {
    title: 'Data Science & AI',
    skills: [
      { name: 'Pandas', highlight: true },
      { name: 'NumPy', highlight: true },
      { name: 'Scikit-Learn', highlight: true },
      { name: 'Exploratory Data Analysis', highlight: true },
      { name: 'Machine Learning Pipelines', highlight: true },
      { name: 'Data Visualization (Matplotlib/Seaborn)', highlight: false },
      { name: 'OpenCV Basics', highlight: false },
      { name: 'LLM Agent Workflows', highlight: false },
    ]
  },
  {
    title: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', highlight: true },
      { name: 'Object-Oriented Programming (OOP)', highlight: true },
      { name: 'Database Management Systems (DBMS)', highlight: true },
      { name: 'Computer Networks', highlight: false },
      { name: 'Socket Programming', highlight: false },
      { name: 'Operating Systems Concepts', highlight: false },
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'Docker Basics', highlight: false },
      { name: 'VS Code', highlight: false },
      { name: 'Linux / WSL', highlight: true },
      { name: 'Playwright Automation', highlight: false },
      { name: 'Postman', highlight: false },
      { name: 'Jupyter Notebooks', highlight: false },
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'thiranex',
    role: 'Data Science Intern',
    organization: 'Thiranex',
    type: 'Internship',
    period: '2026',
    location: 'Remote',
    description: [
      'Engaged in real-world data science and analytics tasks under industry mentorship.',
      'Explored data preprocessing workflows, structured feature analysis, and model training.',
      'Applied statistical methods and exploratory data analysis to solve domain-specific business queries.'
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis', 'Scikit-learn']
  },
  {
    id: 'pinnacle-labs',
    role: 'Python Development Intern',
    organization: 'Pinnacle Labs',
    type: 'Internship',
    period: '2026',
    location: 'Remote',
    description: [
      'Constructed modular Python utilities and back-end logic adhering to clean software engineering principles.',
      'Developed and debugged algorithmic routines, file parsing routines, and test suites.',
      'Collaborated on code reviews and practiced source code versioning workflows with Git.'
    ],
    skills: ['Python', 'Software Engineering', 'Git', 'Problem Solving', 'OOP']
  },
  {
    id: 'forage-walmart',
    role: 'Advanced Software Engineering Job Simulation',
    organization: 'Walmart Global Tech (via Forage)',
    type: 'Job Simulation',
    period: '2026',
    location: 'Virtual Simulation',
    description: [
      'Implemented advanced Heap data structure in Java for efficient priority-based data processing.',
      'Designed comprehensive UML class diagrams capturing enterprise architectural relationships.',
      'Engineered an Entity-Relationship (ER) relational database schema for high-throughput retail inventory workflows.'
    ],
    skills: ['Java', 'Data Structures (Heap)', 'UML Architecture', 'Database Design (ERD)', 'System Design']
  },
  {
    id: 'forage-jpmorgan',
    role: 'Investment Banking Job Simulation',
    organization: 'JPMorganChase (via Forage)',
    type: 'Job Simulation',
    period: '2026',
    location: 'Virtual Simulation',
    description: [
      'Conducted Mergers & Acquisitions (M&A) quantitative target analysis and financial due diligence.',
      'Formulated Discounted Cash Flow (DCF) valuation models and revenue forecast schedules in Excel.',
      'Authored executive client presentation decks summarizing strategic acquisition rationales.'
    ],
    skills: ['DCF Modeling', 'M&A Valuation', 'Financial Analysis', 'Executive Presentations', 'Quantitative Analysis']
  },
  {
    id: 'forage-deloitte',
    role: 'Data Analytics Job Simulation',
    organization: 'Deloitte Australia (via Forage)',
    type: 'Job Simulation',
    period: '2026',
    location: 'Virtual Simulation',
    description: [
      'Constructed an interactive Tableau business dashboard synthesizing multi-dimensional transactional data.',
      'Executed Excel statistical analysis and structured classification modeling for forensic risk identification.',
      'Communicated actionable forensic technology business findings and risk mitigation roadmaps.'
    ],
    skills: ['Tableau', 'Excel Analysis', 'Data Classification', 'Forensic Technology', 'Business Intelligence']
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'sih-2026',
    title: 'Smart India Hackathon 2026 — Project "Idea Setu"',
    category: 'Hackathons',
    issuer: 'Smart India Hackathon / Team semicolon squad',
    date: '2026',
    description: 'Developed "Idea Setu — Undertrial Release Navigator" with team "semicolon squad". Formulated an automated legal assistance pipeline integrating OCR document parsing, statutory rule screening, and an intuitive legal aid dashboard to accelerate procedural undertrial bail reviews.',
    tags: ['Hackathon', 'OCR', 'Rule Screening', 'Legal Aid Tech', 'FastAPI'],
    disclaimer: 'Note: Built as a hackathon engineering prototype to assist administrative and legal workflows; final legal determinations always remain with qualified legal professionals.'
  },
  {
    id: 'leetcode-milestone',
    title: '227+ LeetCode Problems Solved',
    category: 'Competitive Programming',
    issuer: 'LeetCode (Profile: Divydevelops)',
    date: '2026',
    description: 'Solved 226 algorithmic challenges in C++ and 1 in JavaScript spanning Arrays, Strings, Hash Tables, Binary Search, Dynamic Programming, Two Pointers, and Stack-based patterns.',
    tags: ['LeetCode', 'C++', 'Algorithms', 'DSA']
  },
  {
    id: 'codechef-2star',
    title: 'CodeChef 2★ Competitive Programmer (Rating 1449)',
    category: 'Competitive Programming',
    issuer: 'CodeChef (Handle: cse_ds_0257)',
    date: '2026',
    description: 'Achieved 2★ division rating (1449 peak) across 10 rated contests. Solved 59 problems and earned official CodeChef Contest Contender (Bronze) and Problem Solver (Bronze) badges.',
    tags: ['CodeChef 2★', '1449 Rating', 'Bronze Badges', '10 Contests']
  },
  {
    id: 'academic-excellence',
    title: 'B.Tech CSE (Data Science) @ ABES Engineering College',
    category: 'Academics',
    issuer: 'ABES Engineering College (2025–2029)',
    date: '2025 – Present',
    description: 'Pursuing specialized Bachelor of Technology in Computer Science and Engineering with specialization in Data Science. Consistent strong academic performance with rigorous coursework in algorithms, data structures, mathematics, and computing systems.',
    tags: ['B.Tech CSE', 'Data Science', 'ABES Engineering College', 'Engineering']
  }
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    id: 'cert-python',
    title: 'Python for Data Science & Machine Learning',
    provider: 'Industry Accredited',
    year: '2026',
    category: 'Python'
  },
  {
    id: 'cert-walmart',
    title: 'Advanced Software Engineering Job Simulation',
    provider: 'Walmart Global Tech via Forage',
    year: '2026',
    category: 'Software Engineering'
  },
  {
    id: 'cert-deloitte',
    title: 'Data Analytics Job Simulation Certification',
    provider: 'Deloitte Australia via Forage',
    year: '2026',
    category: 'Data Analytics'
  },
  {
    id: 'cert-jpmorgan',
    title: 'Investment Banking Job Simulation Certification',
    provider: 'JPMorganChase via Forage',
    year: '2026',
    category: 'Data Science'
  },
  {
    id: 'cert-react',
    title: 'Modern Frontend Engineering with React & TypeScript',
    provider: 'Technical Coursework',
    year: '2026',
    category: 'Web Development'
  }
];

export const DSA_TOPICS = [
  { name: 'Arrays & Two Pointers', count: 64, proficiency: 'Active' },
  { name: 'Strings & Parsing', count: 48, proficiency: 'Active' },
  { name: 'Hash Tables & Sets', count: 42, proficiency: 'Active' },
  { name: 'Binary Search & Math', count: 35, proficiency: 'Active' },
  { name: 'Dynamic Programming', count: 22, proficiency: 'Practicing' },
  { name: 'Stack & Queue', count: 18, proficiency: 'Active' },
  { name: 'Divide & Conquer / Sorting', count: 16, proficiency: 'Active' },
  { name: 'Trees & Graph Traversal', count: 12, proficiency: 'Practicing' },
];

export const LEARNING_TIMELINE = [
  {
    year: '2025',
    title: 'Foundation & Explorations',
    subtitle: 'Started B.Tech CSE (Data Science) @ ABES',
    description: 'Established rigorous programming foundation in C++ and Python. Mastered core CS fundamentals, discrete math, data structures, and foundational web technologies.',
    points: ['C++ & Object-Oriented Programming', 'Data Structures foundations', 'Python scripting and web basics', 'Academic semester excellence']
  },
  {
    year: '2026',
    title: 'Expansion, Contests & Systems',
    subtitle: '227+ LeetCode, CodeChef 2★, SIH 2026 & Internships',
    description: 'Scaled competitive programming activity rapidly. Built full-stack AI applications like Sentinel, entered Smart India Hackathon 2026 with team semicolon squad, and completed industry internships and software simulations.',
    points: [
      '227 LeetCode problems (226 C++, 1 JS)',
      'CodeChef 2★ (1449 rating, 10 contests)',
      'Smart India Hackathon 2026 (Idea Setu)',
      'Data Science & Python Internships (Thiranex, Pinnacle Labs)',
      'Walmart & Deloitte job simulations via Forage'
    ]
  },
  {
    year: 'Current',
    title: 'Building, Competing & Learning in Public',
    subtitle: 'Production-ready software & real-world problems',
    description: 'Focused on shipping scalable full-stack applications, exploring generative AI workflows, deepening algorithms knowledge, and preparing for software engineering and data science internships.',
    points: ['Autonomous AI Agents & System Design', 'Advanced Dynamic Programming & Graphs', 'Production deployment & performance tuning', 'Contributing to open source']
  }
];

export const FEATURED_REPOSITORIES = [
  {
    name: 'Sentinel',
    description: 'AI-powered autonomous editorial agent with tri-state decision engine and persistent SQLite memory.',
    language: 'Python / React',
    stars: 3,
    url: 'https://github.com/divyanshbhardwaj-DS/Sentinel',
    badge: 'AI / Agentic'
  },
  {
    name: 'RealTimeChat',
    description: 'Multi-threaded desktop chat application using low-latency TCP sockets, CustomTkinter, and encrypted auth.',
    language: 'Python',
    stars: 2,
    url: 'https://github.com/divyanshbhardwaj-DS/RealTimeChat',
    badge: 'Systems'
  },
  {
    name: 'Predictive_Model',
    description: 'End-to-end machine learning pipeline covering statistical EDA, feature preprocessing, and cross-validated modeling.',
    language: 'Jupyter / Python',
    stars: 2,
    url: 'https://github.com/divyanshbhardwaj-DS/Predictive_Model',
    badge: 'Machine Learning'
  },
  {
    name: 'Glass_Inovations',
    description: 'Modern product platform featuring advanced glassmorphic styling, responsive layout, and Framer Motion.',
    language: 'TypeScript / React',
    stars: 2,
    url: 'https://github.com/divyanshbhardwaj-DS/Glass_Inovations',
    badge: 'Frontend'
  },
  {
    name: 'AI_FORM_FILLER',
    description: 'Automated entity extraction from PDF documents with Playwright headless browser form execution.',
    language: 'Python / Playwright',
    stars: 1,
    url: 'https://github.com/divyanshbhardwaj-DS/AI_FORM_FILLER',
    badge: 'Automation'
  },
  {
    name: 'Project_VIDYA',
    description: 'AI-enabled educational and safety monitoring ecosystem architecture with real-time event pipeline.',
    language: 'Python / Architecture',
    stars: 2,
    url: 'https://github.com/divyanshbhardwaj-DS/Project_VIDYA',
    badge: 'Computer Vision'
  },
  {
    name: 'Restro',
    description: 'Interactive restaurant reservation and menu ordering web system with real-time cart state.',
    language: 'JavaScript / React',
    stars: 1,
    url: 'https://github.com/divyanshbhardwaj-DS/Restro',
    badge: 'Web App'
  },
  {
    name: 'Smart-Student-Study-Planner',
    description: 'Offline-first student productivity dashboard with LocalStorage persistence and exam timelines.',
    language: 'JavaScript',
    stars: 2,
    url: 'https://github.com/divyanshbhardwaj-DS/Smart-Student-Study-Planner',
    badge: 'Vanilla Web'
  }
];
