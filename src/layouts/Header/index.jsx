import React from "react";
import { Link } from "react-router-dom";

import WLogo from "../../assets/W-icon.svg";
import { Container, DesktopMenu, MobileMenu, SocialMedias } from "./styles";

function Header() {
  function handleMenuMobile() {
    const element = document.querySelector("#mobile-menu-handler");
    if (element) {
      if (element.classList.contains("inactive")) {
        element.classList.remove("inactive");
        element.classList.add("active");
      } else {
        element.classList.remove("active");
        element.classList.add("inactive");
      }
    }
  }

  const handleHeader = (e) => {
    window.scroll(0, e);
    console.log(e);
  };

  const handleActiveMenu = () => {
    const a = window.pageYOffset;
    const home = document.getElementById("link-home");
    const project = document.getElementById("link-project");
    const about = document.getElementById("link-about");
    const contact = document.getElementById("link-contact");
    if (a <= 300) {
      if (!home.classList.contains("active")) {
        home.classList.add("active");
      }
      project.classList.remove("active");
      about.classList.remove("active");
      contact.classList.remove("active");
    } else if (a > 301 && a < 1000) {
      home.classList.remove("active");
      project.classList.add("active");
      about.classList.remove("active");
      contact.classList.remove("active");
    } else if (a > 1000 && a < 1800) {
      home.classList.remove("active");
      project.classList.remove("active");
      about.classList.add("active");
      contact.classList.remove("active");
    } else if (a > 1801) {
      home.classList.remove("active");
      project.classList.remove("active");
      about.classList.remove("active");
      contact.classList.add("active");
    }
  };

  document.addEventListener("scroll", () => {
    handleActiveMenu();
  });

  return (
    <Container>
      <DesktopMenu>
        <ul>
          <li>
            <a href="/" className="inactive">
              <img src={WLogo} alt="Wesley Alves" />
              esley
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              id="link-home"
              to="/"
              alt="Home"
              title="Home"
              className="active"
              onClick={() => handleHeader(0)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              id="link-project"
              to="/#project"
              alt="Project"
              title="Project"
              onClick={() => handleHeader(400)}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              id="link-about"
              to="/#about"
              alt="About"
              title="About"
              onClick={() => handleHeader(1400)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              id="link-contact"
              to="/#contact"
              alt="Contact"
              title="Contact"
              onClick={() => handleHeader(2000)}
            >
              Contact
            </Link>
          </li>
          {/* <li>
            <select name="lang" id="lang" defaultValue="pt">
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
          </li> */}
        </ul>
      </DesktopMenu>

      <MobileMenu>
        <ul>
          <li>
            <a href="/" className="inactive">
              <img src={WLogo} alt="Wesley Alves" />
            </a>
          </li>
          <li>
            <button type="button" onClick={handleMenuMobile}>
              <i className="fa-solid fa-bars" />
            </button>
          </li>
        </ul>
        <nav id="mobile-menu-handler" className="inactive">
          <li>
            <Link to="/" alt="Home" title="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/#project" alt="Project" title="Project">
              Project
            </Link>
          </li>
          <li>
            <Link to="/#about" alt="About" title="About">
              About
            </Link>
          </li>
          <li>
            <Link to="/#contact" alt="Contact" title="Contact">
              Contact
            </Link>
          </li>
        </nav>
      </MobileMenu>

      <SocialMedias>
        <ul>
          <div className="line" />
          <li>
            <a
              href="https://github.com/Wesleyxl"
              alt="Github Wesley Alves"
              title="Github Wesley Alves"
            >
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/wesley-alves-barreto-1528b9178/"
              alt="LinkedIn Wesley Alves"
              title="LinkedIn Wesley Alves"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5511999727429"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
          </li>
          <div className="line" />
        </ul>
      </SocialMedias>
    </Container>
  );
}

export default Header;
