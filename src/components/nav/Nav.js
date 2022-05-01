import React from "react";
import {
  NavContainer,
  NavLeftSection,
  NavRightSection,
  Logo,
  NavRightButtons,
  Button,
  NavListsContainerDesktop,
  MenuBars
} from "./Nav.style";
import LogoImg from "../../assets/images/logo.svg";
import Bars from "../../assets/images/icon-menu.svg";
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
        <NavRightButtons>
          <Button border="none" borderHover="none">
            Login
          </Button>
          <Button
            border="solid hsl(0, 0%, 41%) 2px"
            borderHover="solid hsl(0, 0%, 8%) 2px"
          >
            Register
          </Button>
        </NavRightButtons>
      </NavRightSection>

      <MenuBars src={Bars} alt="menu bars" />
    </NavContainer>
  );
};

export default Nav;
