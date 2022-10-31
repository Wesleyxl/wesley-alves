import React from "react";
import Lottie from "react-lottie";
import ReactTyped from "react-typed";

import LogoA from "../../assets/A-icon.svg";
import AboutAnimation from "../../assets/about.json";
import CodeAnimationMobile from "../../assets/code-home.json";
import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpg";
import CodeSkillAnimation from "../../assets/skill.json";
import LogoW from "../../assets/W-icon.svg";
import {
  Container,
  TextArea,
  ImageArea,
  Intro,
  ProjectContainer,
  AboutContainer,
  ContactContainer,
  SkillContainer,
} from "./styles";

function Home() {
  const introLottieOption = {
    loop: true,
    autoplay: true,
    animationData: CodeAnimationMobile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const skillLottieOption = {
    loop: true,
    autoplay: true,
    animationData: CodeSkillAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const aboutLottieOption = {
    loop: true,
    autoplay: true,
    animationData: AboutAnimation,
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
            <Lottie options={introLottieOption} width="100%" height="100%" />
          </div>
        </ImageArea>
      </Intro>

      <ProjectContainer>
        <div className="title">
          <h2>
            <i className="fa-solid fa-code" />
            Projects
          </h2>
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

      <SkillContainer>
        <div className="title">
          <h2>
            <i className="fa-solid fa-code" />
            Skills
          </h2>
        </div>
        <div className="skills">
          <div className="animation">
            <Lottie options={skillLottieOption} width="100%" height="100%" />
          </div>

          <div className="box-area">
            <div className="top">
              <div className="box">
                <div className="title">
                  <p>Languages</p>
                </div>
                <div className="description">
                  <p>PHP, Javascript, Typescript, Python, Nodejs, JAVA</p>
                </div>
              </div>

              <div className="box">
                <div className="title">
                  <p>Databases</p>
                </div>
                <div className="description">
                  <p>MySQL, PostgreSQL, MongoDB</p>
                </div>
              </div>

              <div className="box">
                <div className="title">
                  <p>Tools</p>
                </div>
                <div className="description">
                  <p>Git, VsCode, Figma, Linux, Docker, Eslint</p>
                </div>
              </div>
            </div>

            <div className="bottom">
              <div className="box" style={{ border: "none" }} />

              <div className="box">
                <div className="title">
                  <p>Others</p>
                </div>
                <div className="description">
                  <p>HTML, CSS, EJS, REST, API, Jest</p>
                </div>
              </div>
              <div className="box">
                <div className="title">
                  <p>Frameworks</p>
                </div>
                <div className="description">
                  <p>Laravel, NodeJs, React, React Native, express</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SkillContainer>

      <AboutContainer>
        <div className="title">
          <h2>
            <i className="fa-solid fa-code" />
            About Me
          </h2>
        </div>
        <div className="about">
          <div className="left">
            <p>Hello, I&apos;m, Wesley</p>
            <p>
              I&apos;m a sel-taught developer. I can develop responsive websites
              and application mobile from scratch, and raise them into modern
              user-friendly web experience.
            </p>
            <p>
              Transform my creativity and knowledge into a website has been my
              passion for over year, I have been helping various clients
              stablish their presence online. I always strive to learn about the
              newest technologies and Frameworks.
            </p>

            <div className="btn-area">
              <a href="/about" alt="about" title="about">
                Read more
              </a>
            </div>
          </div>
          <div className="right">
            <div className="animation">
              <Lottie options={aboutLottieOption} width="100%" height="100%" />
            </div>
          </div>
        </div>
      </AboutContainer>

      <ContactContainer />
    </Container>
  );
}

export default Home;
