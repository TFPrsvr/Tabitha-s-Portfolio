import React, { useState, useEffect } from 'react';
import './Nav.css';
import { InteractiveHoverButton } from '../../components/magicui/interactive-hover-button';

const sections = ['about', 'skills', 'projects', 'contact'];

const Nav2 = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('name');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // Adjust for nav height
      
      // Find which section is currently in view
      let currentSection = 'home';
      
      // Check each section from bottom to top for more accurate detection
      sections.slice().reverse().forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          
          // If we've scrolled past the start of this section, it's the current one
          if (scrollPos >= offsetTop - 200) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className='nav-container'>
      <div className='hamburger-icon' onClick={() => setOpen(true)}>☰</div>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <div className='close-icon' onClick={() => setOpen(false)}>×</div>
        {sections.map((sec, index) => (
          <InteractiveHoverButton
            key={sec}
            onClick={() => handleNavClick(sec)}
            className={`nav-word-${index} ${activeSection === sec ? 'active' : ''}`}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </InteractiveHoverButton>
        ))}
      </div>
    </nav>
  );
};

export default Nav2;
