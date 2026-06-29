import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLayers, FiCode } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const filterTabs = ['All', 'Featured', 'AI & Surveillance', 'Enterprise & SaaS', 'Full Stack & E-Commerce'];

function getFilteredProjects(tab) {
  if (tab === 'All') return projects;
  if (tab === 'Featured') return projects.filter(p => p.featured);
  if (tab === 'AI & Surveillance') return projects.filter(p => p.category.includes('AI') || p.category.includes('Surveillance') || p.category.includes('Security'));
  if (tab === 'Enterprise & SaaS') return projects.filter(p => p.category.includes('Enterprise') || p.category.includes('SaaS') || p.category.includes('Media') || p.category.includes('Real Estate'));
  return projects.filter(p => p.category.includes('E-Commerce') || p.category.includes('FinTech') || !p.featured);
}

function ProjectCard({ project, index }) {
  const isSpan2 = project.featured && index % 3 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group ${
        isSpan2 ? 'md:col-span-2 bg-gradient-to-br from-dark-card via-dark-3 to-primary/10' : 'bg-dark-card'
      }`}
    >
      {/* Background ambient glow on hover */}
      <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/25 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Header Row */}
        <div className="flex justify-between items-start gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <FiLayers size={18} />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block">
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-block text-[10px] bg-violet/20 text-violet-light border border-violet/30 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide mt-1">
                  Featured Case Study
                </span>
              )}
            </div>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${project.title}`}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <FiExternalLink size={18} />
          </a>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-inter mb-6">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Pills */}
      <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 items-center">
        <FiCode className="text-gray-500 mr-1" size={16} />
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-primary/30 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const filtered = getFilteredProjects(activeTab);

  return (
    <section id="projects" className="section bg-dark section-grain relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Enterprise & AI Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-violet mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-inter text-base">
            Showcasing high-performance production systems, low-latency live monitoring dashboards, and scalable full-stack applications.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
