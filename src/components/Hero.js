import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiChevronDown } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import './Hero.css';

// No GlitchText component needed anymore

const DESIGN_QUOTES = [
  "Building digital experiences that matter.",
  "Design is intelligence made visible.",
  "Simplifying the complex through design.",
  "Crafting pixel-perfect visual stories."
];

const Hero = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % DESIGN_QUOTES.length;
      if (quoteRef.current) {
        quoteRef.current.style.opacity = '0';
        quoteRef.current.style.transform = 'translateY(10px)';
        setTimeout(() => {
          if (quoteRef.current) {
            quoteRef.current.textContent = DESIGN_QUOTES[idx];
            quoteRef.current.style.opacity = '1';
            quoteRef.current.style.transform = 'translateY(0)';
          }
        }, 400);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Enhancements */}
      <div className="hero-bg">
        <div className="hero-noise"></div>
        <div className="hero-rays"></div>
        <div className="hero-glow-orb purple-orb"></div>
        <div className="hero-glow-orb cyan-orb"></div>
      </div>

      <div className="hero-content">
        {/* Left side */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-tag">
            <HiSparkles size={16} />
            <span>Creative Designer</span>
          </div>

          <div className="hero-greeting-wrap">
            <span className="hero-greeting-hand">Creative Designer</span>
          </div>

          <div className="hero-name-wrap">
            <h1 className="hero-name">
              Avi<span className="highlight">nash</span>
            </h1>
          </div>

          <motion.div
            className="hero-roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="role-badge">UI/UX Designer</div>
            <div className="role-dot"></div>
            <div className="role-badge">Brand Strategist</div>
            <div className="role-dot"></div>
            <div className="role-badge">Visual Artist</div>
          </motion.div>

          <motion.div className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ease: "easeOut" }}>
            <div className="hero-stat-card">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-num">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-num">U.G.</span>
              <span className="stat-label">Urban Gujarat</span>
            </div>
          </motion.div>

          <motion.div className="hero-quote-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}>
            <span className="hero-quote" ref={quoteRef}>{DESIGN_QUOTES[0]}</span>
          </motion.div>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View Projects <FiArrowRight size={18} />
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Contact Me <FiMail size={18} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right side - profile image */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-image-container">
            <div className="hero-image-polygon">
              <img src="/avinash_profile.jpeg" alt="Avinash" className="hero-img-inner" />
            </div>
            <div className="hero-image-border"></div>
            
            {/* Custom floating pills */}
            <motion.div className="hero-pill pill-1"
              animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}>
              <div className="pill-color" style={{background: 'var(--accent-purple)'}}></div>
              <span>UI/UX Master</span>
            </motion.div>

            <motion.div className="hero-pill pill-2"
              animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}>
              <div className="pill-color" style={{background: 'var(--accent-cyan)'}}></div>
              <span>Figma Pro</span>
            </motion.div>

            <motion.div className="hero-pill pill-3"
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}>
              <div className="pill-color" style={{background: 'var(--accent-pink)'}}></div>
              <span>Visual Design</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-indicator"
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <FiChevronDown size={28} />
      </motion.button>
    </section>
  );
};

export default Hero;
