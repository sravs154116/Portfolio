import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaGithub, FaHtml5, FaDatabase } from 'react-icons/fa';
import { SiJupyter, SiHuggingface } from 'react-icons/si';
import { Code2, Brain, Globe, Wrench } from 'lucide-react';

const about = {
  summary: `I am a final-year B.Tech (CSE) student at Narayana Engineering College with a CGPA of 9.0/10. I am passionate about Artificial Intelligence, Machine Learning, Java, and Full-Stack Web Development. Through six industry internships, I have built AI-powered solutions in healthcare, cybersecurity, education, and disaster management, strengthening my problem-solving, software development, and deployment skills. I enjoy creating intelligent, scalable applications that solve real-world problems.`,
  highlights: [
    { icon: <FaJava size={24} />, label: 'Core Java Developer', color: '#e34c26' },
    { icon: <FaPython size={24} />, label: 'Python & ML', color: '#3572A5' },
    { icon: <Brain size={24} />, label: 'DSA & OOPs', color: '#7c3aed' },
    { icon: <Globe size={24} />, label: 'AI/ML Projects', color: '#2563eb' },
  ]
};

const About = () => {
  return (
    <section id="about" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <h2 className="section-title glow-text">About Me</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start', marginTop: '40px' }}>
          
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel"
            style={{ padding: '40px' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent-blue)' }}>
              👋 Who I Am
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-muted)' }}>
              {about.summary}
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {about.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="glass-panel"
                style={{ padding: '28px 20px', textAlign: 'center' }}
              >
                <div style={{ color: h.color, marginBottom: '12px' }}>{h.icon}</div>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-color)' }}>{h.label}</p>
              </motion.div>
            ))}

            {/* Location & Education quick info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel"
              style={{ padding: '20px', gridColumn: '1 / -1' }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</p>
                  <p style={{ fontWeight: 700, color: 'var(--text-color)' }}>📍 Gudur, Andhra Pradesh</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>CGPA</p>
                  <p style={{ fontWeight: 700, color: 'var(--accent-purple)' }}>⭐ 9.0 / 10</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Internships</p>
                  <p style={{ fontWeight: 700, color: 'var(--accent-blue)' }}>🏢 6 Companies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
