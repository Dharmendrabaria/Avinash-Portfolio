import React, { useState } from 'react';
import { FiMail, FiMessageCircle, FiPhoneCall, FiSend, FiLoader } from 'react-icons/fi';
import { useFadeInOnScroll } from '../context/ThemeContext';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const headerRef = useFadeInOnScroll();
  const formRef = useFadeInOnScroll();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    
    // Create a professional message format
    const rawMessage = `Hello Avinash,

I am ${formData.name}. I am highly interested in your design portfolio and would like to discuss a potential project or opportunity with you.

Details:
${formData.message}

Please reach out to me at your earliest convenience at: ${formData.email}.

Best Regards,
${formData.name}`;

    const textEncoded = encodeURIComponent(rawMessage);
    
    // Small delay to show the "Sending..." button state for UI feedback
    setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage('Message generated successfully! Redirecting to WhatsApp...');
        
        // Use the universal WhatsApp deep link that handles both mobile apps and desktop web perfectly
        const waLink = `https://api.whatsapp.com/send?phone=918799462715&text=${textEncoded}`;
        window.open(waLink, '_blank');
        
        setFormData({ name: '', email: '', message: '' });

        // Clear the success message after 6 seconds
        setTimeout(() => setSuccessMessage(''), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="section-header fade-in-section center" ref={headerRef} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-tag" style={{ borderColor: 'rgba(6,214,160,0.25)', color: 'var(--accent-green)', background: 'rgba(6,214,160,0.1)', margin: '0 auto 22px' }}>
            <FiMail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's <span className="gradient-text" style={{background: 'linear-gradient(135deg, var(--accent-green), var(--accent-cyan))', WebkitBackgroundClip: 'text'}}>Connect</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Looking for a creative designer? Let's discuss your next big idea.
          </p>
        </div>

        <div className="contact-wrapper fade-in-section" ref={formRef}>
          {/* Quick Connect Cards */}
          <div className="quick-connect">
            <h3 className="contact-heading">Direct Channels</h3>
            
            <a href="https://wa.me/918799462715" target="_blank" rel="noreferrer" className="contact-card whatsapp">
              <div className="c-icon"><FiMessageCircle size={28} /></div>
              <div className="c-info">
                <h4>WhatsApp</h4>
                <span>+91 87994 62715</span>
              </div>
            </a>

            <a href="mailto:avinash@example.com" className="contact-card email">
              <div className="c-icon"><FiMail size={28} /></div>
              <div className="c-info">
                <h4>Email</h4>
                <span>avinash@example.com</span>
              </div>
            </a>

            <a href="sms:+918799462715" className="contact-card sms">
              <div className="c-icon"><FiPhoneCall size={28} /></div>
              <div className="c-info">
                <h4>SMS / Call</h4>
                <span>+91 87994 62715</span>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container glass-card">
            <h3 className="contact-heading">Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <input 
                  type="text" name="name" id="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder=" " 
                />
                <label htmlFor="name">Your Name</label>
                <div className="input-glow"></div>
              </div>

              <div className="input-group">
                <input 
                  type="email" name="email" id="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder=" " 
                />
                <label htmlFor="email">Email Address</label>
                <div className="input-glow"></div>
              </div>

              <div className="input-group">
                <textarea 
                  name="message" id="message" required rows="5"
                  value={formData.message} onChange={handleChange}
                  placeholder=" " 
                ></textarea>
                <label htmlFor="message">Project Details</label>
                <div className="input-glow"></div>
              </div>

              <button type="submit" className="btn-primary form-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><FiLoader className="spin" /> Processing...</>
                ) : (
                  <>Send Message <FiSend size={18} /></>
                )}
              </button>

              {successMessage && (
                <div className="form-success-msg" style={{ marginTop: '20px', padding: '15px', borderRadius: '10px', background: 'rgba(6,214,160,0.1)', border: '1px solid rgba(6,214,160,0.3)', color: 'var(--accent-green)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px', animation: 'fadeIn 0.4s forwards' }}>
                  <FiMessageCircle size={20} />
                  <span>{successMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
