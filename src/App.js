import "./App.styles.js";
import Hero from "./components/hero/hero.component.jsx";
import styled from "styled-components";
import Layout from "./components/layout/layout.component.jsx";

const App = () => {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero />
      </StyledMainContainer>
    </Layout>
  );
};

export default App;

const StyledMainContainer = styled.main`
  counter-reset: section;
`;
