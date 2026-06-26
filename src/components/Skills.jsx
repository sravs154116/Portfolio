import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Languages', items: ['Java', 'Python'], icon: '💻' },
  { category: 'Core', items: ['OOP', 'Data Structures', 'DBMS'], icon: '🧠' },
  { category: 'Web Development', items: ['HTML', 'CSS'], icon: '🌐' },
  { category: 'AI/ML', items: ['Machine Learning', 'NLP', 'OCR', 'Generative AI'], icon: '🤖'},
  { category: 'Tools & Platforms', items: ['GitHub', 'VS Code', 'Jupyter', 'Hugging Face'], icon: '🛠️' },
  { category: 'Coding Platforms', items: ['HackerRank', 'LeetCode', 'CodePen'], icon: '🏆' },
  { category: 'Soft Skills', items: ['Problem solving', 'Team Collaboration', 'Communication', 'Leadership', 'Time Management'], icon: '🤝'}
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title glow-text">Skills Arsenal</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '40px' }}>
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{ padding: '30px', textAlign: 'center' }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{skillGroup.icon}</div>
              <h3 style={{ color: 'var(--accent-blue)', marginBottom: '20px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>
                {skillGroup.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                {skillGroup.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08, backgroundColor: 'rgba(66, 153, 225, 0.12)' }}
                    style={{
                      padding: '8px 18px',
                      background: 'rgba(66, 153, 225, 0.05)',
                      borderRadius: '8px',
                      border: '1px solid rgba(66, 153, 225, 0.15)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-color)',
                      cursor: 'default',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
