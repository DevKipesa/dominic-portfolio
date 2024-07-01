import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/header";
import { Animate } from "react-simple-animate";
import "./about.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Dominic Kimani",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "  Kenya",
  },
  {
    label: "Email",
    value: "kymdommie@gmail.com",
  },
  {
    label: "Contact No",
    value: "+254797543225",
  },
];

const jobSummary =
  "I am an inventive software engineer. I specialize in creating intuitive, responsive, and visually appealing user interfaces. I am an enthusiastic InformationTechnology professional with keen interest and experience Software development. I’m a highly skilled and results-driven Software Engineer with experience in designing and developing robust, efficient, andscalable software solutions. I collaborate with cross-functional teams and use cutting-edge technologies to tackle complex challenges. I’m committed to delivering innovative solutions that enhance user experiences and drive business growth. I’m passionate about stayingcurrent with emerging trends and continuously expanding my skillset to deliver high-qualitysoftware that meets and exceeds client and company objectives.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
