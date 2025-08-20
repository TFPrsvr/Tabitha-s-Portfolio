import React, { useState } from 'react';
import './Projects.css';
import HeaderImg from '../../Assets/imgsVids/projects/NotesApp/HeaderTitleContentNotesApp.png'
import LoginOutlined from '../../Assets/imgsVids/projects/NotesApp/NotesAppLoginOutlined.png'
import LoginNImg from '../../Assets/imgsVids/projects/NotesApp/loginNotesApp.png'
import Map from '../../Assets/imgsVids/projects/NotesApp/MapNotesApp.png'
import LROption from '../../Assets/imgsVids/projects/NotesApp/NotesAppLRoption.png'
import Register from '../../Assets/imgsVids/projects/NotesApp/RegisterNoteApp.png'
import IdeaSuggest from '../../Assets/imgsVids/projects/Whitneys/IdeasSuggestWhits.png'
import IdeaTC from '../../Assets/imgsVids/projects/Whitneys/IdeasTitleContentInputsWhits.png'
import LoginWhit from '../../Assets/imgsVids/projects/Whitneys/LoginWhitney.png'
import Prev from '../../Assets/imgsVids/projects/Whitneys/PrevProjsWhits.png'
import Unique from '../../Assets/imgsVids/projects/Whitneys/WhitUniqueCreations.png'
import WhitsImgs from '../../Assets/imgsVids/projects/Whitneys/whitsimgs.png'
import WhitDemo from '../../Assets/imgsVids/projects/Whitneys/vids/whitDemo.mp4'
import ScreenRecording from '../../Assets/imgsVids/projects/Whitneys/vids/ScreenRecording_2025-08-15_033705.mp4'

// Banyan Labs Project Images
import DashboardImg1 from '../../Assets/imgsVids/projects/Dashboard/Screenshot 2025-07-22 012441.png'
import DashboardImg2 from '../../Assets/imgsVids/projects/Dashboard/Screenshot 2025-07-22 012359.png'
import DashboardImg3 from '../../Assets/imgsVids/projects/Dashboard/Screenshot 2025-07-30 144023.png'
import DashboardImg4 from '../../Assets/imgsVids/projects/Dashboard/Screenshot 2025-07-30 144215.png'
import WidgetImg1 from '../../Assets/imgsVids/projects/DonationWidget/Screenshot 2025-07-25 012430.png'
import WidgetImg2 from '../../Assets/imgsVids/projects/DonationWidget/DonateButton.png'
import WidgetImg3 from '../../Assets/imgsVids/projects/DonationWidget/DonatePassItOn.png'
import WidgetImg4 from '../../Assets/imgsVids/projects/DonationWidget/Screenshot 2025-07-24 123442.png'

