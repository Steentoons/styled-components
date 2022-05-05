import styled from "styled-components/macro";

export const MainSectionDiv = styled.div `
  width: 100%;
  background: ${(props) => props.theme.whiteShade};
  display: flex;
  flex-direction: column;

  /* @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 70%;
    margin: 0 auto;
  } */

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
  }
`;

export const MainSectionDivTop = styled.div `
  order: 2;
  padding-bottom: 2em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 2em;

  & h1 {
    font-size: 2rem;
    padding-top: 0.8em;
    font-family: Epilogue-700;
    color: ${(props) => props.theme.almostBlack};
    width: 8em;
    width: 100%;

    & span {
      font-size: 2rem;
      padding-top: 0.8em;
      font-family: Epilogue-700;
      color: ${(props) => props.theme.almostBlack};
      width: 8em;
      padding: 0;
    }
  }

  & p {
    font-size: 1rem;
    padding-top: 0.8em;
    font-family: Epilogue-500;
    color: ${(props) => props.theme.mediumGray};
    line-height: 1.5rem;
    width: 25em;
    margin-bottom: 2em;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    order: 1;
    text-align: left;
    align-items: flex-start;

    & h1 {
      font-size: 4rem;

      & span {
        font-size: 4rem;
        display: block;
      }
    }
  }
`;

export const MainSectionDivBottom = styled.div `
  order: 1;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

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

  @media screen and (min-width: 768px) {
    display: block;
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const MainSectionImageDesktop = styled.img `
  width: auto;
  height: 25em;
  display: none;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const CompanyLogosDiv = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
  padding: 0 1em;

  @media screen and (min-width: 768px) {
    padding: 0 2em;
    justify-content: center;
    gap: 1.5em;
  }
`;

export const CompanyLogos = styled.img `
  width: auto;
  height: 1em;

  &:nth-child(2) {
    height: 1.5em;
  }

  &:last-child {
    height: 1.2em;
  }
`;