import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

const ContactMe = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      formRef.current,
      'your_user_id'
    ).then(
      () => {
        alert('Message sent!');
      },
      () => {
        alert('Send failed. Backend fallback might be needed.');
        // Optionally POST to Express here
      }
    );

    e.target.reset();
  };

  return (
    <section id='contact' className='contact-section'>
      <h2>Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} className='contact-form'>
        <input type='text' name='user_name' placeholder='Name' required />
        <input type='email' name='user_email' placeholder='Email' required />
        <input type='text' name='subject' placeholder='Subject' />
        <textarea name='message' placeholder='Message' rows='5' required />
        <button type='submit'>Send</button>
      </form>
    </section>
  );
};

export default ContactMe;
