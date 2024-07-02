import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <div className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Dominic,
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <a href="/resume.pdf" download="Dominic_Resume.pdf">
            <button className="resume">Download Resume</button>
          </a>
        </div>
        <div className="home__social-media">
        <a href="https://x.com/i_am_kipesa?t=1O2c2KE2Jxn2UVRi5-VY3g&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.facebook.com/dommie.kym" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/kymdommie?igsh=ZmcybHlrMTJpc3d6" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
      </Animate>
    </div>
  );
};

export default Home;
