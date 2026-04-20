import React, { useState } from 'react';
import './Projects.css';
import { ShimmerButton } from '../../../components/magicui/shimmer-button';
import { TypingAnimation } from '../../../components/magicui/typing-animation';
import HeaderImg from '../../Assets/imgsVids/projects/NotesApp/HeaderTitleContentNotesApp.png'
import LoginOutlined from '../../Assets/imgsVids/projects/NotesApp/NotesAppLoginOutlined.png'
import LoginNImg from '../../Assets/imgsVids/projects/NotesApp/loginNotesApp.png'
import Map from '../../Assets/imgsVids/projects/NotesApp/mapofNotesOrNoNotesNotesApp.png'
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
      githubUrl: 'https://github.com/TFPrsvr/final4-NotesApp'
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
      githubUrl: 'https://github.com/TFPrsvr/RPA-Platform',
      isPlaceholder: false,
      isRPA: true
    },
    // Automotive Database
    {
      name: 'The Automotive Database',
      description: 'A comprehensive automotive mechanics database featuring parts lookup, diagnostic procedures, repair guides, and automotive data management. Built for automotive professionals and enthusiasts with user authentication, professional verification, and content moderation.',
      techStack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        backend: ['Next.js API Routes', 'Drizzle ORM'],
        database: ['Neon PostgreSQL'],
        tools: ['Clerk Auth', 'Git', 'GitHub', 'Vercel', 'VS Code']
      },
      images: [],
      liveUrl: 'https://the-pickard.vercel.app/',
      githubUrl: 'https://github.com/TFPrsvr/The-Pickard',
      isPlaceholder: false,
      isAutomotive: true
    },
    // Tire Marketplace
    {
      name: 'TGS Tires Marketplace',
      description: 'A full-stack e-commerce platform for tire sales featuring Stripe payment processing, user authentication, inventory management, and order tracking. Built with modern Next.js architecture including multi-tenant functionality, email notifications, and comprehensive admin dashboard.',
      techStack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        backend: ['Next.js API Routes', 'Prisma ORM', 'Stripe Webhooks'],
        database: ['Supabase PostgreSQL'],
        tools: ['Clerk Auth', 'Stripe', 'SendGrid', 'Docker', 'Git']
      },
      images: [],
      liveUrl: 'https://t-g-s-tires.vercel.app',
      githubUrl: 'https://github.com/TFPrsvr/T.G.-s-Tires-',
      isPlaceholder: false,
      isTireMarketplace: true
    },
    // ANC Audio App
    {
      name: 'Professional Audio Processing Suite',
      description: 'A comprehensive browser-based audio production application featuring AI-powered analysis, professional-grade effects (EQ, compression, reverb), advanced audio testing suite with 13 validation types, and real-time spectral analysis. Includes mobile deployment via Capacitor for Android/iOS.',
      techStack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Web Audio API'],
        backend: ['Next.js API Routes', 'Custom DSP Algorithms'],
        database: ['Neon PostgreSQL', 'IndexedDB'],
        tools: ['Clerk Auth', 'Capacitor', 'FFmpeg', 'Vercel', 'Docker', 'Jest']
      },
      images: [],
      liveUrl: 'https://anc-audio-app.vercel.app',
      githubUrl: 'https://github.com/TFPrsvr/Tabbs-ANC-App',
      isPlaceholder: false,
      isAudioApp: true
    },
    // HHH Property Maintenance
    {
      name: 'HHH Property Maintenance',
      description: 'Professional business website for a property maintenance company offering excavation, land clearing, bush hogging, flail mowing, dump truck hauling, and demolition services in Dyer County, TN. Features a contact form with email delivery, rate limiting, and input sanitization.',
      techStack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        backend: ['Next.js API Routes', 'Resend', 'React Hook Form'],
        database: ['N/A'],
        tools: ['Helmet', 'DOMPurify', 'Rate Limiter', 'Vercel', 'Git']
      },
      images: [],
      liveUrl: 'https://hhh-property-maintenance.vercel.app/',
      githubUrl: 'https://github.com/TFPrsvr/hhh-property-maintenance',
      isPlaceholder: false,
      isHHH: true
    },
    // Triple L & Son Used Appliances
    {
      name: 'Triple L & Son Used Appliances',
      description: 'Cross-platform mobile & web app for a used appliances store. The owner can photograph and upload new inventory, share listings directly to Facebook, and manage everything through a hidden admin panel — while the public-facing side serves as the full storefront.',
      techStack: {
        frontend: ['React Native', 'Expo', 'TypeScript', 'Expo Router'],
        backend: ['Supabase', 'Axios'],
        database: ['Supabase (PostgreSQL)'],
        tools: ['Expo Camera', 'Expo Image Picker', 'Expo Sharing', 'AsyncStorage', 'Git']
      },
      images: [],
      liveUrl: '#',
      githubUrl: 'https://github.com/TFPrsvr/triple-lns',
      isPlaceholder: false,
      isTripleL: true
    }
  ];

  const banyanLabsProjects = [
    {
      name: 'PassItOn Donation Widget',
      description: 'An embeddable, multi-tenant donation widget engineered with end-to-end Stripe payment pipelines — managing credit card logic, recurring monthly subscriptions, and anonymous donation options with PCI-compliant security. Deployed via iframe across diverse host platforms.',
      contributions: 'Financial Engineering: Built an end-to-end payment pipeline using Stripe, managing credit card logic, recurring monthly subscriptions, and anonymous donation options with PCI-compliant security. Responsive UI Architecture: Solved complex iframe stability issues by implementing custom React hooks and ResizeObserver logic for "glitch-free" embedding across diverse host platforms. User Experience: Designed a Live Preview configuration engine and success-state logic featuring custom confetti animations, dynamic billing cycle displays, toggleable cause/initiative descriptions, progress bar, and recent donors display.',
      techStack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        backend: ['Next.js API Routes', 'Stripe Webhooks'],
        database: ['Stripe Payment Processing'],
        tools: ['Git', 'GitHub', 'Docker', 'Stripe']
      },
      images: [WidgetImg1, WidgetImg2, WidgetImg3, WidgetImg4],
      liveUrl: 'https://donation-widget-beta.vercel.app/',
      githubUrl: '#',
      isPlaceholder: false
    },
    {
      name: 'PassItOn Admin Dashboard',
      description: 'A comprehensive multi-tenant SaaS dashboard for organizations to manage and deploy customizable donation tools. Engineered with a multi-layered permission system and full data portability for enterprise-grade CRM integration.',
      contributions: 'Data Portability: Developed an exportable CRM utility allowing users to filter donation data by custom time ranges and generate platform-agnostic CSV files for external integration. Role-Based Access Control (RBAC): Implemented a multi-layered permission system for SuperAdmins, Owners, and Editors, ensuring secure data isolation. System Documentation: Authored comprehensive technical and user documentation, including onboarding guides for future developers and integration manuals for non-technical stakeholders. Also built: analytics graphs with customizable time frame filters, team invitation system with active/pending badges, and in-app/email notification toggles.',
      techStack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        backend: ['Next.js API Routes'],
        database: ['Supabase (PostgreSQL)'],
        tools: ['Git', 'GitHub', 'Docker', 'Stripe Connect', 'Clerk Auth']
      },
      images: [DashboardImg1, DashboardImg2, DashboardImg3, DashboardImg4],
      liveUrl: 'https://passiton-dashboard.vercel.app/',
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
      <TypingAnimation
        className='section-title text-3xl font-bold mb-8'
        duration={70}
        delay={200}
        startOnView={true}
      >
        My Projects
      </TypingAnimation>
      
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.isPlaceholder ? 'placeholder' : ''} ${project.githubUrl === '#' ? 'no-github' : ''}`}>
            <div className='project-header'>
              <h2 className='project-name'>{project.name}</h2>
              <div className='project-links'>
                {!project.isPlaceholder ? (
                  <>
                    {project.isRPA || project.isAutomotive || project.isTireMarketplace || project.isAudioApp || project.isHHH || project.isTripleL ? (
                      <ShimmerButton
                        onClick={() => project.liveUrl !== '#' ? window.open(project.liveUrl, '_blank') : undefined}
                        shimmerColor="#00ff88"
                        background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        borderRadius="8px"
                        className="text-white font-medium px-4 py-2"
                        disabled={project.liveUrl === '#'}
                      >
                        {project.isAutomotive ? '🚗 View Live Site' :
                         project.isRPA ? '🚀 Try Live Demo' :
                         project.isTireMarketplace ? '🛒 E-Commerce Platform' :
                         project.isAudioApp ? '🎵 Audio App' :
                         project.isHHH ? '🏡 View Live Site' :
                         project.isTripleL ? '🏪 Coming Soon' : '🚀 View Demo'}
                      </ShimmerButton>
                    ) : (
                      <ShimmerButton
                        onClick={() => openLightbox(project.images, 0)}
                        disabled={project.images.length === 0}
                        shimmerColor="#ffffff"
                        background="linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
                        borderRadius="8px"
                        className="text-white font-medium px-4 py-2"
                      >
                        View Gallery
                      </ShimmerButton>
                    )}
                    <ShimmerButton
                      onClick={project.githubUrl !== '#' ? () => window.open(project.githubUrl, '_blank') : undefined}
                      disabled={project.githubUrl === '#'}
                      shimmerColor={project.githubUrl !== '#' ? "#ff6b6b" : "#666666"}
                      background={project.githubUrl !== '#' ? "linear-gradient(135deg, #1f2937 0%, #374151 100%)" : "linear-gradient(135deg, #444444 0%, #555555 100%)"}
                      borderRadius="8px"
                      className={`text-white font-medium px-4 py-2 ml-2 ${project.githubUrl === '#' ? 'disabled-github' : ''}`}
                    >
                      {project.githubUrl !== '#' ? 'GitHub' : 'No GitHub'}
                    </ShimmerButton>
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
          Collaborated in a high-velocity Agile/Scrum team under the mentorship of Senior Developers and the CTO to build
          and maintain proprietary software during a key growth phase. Recognized by leadership for high-level debugging
          skills and technical oversight. Worked alongside CTO Matthew Wallace, Project Manager Shannon Callins,
          Coordinator Shandea Hardin, and developers Jesse Davis and Tiffany Halsell — with continuous mentorship from
          Senior Developer Rachael Higgins.
        </p>
        
        <div className='projects-grid banyan-projects'>
          {banyanLabsProjects.map((project, index) => (
            <div key={index} className={`project-card ${project.isPlaceholder ? 'placeholder banyan-card' : 'banyan-card'} ${project.githubUrl === '#' ? 'no-github' : ''}`}>
              <div className='project-header'>
                <h3 className='project-name'>{project.name}</h3>
                <div className='project-links'>
                  {!project.isPlaceholder ? (
                    <>
                      <ShimmerButton
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        shimmerColor="#00ff88"
                        background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        borderRadius="8px"
                        className="text-white font-medium px-4 py-2"
                      >
                        🚀 Live Site
                      </ShimmerButton>
                      <ShimmerButton
                        onClick={() => openLightbox(project.images, 0)}
                        disabled={project.images.length === 0}
                        shimmerColor="#ffffff"
                        background="linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
                        borderRadius="8px"
                        className="text-white font-medium px-4 py-2 ml-2"
                      >
                        View Gallery
                      </ShimmerButton>
                      <div className='placeholder-links'>
                        <span className='coming-soon'>Proprietary - Banyan Labs</span>
                      </div>
                    </>
                  ) : (
                    <div className='placeholder-links'>
                      <span className='coming-soon'>Coming Soon</span>
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