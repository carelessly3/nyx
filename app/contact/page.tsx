'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const mailtoLink = `mailto:carelessly@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.email}\n\n${formData.message}`
    )}`;
    
    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'monospace' }}>
      
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ color: 'var(--terminal-green)', fontSize: '1.5rem', marginBottom: '20px' }}>
          {'>'} ping -c 3 socials
        </h2>
        
        <div style={{ 
          border: '1px solid #333', 
          backgroundColor: 'rgba(0,0,0,0.3)', 
          padding: '20px',
          color: '#ccc',
          lineHeight: '1.8'
        }}>
          <div>PING socials (127.0.0.1): 56 data bytes</div>
          <div style={{ marginTop: '10px' }}>
            64 bytes from <a href="https://linkedin.com/in/carelessly" target="_blank" rel="noopener noreferrer" style={{ color: '#55b5db', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>linkedin.com/in/carelessly</a>: icmp_seq=0 ttl=118 time=14.2 ms
          </div>
          <div>
            64 bytes from <a href="https://twitter.com/carelessly" target="_blank" rel="noopener noreferrer" style={{ color: '#55b5db', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>twitter.com/carelessly</a>: icmp_seq=1 ttl=118 time=15.1 ms
          </div>
          <div>
            64 bytes from <a href="https://reddit.com/u/carelessly" target="_blank" rel="noopener noreferrer" style={{ color: '#55b5db', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>reddit.com/u/carelessly</a>: icmp_seq=2 ttl=118 time=16.8 ms
          </div>
          <div style={{ marginTop: '10px', color: '#888' }}>
            --- socials ping statistics ---<br/>
            3 packets transmitted, 3 packets received, 0.0% packet loss
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ color: 'var(--terminal-green)', fontSize: '1.5rem', marginBottom: '20px' }}>
          {'>'} mail -s "Contact" carelessly
        </h2>
        
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px',
          border: '1px solid #333', 
          backgroundColor: 'rgba(0,0,0,0.3)', 
          padding: '30px'
        }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ color: 'var(--terminal-green)' }}>Sender Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              style={{
                backgroundColor: '#111',
                border: '1px solid #444',
                color: '#ccc',
                padding: '10px',
                fontFamily: 'monospace',
                fontSize: '1rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--terminal-green)'}
              onBlur={(e) => e.target.style.borderColor = '#444'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="subject" style={{ color: 'var(--terminal-green)' }}>Subject:</label>
            <input 
              type="text" 
              id="subject" 
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              style={{
                backgroundColor: '#111',
                border: '1px solid #444',
                color: '#ccc',
                padding: '10px',
                fontFamily: 'monospace',
                fontSize: '1rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--terminal-green)'}
              onBlur={(e) => e.target.style.borderColor = '#444'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="message" style={{ color: 'var(--terminal-green)' }}>Message:</label>
            <textarea 
              id="message" 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Type your message here..."
              style={{
                backgroundColor: '#111',
                border: '1px solid #444',
                color: '#ccc',
                padding: '10px',
                fontFamily: 'monospace',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--terminal-green)'}
              onBlur={(e) => e.target.style.borderColor = '#444'}
            />
          </div>

          <button 
            type="submit"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--terminal-green)',
              border: '1px solid var(--terminal-green)',
              padding: '12px',
              fontFamily: 'monospace',
              fontSize: '1.1rem',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--terminal-green)';
              e.currentTarget.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--terminal-green)';
            }}
          >
            [ SEND_MESSAGE ]
          </button>
        </form>
      </section>

    </main>
  );
}
