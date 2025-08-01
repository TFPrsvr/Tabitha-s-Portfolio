import React, { useEffect, useState } from 'react'
import './Projects.css'

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} alt={project.name} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{project.name}</h3>
        <p className="card-description">{project.description}</p>
        <p className="card-tech"><strong>Tech Stack:</strong> {project.tech}</p>
        {project.Link ? (
          <a href={project.Link} target="_blank" rel="noopener noreferrer">
            <button className="card-button">View Project</button>
          </a>
        ) : (
          <button className="card-button disabled" disabled>
            No Link Available
          </button>
        )}
      </div>
    </div>
  )
}

const Projects2 = () => {
  const [projects] = useState([
    {
      name: `Project: Whitney's Designs`,
      description: `Whitney's DIY Project- a full-stack application that allows users to create, share, and discover DIY projects. It features user authentication, project creation, and contact forms`,
      images: `WhitUniqueCreations.png`,
      tech: 'React, Node.js, Express, MongoDB',
      Link: '',
    },
    {
      name: 'Project: NotesApp',
      description: 'Note taking app with real-time collaboration. user authentication, and a responsive design.',
      image: 'https://via.placeholder.com/300x200',
      tech: 'React, Node.js, Express, MongoDB',
      Link: '',
    },
    {
      name: 'Project: ',
      description: '.',
      image: '',
      tech: 'React, Node.js, Express, MongoDB',
      Link: '',
    },
  ])

  useEffect(() => {
    console.log('Projects component mounted', projects)
  }, [projects])

  return (
    <div className="projects-wrapper">
      <h2 id="projects" className="projects-heading">My Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
