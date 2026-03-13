import React, { useState } from 'react';
import { FiFolder, FiX, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { Tilt } from 'react-tilt';
import { useFadeInOnScroll } from '../context/ThemeContext';
import './Projects.css';

const defaultTiltOptions = {
	reverse:        false,
	max:            15,
	perspective:    1000,
	scale:          1.02,
	speed:          1000,
	transition:     true,
	axis:           null,
	reset:          true,
	easing:         "cubic-bezier(.03,.98,.52,.99)",
};

const projects = [
  {
    id: 1,
    title: 'Urban Gujarat App UI',
    category: 'Mobile App Design',
    tools: ['Figma', 'Adobe XD'],
    desc: "A comprehensive mobile application UI for Urban Gujarat's digital platform, focusing on seamless user navigation and a clean, modern aesthetic.",
    image: '/project_uiux_1773393498134.png',
    color: '#7c3aff',
    problem: 'Urban Gujarat needed a modern, user-friendly mobile interface to reach their digital audience effectively.',
    process: 'Conducted user research, created wireframes, and moved to high-fidelity prototyping using Figma. Focused on clear typography and accessible color palettes.',
    outcome: 'A beautiful, intuitive app interface that increased user engagement by 40% based on beta testing feedback.',
  },
  {
    id: 2,
    title: 'Fintech Dashboard',
    category: 'Web UI / UX',
    tools: ['Figma'],
    desc: 'An intuitive dashboard for a financial technology startup, providing users with clear data visualization and transaction management.',
    image: '/project_web_1773393536073.png',
    color: '#06d6f7',
    problem: 'Visualizing complex financial data in a way that is easy for non-expert users to understand.',
    process: 'Designed custom data charts and a clean layout hierarchy. Implemented a clear visual language for transactions.',
    outcome: 'A sleek dashboard that successfully simplified complex data into actionable insights for users.',
  },
  {
    id: 3,
    title: 'Eco-Brand Identity',
    category: 'Brand Identity',
    tools: ['Illustrator', 'Photoshop'],
    desc: 'Complete brand identity kit including logo, typography, and color palette for a sustainable eco-friendly product line.',
    image: '/project_brand_1773393520201.png',
    color: '#06d6a0',
    problem: 'Creating a brand that stands out in the crowded eco-market while communicating authenticity.',
    process: 'Brainstormed nature-inspired motifs, settled on a minimalist leaf design, and selected earthy yet vibrant colors.',
    outcome: 'A strong, recognizable brand identity that helped the product line secure retail partnerships.',
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Visual Design',
    tools: ['Photoshop', 'Figma'],
    desc: 'A series of highly engaging, visually cohesive social media posts designed for a lifestyle brand.',
    image: '/project_social_1773393551553.png',
    color: '#f72585',
    problem: 'The brand lacked visual consistency across their social channels, leading to low engagement.',
    process: 'Developed a collection of templates with dynamic layouts, bold typography, and consistent color usage.',
    outcome: 'Increased follower engagement by 60% and established a premium look for the brand on Instagram.',
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const headerRef = useFadeInOnScroll();
  const gridRef = useFadeInOnScroll();

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header fade-in-section" ref={headerRef}>
          <div className="section-tag">
            <FiFolder size={14} />
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            A selection of my best work across UI/UX, branding, and visual design.
          </p>
        </div>

        <div className="projects-grid fade-in-section" ref={gridRef}>
          {projects.map((project, index) => (
            <Tilt options={defaultTiltOptions} key={project.id}>
              <div 
                className="project-card"
                onClick={() => setSelectedProject(project)}
                style={{ transitionDelay: `${0.1 * index}s`, height: '100%' }}
              >
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay" style={{ background: `linear-gradient(to top, ${project.color}E6, rgba(0,0,0,0.2))` }}>
                    <div className="project-view-btn">View Case Study <FiArrowRight /></div>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-category" style={{ color: project.color }}>{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tools">
                    {project.tools.map(tool => (
                      <span key={tool} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <FiX size={24} />
            </button>
            <div className="modal-hero">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              <div className="modal-hero-overlay" style={{ background: `linear-gradient(to right, ${selectedProject.color}CC, transparent)` }} />
            </div>
            
            <div className="modal-body">
              <span className="modal-category" style={{ color: selectedProject.color }}>{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.desc}</p>
              
              <div className="modal-sections">
                <div className="modal-section">
                  <h4><span style={{color: selectedProject.color}}>01</span> Need / Problem</h4>
                  <p>{selectedProject.problem}</p>
                </div>
                <div className="modal-section">
                  <h4><span style={{color: selectedProject.color}}>02</span> Process</h4>
                  <p>{selectedProject.process}</p>
                </div>
                <div className="modal-section">
                  <h4><span style={{color: selectedProject.color}}>03</span> Outcome</h4>
                  <p>{selectedProject.outcome}</p>
                </div>
              </div>

              <a href="#!" className="btn-primary" style={{ background: selectedProject.color, boxShadow: `0 10px 30px ${selectedProject.color}60` }}>
                View Live Link <FiExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
