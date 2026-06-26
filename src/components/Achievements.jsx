import React from 'react';
import { motion } from 'framer-motion';

const achievementsData = [
  { emoji: '🥇', title: '1st Prize', event: 'NECPEC-2K26 National Project Expo', highlight: true },
  { emoji: '🥈', title: '2nd Prize', event: 'TECHNOGYAN-2K26 (24-hour Hackathon)', highlight: true },
  { emoji: '🥉', title: '3rd Prize', event: 'BUILD-A-THON – GDG NECN', highlight: true },
  { emoji: '🏆', title: 'Participant', event: 'AI for Bharat Hackathon – AWS' },
  { emoji: '🏆', title: 'Participant', event: 'Smart India Hackathon' },
  { emoji: '🏆', title: 'Participant', event: 'Amazon ML Challenge' },
  { emoji: '🏆', title: 'Participant', event: 'Tata Crucible Campus Quiz 2025' },
  { emoji: '🏅', title: 'Badge', event: 'Duelist & Warrior Badges – Infosys Springboard' },
  { emoji: '🏅', title: 'Gold Badge', event: 'Java – HackerRank' },
  { emoji: '🌟', title: 'Certified', event: 'AI Fundamentals – IBM SkillsBuild' },
  { emoji: '🌟', title: 'Badge', event: 'Overview of AI – FutureSkills Prime' },
  { emoji: '🎯', title: 'Cohort 7', event: 'Pragati: Path to Future Program' },
];

const Achievements = () => {
  return (
    <section id="achievements">
      <div className="container">
        <h2 className="section-title glow-text">Achievements</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-panel"
              style={{
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                borderLeft: item.highlight ? '4px solid var(--accent-blue)' : '4px solid var(--accent-purple)',
                background: item.highlight
                  ? 'linear-gradient(90deg, rgba(66,153,225,0.06) 0%, rgba(255,255,255,0.85) 100%)'
                  : undefined
              }}
            >
              <span style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>{item.emoji}</span>
              <div>
                <p style={{ fontWeight: 800, color: item.highlight ? 'var(--accent-blue)' : 'var(--accent-purple)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                  {item.title}
                </p>
                <p style={{ color: 'var(--text-color)', fontWeight: 600, lineHeight: 1.4 }}>{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
