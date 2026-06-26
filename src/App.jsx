import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Scene3D from './3d-components/Scene3D';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'var(--bg-color, #f0f4ff)', fontFamily: 'Space Grotesk' }}>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.97, 1, 0.97] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2rem', letterSpacing: '2px', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            LOADING...
          </h2>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <motion.div style={{
        scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
        transformOrigin: '0%', zIndex: 1000,
      }} />

      {/* 3D Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <Scene3D />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Internships />
          <Certifications />
          <Achievements />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
