import React from "react";
import {
  NavContainer,
  NavLeftSection,
  NavRightSection,
  Logo,
  NavListsContainerDesktop,
  MenuBars
} from "./Nav.style";
import LogoImg from "../../assets/images/logo.svg";
import Bars from "../../assets/images/icon-menu.svg";
import NavRightButtonMolule from "./NavRightButtonMolule";
import NavLists from "./NavLists";

const Nav = () => {
  return (
    <NavContainer>
      <NavLeftSection>
        <Logo src={LogoImg} alt="Logo" />
        <NavListsContainerDesktop>
          <NavLists />
        </NavListsContainerDesktop>
      </NavLeftSection>
      <NavRightSection>
        <NavRightButtonMolule />
      </NavRightSection>

      <MenuBars src={Bars} alt="menu bars" />
    </NavContainer>
  );
};

export default Nav;
