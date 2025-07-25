import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Skills from './Comps/Pages/Skills/Skills.jsx'
import Skills2 from './Comps/Pages/Skills/Skills2.jsx'
import Projects from './Comps/Pages/Projects/Projects.jsx'
import Projects2 from './Comps/Pages/Projects/Projects2.jsx'
import ContactMe from './Comps/Pages/ContactMe/ContactMe.jsx'
import AboutMe from './Comps/Pages/AboutMe/AboutMe.jsx'
import Nav2 from './Comps/Nav/Nav2'
import Name from '../src/Comps/Pages/Name/Name'
import Layout from './Comps/Layout/Layout.jsx'
import Resume from './Comps/Pages/Resume/Resume.jsx'
import Footer from './Comps/Footer/Footer.jsx'
import PortfolioImg from './Comps/Assets/imgsVids/Portfolio.png'


function App() {

  return (
    <>
      <div className="app-wrapper">
      <div className="background"></div>
      <Nav2 />
      <main className="main-content">
        <section id="home"><Name /></section>
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills2 /></section>
        <section id="projects"><Projects /></section>
        <div className="bottom-sections">
          <section id="resume"><Resume /></section>
          <section id="contact"><ContactMe /></section>
        </div>
      </main>
      <Footer />
    </div>
        {/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Name />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="skills" element={<Skills2 />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes> */}
    </>
  )
}

export default App
