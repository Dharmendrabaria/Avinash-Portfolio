import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Magnetic({ children }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Disable magnetic effect on touch devices / mobile where mouseMove doesn't make sense
      const checkMobile = () => {
        setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const mouseMove = (e) => {
        if (isMobile) return;
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        
        // Calculate distance from center of element
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        
        // We multiply by a factor to control how far it stretches (0.2 = mild pull)
        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    if (isMobile) {
      return <>{children}</>;
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
            style={{ display: 'inline-block' }}
        >
            {children}
        </motion.div>
    );
}
