import React from "react";
import {
    NavRightButtons,
    Button,
  } from "./Nav.style";

const NavRightButtonMolule = () => {
  return (
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
  );
};

export default NavRightButtonMolule;
