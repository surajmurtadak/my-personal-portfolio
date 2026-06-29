import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiTerminal } from 'react-icons/fi';
import usePortfolioStore from '../store/usePortfolioStore';
import { navLinks, personalInfo } from '../data/portfolioData';
import { lenisScrollTo } from './SmoothScroll';

const scrollToSection = (href, closeNav) => {
  lenisScrollTo(href, -80);
  if (closeNav) closeNav();
};

export default function Navbar() {
  const { isNavOpen, toggleNav, closeNav, isNavScrolled, activeSection } = usePortfolioStore();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavScrolled
          ? 'navbar-blur border-b border-white/10 shadow-xl shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection('#home', closeNav); }}
          className="flex items-center gap-2.5 cursor-pointer group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/favicon.png"
            alt="Suraj Murtadak"
            className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-tight leading-none group-hover:text-primary transition-colors">
              Suraj Murtadak
            </span>
            <span className="text-[10px] text-gray-400 font-inter tracking-wider uppercase mt-0.5">
              Senior Full Stack Dev
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href, closeNav); }}
              className={`text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer relative py-1 ${
                activeSection === link.id ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="navbarIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-violet rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
          <motion.a
            href={personalInfo.hireMeEmail}
            className="btn-primary text-sm py-2.5 px-6 ml-2 shadow-md shadow-primary/20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
          >
            <FiTerminal size={15} />
            <span>Hire Me</span>
          </motion.a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <AnimatePresence mode="wait">
            {isNavOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiX size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiMenu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Side Panel Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden navbar-blur border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href, closeNav); }}
                  className={`text-base font-semibold py-3 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-primary/15 text-primary border border-primary/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-primary" />}
                </a>
              ))}
              <a
                href={personalInfo.hireMeEmail}
                onClick={closeNav}
                className="btn-primary w-full justify-center text-base py-3.5 mt-4"
              >
                <FiTerminal size={18} />
                <span>Hire Me</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
