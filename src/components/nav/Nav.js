import React from "react";
import {
  NavContainer,
  NavLeftSection,
  NavRightSection,
  NavMenus,
  Logo,
  List,
  Label,
  Dropdown,
  NavRightButtons,
  Button,
  ListDiv,
  ListDropdownDiv,
  ListDropdownAbsoluteDiv,
  Menus,
  MenuImage,
  MenuItem,
} from "./Nav.style";
import LogoImg from "../../assets/images/logo.svg";
import dropdornImage from "../../assets/images/icon-arrow-down.svg";
import menuImg from "../../assets/images/icon-todo.svg";
import menuImg1 from "../../assets/images/icon-calendar.svg";
import menuImg2 from "../../assets/images/icon-reminders.svg";
import menuImg3 from "../../assets/images/icon-planning.svg";

const Nav = () => {
  return (
    <NavContainer>
      <NavLeftSection>
        <Logo src={LogoImg} alt="Logo" />
        <NavMenus>
          <ul>
            <List>
              <ListDiv>
                <Label>Features</Label>
                <Dropdown src={dropdornImage} />
              </ListDiv>

              {/* Dropdown Desktop */}
              <ListDropdownDiv>
                <ListDropdownAbsoluteDiv>
                  <Menus>
                    <MenuImage src={menuImg} alt="Todo List Icon" />
                    <MenuItem>Todo List</MenuItem>
                  </Menus>
                  <Menus>
                    <MenuImage src={menuImg1} alt="Calender Icon" />
                    <MenuItem>Calender</MenuItem>
                  </Menus>
                  <Menus>
                    <MenuImage src={menuImg2} alt="Reminders Icon" />
                    <MenuItem>Reminders</MenuItem>
                  </Menus>
                  <Menus>
                    <MenuImage src={menuImg3} alt="Planning Icon" />
                    <MenuItem>Planning</MenuItem>
                  </Menus>
                </ListDropdownAbsoluteDiv>
              </ListDropdownDiv>
            </List>

            <List>
              <ListDiv>
                <Label>Company</Label>
                <Dropdown src={dropdornImage} />
              </ListDiv>

              {/* Dropdown Desktop */} 
              <ListDropdownDiv>
                <ListDropdownAbsoluteDiv>
                  <Menus>
                    <MenuItem>History</MenuItem>
                  </Menus>
                  <Menus>
                    <MenuItem>Our Team</MenuItem>
                  </Menus>
                  <Menus>
                    <MenuItem>Blog</MenuItem>
                  </Menus>
                </ListDropdownAbsoluteDiv>
              </ListDropdownDiv>
            </List>
            <List>
              <ListDiv>
                <Label>Careers</Label>
              </ListDiv>
            </List>
            <List>
              <ListDiv>
                <Label>About</Label>
              </ListDiv>
            </List>
          </ul>
        </NavMenus>
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
    </NavContainer>
  );
};

export default Nav;
