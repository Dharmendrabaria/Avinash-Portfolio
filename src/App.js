import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// PWA Install Prompt Component
const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show prompt after a delay for better UX
      setTimeout(() => setShowPrompt(true), 5000);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User installed the PWA');
    }
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => setShowPrompt(false);

  if (!showPrompt) return null;

  return (
    <div className="install-prompt fade-in-section is-visible">
      <div className="pwa-icon">📱</div>
      <p><strong>Install Avinash's Portfolio</strong> for a better, app-like experience.</p>
      <div className="install-prompt-btns">
        <button className="install-btn dismiss" onClick={handleDismiss}>Later</button>
        <button className="install-btn confirm" onClick={handleInstall}>Install App</button>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let interval;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.floor(Math.random() * 15) + 5;
          return next > 100 ? 100 : next;
        });
      }, 150);
    } else {
      setTimeout(() => setFadeOut(true), 400);
      setTimeout(() => setLoading(false), 1200);
    }
    return () => clearInterval(interval);
  }, [progress]);

  if (loading) {
    return (
      <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
        <svg className="loading-logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 85L85 25H65L50 51L35 25H15L50 85Z" fill="var(--accent-cyan)" />
          <path d="M50 15L15 75H35L50 49L65 75H85L50 15Z" fill="white" stroke="var(--bg-primary)" strokeWidth="4" />
        </svg>
        
        <div className="loading-bar-wrap">
          <div className="loading-bar" style={{ width: `${progress}%`, transition: 'width 0.2s ease-out' }}></div>
        </div>
        
        <div className="loading-counter">{progress}%</div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <InstallPrompt />
    </ThemeProvider>
  );
}

export default App;
