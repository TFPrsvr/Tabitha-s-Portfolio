import React, { useState } from 'react';
import './ContactMe.css';
import { ShimmerButton } from '../../../components/magicui/shimmer-button';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
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
    // Create professional mailto link with form data
    const emailBody = `Dear Tabitha,

I hope this message finds you well. I obtained your contact information from your professional portfolio website.

PROJECT OVERVIEW:
${formData.description}

DETAILED REQUIREMENTS:
${formData.message}

CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}

I would appreciate the opportunity to discuss this project further, including estimated deliverable timelines, any prerequisites or dependencies, target platforms, and other pertinent details.

Thank you for your time and consideration. I look forward to hearing from you.

Best regards,
${formData.name}

---
This inquiry was submitted through your portfolio contact form.`;

    const professionalSubject = `${formData.subject}`;
    const mailtoLink = `mailto:tfortner.prsvr@gmail.com?subject=${encodeURIComponent(professionalSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id='contact' className='contact-section' role="main" aria-labelledby="contact-heading">
      <div className='contact-header'>
        <h1 id="contact-heading" className='contact-title' aria-label="Contact Tabitha">
          <span className='word-contact'>Contact</span> 
          <span className='word-tabitha'>Tabitha</span>
        </h1>
        <p className='contact-subtitle' aria-label="With Your Ideas">
          <span className='word-with'>With</span> 
          <span className='word-your'>Your</span> 
          <span className='word-ideas'>Ideas</span>
        </p>
      </div>
      <div className='contact-content'>
        <div className='contact-info'>
          <p className='contact-description'>
            Ready to Collaborate? General Inquiries?
          </p>
          
          <div className='contact-details' role="region" aria-label="Contact Information">
            <div className='contact-item'>
              <strong>Email:</strong> <a href="mailto:tfortner.prsvr@gmail.com" aria-label="Send email to tfortner.prsvr@gmail.com">tfortner.prsvr@gmail.com</a>
            </div>
            <div className='contact-item'>
              <strong>Phone:</strong> <a href="tel:7319313843" aria-label="Call 731-931-3843">731-931-3843</a>
            </div>
            <div className='contact-item'>
              <strong>Location:</strong> <span aria-label="Work location is remote">Remote</span>
            </div>
          </div>
        </div>

        <form className='contact-form' onSubmit={handleSubmit} role="form" aria-label="Contact Form">
          <div className='form-group'>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              aria-describedby="name-help"
              aria-required="true"
              required
            />
            <small id="name-help" className="sr-only">Enter your full name</small>
          </div>

          <div className='form-group'>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              aria-describedby="email-help"
              aria-required="true"
              required
            />
            <small id="email-help" className="sr-only">Enter your email address for response</small>
          </div>

          <div className='form-group'>
            <label htmlFor="subject">Subject Line *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Professional Development Inquiry"
              aria-describedby="subject-help"
              aria-required="true"
              required
            />
            <small id="subject-help" className="sr-only">Enter the main subject of your inquiry</small>
          </div>

          <div className='form-group'>
            <label htmlFor="description">Project Description *</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief description of project"
              aria-describedby="description-help"
              aria-required="true"
              required
            />
            <small id="description-help" className="sr-only">Provide a brief overview of your project</small>
          </div>

          <div className='form-group'>
            <label htmlFor="message">Project Details *</label>
            <textarea
              id="message"
              name="message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details about your project including: type of application including specific frameworks, estimated deliverable timeline from furthest to most immediate, prerequisites/dependencies, target platforms, specific libraries or storage needs if applicable, how you plan to share media needed for application or any links or anything else that would be needed, and any other pertinent information."
              aria-describedby="message-help"
              aria-required="true"
              required
            ></textarea>
            <small id="message-help" className="sr-only">Provide comprehensive details about your project requirements</small>
          </div>

          <ShimmerButton
            type="submit"
            shimmerColor="#ff6b9d"
            background="linear-gradient(135deg, #c471ed 0%, #ff6b9d 100%)"
            borderRadius="10px"
            className="text-white font-black px-8 py-3 w-auto contact-submit-btn"
            style={{ 
              fontWeight: 900,
              background: "linear-gradient(135deg, #c471ed 0%, #ff6b9d 100%)",
              border: "none",
              fontSize: '1.5rem',
              lineHeight: '1',
              margin: '0'
            }}
            aria-describedby="submit-help"
          >
            <span style={{ marginTop: '0', marginBottom: '0' }}>Send Message</span> <span style={{ fontSize: '2.25rem', lineHeight: '1', padding: '0', margin: '0', marginTop: '0', marginBottom: '0', verticalAlign: 'middle' }}>📧</span>
          </ShimmerButton>
          <small id="submit-help" className="sr-only">Submit the contact form to send your inquiry via email</small>
        </form>

        <p className='resume-note'>
          <small>Please feel free to view/download my resume using the icons in the footer located in the bottom left side of your screen.</small>
        </p>
      </div>
    </section>
  );
};

export default ContactMe;