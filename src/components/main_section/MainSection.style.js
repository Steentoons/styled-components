import styled from "styled-components/macro";

export const MainSectionDiv = styled.div `
  width: 100%;
  background: ${(props) => props.theme.whiteShade};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 70%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
  }
`;

export const MainSectionDivTop = styled.div `
  order: 2;
  padding-bottom: 2em;

  & h1 {
      font-size: 4.5rem;
      padding-top: .8em;
      font-family: Epilogue-700;
      color: ${props => props.theme.almostBlack};
      width: 8em;
  } 

  & p {
      font-size: 1rem;
      padding-top: .8em;
      font-family: Epilogue-500;
      color: ${props => props.theme.mediumGray};
      line-height: 1.5rem;
      width: 25em;
      margin-bottom: 2em;
  } 

  @media screen and (min-width: 1024px) {
    width: 50%;
    order: 1;
  }
`;

export const MainSectionDivBottom = styled.div `
  order: 1;

  @media screen and (min-width: 1024px) {
    width: 50%;
    order: 2;
    display: flex;
    justify-content: flex-end;
  }
`;

export const MainSectionImageMobile = styled.img `
  width: 100%;
  display: block;

  @media screen and (min-width: 1024px) {
      display: none;
  }
`;

export const MainSectionImageDesktop = styled.img `
    width: auto;
    height: 25em;
    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
  }
`;