const Projects = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, imgIndex: 0, images: [] });

  const isVideo = (src) => {
    return src && (src.includes('.mp4') || src.includes('.webm') || src.includes('.mov'));
  };

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
      images: [Unique, IdeaTC, IdeaSuggest, Prev, LoginWhit, WhitsImgs, WhitDemo, ScreenRecording],
      liveUrl: '#',
      githubUrl: 'https://github.com/TFPrsvr/WhitneysCreations'
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
    // Custom RPA Platform
    {
      name: 'AutoFlow RPA Platform',
      description: 'A comprehensive Robotic Process Automation platform featuring drag-and-drop workflow builder, email/password authentication, white-label customization, and pre-built automation templates. Designed for non-technical users to automate repetitive business processes.',
      techStack: {
        frontend: ['React', 'JavaScript', 'CSS3', 'React DnD', 'React Router'],
        backend: ['Local Storage API', 'React Hooks'],
        database: ['Browser Local Storage'],
        tools: ['Vite', 'React Icons', 'UUID', 'Git']
      },
      images: [],
      liveUrl: 'http://localhost:3001',
      githubUrl: '#',
      isPlaceholder: false,
      isRPA: true
    }
  ];

  const banyanLabsProjects = [
    {
      name: 'PassItOn Donation Widget',
      description: 'An embeddable donation widget that integrates with Stripe for seamless payment processing, checkout pages, and success/cancel pages. Uses Stripe webhooks to handle all payment flows and can be embedded into any website.',
      contributions: 'Implemented customizable themes, numerous font options with preview examples, dynamic text input for widget headers and placement, toggleable cause/initiative descriptions, recent donors display toggle, progress bar toggle option, recurring monthly and credit card payment button with associated behaviors, anonymous donation option with PCI-compliant secure payment page requiring full name/address while maintaining donor anonymity, success donation page with confetti animation and next payment date display, and multiple styling options.',
      techStack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        backend: ['Next.js API Routes', 'Stripe Webhooks'],
        database: ['Stripe Payment Processing'],
        tools: ['Git', 'GitHub', 'Docker', 'Stripe']
      },
      images: [WidgetImg1, WidgetImg2, WidgetImg3, WidgetImg4],
      liveUrl: '#',
      githubUrl: '#',
      isPlaceholder: false
    },
    {
      name: 'PassItOn Admin Dashboard',
      description: 'Multi-tenant SaaS dashboard for organizations to create and customize donation widgets. Features editor permissions, SuperAdmin functionality, and comprehensive widget management for multiple websites.',
      contributions: 'Implemented notifications with toggleable in-app and email options, advanced filters and search functionality, CSV export feature for donations to upload to company CRMs, analytics graphs with customizable time frame filters, team invitation system with active/pending badges and filters, comprehensive user role management including SuperAdmin, Organization Owner, and Editor roles with role-based access control, role management filters on SuperAdmin dashboard, and organization filtering capabilities.',
      techStack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        backend: ['Next.js API Routes'],
        database: ['Supabase (PostgreSQL)'],
        tools: ['Git', 'GitHub', 'Docker', 'Stripe Connect', 'Clerk Auth']
      },
      images: [DashboardImg1, DashboardImg2, DashboardImg3, DashboardImg4],
      liveUrl: '#',
      githubUrl: '#',
      isPlaceholder: false
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
          <div key={index} className={`project-card ${project.isPlaceholder ? 'placeholder' : ''} ${project.githubUrl === '#' ? 'no-github' : ''}`}>
            <div className='project-header'>
              <h2 className='project-name'>{project.name}</h2>
              <div className='project-links'>
                {!project.isPlaceholder ? (
                  <>
                    {project.isRPA ? (
                      <button 
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className='live-link'
                      >
                        🚀 Try Live Demo
                      </button>
                    ) : (
                      <button 
                        onClick={() => openLightbox(project.images, 0)} 
                        className='live-link'
                        disabled={project.images.length === 0}
                      >
                        View Gallery
                      </button>
                    )}
                    <button
                      onClick={project.githubUrl !== '#' ? () => window.open(project.githubUrl, '_blank') : undefined}
                      disabled={project.githubUrl === '#'}
                      className={`github-link ${project.githubUrl === '#' ? 'disabled' : ''}`}
                    >
                      {project.githubUrl !== '#' ? 'GitHub' : 'No GitHub'}
                    </button>
                  </>
                ) : (
                  <div className='placeholder-links'>
                    <span className='coming-soon'>Portfolio images coming soon</span>
                  </div>
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
                  <div key={i} className='gallery-item' onClick={() => openLightbox(project.images, i)}>
                    {isVideo(img) ? (
                      <video
                        src={img}
                        className='gallery-image'
                        muted
                        playsInline
                        preload="metadata"
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => {e.target.pause(); e.target.currentTime = 0;}}
                      />
                    ) : (
                      <img
                        src={img}
                        alt={`${project.name} screenshot ${i + 1}`}
                        className='gallery-image'
                      />
                    )}
                    {isVideo(img) && (
                      <div className='video-overlay'>
                        <span className='play-icon'>▶</span>
                      </div>
                    )}
                  </div>
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

      {/* Banyan Labs OJT Projects Section */}
      <div className='banyan-labs-section'>
        <h2 className='banyan-labs-title'>Professional Development Experience</h2>
        <p className='banyan-labs-description'>
          Projects completed during OJT with Banyan Labs using Agile/Scrum methodologies including sprint planning and daily standups. 
          Collaborated with CTO Matthew Wallace, Project Manager Shannon Callins, Coordinator Shandea Hardin, 
          and development team members Jesse Davis and Tiffany Halsell. Mentored by Senior Developer Rachael Higgins 
          through continuous feedback sessions.
        </p>
        
        <div className='projects-grid banyan-projects'>
          {banyanLabsProjects.map((project, index) => (
            <div key={index} className={`project-card ${project.isPlaceholder ? 'placeholder banyan-card' : 'banyan-card'} ${project.githubUrl === '#' ? 'no-github' : ''}`}>
              <div className='project-header'>
                <h3 className='project-name'>{project.name}</h3>
                <div className='project-links'>
                  {!project.isPlaceholder ? (
                    <>
                      <button 
                        onClick={() => openLightbox(project.images, 0)} 
                        className='live-link'
                        disabled={project.images.length === 0}
                      >
                        View Gallery
                      </button>
                      <div className='placeholder-links'>
                        <span className='coming-soon'>Proprietary - Banyan Labs</span>
                      </div>
                    </>
                  ) : (
                    <div className='placeholder-links'>
                      <span className='coming-soon'>Proprietary - Banyan Labs</span>
                    </div>
                  )}
                </div>
              </div>
              
              <p className='project-description'>{project.description}</p>
              
              {project.contributions && (
                <div className='contributions-section'>
                  <h4>My Contributions:</h4>
                  <p className='contributions-text'>{project.contributions}</p>
                </div>
              )}
              
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
                    <div key={i} className='gallery-item' onClick={() => openLightbox(project.images, i)}>
                      {isVideo(img) ? (
                        <video
                          src={img}
                          className='gallery-image'
                          muted
                          playsInline
                          preload="metadata"
                          onMouseEnter={(e) => e.target.play()}
                          onMouseLeave={(e) => {e.target.pause(); e.target.currentTime = 0;}}
                        />
                      ) : (
                        <img
                          src={img}
                          alt={`${project.name} screenshot ${i + 1}`}
                          className='gallery-image'
                        />
                      )}
                      {isVideo(img) && (
                        <div className='video-overlay'>
                          <span className='play-icon'>▶</span>
                        </div>
                      )}
                    </div>
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
      </div>

      {lightbox.isOpen && (
        <div className='lightbox' onClick={closeLightbox}>
          <span className='close-btn' onClick={closeLightbox}>&times;</span>
          <span className='arrow left' onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</span>
          {isVideo(lightbox.images[lightbox.imgIndex]) ? (
            <video
              src={lightbox.images[lightbox.imgIndex]}
              className='lightbox-img'
              controls
              autoPlay
              muted
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightbox.images[lightbox.imgIndex]}
              alt='lightbox'
              className='lightbox-img'
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <span className='arrow right' onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</span>
        </div>
      )}
    </section>
  );
};

export default Projects;