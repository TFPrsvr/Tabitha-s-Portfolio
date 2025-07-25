import React, { useRef } from 'react';
// import EmailJs from 'emailjs-com'
import './ContactMe.css';

const ContactMe = () => {
  const formRef = useRef();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('user_email');
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      formRef.current,
      'your_user_id'
    ).then(
      () => alert('Message sent!'),
      () => alert('Send failed.')
    );

    e.target.reset();
  };

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