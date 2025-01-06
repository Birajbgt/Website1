import React from 'react';

const Projects = () => {
    const sectionStyles = {
        padding: '20px',
    };

    const projectStyles = {
        background: '#fff',
        border: '1px solid #ddd',
        padding: '15px',
        margin: '10px 0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    };

    const projectLinkStyles = {
        display: 'inline-block',
        marginTop: '10px',
        color: '#4F9373',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    return (
        <section id="projects" style={sectionStyles}>
            <h2>My Projects</h2>
            <div style={projectStyles}>
                <h3>Project 1: Portfolio Website</h3>
                <p>A responsive portfolio website showcasing my skills and projects.</p>
                {/* Link to the portfolio website */}
                <a
                    href="https://yourportfolio.com" // Replace with the actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    style={projectLinkStyles}
                >
                    View Project
                </a>
            </div>
            <div style={projectStyles}>
                <h3>Photo booth</h3>
                <p>An online store built with modern design and functionality.</p>
                <p>language:Python</p>
                {/* Link to the e-commerce website */}
                <a
                    href="https://github.com/Birajbgt/Photobooth" // Replace with the actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    style={projectLinkStyles}
                >
                    View Project
                </a>
            </div>
        </section>
    );
};

export default Projects;
