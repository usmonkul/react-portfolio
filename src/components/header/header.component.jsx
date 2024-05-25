import React from "react";
import styled from "styled-components";
import { navLinks } from "../../data/config";
import { BigBtn } from "../../App.styles";
import Menu from "../menu/menu.component";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledNav>
        {Logo}
        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={name}>
                  <a href={url}>{name}</a>
                </li>
              ))}
          </ol>
          <div>
            <BigBtn
              className="resume-button"
              href="https://www.canva.com/design/DAFE2ZMuubc/InyJ-5X6FTAkkWIzdK9HBA/view?utm_content=DAFE2ZMuubc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </BigBtn>
          </div>
        </StyledLinks>
        <Menu />
      </StyledNav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  display: flex;
  align-items: center;
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    flex-shrink: 0;
    a {
      color: var(--green);
      flex-shrink: 0;
      /* font-weight: 600; */
      width: auto;
      height: 30px;
      display: flex;
      align-items: end;
      transition: opacity 0.4s;
      /* font-size: clamp(25px, 5vw, 28px); */
      &:hover,
      &:focus {
        opacity: 0.6;
        span {
          opacity: 1;
        }
      }
      svg {
        height: 100%;
        width: 100%;
      }
      span {
        padding: 0;
        opacity: 0;
        margin: 0;
        margin-left: 2px;
        padding-bottom: 10px;
        line-height: 0;
        width: fit-content;
        transition: opacity 0.4s;
    }
  }
}
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      a {
        padding: 10px;
        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }
  .resume-button {
    margin-left: 15px;
    padding: 10px;
    font-size: var(--fz-xs);
  }
`;

const Logo = (
  <div className="logo" tabIndex="-1">
    <a href="/" aria-label="home">
      <svg width="301" height="332" viewBox="0 0 301 332" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.2134 203.146L48.1663 200.288C47.0619 199.766 46.0437 199.078 45.1469 198.249L36.7692 190.5L30 183.5L13.5 164.5L7.27948 155.66C5.14536 152.628 4 149.01 4 145.301V73.3702C4 69.5556 5.21188 65.8396 7.46077 62.7584L19.6923 46L36.7692 23L45.0413 12.6048C47.2121 9.87685 49.6815 7.4006 52.4036 5.22235C55.0333 3.11792 58.9296 4.99022 58.9296 8.35834V183.163C58.9296 187.037 59.4414 190.895 60.4517 194.636L61.1774 197.322C62.2893 201.439 58.0685 204.969 54.2134 203.146Z" fill="#64FFDA"/>
        <path d="M296 13H249.589C246.827 13 244.589 15.2386 244.589 18V179.5C244.589 204.839 232.584 228.681 212.226 243.77L207.791 247.057C204.555 249.456 200.991 251.377 197.208 252.76L185.911 256.892C185.097 257.19 184.247 257.38 183.384 257.459L163.129 259.305L141.222 258.718C129.384 258.401 117.677 256.157 106.562 252.074L94.5 247.644L71.5 236.009L64 230.676L55.5 224.374L42 213.223L25.207 196.457L9.0364 179.47C6.31394 176.611 1.53427 179.006 2.19582 182.899L4.5 196.457L7 208.5L11 224.374L18.3392 241.622C18.4462 241.874 18.5737 242.116 18.7204 242.347L29.5 259.305L47 280L68 297.5L88 313L107.5 323L123.347 328.122L138 332H205.203C207.167 332 209.087 331.422 210.724 330.338L212.185 329.371C215.391 327.248 218.442 324.899 221.314 322.343L253.5 293.701L271 274.309L286 257.34C295.702 245.424 301 230.528 301 215.161V18C301 15.2386 298.761 13 296 13Z" fill="#64FFDA"/>
      </svg>
      <span>smon</span>
    </a>
  </div>
);
