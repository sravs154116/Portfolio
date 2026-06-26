import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const Typewriter = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');
    let interval;
    const timer = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText((prev) => {
          if (prev.length < text.length) {
            return text.slice(0, prev.length + 1);
          }
          clearInterval(interval);
          return prev;
        });
      }, 80);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span>
      {displayText}
      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>
    </span>
  );
};

const TiltPhoto = () => {
  const [imgError, setImgError] = useState(false);
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000, rotateX, rotateY, transformStyle: 'preserve-3d', position: 'relative', width: '100%', display: 'flex', justifyContent: 'flex-end' }}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
    >
      {/* Decorative Glow */}
      <div style={{
        position: 'absolute',
        top: '10%', right: '5%',
        width: '80%', height: '80%',
        background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(60px)',
        zIndex: 0
      }} />

      {/* Photo card - Round profile image, adjusted size and glow */}
      <div style={{
        width: '400px', height: '400px', 
        borderRadius: '50%', overflow: 'hidden',
        position: 'relative', zIndex: 1,
        boxShadow: '0 0 60px rgba(66, 153, 225, 0.25)',
        border: '4px solid rgba(255,255,255,0.1)'
      }}>
        {imgError ? (
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--card-bg)' }}>
            <div style={{
              width: '120px', height: '120px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '3rem', fontWeight: 800, color: '#fff', fontFamily: 'Space Grotesk', marginBottom: '16px',
              boxShadow: '0 8px 24px rgba(66,153,225,0.3)'
            }}>SC</div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center', padding: '0 20px' }}>
              Add <strong>profile.jpg</strong> to<br /><strong>E:\portfolio\public\</strong>
            </p>
          </div>
        ) : (
          <img src="/profile.jpg" alt="Sravanthi Chillakuru" onError={() => setImgError(true)}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              objectPosition: 'center 10%'
            }} 
          />
        )}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section id="hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '100px 20px 60px' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '40px', width: '100%' }}>
        
        {/* Text Content - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3, delay: 0.2 }}
          style={{ flex: '1 1 45%', minWidth: '320px', textAlign: 'left', zIndex: 2 }}
        >
          <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ fontSize: '1.2rem', color: 'var(--accent-blue)', letterSpacing: '2px', fontWeight: 600, marginBottom: '10px' }}>
            Hi, I'm
          </motion.p>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '10px',
            color: 'var(--text-color)', fontFamily: 'Space Grotesk'
          }}>
            Sravanthi<br />Chillakuru
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--text-muted)', marginBottom: '30px', fontWeight: 400, fontFamily: 'Space Grotesk' }}>
            <Typewriter text="Java Developer // AI Enthusiast" delay={1200} />
          </h2>
          
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '30px' }}>
            <a href="#projects" style={{ textDecoration: 'none' }}><button className="btn-outline" style={{ padding: '12px 30px', fontSize: '1rem', borderRadius: '4px', border: '1px solid var(--text-color)', color: 'var(--text-color)' }}>View Works</button></a>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '10px' }}>
            <a href="https://github.com/sravs154116/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-blue)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#0077b5'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:sravanthireddy154116@gmail.com" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#ea4335'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              <FaEnvelope size={24} />
            </a>
            <a href="https://leetcode.com/u/Sravanthi_1211" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#f89f1b'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              <SiLeetcode size={24} />
            </a>
            <a href="https://www.hackerrank.com/profile/sravanthireddy36" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#2ec866'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              <SiHackerrank size={24} />
            </a>
          </div>
        </motion.div>

        {/* Image Content - Right Side */}
        <div style={{ flex: '1 1 45%', minWidth: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
           <TiltPhoto />
        </div>

      </div>
    </section>
  );
};

export default Hero;
