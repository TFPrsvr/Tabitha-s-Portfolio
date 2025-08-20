import React, { useState } from 'react';
import './ContactMe.css';
import { ShimmerButton } from '../../../components/magicui/shimmer-button';

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
    const mailtoLink = `mailto:tfortner.prsvr@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
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
              <strong>Email:</strong> <a href="mailto:tfortner.prsvr@gmail.com">tfortner.prsvr@gmail.com</a>
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

          <ShimmerButton
            type="submit"
            shimmerColor="#ff6b9d"
            background="linear-gradient(135deg, #c471ed 0%, #ff6b9d 100%)"
            borderRadius="10px"
            className="text-white font-black px-8 py-3 w-auto contact-submit-btn"
          >
            Send Message
          </ShimmerButton>
        </form>

        <p className='resume-note'>
          <small>View and download my resume using the icons in the footer below.</small>
        </p>
      </div>
    </section>
  );
};

export default ContactMe;