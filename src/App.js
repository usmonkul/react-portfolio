import "./App.styles.js";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component.jsx";
import styled from "styled-components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <StyledMainContainer>
        <Hero className="fillHeight" />
      </StyledMainContainer>
    </div>
  );
};

export default App;

const StyledMainContainer = styled.main`
  counter-reset: section;
`;
