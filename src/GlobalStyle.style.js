import styled, { createGlobalStyle } from "styled-components"
import Font500 from "./assets/fonts/Epilogue-Medium.ttf"
import Font700 from "./assets/fonts/Epilogue-Bold.ttf"

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

`

export const MainContainer = styled.div `
    width: 100%;
    background-color: white;
`

export const WrapperContainer = styled.div `
    background: white;
    width: 100%;
`

export default GlobalStyle