import { Link } from "react-router-dom";

import { HeaderContainer, Nav } from "./style";

import { Timer, Notepad } from "phosphor-react";
import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <Nav>
        <ul>
          <li>
            <Link to="/">
              <span className="sr-only">Timer</span>
              <Timer size={32} color="#000000" />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <span className="sr-only">Profile</span>
              <Notepad size={32} color="#000000" />
            </Link>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};
