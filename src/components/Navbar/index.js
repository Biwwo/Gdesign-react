import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Gaëlle Design & Creation</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="acceuil">Acceuil</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">A propos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Catalogue</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
