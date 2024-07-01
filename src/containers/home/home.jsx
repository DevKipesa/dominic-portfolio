import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
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
          <a href="/chege-dominic-kimani.pdf" download="Dominic_Resume.pdf">
            <button className="resume">Download Resume</button>
          </a>
        </div>
      </Animate>
    </div>
  );
};

export default Home;
