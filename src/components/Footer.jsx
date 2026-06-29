import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiInstagram, FiArrowRight, FiHeart, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { footerLinks, footerServices, socialLinks, personalInfo } from '../data/portfolioData';
import { lenisScrollTo } from './SmoothScroll';

const socialIconMap = {
  linkedin: FiLinkedin,
  github: FiGithub,
  instagram: FiInstagram,
};

const scrollToSection = (href) => {
  lenisScrollTo(href, -80);
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-3 border-t border-white/10 relative z-10 section-grain">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/images/favicon.png"
                alt="Suraj Murtadak"
                className="w-10 h-10 rounded-xl object-contain"
              />
              <h3 className="text-xl font-bold text-white">Suraj Murtadak</h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for Enterprise Consultation</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed font-inter mb-6">
              Senior Full Stack JavaScript Developer delivering production-grade web applications, AI integration workflows, and low-latency systems.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3 font-inter">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <FiArrowRight size={12} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Core Services</h4>
            <ul className="space-y-3 font-inter">
              {footerServices.map((service) => (
                <li key={service} className="flex items-center gap-2.5 text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Connect Directly</h4>
            <ul className="space-y-4 font-inter text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-primary mt-1 shrink-0" size={16} />
                <span>{personalInfo.address} ({personalInfo.zipCode})</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-primary shrink-0" size={16} />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-primary shrink-0" size={16} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors break-all">
                  {personalInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <div className="footer-divider mb-8" />

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-inter">
          <p>
            &copy; {year} Suraj Murtadak. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Architected & Built with <FiHeart className="text-primary fill-primary" size={12} /> in Gurugram, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
