import styled, { createGlobalStyle } from "styled-components/macro";
import Font500 from "./assets/fonts/Epilogue-Medium.ttf";
import Font700 from "./assets/fonts/Epilogue-Bold.ttf";

const GlobalStyle = createGlobalStyle `

    @font-face {
        font-family: Epilogue-500;
        src: url(${Font500});
    }
    @font-face {
        font-family: Epilogue-700;
        src: url(${Font700});
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Epilogue-500;
        font-size: 1.125rem;
    }

    body {
        background: #FAFAFA;
    }

`;

export const MainContainer = styled.div `
  width: 100%;
  background-color: ${(props) => props.theme.whiteShade};
`;

export const WrapperContainer = styled.div `
  background-color: ${(props) => props.theme.whiteShade};
  width: 100%;
`;

export const theme = {
    whiteShade: "#FAFAFA",
    mediumGray: "hsl(0, 0%, 41%)",
    almostBlack: "hsl(0, 0%, 8%)"
};

export default GlobalStyle;