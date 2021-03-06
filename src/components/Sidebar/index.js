import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinks,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="acceuil" onClick={toggle}>
            Acceuil
          </SidebarLinks>
          <SidebarLinks to="about" onClick={toggle}>
            A propos
          </SidebarLinks>
          <SidebarLinks to="discover" onClick={toggle}>
            Catalogue
          </SidebarLinks>
          <SidebarLinks to="contact" onClick={toggle}>
            Contact
          </SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
