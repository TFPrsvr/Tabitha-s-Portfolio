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
            I am a Full-Stack Web Developer specialized in building secure, scalable, and
            user-centric digital experiences. My technical foundation was forged through the
            Persevere coding program and refined during a high-impact Professional Development
            residency at Banyan Labs, where I worked within an Agile/Scrum environment to ship
            proprietary SaaS products.
          </p>
          <br />
          <p>
            I have a proven track record of architecting complex financial pipelines (Stripe),
            engineering multi-tenant dashboards, and developing data-rich features like exportable
            CRMs and role-based access systems. I approach code with a methodical,
            systems-thinking mindset — believing that clean logic and persistent problem-solving
            can solve any challenge.
          </p>
          <br />
          <p>
            I am driven by the belief that your past doesn&apos;t define your future; it&apos;s the
            work you do today that builds the path forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
