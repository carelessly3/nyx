import Link from 'next/link';

export default function Navbar() {
  const terminalGreen = '#b2ff59'; // That bright lime from the screenshot

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '20px 40px', 
      backgroundColor: '#000', // Deep black background
      borderBottom: `1px solid ${terminalGreen}`, // Single neon line
      fontFamily: 'monospace' // Makes it look like a terminal
    }}>
      {/* Brand Name */}
      <div style={{ color: terminalGreen, fontWeight: 'bold', fontSize: '1.2rem' }}>
        <Link href="/">
          devesh goyal
        </Link>
      </div>

      {/* Nav Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/timeline" style={navLinkStyle}>timeline</Link>
        <Link href="/projects" style={navLinkStyle}>projects</Link>
        
        {/* The "Post a Tool" Button Look */}
        <Link href="/contact" style={{ 
          backgroundColor: terminalGreen,
          color: '#000',
          padding: '5px 15px',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '2px' // Sharp corners
        }}>
          DM me :3
        </Link>
      </div>
    </nav>
  );
}

// A little helper for the shared link styles
const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.9rem',
//   textTransform: 'capitalize' as const
};