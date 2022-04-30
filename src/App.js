import GlobalStyle from "./GlobalStyle.style"
import { MainContainer } from "./GlobalStyle.style"
import { WrapperContainer } from "./GlobalStyle.style"
import Nav from "./components/nav/Nav"


function App() {
  return (
    <MainContainer >
      <GlobalStyle />
      <WrapperContainer>
        <Nav />
      </WrapperContainer>
    </MainContainer>
  );
}

export default App;
