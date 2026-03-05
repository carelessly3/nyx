'use client';

import React, { useState } from 'react';

type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

const timelineData: TimelineEntry[] = [
  { year: '2024', title: 'Present', description: 'Learning Next.js & building this digital garden' },
  { year: '2018', title: 'Started Work', description: 'Employed in my first professional role' },
  { year: '2014', title: 'College', description: 'Pursued higher education' },
  { year: '2002', title: 'Started School', description: 'Early education / The beginning' },
];

export default function TimelinePage() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <section style={{ marginTop: '50px', fontFamily: 'monospace' }}>
        <h2 style={{ color: 'var(--terminal-green)', fontSize: '1.5rem', marginBottom: '20px' }}>
          {'>'} cat timeline.log
        </h2>
        
        <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem', whiteSpace: 'pre-wrap' }}>
          <div>.</div>
          <div>└── timeline/</div>
          {timelineData.map((item, index) => {
            const isLast = index === timelineData.length - 1;
            const branchChar = isLast ? '└──' : '├──';
            const indentChar = isLast ? '    ' : '│   ';
            
            return (
              <div key={item.year} style={{ display: 'flex', flexDirection: 'column' }}>
                <div>    {branchChar} <span style={{ color: 'var(--terminal-green)' }}>{item.year}</span> - {item.title}</div>
                <div style={{ color: '#888' }}>    {indentChar} └── {item.description}</div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '40px' }}>
          <button 
            onClick={() => setShowPwd(!showPwd)}
            style={{ 
              backgroundColor: 'transparent', 
              color: '#ccc', 
              border: '1px solid #555', 
              padding: '6px 12px', 
              cursor: 'pointer',
              fontFamily: 'monospace',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--terminal-green)';
              e.currentTarget.style.color = 'var(--terminal-green)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#555';
              e.currentTarget.style.color = '#ccc';
            }}
          >
            $ pwd
          </button>
          
          {showPwd && (
            <div style={{ marginTop: '15px', color: 'var(--terminal-green)', fontSize: '1.1rem', animation: 'fadeIn 0.3s ease-in' }}>
              /home/carelessly/2024/present/learning-nextjs-and-building-digital-garden
            </div>
          )}
        </div>
      </section>
    </main>
  );
}