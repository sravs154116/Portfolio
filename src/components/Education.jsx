import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <h2 className="section-title glow-text">Education</h2>
        
        <div style={{ maxWidth: '800px', margin: '40px auto 0', position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute', left: '30px', top: 0, bottom: 0, width: '3px',
            background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-purple))',
            borderRadius: '2px', zIndex: 0
          }} />

          {/* B.Tech */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', paddingLeft: '80px', marginBottom: '50px' }}
          >
            <div style={{
              position: 'absolute', left: '19px', top: '10px',
              width: '24px', height: '24px', borderRadius: '50%',
              background: '#fff', border: '4px solid var(--accent-blue)',
              zIndex: 1, boxShadow: '0 0 12px rgba(66,153,225,0.3)'
            }} />
            <div className="glass-panel" style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-color)', marginBottom: '6px' }}>B.Tech - Computer Science and Engineering</h3>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--accent-blue)', marginBottom: '12px', fontWeight: 600 }}>Narayana Engineering College Gudur</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 600 }}>
                CGPA: <span style={{ color: 'var(--accent-purple)', fontWeight: 800, fontSize: '1.1rem' }}>9.0</span>
              </p>
            </div>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative', paddingLeft: '80px', marginBottom: '50px' }}
          >
            <div style={{
              position: 'absolute', left: '19px', top: '10px',
              width: '24px', height: '24px', borderRadius: '50%',
              background: '#fff', border: '4px solid var(--accent-purple)',
              zIndex: 1, boxShadow: '0 0 12px rgba(237,137,54,0.3)'
            }} />
            <div className="glass-panel" style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-color)', marginBottom: '6px' }}>Intermediate - MPC</h3>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--accent-purple)', marginBottom: '12px', fontWeight: 600 }}>Narayana Juniour College Gudur</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 600 }}>
                CGPA: <span style={{ color: 'var(--accent-blue)', fontWeight: 800, fontSize: '1.1rem' }}>9.4</span>
              </p>
            </div>
          </motion.div>

          {/* SSC */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ position: 'relative', paddingLeft: '80px' }}
          >
            <div style={{
              position: 'absolute', left: '19px', top: '10px',
              width: '24px', height: '24px', borderRadius: '50%',
              background: '#fff', border: '4px solid var(--accent-blue)',
              zIndex: 1, boxShadow: '0 0 12px rgba(66,153,225,0.3)'
            }} />
            <div className="glass-panel" style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-color)', marginBottom: '6px' }}>SSC</h3>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--accent-blue)', marginBottom: '12px', fontWeight: 600 }}>Sri Chaitanya Techno School Gudur</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 600 }}>
                CGPA: <span style={{ color: 'var(--accent-purple)', fontWeight: 800, fontSize: '1.1rem' }}>10.0</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
