import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    let animationFrameId;

    const onMouseMove = (e) => {
      // Direct update for dot
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Prevent huge cursor from overlapping close buttons by hiding it completely
      if (target.closest('.modal-close') || target.closest('.lightbox-close') || target.closest('.lightbox-nav')) {
        setHidden(true);
        setHovered(false);
        return;
      } else {
        setHidden(false);
      }

      if (
        target.closest('.project-card') ||
        target.closest('.gallery-item')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    // Attach listener dynamically to all interactive elements
    const observer = new MutationObserver(() => {
      // Re-evaluate hover state dynamically
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      observer.disconnect();
    };
  }, []);

  // Don't show custom cursor on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div 
      className={`cursor-dot ${hovered ? 'cursor-hover' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        opacity: hidden ? 0 : 1,
        transition: hidden ? 'opacity 0.1s' : 'width 0.3s, height 0.3s, background 0.3s'
      }}
    />
  );
};

export default Cursor;
