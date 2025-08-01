import React from 'react'
import './Skills.css'

import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs} from 'react-icons/fa'
import {SiExpress, SiMongodb} from 'react-icons/si'


const Skills = () => {
 
    return (
    <div className='skills'>
        <div id='skills-List'>Skills Include:</div>
        <div className='skills-Icons'>
            <div className='skill'>
                <FaHtml5 className='skill-Icon' />
                <div className='skill-Name'>HTML5</div>
            </div>
            <div className='skill'>
                <FaCss3Alt className='skill-Icon' />
                <div className='skill_name'> CSS</div>
                            </div>
            <div className='skill'>
                <FaJsSquare className='skill-Icon' />
                <div className='skill-Name'>JavaScript</div>
            </div>
            <div className='skill'>
                <FaReact className='skill-icon' />
                <div className='skill-Name'>React</div>
            </div>
            <div className='skill'>
                <FaNodeJs className='skill-Icon' />
                <div className='skill-Name'>Node.js</div>
            </div>
            <div className='skill'>
                <SiExpress className='skill-Icon' />
                <div className='skill-Name'>Express.js</div>
            </div>
            <div className='skill'>
                <SiMongodb className='skill-Icon' />
                <div className='slill-Name'>MongoDB</div>
            </div>
          
                </div>
        </div>
  )
}

export default Skills