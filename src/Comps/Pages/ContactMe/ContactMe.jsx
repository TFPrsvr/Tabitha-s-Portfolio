import React from 'react';
import './ContactMe.css';

const ContactMe = () => {


  return (
    <section id='contact' className='contact-section'>
      <div className='contact-header'>
        <h2 className='contact-title'>Contact Tabitha</h2>
        <p className='contact-subtitle'>with your ideas</p>
      </div>
      <div className='contact-info'>
        <p className='contact-description'>
          Ready to collaborate or have questions about my work?
        </p>
        <p className='contact-instruction'>
          Click the <strong>Contact</strong> tab in the navigation above to reach out directly.
        </p>
        <p className='resume-note'>
          <small>View and download my resume using the icons in the footer below.</small>
        </p>
      </div>
    </section>
  );
};

export default ContactMe;