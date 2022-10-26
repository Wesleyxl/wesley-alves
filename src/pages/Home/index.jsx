import React from "react";
import Lottie from "react-lottie";
import ReactTyped from "react-typed";

import LogoA from "../../assets/A-icon.svg";
import CodeAnimationMobile from "../../assets/code-home.json";
import LogoW from "../../assets/W-icon.svg";
import { Container, TextArea, ImageArea, Intro } from "./styles";

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
    </Container>
  );
}

export default Home;
