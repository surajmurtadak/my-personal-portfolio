import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiMonitor, FiLayers, FiActivity } from 'react-icons/fi';
import { services } from '../data/portfolioData';

const iconMap = [FiCode, FiCpu, FiActivity, FiLayers, FiMonitor];

export default function Services() {
  return (
    <section id="services" className="section bg-dark section-grain relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Core Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What I Build & Deliver</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-violet mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-inter text-base">
            From high-concurrency backend services to fluid frontend architectures and AI automation pipelines.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[index % iconMap.length];
            const numberString = `0${index + 1}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between bg-dark-card border border-white/5 hover:border-primary/40"
              >
                {/* Background Number Watermark */}
                <span className="absolute -right-2 -top-4 text-7xl font-black text-white/[0.03] group-hover:text-primary/[0.08] transition-colors duration-500 select-none pointer-events-none font-poppins">
                  {numberString}
                </span>

                <div>
                  {/* Top Row: Icon & Counter */}
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/10">
                      <Icon size={28} />
                    </div>
                    <span className="text-sm font-bold font-inter text-gray-500 group-hover:text-primary transition-colors">
                      {numberString}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-inter relative z-10">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Underline Accent */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-violet mt-8 rounded-full transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
