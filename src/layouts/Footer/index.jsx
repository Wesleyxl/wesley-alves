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
            <p>wesley@wesley-alves.com</p>
          </div>
          <div className="right">
            <h4>Media</h4>
            <i className="fa-brands fa-github" />
            <i className="fa-brands fa-whatsapp" />
            <i className="fa-brands fa-instagram" />
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
