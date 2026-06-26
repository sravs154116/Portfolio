import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Intelligent Quiz Management System',
    description: 'Auto question generation, user authentication, and automated scoring system.',
    tags: ['Python', 'AI', 'Web Development'],
  },
  {
    title: 'Lecture Video to Notes Generator',
    description: 'Speech-to-text with NLP summarization and key-point extraction.',
    tags: ['Python', 'NLP', 'Machine Learning'],
  },
  {
    title: 'Cyclone Intensity Prediction',
    description: 'ML model for prediction with data preprocessing, deployed via Streamlit.',
    tags: ['Python', 'Streamlit', 'ML'],
  },
  {
    title: 'Quantum Diabetes Prediction',
    description: 'Quantum Machine Learning concepts implemented using Python.',
    tags: ['Quantum ML', 'Python'],
  },
  {
    title: 'Medical Report Summarizer',
    description: 'NLP-based summarization system for complex medical documents.',
    tags: ['NLP', 'Transformers', 'Python'],
  }
];

const GITHUB_URL = 'https://github.com/sravs154116/';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, rotateX: 4, rotateY: 3, boxShadow: '0 20px 40px rgba(66, 153, 225, 0.15)' }}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      className="glass-panel"
    >
      <div style={{ padding: '30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.35rem', marginBottom: '12px', color: 'var(--text-color)', fontWeight: 700 }}>{project.title}</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', flex: 1, lineHeight: 1.7 }}>{project.description}</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {project.tags.map((tag, i) => (
            <span key={i} style={{ 
              fontSize: '0.78rem', padding: '4px 12px', borderRadius: '20px', 
              background: 'rgba(237, 137, 54, 0.08)',
              border: '1px solid rgba(237, 137, 54, 0.2)',
              color: 'var(--accent-purple)',
              fontWeight: 600
            }}>
              {tag}
            </span>
          ))}
        </div>
        
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', alignSelf: 'flex-start' }}>
          <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 18px', fontSize: '0.85rem' }}>
            <FaGithub size={16} /> GitHub
          </button>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title glow-text">Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
