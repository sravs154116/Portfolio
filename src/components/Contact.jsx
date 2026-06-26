import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Construct WhatsApp message
    const waText = `Hi Sravanthi,%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A%0A*Message:*%0A${message}`;
    
    // Open WhatsApp URL (using Indian country code +91)
    window.open(`https://wa.me/918121164708?text=${waText}`, '_blank');
    
    setFormStatus('success');
    e.target.reset();
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section id="contact" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <h2 className="section-title glow-text">Get In Touch</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', marginTop: '40px' }}>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: '1 1 300px', maxWidth: '400px' }}
          >
            <div className="glass-panel" style={{ padding: '40px', height: '100%' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-color)' }}>Let's Connect</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '36px', lineHeight: 1.8 }}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a href="mailto:sravanthireddy154116@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.3s' }}
                  onMouseOver={e => e.currentTarget.style.color = 'var(--accent-blue)'}
                  onMouseOut={e => e.currentTarget.style.color = 'var(--text-color)'}>
                  <Mail size={20} /> sravanthireddy154116@gmail.com
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.3s' }}
                  onMouseOver={e => e.currentTarget.style.color = 'var(--accent-purple)'}
                  onMouseOut={e => e.currentTarget.style.color = 'var(--text-color)'}>
                  <FaLinkedin size={20} /> LinkedIn
                </a>
                <a href="https://github.com/sravs154116/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.3s' }}
                  onMouseOver={e => e.currentTarget.style.color = 'var(--accent-blue)'}
                  onMouseOut={e => e.currentTarget.style.color = 'var(--text-color)'}>
                  <FaGithub size={20} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: '1 1 400px', maxWidth: '600px' }}
          >
            <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <input type="text" name="name" placeholder="Name" required
                style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', fontFamily: 'Inter', fontSize: '0.95rem' }} />
              <input type="email" name="email" placeholder="Email" required
                style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', fontFamily: 'Inter', fontSize: '0.95rem' }} />
              <textarea name="message" placeholder="Message" rows="5" required
                style={{ width: '100%', padding: '14px 16px', borderRadius: '10px', fontFamily: 'Inter', resize: 'vertical', fontSize: '0.95rem' }}></textarea>
              <button type="submit" className="btn-primary" disabled={formStatus === 'submitting'}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: formStatus === 'submitting' ? 0.7 : 1 }}>
                {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? '✓ Message Sent!' : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
