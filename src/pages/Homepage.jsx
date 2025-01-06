import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';

export const Homepage = () => {
  return (
    <div>
      <header style={headerStyles}>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Biraj Bogati, a web developer and designer.</p>
      </header>

      <nav style={navStyles}>
        <a href="#about" style={navLinkStyles}>About</a>
        <a href="#projects" style={navLinkStyles}>Projects</a>
        <a href="#contact" style={navLinkStyles}>Contact</a>
      </nav>

      <AboutMe />

      <Projects />

      <Contact />

      <footer style={footerStyles}>
        <p>&copy; 2025 Biraj Bogati. All rights reserved.</p>
        <p>
          <a href="https://www.linkedin.com/in/birajbogati" style={footerLinkStyles}>LinkedIn</a> |
          <a href="https://github.com/Birajbgt" style={footerLinkStyles}>GitHub</a>
        </p>
      </footer>
    </div>
  );
};

// Inline styles
const headerStyles = {
  backgroundColor: '#4F9373',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
};

const navStyles = {
  display: 'flex',
  justifyContent: 'center',
  background: '#333',
};

const navLinkStyles = {
  color: 'white',
  padding: '10px 20px',
  textDecoration: 'none',
  textTransform: 'uppercase',
};

const sectionStyles = {
  padding: '20px',
};

const footerStyles = {
  textAlign: 'center',
  padding: '20px',
  background: '#333',
  color: 'white',
};

const footerLinkStyles = {
  color: '#fff',
  margin: '0 10px',
  textDecoration: 'none',
};
