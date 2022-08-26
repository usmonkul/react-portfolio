import React from "react";
import styled from "styled-components";
import { email } from "../../data/config";
import { BigBtn } from "../../App.styles";

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        if You need someone who is punctual, outgoing and eager to learn. I'm
        currently looking for new opportunities, my inbox is always open. I’ll
        try my best to get back to you!
      </p>
      <BigBtn className="email-link" href={`mailto:${email}`}>
        Say Hello
      </BigBtn>
    </StyledContactSection>
  );
};

export default Contact;

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }
    &:after {
      display: none;
    }
  }
  .title {
    font-size: clamp(40px, 5vw, 60px);
  }
  .email-link {
    margin-top: 50px;
  }
`;
