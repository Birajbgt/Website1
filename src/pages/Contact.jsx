import React from 'react';

const Contact = () => {
  const sectionStyles = {
    padding: '20px',
  };

  const formInputStyles = {
    width: '100%',
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyles = {
    backgroundColor: '#4F9373',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <section id="contact" style={sectionStyles}>
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/myyqwwjb" method="POST">
        <input type="text" name="name" placeholder="Your Name" required style={formInputStyles} />
        <input type="email" name="email" placeholder="Your Email" required style={formInputStyles} />
        <textarea name="message" rows="5" placeholder="Your Message" required style={formInputStyles}></textarea>
        <button type="submit" style={buttonStyles}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
