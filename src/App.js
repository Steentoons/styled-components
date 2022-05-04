import GlobalStyle from "./GlobalStyle.style";
import Overlay from "./components/overlay/Overlay";
import { MainContainer } from "./GlobalStyle.style";
import { WrapperContainer } from "./GlobalStyle.style";
import Nav from "./components/nav/Nav";
import MainSection from "./components/main_section/MainSection";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle.style";

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Overlay />
      <ThemeProvider theme={theme}>
        <WrapperContainer>
          <Nav />
          <MainSection />
        </WrapperContainer>
      </ThemeProvider>
    </MainContainer>
  );
}

export default App;
