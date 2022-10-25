import React from "react";
import { NavLink } from "react-router-dom";

import WLogo from "../../assets/W-icon.svg";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <nav>
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
            <NavLink to="/work" alt="Home" title="Home">
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" alt="Home" title="Home">
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" alt="Home" title="Home">
              Contact
            </NavLink>
          </li>
          <li>
            <select name="lang" id="lang">
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
