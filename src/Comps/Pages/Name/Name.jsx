import React from 'react';
import './Name.css';
import PortfolioLogo from '../../Assets/imgsVids/Portfolio.png';

const Name = () => {
  return (
    <div id='home' className='name-container'>
      <div className='intro'>
        <img
          src={PortfolioLogo}
          alt='Portfolio Logo'
          className='portfolio-logo'
        />
        {/* <TypingAnimation
          className='name-title text-4xl font-bold mb-4'
          duration={80}
          delay={500}
          startOnView={true}
        >
          Tabitha Fortner
        </TypingAnimation>
        <TypingAnimation
          className='name-subtitle text-2xl font-medium'
          duration={60}
          delay={2000}
          startOnView={true}
        >
          Full Stack Web Developer
        </TypingAnimation> */}
        <h1 className='name-title'>Tabitha Fortner</h1>
        <h2 className='name-subtitle'>Full Stack Web Developer</h2>
      </div>
    </div>
  );
};

export default Name;