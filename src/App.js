import "./App.styles.js";
import Hero from "./components/hero/hero.component.jsx";
import styled from "styled-components";
import Layout from "./components/layout/layout.component.jsx";
import Contact from "./components/cta/cta.component.jsx";
import About from "./components/about/about.component.jsx";
import Project from "./components/main-project-list/project.component.jsx";
import Jobs from "./components/education/jobs.component.jsx";

const App = () => {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Project />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

export default App;

const StyledMainContainer = styled.main`
  counter-reset: section;
`;
