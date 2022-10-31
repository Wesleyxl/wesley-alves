import React from "react";

import { Container } from "./styles";

function Footer() {
  return (
    <Container>
      <div className="content">
        <div className="copy">
          <i className="fa-regular fa-copyright" />
          Copyright 202. made by
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
