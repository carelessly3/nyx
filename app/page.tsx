export default function Home() {
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Bio Section */}
      <section style={{ marginTop: '50px' }}>
        <h2 style={{ color: 'var(--terminal-green)', fontSize: '1.5rem' }}>
          {'>'} whoami
        </h2>
        
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: '#ccc' }}>
          Hello, world! I am a developer in training, currently building my 
          first ever website using Next.js. I'm deep-diving into the world of 
          React and TypeScript, aiming to create digital tools with a clean, 
          terminal-inspired aesthetic. This space serves as my digital 
          garden where I document what I learn and showcase the projects 
          I'm tinkering with.
        </p>

        <p style={{ color: 'var(--terminal-green)', marginTop: '20px' }}>
          <span style={{ opacity: 0.5 }}>[status]</span>: Learning_Every_Day
        </p>
      </section>

    </main>
  );
}