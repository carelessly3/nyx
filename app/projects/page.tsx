'use client';

import React from 'react';
import Link from 'next/link';
import { projectsData } from '../data/projects';

export default function ProjectsPage() {
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <section style={{ marginTop: '50px', fontFamily: 'monospace' }}>
        <h2 style={{ color: 'var(--terminal-green)', fontSize: '1.5rem', marginBottom: '30px' }}>
          {'>'} ls -la ./projects
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '30px' 
        }}>
          {projectsData.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`}
              style={{
                display: 'block',
                border: '1px solid #333',
                padding: '20px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s ease',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--terminal-green)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 255, 0, 0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Thumbnail Area */}
              <div style={{
                height: '120px',
                backgroundColor: '#111',
                borderBottom: '1px solid #333',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#555',
                fontSize: '0.9rem',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: 5, left: 10, opacity: 0.3 }}>[ IMAGE_DATA ]</div>
                <div>{project.name.toUpperCase()}_PREVIEW</div>
              </div>

              {/* Card Details */}
              <h3 style={{ 
                color: 'var(--terminal-green)', 
                fontSize: '1.2rem', 
                margin: '0 0 10px 0' 
              }}>
                ./{project.slug}
              </h3>

              {/* Tech Stack Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.techStack.map(tech => (
                  <span 
                    key={tech} 
                    style={{
                      fontSize: '0.75rem',
                      padding: '2px 6px',
                      backgroundColor: '#222',
                      border: '1px solid #444',
                      color: '#aaa',
                      borderRadius: '2px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}