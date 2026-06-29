import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiMail, FiPhone, FiDownload, FiAward, FiLayers, FiUsers, FiCpu } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const infoItems = [
  { icon: FiUser, label: 'Full Name', value: personalInfo.name },
  { icon: FiMapPin, label: 'Location', value: `${personalInfo.address} (${personalInfo.zipCode})` },
  { icon: FiMail, label: 'Email Address', value: personalInfo.email },
  { icon: FiPhone, label: 'Phone Number', value: personalInfo.phone },
];

const highlights = [
  { icon: FiAward, title: '3+ Years Exp.', desc: 'Production JavaScript & TypeScript engineering' },
  { icon: FiUsers, title: 'Team Leadership', desc: 'Leading 6 developers at Zendot Technologies' },
  { icon: FiLayers, title: 'Enterprise Scalability', desc: 'Architecting for defence, airport & fintech systems' },
  { icon: FiCpu, title: 'AI & WebRTC Integration', desc: 'Real-time low-latency surveillance & automated chat' },
];

export default function About() {
  return (
    <section id="about" className="section bg-dark-2 section-grain relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Professional Summary</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-violet mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-white/10 shadow-2xl">
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src="/images/bg_1.png"
                  alt="Suraj Murtadak"
                  className="w-full h-[460px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card bg-dark-card border border-primary/40 text-white rounded-3xl p-6 shadow-2xl flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-black text-2xl">
                3+
              </div>
              <div>
                <div className="text-lg font-bold leading-tight">Years of</div>
                <div className="text-xs text-gray-400 font-inter mt-0.5">Production Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Right Info Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
              Senior Full Stack JavaScript Developer delivering user-centric, mission-critical applications.
            </h3>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-inter mb-8">
              {personalInfo.aboutDescription}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl border border-white/5 flex items-start gap-3.5 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <h.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{h.title}</h4>
                    <p className="text-xs text-gray-400 font-inter leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Cards List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3.5 p-3.5 glass-card rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-primary flex items-center justify-center shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold">{item.label}</span>
                    <p className="text-white text-sm font-medium truncate">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={personalInfo.cvLink} target="_blank" rel="noreferrer" className="btn-primary py-3.5 px-8">
                <FiDownload size={18} />
                <span>Download Official CV</span>
              </a>
              <a href="#contact" className="btn-outline py-3.5 px-8">
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
