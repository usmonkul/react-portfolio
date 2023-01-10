import React from "react";
import styled from "styled-components";

const Jobs = () => {
  return (
    <StyledJobsSection id="jobs">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className="inner">
        <StyledTabPanels>
          <StyledTabPanel>
            <h3>Self Learner & Freelancer</h3>
            <p className="range"> September 2019 - Present</p>
            <div>
              <ul>
                <li>
                  I've an experience of 1+ year of building modern, dynamic, and
                  single-page web applications as a Freelancer.
                </li>
                <li>
                  I have been learning new technologies and web development
                  since September 2019, when I first enrolled at Woosong
                  University in South Korea. As I'm majored in AI & BigData,
                  I've learned many tools, languages, and algorithms related to
                  Ai & BigData
                </li>
                <li>
                  My passion to learn Web development were greater, so I learned
                  Web development at the same time via online platforms like
                  Udemy, Codeacademy, MohirDev and etc. I grab the knowledge of
                  HTML, CSS, JavaScript, TypeScript, React, Git, and other
                  important technologies.
                </li>
              </ul>
            </div>
          </StyledTabPanel>
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;

const StyledJobsSection = styled.section`
  max-width: 700px;
  .inner {
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }
    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  }
  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    color: var(--green);
  }
  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;
