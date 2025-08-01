import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'


const Nav = () => {

  return (
    <div className='nav'>
        <div className='nav-links'>
            <Link to='/'>Home</Link>
            <br />
            <br />
            <Link to='/projects'>Projects</Link>
            {/* <br /> */}
            {/* <Link to='/projects2'>Projects</Link> */}
            <br />
            <Link to='/contact'>Contact</Link>
            <br />
            <Link to='/about'>About</Link>
            <br />
            <Link to='/resume'>Resume</Link>
        </div>
    </div>
  )
}

export default Nav