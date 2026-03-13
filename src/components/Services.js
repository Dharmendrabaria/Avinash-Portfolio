import React from 'react';
import { FiLayers, FiFeather, FiSmartphone, FiMonitor, FiArrowRight } from 'react-icons/fi';
import { useFadeInOnScroll } from '../context/ThemeContext';
import './Services.css';

const services = [
  {
    icon: <FiLayers size={32} />,
    title: 'UI/UX Design',
    desc: 'Creating intuitive, user-centered interfaces for web and mobile applications with a focus on seamless user journeys.',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2), transparent)',
    color: '#8b5cf6'
  },
  {
    icon: <FiFeather size={32} />,
    title: 'Brand Identity',
    desc: 'Developing comprehensive branding packages including logos, typography, color palettes, and brand guidelines.',
    gradient: 'linear-gradient(135deg, rgba(6,214,247,0.2), transparent)',
    color: '#06d6f7'
  },
  {
    icon: <FiSmartphone size={32} />,
    title: 'Mobile App Design',
    desc: 'Designing engaging iOS and Android application interfaces that feel native, modern, and highly responsive.',
    gradient: 'linear-gradient(135deg, rgba(247,37,133,0.2), transparent)',
    color: '#f72585'
  },
  {
    icon: <FiMonitor size={32} />,
    title: 'Web Design',
    desc: 'Crafting pixel-perfect, responsive websites that look beautiful on any screen size and device.',
    gradient: 'linear-gradient(135deg, rgba(255,209,102,0.2), transparent)',
    color: '#ffd166'
  }
];

const Services = () => {
  const headerRef = useFadeInOnScroll();

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header fade-in-section" ref={headerRef}>
          <div className="section-tag" style={{ borderColor: 'rgba(6,214,247,0.25)', color: 'var(--accent-cyan)', background: 'rgba(6,214,247,0.1)' }}>
            <FiLayers size={14} />
            <span>Specializations</span>
          </div>
          <h2 className="section-title">Design <span className="gradient-text" style={{background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))', WebkitBackgroundClip: 'text'}}>Solutions</span></h2>
          <p className="section-subtitle">
            I offer a wide range of design services to help businesses and individuals create impactful digital experiences.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const ref = useFadeInOnScroll();
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      className="service-card fade-in-section" 
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ transitionDelay: `${0.1 * index}s`, background: service.gradient }}
    >
      <div 
        className="service-spotlight" 
        style={{ left: mousePos.x, top: mousePos.y, background: `radial-gradient(circle at center, ${service.color}40 0%, transparent 60%)` }}
      />
      <div className="service-content">
        <div className="service-icon" style={{ color: service.color, textShadow: `0 0 20px ${service.color}80` }}>
          {service.icon}
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.desc}</p>
        <div className="service-arrow" style={{ color: service.color }}>
          <FiArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default Services;
