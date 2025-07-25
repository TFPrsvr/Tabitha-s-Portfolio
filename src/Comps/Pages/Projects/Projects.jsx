import React, { useState } from 'react';
import './Projects.css';
import HeaderImg from './projects/NotesApp/HeaderTitleContentNotesApp.png'
import LoginOutlined from './projects/NotesApp/NotesAppLoginOutlined.png'
import LoginNImg from './projects/NotesApp/loginNotesApp.png'
import Map from './projects/NotesApp/MapNotesApp.png'
import LROption from './projects/NotesApp/NotesAppLRoption.png'
import Register from './projects/NotesApp/RegisterNoteApp.png'
import IdeaSuggest from './projects/Whitneys/IdeasSuggestWhits.png'
import IdeaTC from './projects/Whitneys/IdeasTitleContentInputsWhits.png'
import LoginWhit from './projects/Whitneys/LoginWhitney.png'
import Prev from './projects/Whitneys/PrevProjsWhits.png'
import Unique from './projects/Whitneys/WhitUniqueCreations.png' 

const Projects = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, imgIndex: 0, images: [] });

  const projects = [
    {
      name: 'Whitneys Unique Creations',
      description: 'A comprehensive DIY platform for sharing and discovering handmade projects, featuring user authentication, project management, and community interaction.',
      techStack: {
        frontend: ['React', 'HTML5', 'CSS3', 'JavaScript'],
        backend: ['Node.js', 'Express.js'],
        database: ['MongoDB'],
        tools: ['Git', 'GitHub', 'VS Code']
      },
      images: [Unique, IdeaTC, IdeaSuggest, Prev, LoginWhit],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      name: 'NotesApp',
      description: 'A full-stack note-taking application with user authentication, real-time note management, and secure data storage for personal productivity.',
      techStack: {
        frontend: ['React', 'HTML5', 'CSS3', 'JavaScript'],
        backend: ['Node.js', 'Express.js'],
        database: ['MongoDB'],
        tools: ['Git', 'GitHub', 'VS Code']
      },
      images: [Register, LoginOutlined, LoginNImg, HeaderImg, Map, LROption],
      liveUrl: '#',
      githubUrl: '#'
    },
    // BanyanLabs Projects - PassItOn donation platform
    {
      name: 'PassItOn Donation Widget',
      description: 'An embeddable donation widget that integrates with Stripe for payment processing. Can be embedded into any website to enable seamless donations with customizable branding and styling.',
      techStack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        backend: ['Next.js API Routes'],
        database: ['Supabase (PostgreSQL)'],
        tools: ['Git', 'GitHub', 'Docker', 'Stripe', 'Clerk Auth']
      },
      images: [],
      liveUrl: '#',
      githubUrl: '#',
      isPlaceholder: true
    },
    {
      name: 'PassItOn Admin Dashboard',
      description: 'Multi-tenant SaaS dashboard for organizations to create and customize donation widgets. Features editor permissions, SuperAdmin functionality, and comprehensive widget management for multiple websites.',
      techStack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        backend: ['Next.js API Routes'],
        database: ['Supabase (PostgreSQL)'],
        tools: ['Git', 'GitHub', 'Docker', 'Stripe Connect', 'Clerk Auth']
      },
      images: [],
      liveUrl: '#',
      githubUrl: '#',
      isPlaceholder: true
    }
  ];

  const openLightbox = (images, index) => setLightbox({ isOpen: true, imgIndex: index, images });
  const closeLightbox = () => setLightbox({ isOpen: false, imgIndex: 0, images: [] });
  const nextImage = () => setLightbox((prev) => ({
    ...prev,
    imgIndex: (prev.imgIndex + 1) % prev.images.length,
  }));
  const prevImage = () => setLightbox((prev) => ({
    ...prev,
    imgIndex: (prev.imgIndex - 1 + prev.images.length) % prev.images.length,
  }));

  return (
    <section id='projects' className='projects-section'>
      <h1 className='section-title'>My Projects</h1>
      
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.isPlaceholder ? 'placeholder' : ''}`}>
            <div className='project-header'>
              <h2 className='project-name'>{project.name}</h2>
              <div className='project-links'>
                {!project.isPlaceholder && (
                  <>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='live-link'>
                      Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className='github-link'>
                      GitHub
                    </a>
                  </>
                )}
              </div>
            </div>
            
            <p className='project-description'>{project.description}</p>
            
            <div className='tech-stack'>
              <div className='tech-category'>
                <h4>Frontend:</h4>
                <div className='tech-tags'>
                  {project.techStack.frontend.map((tech, i) => (
                    <span key={i} className='tech-tag frontend'>{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className='tech-category'>
                <h4>Backend:</h4>
                <div className='tech-tags'>
                  {project.techStack.backend.map((tech, i) => (
                    <span key={i} className='tech-tag backend'>{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className='tech-category'>
                <h4>Database:</h4>
                <div className='tech-tags'>
                  {project.techStack.database.map((tech, i) => (
                    <span key={i} className='tech-tag database'>{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className='tech-category'>
                <h4>Tools:</h4>
                <div className='tech-tags'>
                  {project.techStack.tools.map((tech, i) => (
                    <span key={i} className='tech-tag tools'>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            
            {!project.isPlaceholder && project.images.length > 0 && (
              <div className='project-gallery'>
                {project.images.slice(0, 6).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.name} screenshot ${i + 1}`}
                    onClick={() => openLightbox(project.images, i)}
                    className='gallery-image'
                  />
                ))}
                {project.images.length > 6 && (
                  <div className='more-images' onClick={() => openLightbox(project.images, 6)}>
                    +{project.images.length - 6} more
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {lightbox.isOpen && (
        <div className='lightbox' onClick={closeLightbox}>
          <span className='close-btn' onClick={closeLightbox}>&times;</span>
          <span className='arrow left' onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</span>
          <img
            src={lightbox.images[lightbox.imgIndex]}
            alt='lightbox'
            className='lightbox-img'
            onClick={(e) => e.stopPropagation()}
          />
          <span className='arrow right' onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</span>
        </div>
      )}
    </section>
  );
};

export default Projects;