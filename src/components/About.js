import React from 'react';
import { FiBriefcase, FiBook, FiAward, FiMapPin } from 'react-icons/fi';
import { useFadeInOnScroll } from '../context/ThemeContext';
import './About.css';

const timelineData = [
  {
    year: '2023',
    title: 'Started Designing',
    desc: 'Began the creative journey, mastering fundamentals of UI/UX design, typography, and visual communication.',
    icon: '🎨',
  },
  {
    year: '2024',
    title: 'Joined Urban Gujarat',
    desc: 'Took on the role of Creative Designer at Urban Gujarat, working on real-world projects and brand identity.',
    icon: '🏢',
  },
  {
    year: '2025',
    title: 'Built Multiple Projects',
    desc: 'Delivered 50+ design projects including apps, websites, brand identities, and social media campaigns.',
    icon: '🚀',
  },
];

const About = () => {
  const headerRef = useFadeInOnScroll();
  const profileRef = useFadeInOnScroll();
  const textRef = useFadeInOnScroll();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header fade-in-section" ref={headerRef}>
          <div className="section-tag">
            <FiAward size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">The Story Behind <span className="gradient-text">The Designer</span></h2>
          <p className="section-subtitle">
            Passionate about turning ideas into stunning visual experiences
          </p>
        </div>

        <div className="about-grid">
          {/* Profile Card */}
          <div className="profile-card glass-card fade-in-section" ref={profileRef}>
            <div className="profile-img-wrap">
              <img src="/avinash_profile.jpeg" alt="Avinash" className="profile-img" />
              <div className="profile-status">
                <span className="status-dot" />
                Available for work
              </div>
            </div>
            <div className="profile-info">
              <h3 className="profile-name">Avinash</h3>
              <p className="profile-role">Creative Designer</p>
              <div className="profile-details">
                <div className="profile-detail">
                  <FiBriefcase size={16} />
                  <span>Urban Gujarat</span>
                </div>
                <div className="profile-detail">
                  <FiBook size={16} />
                  <span>BCA – M.B Patel College</span>
                </div>
                <div className="profile-detail">
                  <FiAward size={16} />
                  <span>2+ Years Experience</span>
                </div>
                <div className="profile-detail">
                  <FiMapPin size={16} />
                  <span>Gujarat, India</span>
                </div>
              </div>
              <div className="profile-badges">
                <span className="p-badge figma">Figma Pro</span>
                <span className="p-badge ps">Photoshop</span>
                <span className="p-badge ai">Illustrator</span>
              </div>
            </div>
          </div>

          {/* About Text + Timeline */}
          <div className="about-content fade-in-section" ref={textRef}>
            <p className="about-text dropcap">
              Avinash is a <strong>passionate creative designer</strong> with two years of hands-on experience in crafting visually engaging and user-friendly designs. Currently working at <strong>Urban Gujarat</strong> while pursuing a <strong>Bachelor of Computer Applications</strong> from M.B Patel College, he focuses on building modern digital experiences with premium aesthetics and strong usability.
            </p>
            <p className="about-text">
              From clean brand identities to full-fledged app and website UI, Avinash brings a unique blend of <strong>technical precision</strong> and <strong>artistic creativity</strong> to every project he touches.
            </p>

            <h4 className="timeline-heading">My Journey</h4>
            <div className="timeline">
              {timelineData.map((item, i) => (
                <div key={i} className="timeline-item" style={{ transitionDelay: `${0.1 * i}s` }}>
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-line" />
                  <div className="timeline-body">
                    <span className="timeline-year">{item.year}</span>
                    <h5 className="timeline-title">{item.title}</h5>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
