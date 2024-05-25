import React, { useState } from "react";
import styled from "styled-components";
import { experience } from "../../data/config";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState("goqba");
  return (
    <StyledJobsSection id="jobs">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className="inner">
        <StyledTabList>
          <StyledBottons isActive={true} onClick={() => setActiveTab("goqba")}>
            GoQba
          </StyledBottons>
          <StyledBottons onClick={() => setActiveTab("intern")}>
            IDR Envision
          </StyledBottons>
          <StyledBottons onClick={() => setActiveTab("freelance")}>
            Freelance
          </StyledBottons>
          <StyledBottons onClick={() => setActiveTab("tutor")}>
            Tutor
          </StyledBottons>
        </StyledTabList>
        {activeTab === "goqba" && <JobInfo data={experience.goqba} />}
        {activeTab === "intern" && <JobInfo data={experience.intern} />}
        {activeTab === "freelance" && <JobInfo data={experience.freelance} />}
        {activeTab === "tutor" && <JobInfo data={experience.tutor} />}
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;

export const JobInfo = ({ data }) => {
  return (
    <StyledTabPanels>
      <StyledTabPanel>
        <h3>
          <span>{data.title}</span>
          <span className="company">
            &nbsp;@&nbsp;
            <span className="inline-link">{data.company}</span>
          </span>
        </h3>
        <p className="range">{data.date}</p>
        <div>
          <ul>
            {data.description.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          <ol>
            {data.stack.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
        </div>
      </StyledTabPanel>
    </StyledTabPanels>
  );
};

const StyledJobsSection = styled.section`
  max-width: 700px;
  .inner {
    display: grid;
    grid-template-columns: 1fr 3fr;
    @media (max-width: 600px) {
      display: block;
    }
    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledTabList = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-direction: row;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
`;
const StyledBottons = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? "var(--green)" : "var(--slate)")};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
    color: var(--green);
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
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-md);
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li {
      padding: 5px 10px 2px 10px;
      color: var(--green);
      background-color: #142a39;
      border-radius: 20px;
    }
  }
  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }
  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;
