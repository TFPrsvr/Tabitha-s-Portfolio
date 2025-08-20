import './App.css'
import Skills2 from './Comps/Pages/Skills/Skills2.jsx'
import Projects from './Comps/Pages/Projects/Projects.jsx'
import ContactMe from './Comps/Pages/ContactMe/ContactMe.jsx'
import AboutMe from './Comps/Pages/AboutMe/AboutMe.jsx'
import Nav2 from './Comps/Nav/Nav2.jsx'
import Name from './Comps/Pages/Name/Name.jsx'
import Footer from './Comps/Footer/Footer.jsx'
// import { AnimatedBeam } from './components/magicui/animated-beam'
// import { ScrollProgress } from './components/magicui/scroll-progress'
import { useRef } from 'react'


function App() {
  const containerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      {/* <ScrollProgress className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" /> */}
      <div className="app-wrapper" ref={containerRef}>
      <div className="background"></div>
      <Nav2 />
      <main className="main-content">
        <section id="home" ref={homeRef}><Name /></section>
        <section id="about" ref={aboutRef}><AboutMe /></section>
        <section id="skills" ref={skillsRef}><Skills2 /></section>
        <section id="projects" ref={projectsRef}><Projects /></section>
        <section id="contact" ref={contactRef}><ContactMe /></section>
      </main>
      <Footer />
      
      {/* Animated Beams */}
      {/* <AnimatedBeam
        containerRef={containerRef}
        fromRef={homeRef}
        toRef={aboutRef}
        curvature={-50}
        gradientStartColor="#4f46e5"
        gradientStopColor="#06b6d4"
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aboutRef}
        toRef={skillsRef}
        curvature={50}
        gradientStartColor="#06b6d4"
        gradientStopColor="#10b981"
        delay={2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={skillsRef}
        toRef={projectsRef}
        curvature={-30}
        gradientStartColor="#10b981"
        gradientStopColor="#f59e0b"
        delay={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={projectsRef}
        toRef={contactRef}
        curvature={40}
        gradientStartColor="#f59e0b"
        gradientStopColor="#ef4444"
        delay={4}
      /> */}
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
