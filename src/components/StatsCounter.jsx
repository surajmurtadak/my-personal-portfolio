import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiClock, FiCheckCircle, FiUsers, FiBriefcase } from 'react-icons/fi';
import { stats } from '../data/portfolioData';

const iconMap = [FiClock, FiCheckCircle, FiUsers, FiBriefcase];

function useCounter(target, duration, trigger) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

function StatItem({ stat, index, trigger }) {
  const count = useCounter(stat.value, 1800, trigger);
  const Icon = iconMap[index % iconMap.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={trigger ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="glass-card rounded-3xl p-8 text-center bg-dark-card border border-white/5 hover:border-primary/40 transition-all duration-300 group"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/10">
        {Icon && <Icon size={26} />}
      </div>
      <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
        {count}
        <span className="text-primary">+</span>
      </div>
      <div className="text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-wider font-inter">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 px-6 bg-dark-2 section-grain relative z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} index={index} trigger={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
