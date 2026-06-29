import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiDownload, FiCheckCircle } from 'react-icons/fi';
import { experience, education, personalInfo } from '../data/portfolioData';

function TimelineCard({ item, index }) {
  // Parse description lines for bullet points
  const lines = item.description.split('\n').filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 md:pl-10 pb-12 last:pb-0 group"
    >
      {/* Vertical connector line */}
      <div className="absolute left-3.5 top-6 bottom-0 w-[2px] bg-gradient-to-b from-primary via-white/10 to-transparent group-last:hidden" />

      {/* Timeline glowing dot */}
      <div className="absolute left-0 top-3 w-7 h-7 rounded-full bg-dark-2 border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-125 transition-transform duration-300">
        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
      </div>

      {/* Glass Card */}
      <div className="glass-card rounded-3xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 tracking-wide">
            {item.period}
          </span>
          <span className="text-xs font-semibold text-gray-400 font-inter">
            {item.company ? 'Professional Role' : 'Academic Degree'}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-violet-light text-sm md:text-base font-semibold mb-5">
          {item.company || item.institution}
        </p>

        {/* Render content structured */}
        <div className="space-y-2.5 font-inter text-sm md:text-base text-gray-300 leading-relaxed">
          {lines.map((line, i) => {
            const isBullet = line.trim().startsWith('•');
            const cleanLine = isBullet ? line.trim().substring(1).trim() : line.trim();

            if (isBullet) {
              return (
                <div key={i} className="flex items-start gap-2.5 pl-2">
                  <FiCheckCircle className="text-primary mt-1 shrink-0" size={15} />
                  <span>{cleanLine}</span>
                </div>
              );
            }
            return <p key={i} className="mb-2 font-medium text-white/90">{cleanLine}</p>;
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="section bg-dark-2 section-grain relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">My Track Record</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experience & Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-violet mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-inter text-base">
            3+ years delivering scalable production applications, leading developer teams, and engineering AI platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Experience Column (8 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3.5 mb-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/10">
                <FiBriefcase size={22} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                <p className="text-xs text-gray-400 font-inter">Enterprise, Startups & Defense Systems</p>
              </div>
            </motion.div>

            {experience.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3.5 mb-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-violet/10 border border-violet/20 flex items-center justify-center text-violet-light shadow-lg shadow-violet/10">
                <FiBook size={22} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <p className="text-xs text-gray-400 font-inter">Academic Background</p>
              </div>
            </motion.div>

            {education.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}

            {/* Download CV Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 glass-card rounded-3xl p-8 text-center bg-gradient-to-br from-dark-card to-primary/10 border border-primary/30"
            >
              <h4 className="text-xl font-bold text-white mb-2">Looking for full details?</h4>
              <p className="text-gray-400 text-sm font-inter mb-6">
                Download my verified resume containing full architectural workflows and project scopes.
              </p>
              <a
                href={personalInfo.cvLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full justify-center py-4 text-base"
              >
                <FiDownload size={18} />
                Download Verified CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
