import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiMonitor, FiBriefcase, FiUser, FiMail, FiMoon, FiSun, FiHome } from 'react-icons/fi';
import Magnetic from './Magnetic';
import './Navbar.css';

// All sections for desktop nav
const allSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' }
];

// Only 5 items for mobile bottom nav - in correct order
const mobileSections = [
  { id: 'home', label: 'Home', icon: <FiHome size={22} /> },
  { id: 'about', label: 'About', icon: <FiUser size={22} /> },
  { id: 'skills', label: 'Skills', icon: <FiMonitor size={22} /> },
  { id: 'projects', label: 'Projects', icon: <FiBriefcase size={22} /> },
  { id: 'contact', label: 'Contact', icon: <FiMail size={22} /> }
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section spy
      const current = allSections.find(section => {
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
        <div className="nav-logo" onClick={() => scrollTo('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 85L85 25H65L50 51L35 25H15L50 85Z" fill="var(--accent-cyan)" />
            <path d="M50 15L15 75H35L50 49L65 75H85L50 15Z" fill="var(--text-primary)" stroke="var(--bg-primary)" strokeWidth="4" />
          </svg>
          <span className="logo-text" style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.4rem', letterSpacing: '1px' }}>AVINASH</span>
        </div>

        <ul className="nav-links">
          {allSections.map(section => (
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
          <Magnetic>
            <button className="nav-hire-btn" onClick={() => scrollTo('contact')}>
              <span>Hire Me</span>
            </button>
          </Magnetic>
        </div>
      </nav>

      {/* Mobile Top Header Bar */}
      <div className="mobile-top-bar">
        <div className="mobile-top-logo" onClick={() => scrollTo('home')} style={{cursor: 'pointer'}}>
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 85L85 25H65L50 51L35 25H15L50 85Z" fill="var(--accent-cyan)" />
            <path d="M50 15L15 75H35L50 49L65 75H85L50 15Z" fill="var(--text-primary)" stroke="var(--bg-primary)" strokeWidth="4" />
          </svg>
          <span className="mobile-top-name">AVINASH</span>
        </div>
        <div className="mobile-top-actions">
          <button className="mobile-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <Magnetic>
            <button className="mobile-hire-btn" onClick={() => scrollTo('contact')}>
              Hire Me
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Only 5 items, correct order */}
      <nav className="mobile-nav">
        {mobileSections.map(section => (
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
      </nav>
    </>
  );
};

export default Navbar;
