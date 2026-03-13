import React from 'react';
import { FiMessageSquare, FiStar } from 'react-icons/fi';
import { useFadeInOnScroll } from '../context/ThemeContext';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Marketing Director, Urban Gujarat',
    text: "Avinash completely transformed our digital presence. His eye for detail and understanding of modern aesthetics is unmatched. A true professional.",
    rating: 5,
    avatar: '👩‍💼',
    color: '#8b5cf6'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Founder, EcoCraft',
    text: "Working with Avinash was a breeze. He took our vague ideas and turned them into a stunning, cohesive brand identity. Highly recommended!",
    rating: 5,
    avatar: '👨‍💻',
    color: '#06d6a0'
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Product Manager, FinTech Solutions',
    text: "Rarely do you find a designer who understands both beautiful aesthetics and functional UX. Avinash delivered a dashboard that our users actually love.",
    rating: 5,
    avatar: '👩‍🔬',
    color: '#06d6f7'
  }
];

const Testimonials = () => {
  const headerRef = useFadeInOnScroll();
  const gridRef = useFadeInOnScroll();

  return (
    <section id="testimonials" className="test-section">
      <div className="container">
        <div className="section-header fade-in-section center" ref={headerRef} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-tag" style={{ borderColor: 'rgba(255,209,102,0.25)', color: 'var(--accent-gold)', background: 'rgba(255,209,102,0.1)', margin: '0 auto 22px' }}>
            <FiMessageSquare size={14} />
            <span>Client Kind Words</span>
          </div>
          <h2 className="section-title">What <span className="gradient-text" style={{background: 'linear-gradient(135deg, var(--accent-gold), var(--accent-purple))', WebkitBackgroundClip: 'text'}}>They Say</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Feedback from people I've had the pleasure of working with.
          </p>
        </div>

        <div className="test-grid fade-in-section" ref={gridRef}>
          {testimonials.map((test, index) => (
            <div 
              key={test.id} 
              className="test-card glass-card"
              style={{ transitionDelay: `${0.15 * index}s` }}
            >
              <div className="quote-mark" style={{ color: test.color }}>&ldquo;</div>
              <div className="stars">
                {[...Array(test.rating)].map((_, i) => (
                  <FiStar key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
                ))}
              </div>
              <p className="test-text">{test.text}</p>
              
              <div className="test-author">
                <div className="author-avatar" style={{ border: `2px solid ${test.color}` }}>
                  {test.avatar}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{test.name}</h4>
                  <span className="author-role">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
