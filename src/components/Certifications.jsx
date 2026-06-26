import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  { name: 'Introduction to Generative AI', org: 'Microsoft Azure', color: '#0ea5e9' },
  { name: 'Introduction to Generative AI', org: 'ServiceNow', color: '#ea580c' },
  { name: 'Python for Beginners: Variables & Strings', org: 'Coursera', color: '#2563eb' },
  { name: 'Concepts in Python: Loops, Functions & Returns', org: 'Coursera', color: '#2563eb' },
  { name: 'Python for Non-Programmers', org: 'LinkedIn Learning', color: '#0a66c2' },
  { name: 'Artificial Intelligence for All', org: 'Infosys Springboard', color: '#7c3aed' },
  { name: 'Concepts of Java', org: 'Infosys Springboard', color: '#7c3aed' },
  { name: 'Java (Basics)', org: 'HackerRank', color: '#16a34a' },
  { name: 'Mastering Web Design: HTML, CSS & Gen AI', org: 'Udemy', color: '#a855f7' },
  { name: 'Introduction to HTML', org: 'Coursera', color: '#2563eb' },
  { name: 'High Impact Presentation', org: 'Infosys Springboard', color: '#7c3aed' },
  { name: 'Time Management', org: 'Infosys Springboard', color: '#7c3aed' },
  { name: 'English for Competitive Exams', org: 'NPTEL', color: '#dc2626' },
  { name: 'Renewable Energy Engineering', org: 'NPTEL', color: '#dc2626' },
  { name: 'Quantum Fundamentals Program (Phase 1)', org: 'Wiser', color: '#0891b2' },
  { name: 'Quantum Algorithms & Hands-on Training (Phase 2)', org: 'Wiser', color: '#0891b2' },
  { name: 'Quantum Computing & Qiskit', org: 'NPTEL', color: '#dc2626' }
];

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-title glow-text">Certifications</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '16px',
          marginTop: '40px'
        }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.06 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="glass-panel"
              style={{
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                borderLeft: `3px solid ${cert.color}`,
                transition: 'box-shadow 0.3s'
              }}
            >
              <FaCertificate style={{ color: cert.color, fontSize: '1.3rem', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-color)', fontWeight: 600, lineHeight: 1.4, margin: 0 }}>
                  {cert.name}
                </p>
                <p style={{ fontSize: '0.78rem', color: cert.color, fontWeight: 700, margin: 0, marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {cert.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
