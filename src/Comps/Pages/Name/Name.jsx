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
        <h1 className='name-title'>Tabitha Fortner</h1>
        <h2 className='name-subtitle'>Full Stack Developer</h2>
      </div>
    </div>
  );
};

export default Name;