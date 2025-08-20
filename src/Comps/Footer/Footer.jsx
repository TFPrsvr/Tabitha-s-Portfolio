import React from 'react';
import './Footer.css';
import SocialLinks from '../SocialLinks/SocialLinks'
import { FaEye, FaDownload } from 'react-icons/fa';
import resumePDF from '../Assets/ResumePDF/tabitha_fortnerResume.pdf';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='resume-actions-footer'>
          <span className='resume-label'>Resume:</span>
          <a href={resumePDF} target='_blank' rel='noopener noreferrer' className='resume-icon view-icon icon-animated-0' title='View Resume'>
            <FaEye />
          </a>
          <a href={resumePDF} download className='resume-icon download-icon icon-animated-1' title='Download Resume'>
            <FaDownload />
          </a>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;