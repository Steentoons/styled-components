import styled from "styled-components";

export const NavContainer = styled.nav `
  width: 100%;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
`;

export const NavLeftSection = styled.div `
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavRightSection = styled.div ``;

export const NavMenus = styled.div `
  display: flex;
  flex-shrink: 0;

  & ul {
    display: flex;
    align-items: center;
    padding: 0 3em;
  }
`;

export const List = styled.li `
  list-style: none;
  margin-right: 3em;
  cursor: pointer;
  color: hsl(0, 0%, 41%);
  min-width: 100px;

  &:hover {
    color: hsl(0, 0%, 8%);
  }
`;

export const ListDiv = styled.div `
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em;

`;

export const Label = styled.p `
  font-size: 16px;
`;

export const Dropdown = styled.img `
  margin-left: 0.5em;
`;

export const Logo = styled.img `
  height: 1em;
  width: auto;
  fill: red;
  margin-top: 0.2em;
`;

export const NavRightButtons = styled.div `
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button `
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
`;

export const ListDropdownDiv = styled.div `
  width: 100%; 
  position: relative;
`

export const ListDropdownAbsoluteDiv = styled.div `
  position: absolute;
  background: white;
  border-radius: 10px;
  box-shadow: ;
  width: 170px;
  margin-left: -70px;
  padding: 1em;
  margin-top: 1em;
`

export const Menus = styled.div `
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: .3em;
  margin-bottom: .2em;
`

export const MenuImage = styled.img `
  width: .8em;
`

export const MenuItem = styled.div `
  color: hsl(0, 0%, 41%);
  font-size: 16px;
  padding-top: .2em;
  margin-left: .5em;

  &:hover {
    color: hsl(0, 0%, 8%);
  }
`