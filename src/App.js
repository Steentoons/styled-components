import GlobalStyle from "./GlobalStyle.style";
import Overlay from "./components/overlay/Overlay";
import { MainContainer } from "./GlobalStyle.style";
import { WrapperContainer } from "./GlobalStyle.style";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Overlay />
      <WrapperContainer>
        <Nav />
      </WrapperContainer>
    </MainContainer>
  );
}

export default App;
