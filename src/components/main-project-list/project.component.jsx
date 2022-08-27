import React, { useState } from "react";
import styled from "styled-components";
import { myProjects } from "../../data/config";
import Card from "./project-card.component";

const Project = () => {
  const [showMore, setShowMore] = useState(true);

  const GRID_LIMIT = 6;
  const firstSix = myProjects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? myProjects : firstSix;
  return (
    <StyledProjectsSection id="projects">
      <h2 className="numbered-heading">Some Things I’ve Built</h2>
      <ul className="projects-grid">
        {projectsToShow &&
          projectsToShow.map((node, i) => (
            <Card key={node.title} node={node} />
          ))}
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? "Less" : "More"}
      </button>
    </StyledProjectsSection>
  );
};

export default Project;

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }
  .projects-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  .more-button {
    margin: 80px auto 0;
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1.25rem 1.75rem;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  }
`;
