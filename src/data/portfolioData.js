// All static portfolio content extracted and updated from Suraj Murtadak's resume

export const personalInfo = {
  name: 'Suraj Murtadak',
  title: 'Senior Full Stack JavaScript Developer',
  tagline: 'Building scalable enterprise applications & AI-assisted platforms',
  email: 'surajmurtadak@gmail.com',
  phone: '+91 9421825837',
  address: 'Gurugram, Haryana, INDIA',
  zipCode: '122001',
  dateOfBirth: 'October 30, 1998',
  website: 'surajmurtadak.com',
  cvLink: 'https://drive.google.com/file/d/1N7btsIU3sqILrPhYxpQ86aGviRoEWMBC/view',
  buyMeCoffeeLink: 'https://buymeacoffee.com/surajmurtadak',
  hireFullTimeEmail: 'mailto:surajmurtadak@gmail.com?subject=We Want Hire You&body=Hi Suraj, We want to Hire You As A Full-Time Senior Full Stack Developer.',
  hireFreelancerEmail: 'mailto:surajmurtadak@gmail.com?subject=We Want Hire You&body=Hi Suraj, We want to Hire You As A Freelance Developer.',
  hireMeEmail: 'mailto:surajmurtadak@gmail.com?subject=We Want Hire You&body=Hi Suraj, We want to Hire You.',
  aboutDescription: "Full Stack JavaScript Developer with 3+ years of experience building scalable enterprise applications and AI-assisted platforms using TypeScript, React.js, Next.js, Node.js, and Express.js. Skilled in leading development initiatives, designing production-grade APIs, implementing CI/CD pipelines, and delivering high-performance applications for defence, fintech, enterprise productivity, and real-estate domains. Strong background in asynchronous programming, enterprise integrations, scalable system design, and modern frontend architecture with a focus on performance, reliability, security, and user-centric experiences.",
  projectsCount: 15,
};

export const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/suraj-murtadak/',
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/surajmurtadak/',
    icon: 'github',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/Star_Shadow_Sooraj',
    icon: 'instagram',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'resume', label: 'Resume', href: '#resume' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const heroSlides = [
  {
    id: 1,
    greeting: 'Hello there!',
    headline: "I'm Suraj Murtadak",
    subheadline: 'Senior Full Stack JavaScript Developer',
    image: '/images/bg_1.png',
    imageAlt: 'Suraj Murtadak - Senior Full Stack Developer',
  },
  {
    id: 2,
    greeting: 'Welcome!',
    headline: "Architecting Enterprise Applications",
    subheadline: 'Specializing in Next.js, React, Node.js & AI Workflows',
    image: '/images/bg_2.png',
    imageAlt: 'Enterprise Full Stack Architect',
  },
];

