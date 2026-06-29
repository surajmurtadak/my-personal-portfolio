import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolioData';

const categories = ['All', 'Frontend', 'Backend', 'DevOps & Tools', 'AI & Others'];

function FloatingSkillBubble({ skill, index }) {
  // Generate slightly staggered random-like durations and offsets based on index for organic floating physics
  const durationY = 4 + (index % 4) * 0.8;
  const durationX = 5 + (index % 3) * 0.9;
  const offsetY = -8 - (index % 3) * 4;
  const offsetX = 4 + (index % 2) * 4;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, offsetY, 0],
        x: [0, offsetX, 0]
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        layout: { type: 'spring', stiffness: 300, damping: 25 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
        y: { duration: durationY, repeat: Infinity, ease: 'easeInOut' },
        x: { duration: durationX, repeat: Infinity, ease: 'easeInOut' }
      }}
      whileHover={{ 
        scale: 1.12, 
        y: -4,
        transition: { duration: 0.2 } 
      }}
      className={`skill-bubble px-6 py-3.5 rounded-full cursor-default flex items-center gap-2.5 bg-gradient-to-r ${skill.color} border ${skill.border} hover:shadow-lg ${skill.glow}`}
    >
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      <span className="text-white font-medium text-sm md:text-base tracking-wide select-none">
        {skill.name}
      </span>
      <span className="text-[10px] uppercase font-semibold text-gray-400 bg-white/5 px-2 py-0.5 rounded-full ml-1">
        {skill.category.split(' ')[0]}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section bg-dark-2 section-grain relative z-10">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-violet/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Technical Proficiency</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-violet mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-inter text-base">
            Represented as fluid motion capsules. I leverage these tools to architect scalable enterprise platforms, low-latency applications, and AI integrations.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                activeCategory === cat
                  ? 'text-white shadow-lg shadow-primary/25'
                  : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Floating Bubbles Cloud Field */}
        <motion.div layout className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-5xl mx-auto min-h-[300px] items-center content-center py-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <FloatingSkillBubble key={skill.id} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-gray-500 mt-12 font-inter uppercase tracking-widest"
        >
          Continuous learner — always adapting to emerging web & AI standards
        </motion.p>
      </div>
    </section>
  );
}
