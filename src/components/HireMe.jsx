import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function HireMe() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/bg_1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/85" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
            Open to Opportunities
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
            I&apos;m{' '}
            <span className="gradient-text">Available</span>
            {' '}for Freelancing
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Click below to hire me as a full-time employee or as a freelancer.
            Let&apos;s build something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={personalInfo.hireFullTimeEmail}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-lg py-4 px-10 glow-orange"
            >
              Full-Time
            </motion.a>
            <motion.a
              href={personalInfo.hireFreelancerEmail}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn-ghost text-lg py-4 px-10"
            >
              Freelancer
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
