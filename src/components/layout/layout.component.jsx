import styled from "styled-components";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import Social from "../side/Social";
import Email from "../side/Email";

const Layout = ({ children }) => {
  return (
    <StyledContent>
      <Header />
      <Social />
      <Email />
      <div>
        {children}
        <Footer />
      </div>
    </StyledContent>
  );
};

export default Layout;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
