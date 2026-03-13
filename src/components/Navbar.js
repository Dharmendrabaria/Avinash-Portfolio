import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiMonitor, FiBriefcase, FiUser, FiMail, FiMoon, FiSun, FiAperture } from 'react-icons/fi';
import './Navbar.css';

const sections = [
  { id: 'home', label: 'Home', icon: <FiAperture size={20} /> },
  { id: 'projects', label: 'Projects', icon: <FiBriefcase size={20} /> },
  { id: 'skills', label: 'Skills', icon: <FiMonitor size={20} /> },
  { id: 'services', label: 'Services', icon: <FiAperture size={20} /> },
  { id: 'gallery', label: 'Gallery', icon: <FiAperture size={20} /> },
  { id: 'about', label: 'About', icon: <FiUser size={20} /> },
  { id: 'contact', label: 'Contact', icon: <FiMail size={20} /> }
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section spy
      const current = sections.find(section => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 250;
        }
        return false;
      });
      if (current) setActive(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`navbar desktop-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => scrollTo('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* V shape underlying */}
            <path d="M50 85L85 25H65L50 51L35 25H15L50 85Z" fill="var(--accent-cyan)" />
            {/* A shape overlaying with stroke to create interlock */}
            <path d="M50 15L15 75H35L50 49L65 75H85L50 15Z" fill="white" stroke="var(--bg-primary)" strokeWidth="4" />
          </svg>
          <span className="logo-text" style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.4rem', letterSpacing: '1px' }}>AVINASH</span>
        </div>

        <ul className="nav-links">
          {sections.map(section => (
            <li key={section.id}>
              <button 
                className={`nav-link ${active === section.id ? 'active' : ''}`}
                onClick={() => scrollTo(section.id)}
              >
                {section.label}
                <div className="nav-dot"></div>
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button className="nav-hire-btn" onClick={() => scrollTo('contact')}>
            <span>Hire Me</span>
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav">
        {sections.map(section => (
          <button 
            key={section.id}
            className={`mobile-nav-item ${active === section.id ? 'active' : ''}`}
            onClick={() => scrollTo(section.id)}
          >
            {active === section.id && <div className="mobile-nav-indicator" />}
            {section.icon}
            <span>{section.label}</span>
          </button>
        ))}
        <button className="mobile-nav-item theme-btn" onClick={toggleTheme}>
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          <span>Theme</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
