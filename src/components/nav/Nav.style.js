import styled from "styled-components/macro";

export const MobileOverlayHolder = styled.div`
  width: 100%;
  position: relative;
  /* display: block; */
  display: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const MobileOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: +2;
`;

export const NavContainer = styled.nav`
width: 100%;
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    background-color: #fafafa;

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    background-color: #fafafa;
  }
`;

export const NavLeftSection = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavRightSection = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const NavListsContainerDesktop = styled.div`
  display: none;
  align-self: center;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const NavMenus = styled.div`
  width: 12em;
  height: 100vh;
  background: white;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: auto;
  padding: 1em;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-shrink: 0;
    background: none;
    width: auto;
    height: auto;
    padding: 0;

    & ul {
      display: flex;
      align-items: center;
      padding: 0 3em;
    }
  }
`;

export const List = styled.li`
  list-style: none;
  margin-right: 1em;
  cursor: pointer;
  color: hsl(0, 0%, 41%);
  min-width: 100px;
  margin-top: 1em;

  &:hover {
    color: hsl(0, 0%, 8%);
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const ListDiv = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em;
`;

export const MenuBars = styled.img`
  width: 1.3em;
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Label = styled.p`
  font-size: 16px;
`;

export const Dropdown = styled.img`
  margin-left: 0.5em;
`;

export const Logo = styled.img`
  height: 1em;
  width: auto;
  fill: red;
  margin-top: 0.2em;
`;

export const NavRightButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  @media screen and (min-width: 768px) {
    display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 0;
  }
`;

export const NavButtonModuleMobile = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  border: ${(props) => props.border};
  border-radius: 10px;
  background: none;
  font-size: 16px;
  color: hsl(0, 0%, 41%);
  padding: 0.7em 2em;
  cursor: pointer;

  &:hover {
    border: ${(props) => props.borderHover};
    color: hsl(0, 0%, 8%);
  }

  @media screen and (max-width: 768px) {
    padding: 0.7em 4em;
  }
`;

export const ListDropdownDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const ListDropdownAbsoluteDiv = styled.div`
  margin: 0;
  margin-left: 1.2em;
  padding-top: 0.7em;

  @media screen and (min-width: 768px) {
    position: absolute;
    background: white;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 170px;
    margin-left: -70px;
    padding: 1em;
    margin-top: 1em;
  }
`;

export const Menus = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.3em;
  margin-bottom: 0.2em;
`;

export const MenuImage = styled.img`
  width: 0.8em;
`;

export const MenuItem = styled.div`
  color: hsl(0, 0%, 41%);
  font-size: 16px;
  padding-top: 0.2em;
  margin-left: 0.5em;

  &:hover {
    color: hsl(0, 0%, 8%);
  }
`;
