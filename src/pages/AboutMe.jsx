import React from 'react';

const AboutMe = () => {
  const sectionStyles = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  };

  const textContainerStyles = {
    flex: '1',
    maxWidth: '500px',
  };

  const headingStyles = {
    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', // Responsive font size using clamp()
    margin: '0 0 10px',
  };

  const paragraphStyles = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)', // Responsive font size for paragraph
    lineHeight: '1.6', // Improve readability
    margin: '0',
  };

  const imageStyles = {
    flex: '1',
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '10px',
  };

  return (
    <section id="about" style={sectionStyles}>
      {/* Image Section */}
      <img
        src={require('../images/myimage.jpeg')}
        alt="About Me"
        style={imageStyles}
      />

      {/* Text Section */}
      <div style={textContainerStyles}>
        <h2 style={headingStyles}>About Me</h2>
        <p style={paragraphStyles}>
          I am passionate about creating clean and functional web designs. My
          goal is to help businesses build a strong online presence.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
