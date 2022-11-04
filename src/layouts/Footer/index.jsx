import React from "react";

import WLogo from "../../assets/W-icon.svg";
import { Container } from "./styles";

function Footer() {
  return (
    <Container>
      <div className="content">
        <div className="title">
          <div className="left">
            <a href="/" className="inactive">
              <img src={WLogo} alt="Wesley Alves" />
              esley
            </a>
            <p>contato@wesley-alves.com</p>
          </div>
          <div className="right">
            <h4>Media</h4>
            <a
              href="/https://www.linkedin.com/in/wesley-alves-barreto-1528b9178/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://github.com/Wesleyxl"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5511999727429"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>
        <div className="copy">
          <i className="fa-regular fa-copyright" />
          Copyright 2022. made by
          <a
            href="www.wesley-alves.com"
            alt="Wesley Alves"
            title="Wesley Alves"
          >
            Wesley Alves
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
