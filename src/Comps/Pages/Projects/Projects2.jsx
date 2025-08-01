import React, { useEffect, useState } from 'react'
import './Projects.css'
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

const Projects2 = () => {
  // const [appsImgs, setAppsImgs] = useState([
  //   {id: NotesApp, 
  //    src: [
  //     {HeaderImg}, 
  //     {LoginNImg}, 
  //     {Map}, 
  //     {LoginOutlined}, 
  //     {LROption}, 
  //     {Register}
  //   ]},
  //   { id: Whitneys, 
  //     src: [
  //       {IdeaSuggest}, 
  //       {IdeaTC}, 
  //       {Login}, 
  //       {Prev}, 
  //       {Unique}
  //     ]}
  // ])


  const [projects] = useState([
    {
      id: 'Notes',
      name: 'NotesApp',
      description:  'Note taking app with real-time collaboration. user authentication, and a responsive design.',
      // image: 'https://via.placeholder.com/150',
      images: [HeaderImg, LoginNImg, Map, LoginOutlined, LROption, Register],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
      Link: '',
    },
    {
      id: 'Whits',
      name: 'Whitneys Unique Creations',
      description: `Whitney's DIY Project- a full-stack application that allows users to create, share, and discover DIY projects. It features user authentication, project creation, and contact forms`,
      // image: 'https://via.placeholder.com/150',
      images: [IdeaSuggest, IdeaTC, LoginWhit, Prev, Unique],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
      Link: '',
    },
  ])

  useEffect(() => {
    console.log('Projects component mounted', projects)
  }, [projects])

  return (
    <div className='Projects'>
      <div id='projects'>My Work:</div>
      {console.log('Rendering Projects Comp', projects)}
      <div className='projects-List'>
        {projects.map((project, index) => (
          <div className='project' key={index}>
            <div className='project-Image'>
              <img src={project.images} alt={project.name} />
            </div>
            <div className='project-Name'>{project.name}</div>
            <div className='project-Description'>{project.description}</div>
            <div className='project-Tech'> {project.tech}</div>
            <div className='project-Link'>{project.Link}</div>
            <button className='project-Button'>View Project</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects2