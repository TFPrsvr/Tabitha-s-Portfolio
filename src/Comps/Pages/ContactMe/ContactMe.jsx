import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:tabithafortbrown@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id='contact' className='contact-section'>
      <div className='contact-header'>
        <h2 className='contact-title'>Contact Tabitha</h2>
        <p className='contact-subtitle'>with your ideas</p>
      </div>
      <div className='contact-content'>
        <div className='contact-info'>
          <p className='contact-description'>
            Ready to collaborate or have general inquiries?
          </p>
          
          <div className='contact-details'>
            <div className='contact-item'>
              <strong>Email:</strong> <a href="mailto:tabithafortbrown@gmail.com">tabithafortbrown@gmail.com</a>
            </div>
            <div className='contact-item'>
              <strong>Location:</strong> Remote / Open to Relocation
            </div>
          </div>
        </div>

        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className='submit-btn'>
            Send Message
          </button>
        </form>

        <p className='resume-note'>
          <small>View and download my resume using the icons in the footer below.</small>
        </p>
      </div>
    </section>
  );
};

export default ContactMe;