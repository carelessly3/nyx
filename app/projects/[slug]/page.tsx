'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '../../data/projects';
import Link from 'next/link';

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = React.use(params);
  const project = projectsData.find(p => p.slug === unwrappedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'monospace' }}>
      
      {/* Back Link */}
      <Link href="/projects" style={{ 
        display: 'inline-block',
        color: '#888', 
        textDecoration: 'none',
        marginBottom: '30px',
        fontSize: '0.9rem'
      }}>
        {'<'} cd ..
      </Link>

      <section style={{ 
        border: '1px solid #333', 
        padding: '30px', 
        backgroundColor: 'rgba(0,0,0,0.3)',
        position: 'relative'
      }}>
        {/* Terminal Header Bar mockup */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '24px',
          backgroundColor: '#222',
          borderBottom: '1px solid #333',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          fontSize: '0.8rem',
          color: '#888'
        }}>
          {project.slug} — bash
        </div>

        <div style={{ marginTop: '20px' }}>
          
          {/* Project Title */}
          <h1 style={{ color: 'var(--terminal-green)', fontSize: '2rem', marginBottom: '10px' }}>
            {project.name}
          </h1>

          {/* Git Link Command */}
          <div style={{ 
            backgroundColor: '#111', 
            padding: '10px 15px', 
            borderRadius: '4px',
            border: '1px solid #222',
            color: '#ccc',
            marginBottom: '40px',
            fontSize: '0.95rem'
          }}>
            <span style={{ color: 'var(--terminal-green)' }}>$</span> git clone{' '}
            <a 
              href={project.gitLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#55b5db', textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              {project.gitLink}
            </a>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#888', fontSize: '1rem', marginBottom: '10px' }}>[ TECH_STACK ]</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {project.techStack.map(tech => (
                <span 
                  key={tech} 
                  style={{
                    fontSize: '0.85rem',
                    padding: '4px 10px',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid var(--terminal-green)',
                    color: 'var(--terminal-green)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Motivation Section */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#888', fontSize: '1rem', marginBottom: '10px' }}>[ MOTIVATION ]</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1.05rem' }}>
              {project.motivation}
            </p>
          </div>

          {/* Description Section */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#888', fontSize: '1rem', marginBottom: '10px' }}>[ DESC ]</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1.05rem', whiteSpace: 'pre-wrap' }}>
              {project.description}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
