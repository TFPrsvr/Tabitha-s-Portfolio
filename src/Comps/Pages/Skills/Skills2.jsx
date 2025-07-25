import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaNpm, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiVite, SiPostman, SiGithub } from 'react-icons/si';

const skillCategories = {
  frontend: {
    title: 'Frontend',
    color: '#ff4f81',
    skills: [
      { name: 'HTML5', level: 90, icon: <FaHtml5 />, color: '#e34c26' },
      { name: 'CSS3', level: 85, icon: <FaCss3Alt />, color: '#1572b6' },
      { name: 'JavaScript', level: 80, icon: <FaJs />, color: '#f7df1e' },
      { name: 'React', level: 75, icon: <FaReact />, color: '#61dafb' },
      { name: 'Next.js', level: 70, icon: <SiNextdotjs />, color: '#000000' },
      { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss />, color: '#06b6d4' }
    ]
  },
  backend: {
    title: 'Backend',
    color: '#00ffe1',
    skills: [
      { name: 'Node.js', level: 75, icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express.js', level: 70, icon: <SiExpress />, color: '#000000' },
      { name: 'MongoDB', level: 75, icon: <SiMongodb />, color: '#47a248' }
    ]
  },
  tools: {
    title: 'Development Tools',
    color: '#ffa500',
    skills: [
      { name: 'Git', level: 80, icon: <FaGitAlt />, color: '#f05032' },
      { name: 'GitHub', level: 85, icon: <SiGithub />, color: '#181717' },
      { name: 'VS Code', level: 90, icon: <FaCode />, color: '#007acc' },
      { name: 'Vite', level: 75, icon: <SiVite />, color: '#646cff' },
      { name: 'Postman', level: 70, icon: <SiPostman />, color: '#ff6c37' },
      { name: 'NPM', level: 85, icon: <FaNpm />, color: '#cb3837' }
    ]
  }
};

const Skills2 = () => {
  return (
    <div id='skills' className='skills-section'>
      <h1 className='section-title'>My Skills</h1>
      
      {Object.entries(skillCategories).map(([categoryKey, category], categoryIndex) => (
        <div key={categoryKey} className='skill-category'>
          <h2 className='category-title' style={{ color: category.color }}>
            {category.title}
          </h2>
          
          <div className={`skills-scroll-container ${categoryIndex % 2 === 0 ? 'scroll-left' : 'scroll-right'}`}>
            <div className='skills-track'>
              {/* Duplicate skills for seamless scrolling */}
              {[...category.skills, ...category.skills].map((skill, index) => (
                <div key={`${skill.name}-${index}`} className='skill-card'>
                  <div className='skill-header'>
                    <span className='skill-icon' style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <h3>{skill.name}</h3>
                  </div>
                  <div className='progress-bar'>
                    <div 
                      className='progress-fill' 
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(45deg, ${skill.color}, ${category.color})`
                      }}
                    ></div>
                    <span className='progress-text'>{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills2;