import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav2'
import PortfolioPic from '../Assets/imgsVids/PortFolioLogo.png'
import './Layout.css'

const Layout2 = ({children}) => {

  return (

       <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      backgroundImage: `url(${PortfolioPic})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px',
      textAlign: 'center',
      animation: 'fadeIn 1s ease',
    }}>
      {children}
    </div>

  )
}

export default Layout2