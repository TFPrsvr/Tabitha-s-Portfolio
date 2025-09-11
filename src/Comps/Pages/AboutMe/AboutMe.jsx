import React, { useRef, useState, useEffect } from "react";
import "./AboutMe.css";
import ProfilePics from "../../Assets/imgsVids/profile/ProfilePics.png";

const AboutMe = () => {
  const aboutRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-me-section"
      ref={aboutRef}
      className={`about-me-section ${isVisible ? "fade-in" : ""}`}
    >
      <div className="about-wrapper">
        {/* Collage Section */}
        <div className="about-images">
          <img
            src={ProfilePics}
            alt="Tabitha profile pic"
            className="about-img"
          />
        </div>
        {/* <br /> */}
        {/* <br />  */}
        {/* <br />  */}
        {/* <br />  */}
        {/* <br />  */}
        {/* <br />  */}

        {/* Text Section */}
        <div className="about-text">
          <h1>Hi, I'm Tabitha!</h1>
          <p>
            I'm a Full Stack Web Developer passionate about building clean,
            functional, and user-focused digital experiences. My journey began
            through the Persevere coding program, where I discovered my love for
            problem-solving and creating solutions from the ground up.
          </p>
          <br />
          <p>
            After graduating, I was offered an internship that launched my
            professional development journey. I'm excited to continue growing my
            skills and exploring new technologies across frontend frameworks,
            backend systems, and databases.
          </p>
          <br />
          <p>
            I'm driven by the endless possibilities of what applications can
            achieve and the belief that your past doesn't define your future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
