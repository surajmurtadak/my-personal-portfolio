import { motion } from 'framer-motion';
import {
  FiMapPin, FiPhone, FiMail, FiGlobe, FiSend, FiCoffee,
} from 'react-icons/fi';
import usePortfolioStore from '../store/usePortfolioStore';
import { personalInfo } from '../data/portfolioData';

const contactCards = [
  {
    icon: FiMapPin,
    title: 'Address',
    value: `${personalInfo.address} (${personalInfo.zipCode})`,
    href: null,
  },
  {
    icon: FiPhone,
    title: 'Phone',
    value: '+91 9421825837',
    href: 'tel:+919421825837',
  },
  {
    icon: FiMail,
    title: 'Email',
    value: 'surajmurtadak@gmail.com',
    href: 'mailto:surajmurtadak@gmail.com',
  },
  {
    icon: FiGlobe,
    title: 'Website',
    value: 'surajmurtadak.com',
    href: '#',
  },
];

export default function Contact() {
  const { contactForm, updateContactForm, resetContactForm } = usePortfolioStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = contactForm;
    const mailtoLink = `mailto:surajmurtadak@gmail.com?subject=${encodeURIComponent(subject || 'Mail from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    resetContactForm();
  };

  return (
    <section id="contact" className="section bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Contact Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <card.icon size={22} />
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              {card.href ? (
                <a href={card.href} className="text-gray-400 text-sm hover:text-primary transition-colors break-all">
                  {card.value}
                </a>
              ) : (
                <p className="text-gray-400 text-sm">{card.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Buy Me a Coffee */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <a
            href={personalInfo.buyMeCoffeeLink}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <FiCoffee size={18} className="text-primary" />
            <span>Buy Me a Coffee</span>
          </a>
        </motion.div>

        {/* Form + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-5">
              <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
              <p className="text-gray-400 text-sm mb-6">Fill out the form below and your email client will open automatically.</p>

              <div>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => updateContactForm('name', e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) => updateContactForm('email', e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Subject"
                  value={contactForm.subject}
                  onChange={(e) => updateContactForm('subject', e.target.value)}
                />
              </div>
              <div>
                <textarea
                  className="form-input resize-none"
                  placeholder="Your Message"
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => updateContactForm('message', e.target.value)}
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
              >
                <FiSend size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* About image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden h-full min-h-[400px] lg:min-h-0"
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: 'url(/images/about.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
