import React from 'react';
import { FiHeart, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Avinash</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Creative Designer crafting digital experiences that inspire and engage.
            </p>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                <FiGithub size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                <FiInstagram size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Navigate</h4>
            <ul>
              {['home','about','skills','projects','services','gallery','contact'].map(id => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              {['UI/UX Design','Website Design','Mobile App Design','Logo Design','Brand Identity','Social Media'].map(s => (
                <li key={s}><span>{s}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Avinash. All rights reserved.
          </p>
          <p>
            Made with <FiHeart size={13} style={{ color: '#ff3a8c', display: 'inline' }} /> in Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
