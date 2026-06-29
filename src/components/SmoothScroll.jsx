import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import usePortfolioStore from '../store/usePortfolioStore.js';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    // Connect Lenis scroll to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // --- GSAP ScrollTrigger Animations ---

    // Animate all sections on scroll
    const sections = document.querySelectorAll('.section, section');
    sections.forEach((section) => {
      // Fade-in children elements
      const animatable = section.querySelectorAll(
        'h2, h3, p, .glass-card, .glass-card > *, .btn-primary, .btn-outline, .grid > div'
      );

      gsap.fromTo(
        animatable,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Parallax effect for ambient glow blobs
    const glowBlobs = document.querySelectorAll('[class*="blur-[1"]');
    glowBlobs.forEach((blob) => {
      gsap.to(blob, {
        y: -60,
        scrollTrigger: {
          trigger: blob.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    });

    // --- Navbar Active Section Sync via ScrollTrigger ---
    const sectionIds = ['home', 'about', 'resume', 'services', 'skills', 'projects', 'contact'];
    const { setActiveSection, setNavScrolled } = usePortfolioStore.getState();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    // Navbar scroll state
    ScrollTrigger.create({
      start: 80,
      onUpdate: (self) => {
        setNavScrolled(self.scroll() > 80);
      },
    });

    // Expose scrollTo for navigation links
    window.__lenis = lenis;

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove(lenis.raf);
      delete window.__lenis;
    };
  }, []);

  return children;
}

// Utility: scroll to a section using Lenis
export function lenisScrollTo(target, offset = -80) {
  if (window.__lenis) {
    window.__lenis.scrollTo(target, { offset, duration: 1.2 });
  } else {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
