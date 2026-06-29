import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiDownload, FiTerminal } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const titles = [
  'Senior Full Stack Developer',
  'AI Platform Architect',
  'Next.js & React Specialist',
  'Production API Designer'
];

const marqueeTech = [
  'React 19', 'Next.js', 'TypeScript', 'Node.js', 'WebRTC', 'TanStack Start', 
  'OpenAI APIs', 'Python FastAPI', 'Zustand', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS'
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-dark section-grain pt-28 pb-12">
      {/* Ambient background glow blobs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-violet/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Text Content (7 cols) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            <span>Currently Leading Dev Team @ Zendot</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4 tracking-tight"
          >
            Hi, I&apos;m <span className="gradient-text">Suraj Murtadak</span>
          </motion.h1>

          {/* Animated Cycling Title */}
          <div className="h-12 md:h-16 flex items-center mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={titles[titleIndex]}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 flex items-center gap-3 font-inter"
              >
                <FiTerminal className="text-primary shrink-0" />
                <span>{titles[titleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed font-inter max-w-2xl mb-10"
          >
            {personalInfo.tagline}. Specializing in production-grade architecture, low-latency live streaming systems, and seamless user experiences across defence, fintech, and medical domains.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a href="#projects" className="btn-primary py-4 px-9 text-base">
              <span>View Enterprise Work</span>
              <FiArrowRight size={18} />
            </a>
            <a href={personalInfo.cvLink} target="_blank" rel="noreferrer" className="btn-outline py-4 px-8 text-base">
              <FiDownload size={18} />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Mini Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10 max-w-lg"
          >
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">3<span className="text-primary">+</span></div>
              <div className="text-xs md:text-sm text-gray-400 font-inter mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">15<span className="text-primary">+</span></div>
              <div className="text-xs md:text-sm text-gray-400 font-inter mt-1">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">6</div>
              <div className="text-xs md:text-sm text-gray-400 font-inter mt-1">Devs Led @ Zendot</div>
            </div>
          </motion.div>
        </div>

        {/* Right Hero Visual / Avatar Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Background glowing frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-violet rounded-3xl blur-2xl opacity-40 float-anim" />
            
            <div className="relative glass-card rounded-3xl overflow-hidden border border-white/15 p-3 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-dark-2">
                <img
                  src="/images/bg_1.png"
                  alt="Suraj Murtadak"
                  className="w-full h-[440px] md:h-[480px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Status Badge inside visual */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl border border-white/20 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Current Focus</div>
                    <div className="text-sm font-bold text-white">TVARUS Global & Retail Eye</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Full Stack
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Ticker at the bottom of hero */}
      <div className="w-full overflow-hidden border-y border-white/5 bg-black/40 py-4 relative z-10">
        <div className="animate-marquee gap-8 items-center text-sm font-semibold tracking-wider uppercase text-gray-400">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="hover:text-primary transition-colors cursor-default">{tech}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
