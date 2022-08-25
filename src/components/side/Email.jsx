import React from "react";
import { email } from "../../data/config";
import styled from "styled-components";
import Side from "./Side";

const Email = () => {
  return (
    <Side orientation="right">
      <StyledLinkWrapper>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledLinkWrapper>
    </Side>
  );
};

export default Email;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;
