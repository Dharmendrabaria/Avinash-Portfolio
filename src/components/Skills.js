import React from 'react';
import { FiTarget } from 'react-icons/fi';
import { Tilt } from 'react-tilt';
import { useFadeInOnScroll } from '../context/ThemeContext';
import './Skills.css';

const defaultTiltOptions = {
	reverse:        false,
	max:            15,
	perspective:    1000,
	scale:          1.05,
	speed:          1000,
	transition:     true,
	axis:           null,
	reset:          true,
	easing:         "cubic-bezier(.03,.98,.52,.99)",
};

const designSkills = [
  { name: 'UI/UX Design', percent: 95, color: '#8b5cf6' },
  { name: 'Wireframing', percent: 90, color: '#06d6f7' },
  { name: 'Prototyping', percent: 85, color: '#f72585' },
  { name: 'Brand Identity', percent: 88, color: '#ffd166' },
  { name: 'Visual Hierarchy', percent: 92, color: '#06d6a0' },
];

const tools = [
  { name: 'Figma', icon: '🎨', level: 'Expert', percent: 96 },
  { name: 'Adobe XD', icon: '⚡', level: 'Advanced', percent: 85 },
  { name: 'Photoshop', icon: '📸', level: 'Advanced', percent: 80 },
  { name: 'Illustrator', icon: '✒️', level: 'Intermediate', percent: 75 },
];

const CircularProgress = ({ percent, color, delay }) => {
  const ref = useFadeInOnScroll();
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="circular-progress-wrap fade-in-section" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <svg className="circular-svg" width="120" height="120">
        <circle className="circle-bg" cx="60" cy="60" r="45" strokeWidth="6" />
        <circle 
          className="circle-progress" 
          cx="60" cy="60" r="45" strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          stroke={color}
          style={{ filter: `drop-shadow(0 0 10px ${color}80)` }}
        />
      </svg>
      <div className="circular-value" style={{ color: color }}>
        {percent}%
      </div>
    </div>
  );
};

const ToolCard = ({ tool, index }) => {
  const ref = useFadeInOnScroll();
  return (
    <Tilt options={defaultTiltOptions}>
      <div className="tool-card glass-card fade-in-section" ref={ref} style={{ transitionDelay: `${0.1 * index}s`, height: '100%' }}>
        <CircularProgress percent={tool.percent} color="var(--accent-purple)" delay={0} />
        <h4 className="tool-name">{tool.icon} {tool.name}</h4>
        <span className="tool-level">{tool.level}</span>
      </div>
    </Tilt>
  );
};

const Skills = () => {
  const headerRef = useFadeInOnScroll();
  const barsRef = useFadeInOnScroll();

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        <div className="section-header fade-in-section" ref={headerRef}>
          <div className="section-tag">
            <FiTarget size={14} />
            <span>My Arsenal</span>
          </div>
          <h2 className="section-title">Design <span className="gradient-text">Excellence</span></h2>
          <p className="section-subtitle">
            Tools and techniques I use to translate concepts into pixel-perfect realities.
          </p>
        </div>

        <div className="skills-wrapper">
          {/* Circular Skills (Tools) */}
          <div className="skills-circular-grid">
            {tools.map((tool, index) => (
              <ToolCard key={index} tool={tool} index={index} />
            ))}
          </div>

          {/* Linear Skills (Disciplines) */}
          <div className="skills-linear-list fade-in-section" ref={barsRef}>
            <h3 className="linear-skills-title">Core Disciplines</h3>
            {designSkills.map((skill, index) => (
              <div key={index} className="skill-bar-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct" style={{ color: skill.color }}>{skill.percent}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div 
                    className="skill-bar-fill" 
                    style={{ width: `${skill.percent}%`, background: skill.color, boxShadow: `0 0 15px ${skill.color}60` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
