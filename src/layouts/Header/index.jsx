import React from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/" alt="Home" title="Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" alt="Project" title="Project">
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" alt="About" title="About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" alt="Contact" title="Contact">
              Contact
            </NavLink>
          </li>
          <li>
            <select name="lang" id="lang" defaultValue="pt">
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
          </li>
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
            <NavLink to="/" alt="Home" title="Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" alt="Project" title="Project">
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" alt="About" title="About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" alt="Contact" title="Contact">
              Contact
            </NavLink>
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
              href="/"
              alt="LinkedIn Wesley Alves"
              title="LinkedIn Wesley Alves"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <div className="line" />
        </ul>
      </SocialMedias>
    </Container>
  );
}

export default Header;