// Skills categorized for floating motion bubbles (NO percentages)
export const skills = [
  // Frontend
  { id: 1, name: 'React.js / React 19', category: 'Frontend', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/40', glow: 'shadow-cyan-500/20' },
  { id: 2, name: 'Next.js', category: 'Frontend', color: 'from-gray-700/30 to-black/30', border: 'border-white/40', glow: 'shadow-white/20' },
  { id: 3, name: 'TypeScript', category: 'Frontend', color: 'from-blue-600/20 to-indigo-600/20', border: 'border-blue-500/40', glow: 'shadow-blue-500/20' },
  { id: 4, name: 'TanStack Start & Query', category: 'Frontend', color: 'from-red-500/20 to-orange-500/20', border: 'border-red-500/40', glow: 'shadow-red-500/20' },
  { id: 5, name: 'Tailwind CSS & Shadcn UI', category: 'Frontend', color: 'from-teal-500/20 to-cyan-500/20', border: 'border-teal-500/40', glow: 'shadow-teal-500/20' },
  { id: 6, name: 'Zustand & Redux Toolkit', category: 'Frontend', color: 'from-purple-500/20 to-indigo-500/20', border: 'border-purple-500/40', glow: 'shadow-purple-500/20' },
  { id: 7, name: 'Framer Motion & Radix UI', category: 'Frontend', color: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/40', glow: 'shadow-pink-500/20' },

  // Backend
  { id: 8, name: 'Node.js', category: 'Backend', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/40', glow: 'shadow-green-500/20' },
  { id: 9, name: 'Express.js & LoopBack 3', category: 'Backend', color: 'from-yellow-500/20 to-amber-500/20', border: 'border-yellow-500/40', glow: 'shadow-yellow-500/20' },
  { id: 10, name: 'Python & FastAPI', category: 'Backend', color: 'from-sky-500/20 to-blue-600/20', border: 'border-sky-500/40', glow: 'shadow-sky-500/20' },
  { id: 11, name: 'REST APIs & GraphQL', category: 'Backend', color: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/40', glow: 'shadow-orange-500/20' },
  { id: 12, name: 'MongoDB & SQL / MySQL', category: 'Backend', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/40', glow: 'shadow-emerald-500/20' },
  { id: 13, name: 'JWT & OAuth Authentication', category: 'Backend', color: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-500/40', glow: 'shadow-violet-500/20' },

  // Tools & DevOps
  { id: 14, name: 'AWS & CI/CD Pipelines', category: 'DevOps & Tools', color: 'from-amber-600/20 to-yellow-600/20', border: 'border-amber-500/40', glow: 'shadow-amber-500/20' },
  { id: 15, name: 'Docker & Kubernetes', category: 'DevOps & Tools', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/40', glow: 'shadow-blue-500/20' },
  { id: 16, name: 'Git / GitHub / GitLab', category: 'DevOps & Tools', color: 'from-red-600/20 to-rose-600/20', border: 'border-red-500/40', glow: 'shadow-red-500/20' },
  { id: 17, name: 'Firebase & Vercel', category: 'DevOps & Tools', color: 'from-yellow-400/20 to-orange-500/20', border: 'border-yellow-400/40', glow: 'shadow-yellow-400/20' },
  { id: 18, name: 'Playwright & Zod', category: 'DevOps & Tools', color: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/40', glow: 'shadow-indigo-500/20' },

  // AI & Emerging
  { id: 19, name: 'AI Workflows & OpenAI APIs', category: 'AI & Others', color: 'from-fuchsia-500/20 to-pink-500/20', border: 'border-fuchsia-500/40', glow: 'shadow-fuchsia-500/20' },
  { id: 20, name: 'WebRTC Low-Latency Video', category: 'AI & Others', color: 'from-rose-500/20 to-red-500/20', border: 'border-rose-500/40', glow: 'shadow-rose-500/20' },
  { id: 21, name: 'Socket.IO & Razorpay', category: 'AI & Others', color: 'from-teal-400/20 to-emerald-500/20', border: 'border-teal-400/40', glow: 'shadow-teal-400/20' },
  { id: 22, name: 'npm Package Authoring', category: 'AI & Others', color: 'from-red-500/20 to-rose-600/20', border: 'border-red-500/40', glow: 'shadow-red-500/20' },
];

export const experience = [
  {
    id: 1,
    period: 'Nov 2024 – Present',
    title: 'Software Engineer',
    company: 'Zendot Technologies Pvt. Ltd',
    description: `Leading a team of six developers at an early-stage startup, reviewing code, driving architecture discussions, and developing scalable enterprise applications & AI-powered platforms.\n\nKey Projects & Contributions:\n• TVARUS Global: Medical tourism platform connecting international patients with top Indian hospitals. Built intuitive hospital discovery UI and administrative dashboards.\n• Retail Eye Insights: Live surveillance and analytics dashboard at GMR Hyderabad Airport integrating low-latency camera feeds via WebRTC, TanStack Start, React 19, and Zustand.\n• OAS Homes: Dubai-based property leasing and rental platform using Next.js focused on scalable frontend architecture.\n• RTV Live: Centralized dashboard and CMS for a Telugu news application on Android/iOS built with React.js and Python FastAPI.\n• Rika Pure Gold: Full-stack jewellery e-commerce application built with Next.js and optimized UI workflows.\n• Zorik AI: Enterprise AI workspace integrating Gmail, Slack, Google Calendar, and Docs into a centralized AI chat system.\n• Rudrarakshak: Full Stack Indian Army defence solution developing radar, drone, and lidar sensor software systems in an offline secure environment.`,
  },
  {
    id: 2,
    period: 'Aug 2023 – Nov 2024',
    title: 'Backend Developer',
    company: 'Tudip Technologies',
    description: `Contributed to core backend services and responsive frontend modules across enterprise applications:\n\n• Uniqus ESG Reporting Application: Automated ESG data collection and Excel reporting workflows. Developed core backend services including Heimdall (Authentication), Bulk Action, and Service Main focusing on scalable API integration.\n• Kuber Application: Built REST APIs for employee engagement features (login, registration, profile management) using Express.js. Designed responsive React.js frontend modules for dashboard workflows.`,
  },
  {
    id: 3,
    period: 'Mar 2023 – Jun 2023',
    title: 'MERN Stack Developer',
    company: 'FlipitMoney',
    description: `Worked on fintech products focused on stock market insights, rewards systems, and user engagement platforms:\n\n• FlipitMoney: Developed scalable RESTful APIs using Express.js and Node.js for a stock trading news and recommendation platform.\n• Bluepine: Created responsive rewards dashboard features using React.js and authored the bluepine-web-sdk npm package published on npmjs.com.`,
  },
  {
    id: 4,
    period: 'Oct 2022 – Feb 2023',
    title: 'Frontend Developer',
    company: 'suniltarge.com (Freelance)',
    description: `Responsible for designing and developing a responsive business website using HTML, CSS, JavaScript, and Bootstrap. Deployed the application on Firebase and integrated Google Analytics for performance monitoring, traffic analysis, and user behavior tracking.`,
  },
];

export const education = [
  {
    id: 1,
    period: '2019 – 2022',
    title: 'Bachelor of Engineering – Computer Engineering',
    institution: 'SND College of Engineering and Research Center Yeola',
    description: 'Specialized in computer engineering principles, scalable algorithms, and software development. Developed a real-time sign language hand gesture recognition model as the final year project.',
  },
  {
    id: 2,
    period: '2014 – 2017',
    title: 'Diploma in Computer Technology',
    institution: 'Vamanrao Ithape Polytechnic, Sangamner',
    description: 'Built strong foundations in programming languages, databases, and system architecture. Developed a Voice Recognition System Windows Application using Visual Studio C#.',
  },
];

export const services = [
  {
    id: 1,
    title: 'Enterprise Web Development',
    description: 'Architecting robust, production-grade web applications using Next.js, React 19, TypeScript, and modern state management.',
    icon: 'code',
  },
  {
    id: 2,
    title: 'AI & Workflow Automation',
    description: 'Integrating OpenAI APIs, enterprise chat workflows, and smart automation systems connecting Gmail, Slack, and cloud services.',
    icon: 'design',
  },
  {
    id: 3,
    title: 'Low-Latency & WebRTC Systems',
    description: 'Building real-time live monitoring dashboards, video streaming integrations, and airport surveillance camera feeds.',
    icon: 'mobile',
  },
  {
    id: 4,
    title: 'Backend & API Architecture',
    description: 'Designing secure, high-performance RESTful APIs and microservices using Node.js, Express.js, and Python FastAPI.',
    icon: 'code',
  },
  {
    id: 5,
    title: 'Motion UI & Glassmorphism Design',
    description: 'Creating stunning, fluid user interfaces inspired by 21st.dev with micro-animations, physics floating effects, and dark mode excellence.',
    icon: 'design',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Retail Eye Insights — GMR Airport Surveillance',
    category: 'Real-Time Surveillance & AI',
    description: 'Live surveillance & analytics dashboard deployed at GMR Hyderabad Airport. Integrated low-latency WebRTC camera feeds for real-time monitoring.',
    tech: ['TanStack Start', 'React 19', 'WebRTC', 'Zustand', 'Tailwind CSS'],
    image: '/images/project-1.jpg',
    url: 'https://surajmurtadak.com/',
    featured: true,
  },
  {
    id: 2,
    title: 'TVARUS Global — Medical Tourism Platform',
    category: 'Healthcare & Enterprise',
    description: 'Comprehensive medical tourism platform connecting international patients with top Indian hospitals with hospital discovery & dynamic admin dashboards.',
    tech: ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: '/images/project-2.jpg',
    url: 'https://surajmurtadak.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'Zorik AI — Enterprise Productivity Workspace',
    category: 'AI Workflows & SaaS',
    description: 'Centralized AI workspace integrating Gmail, Slack, Google Calendar, and Docs into an AI-powered chat system for automated email & scheduling.',
    tech: ['React.js', 'TypeScript', 'AI Workflows', 'OpenAI API', 'Node.js'],
    image: '/images/project-3.jpg',
    url: 'https://surajmurtadak.com/',
    featured: true,
  },
  {
    id: 4,
    title: 'OAS Homes — Dubai Property Leasing Platform',
    category: 'Real Estate & Next.js',
    description: 'Dubai-based property leasing and rental platform engineered with scalable Next.js frontend architecture and seamless property workflows.',
    tech: ['Next.js', 'React Hooks', 'Tailwind CSS', 'REST APIs'],
    image: '/images/project-4.jpg',
    url: 'https://surajmurtadak.com/',
    featured: false,
  },
  {
    id: 5,
    title: 'Rudrarakshak — Indian Army Defence Solution',
    category: 'Defence & High Security',
    description: 'Secure, fully offline hardware monitoring software for radar, drone, and lidar sensors built for Indian Army defense requirements.',
    tech: ['React.js', 'Node.js', 'Offline Security', 'Hardware APIs'],
    image: '/images/project-1.jpg',
    url: 'https://surajmurtadak.com/',
    featured: false,
  },
  {
    id: 6,
    title: 'RTV Live — Centralized News CMS Dashboard',
    category: 'Media & Streaming',
    description: 'Centralized dashboard and content management system for a Telugu news app on Android & iOS with fast real-time updates.',
    tech: ['React.js', 'Python FastAPI', 'Radix UI', 'TanStack Query'],
    image: '/images/project-2.jpg',
    url: 'https://surajmurtadak.com/',
    featured: false,
  },
  {
    id: 7,
    title: 'Rika Pure Gold — Luxury E-Commerce App',
    category: 'E-Commerce & UI/UX',
    description: 'Full-stack jewellery e-commerce application delivering high-end UI architecture, fluid product filtering, and optimized checkout.',
    tech: ['Next.js', 'Redux Toolkit', 'Tailwind CSS', 'MongoDB'],
    image: '/images/project-3.jpg',
    url: 'https://surajmurtadak.com/',
    featured: false,
  },
  {
    id: 8,
    title: 'FlipitMoney & Bluepine SDK',
    category: 'FinTech & npm Package',
    description: 'Stock trading news & recommendation backend APIs plus the published bluepine-web-sdk npm package for rewards dashboards.',
    tech: ['MERN Stack', 'Express.js', 'npm Package', 'REST APIs'],
    image: '/images/project-4.jpg',
    url: 'https://flipit.money/',
    featured: false,
  },
];

export const stats = [
  { id: 1, value: 3, label: 'Years Experience' },
  { id: 2, value: 15, label: 'Enterprise Projects' },
  { id: 3, value: 6, label: 'Team Members Led' },
  { id: 4, value: 4, label: 'Tech Companies' },
];

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const footerServices = [
  'Enterprise Web Development',
  'AI & Workflow Automation',
  'Low-Latency & WebRTC Systems',
  'Backend & API Architecture',
];
