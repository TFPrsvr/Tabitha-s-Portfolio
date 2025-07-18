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