import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = ['About', 'Projects', 'Skills', 'Experience', 'Certifications', 'Achievements', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        padding: '16px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        zIndex: 100,
        background: scrolled ? 'rgba(240, 244, 255, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(66,153,225,0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="glow-text" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Space Grotesk' }}>
        SC.
      </div>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: 'var(--text-color)', textDecoration: 'none', fontSize: '0.85rem',
              fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px',
              transition: 'color 0.3s'
            }}
            onMouseOver={e => e.target.style.color = 'var(--accent-blue)'}
            onMouseOut={e => e.target.style.color = 'var(--text-color)'}
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
