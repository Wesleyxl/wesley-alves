import React from "react";
import Lottie from "react-lottie";
import ReactTyped from "react-typed";

import LogoA from "../../assets/A-icon.svg";
import CodeAnimationMobile from "../../assets/code-home.json";
import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpg";
import LogoW from "../../assets/W-icon.svg";
import {
  Container,
  TextArea,
  ImageArea,
  Intro,
  ProjectContainer,
  AboutContainer,
  ContactContainer,
} from "./styles";

function Home() {
  const lottiesOptions = {
    loop: true,
    autoplay: true,
    animationData: CodeAnimationMobile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Intro>
        <TextArea>
          <h1>
            <span>Hi, Im</span>
            <img src={LogoW} alt="Wesley Alves" />
            esley
            <img
              style={{ marginLeft: 10, marginRight: 5 }}
              src={LogoA}
              alt="Wesley Alves"
            />
            lves
          </h1>
          <h3>
            <ReactTyped
              strings={[
                "Programador",
                "Web Developer",
                "Desenvolvedor Mobile",
                "Web Designer",
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </h3>
          <p>
            I create responsive websites and mobile apps, using the most modern
            and sophisticated technologies today, where technologies meet
            creativity.
          </p>
        </TextArea>

        <ImageArea>
          <div className="lotties-content">
            <Lottie options={lottiesOptions} width="100%" height="100%" />
          </div>
        </ImageArea>
      </Intro>

      <ProjectContainer>
        <div className="title">
          <h2>Projects</h2>
          <a href="/projects">~~&gt; View All</a>
        </div>

        <div className="projects">
          <div className="box">
            <div className="img">
              <img src={Project1} alt="" srcSet="" />
            </div>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
            </div>
            <div className="description">
              <h3>ChertNodes</h3>
              <p>Minecraft servers hosting </p>

              <a href="/">Live</a>
              <a href="/">Github</a>
            </div>
          </div>

          <div className="box">
            <div className="img">
              <img src={Project2} alt="" srcSet="" />
            </div>
            <div className="tech">
              <span>React</span>
              <span>Express</span>
              <span>Node.js</span>
            </div>
            <div className="description">
              <h3>ProtectX</h3>
              <p>Discord anti-crash bot</p>

              <a href="/">Live</a>
              <a href="/">Github</a>
            </div>
          </div>

          <div className="box">
            <div className="img">
              <img src={Project3} alt="" srcSet="" />
            </div>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
            </div>
            <div className="description">
              <h3>Kahoot Answers Viewer</h3>
              <p>Get answers to your kahoot quiz</p>

              <a href="/">Live</a>
              <a href="/">Github</a>
            </div>
          </div>
        </div>
      </ProjectContainer>

      <AboutContainer />
      <ContactContainer />
    </Container>
  );
}

export default Home;
