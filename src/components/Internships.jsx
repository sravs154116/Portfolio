import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const internships = [
  {
    company: 'Shell – Edunet Foundation',
    badge: 'AICTE Skills4Future',
    badgeColor: '#16a34a',
    project: 'Cyclone Intensity Prediction',
    description: [
      'Developed a machine learning model to predict cyclone intensity for disaster preparedness.',
      'Performed data preprocessing, visualization, model building, and evaluation.',
      'Deployed using Streamlit with interactive visualizations (Predicted vs Actual, trend graphs).'
    ],
    tech: ['Python', 'ML', 'Streamlit'],
    github: 'https://github.com/sravs154116/'
  },
  {
    company: 'IBM SkillsBuild – Edunet Foundation',
    badge: 'IBM',
    badgeColor: '#1d4ed8',
    project: 'Lecture Video to Notes Generator',
    description: [
      'Built an AI application to convert lecture videos into structured notes.',
      'Implemented speech-to-text, NLP summarization, and key-point extraction.',
      'Designed a clean and user-friendly interface.'
    ],
    tech: ['Python', 'NLP', 'Speech Processing'],
    github: 'https://github.com/sravs154116/'
  },
  {
    company: 'Microsoft Azure – AICTE',
    badge: 'Microsoft Elevate',
    badgeColor: '#0ea5e9',
    project: 'Medical Report Summarizer',
    description: [
      'Developed an AI-based system to summarize medical reports.',
      'Integrated OCR for text extraction and transformer-based NLP models.',
      'Enabled multilingual translation and voice output.',
      'Deployed on Hugging Face Spaces.'
    ],
    tech: ['Python', 'NLP', 'OCR', 'Azure'],
    github: 'https://github.com/sravs154116/'
  },
  {
    company: 'VOIS – Vodafone Intelligent Solutions',
    badge: 'VOIS',
    badgeColor: '#dc2626',
    project: 'AI-Based Network Intrusion Detection System',
    description: [
      'Built a cybersecurity solution using Random Forest for DDoS detection.',
      'Integrated Generative AI for intelligent threat explanations.',
      'Simulated real-time network packet analysis.'
    ],
    tech: ['Python', 'ML', 'Cybersecurity']
  },
  {
    company: 'Infosys Springboard',
    badge: 'Infosys',
    badgeColor: '#7c3aed',
    project: 'Intelligent Quiz Management System',
    description: [
      'Developed an AI-based quiz system with auto question generation.',
      'Implemented authentication, scoring, and dynamic quiz creation.',
      'Designed scalable backend and optimized database operations.'
    ],
    tech: ['Python', 'AI', 'Web Development']
  },
  {
    company: 'ServiceNow',
    badge: 'ServiceNow',
    badgeColor: '#ea580c',
    project: 'Workflow Automation & ITSM',
    description: [
      'Gained knowledge in workflow automation and ITSM concepts.',
      'Worked with cloud-based enterprise solutions to streamline digital workflows.'
    ],
    tech: ['ITSM', 'Cloud', 'Workflow Automation']
  }
];

const InternshipModal = ({ internship, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    style={{
      position: 'fixed', inset: 0,
      background: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px'
    }}
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.85, opacity: 0, y: 40 }}
      transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      onClick={e => e.stopPropagation()}
      className="glass-panel"
      style={{ width: '100%', maxWidth: '620px', padding: '40px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '18px', right: '18px',
          background: 'rgba(66,153,225,0.08)', border: '1px solid rgba(66,153,225,0.2)',
          borderRadius: '8px', padding: '8px 12px',
          color: 'var(--accent-blue)', cursor: 'pointer', fontSize: '1rem',
          display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700,
          transition: 'background 0.2s'
        }}
        onMouseOver={e => e.currentTarget.style.background = 'rgba(66,153,225,0.15)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(66,153,225,0.08)'}
      >
        <FaTimes /> Close
      </button>

      <span style={{
        display: 'inline-block', marginBottom: '16px',
        padding: '4px 14px', borderRadius: '20px', fontSize: '0.75rem',
        fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
        background: internship.badgeColor + '22', color: internship.badgeColor,
        border: `1px solid ${internship.badgeColor}55`
      }}>
        {internship.badge}
      </span>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '6px', color: 'var(--text-color)', paddingRight: '40px' }}>
        {internship.project}
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontWeight: 600 }}>{internship.company}</p>

      <ul style={{ paddingLeft: '20px', marginBottom: '28px', color: 'var(--text-muted)', lineHeight: '1.9' }}>
        {internship.description.map((point, i) => (
          <li key={i} style={{ marginBottom: '8px' }}>{point}</li>
        ))}
      </ul>

      <div style={{ marginBottom: '28px' }}>
        <h4 style={{ color: 'var(--text-color)', marginBottom: '12px', fontWeight: 700 }}>Technologies Used</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {internship.tech.map((tag, i) => (
            <span key={i} style={{
              fontSize: '0.85rem', padding: '6px 16px', borderRadius: '20px',
              background: 'rgba(66,153,225,0.08)', border: '1px solid rgba(66,153,225,0.25)',
              color: 'var(--accent-blue)', fontWeight: 600
            }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
        {internship.github && (
          <a href={internship.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaGithub size={18} /> GitHub Repo
            </button>
          </a>
        )}
        {internship.demo && (
          <a href={internship.demo} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaExternalLinkAlt size={15} /> Live Demo
            </button>
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const Internships = () => {
  const [selected, setSelected] = useState(null);

  React.useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'unset';
  }, [selected]);

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title glow-text">Internships</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, rotateX: 3, rotateY: 2, boxShadow: '0 16px 40px rgba(66,153,225,0.18)' }}
              onClick={() => setSelected(intern)}
              className="glass-panel"
              style={{
                padding: '28px',
                cursor: 'pointer',
                borderLeft: `4px solid ${intern.badgeColor}`,
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <span style={{
                display: 'inline-block', marginBottom: '12px',
                padding: '3px 12px', borderRadius: '16px', fontSize: '0.7rem',
                fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                background: intern.badgeColor + '18', color: intern.badgeColor,
                border: `1px solid ${intern.badgeColor}44`
              }}>
                {intern.badge}
              </span>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '6px' }}>
                {intern.project}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '14px' }}>
                {intern.company}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {intern.tech.map((tag, i) => (
                  <span key={i} style={{
                    fontSize: '0.75rem', padding: '3px 10px', borderRadius: '12px',
                    background: 'rgba(66,153,225,0.06)', color: 'var(--accent-blue)',
                    border: '1px solid rgba(66,153,225,0.15)', fontWeight: 600
                  }}>{tag}</span>
                ))}
              </div>
              <div style={{ color: intern.badgeColor, fontSize: '0.85rem', fontWeight: 700 }}>
                Click for Details →
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <InternshipModal internship={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Internships;
