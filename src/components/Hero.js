import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiChevronDown } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from 'react-type-animation';
import Magnetic from './Magnetic';
import './Hero.css';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Enhancements */}
      {/* Interactive Cyberpunk Particles Background */}
      <div className="hero-bg">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false, zIndex: 0 },
            fpsLimit: 60, /* Lowered for better performance */
            interactivity: {
              events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" }, resize: true },
              modes: { push: { quantity: 2 }, repulse: { distance: 80, duration: 0.4 } },
            },
            particles: {
              color: { value: ["#06d6f7", "#6200ea"] },
              links: { color: "random", distance: 120, enable: true, opacity: 0.1, width: 1 },
              move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
              number: { density: { enable: true, area: 800 }, value: 40 }, /* Reduced particle count */
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
          }}
          className="interactive-particles"
        />
        <div className="hero-glow-orb purple-orb" style={{opacity: 0.5}}></div>
        <div className="hero-glow-orb cyan-orb" style={{opacity: 0.5}}></div>
      </div>

      <div className="hero-content">
        {/* Left side — split into top and bottom for mobile ordering */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* === TOP BLOCK: tag + name + roles + stats === */}
          <div className="hero-top-block">
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
          </div>

          {/* === MOBILE IMAGE SLOT — image renders here on mobile via CSS === */}
          <div className="hero-mobile-image-slot">
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-image-polygon">
                <img src="/avinash_profile.jpeg" alt="Avinash" className="hero-img-inner" />
              </div>
              <div className="hero-image-border"></div>
            </motion.div>
          </div>

          {/* === BOTTOM BLOCK: quote + buttons === */}
          <div className="hero-bottom-block">
            <motion.div className="hero-quote-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}>
              <span className="hero-quote">
                <TypeAnimation
                  sequence={[
                    'Building digital experiences that matter.', 3000,
                    'Design is intelligence made visible.', 3000,
                    'Simplifying the complex through design.', 3000,
                    'Crafting pixel-perfect visual stories.', 3000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Magnetic>
                <button className="btn-primary" onClick={() => scrollTo('projects')}>
                  View Projects <FiArrowRight size={18} />
                </button>
              </Magnetic>
              <Magnetic>
                <button className="btn-secondary" onClick={() => scrollTo('contact')}>
                  Contact Me <FiMail size={18} />
                </button>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - profile image (DESKTOP only, hidden on mobile) */}
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
