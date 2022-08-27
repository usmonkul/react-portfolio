import React from "react";
import styled from "styled-components";
import { Icon } from "../icons/icon";

const Card = (node) => {
  return (
    <StyledProject>
      <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <Icon name="Folder" />
            </div>
            <div className="project-links">
              {node.node.github && (
                <a
                  href={node.node.github}
                  aria-label="GitHub Link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="GitHub" />
                </a>
              )}
              {node.node.external && (
                <a
                  href={node.node.external}
                  aria-label="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-title">
            <a href={node.node.external} target="_blank" rel="noreferrer">
              {node.node.title}
            </a>
          </h3>

          <div className="project-description">{node.node.info}</div>
        </header>

        <footer>
          {node.node.tech && (
            <ul className="project-tech-list">
              {node.node.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    </StyledProject>
  );
};

export default Card;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);
  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }
  a {
    position: relative;
    z-index: 1;
  }
  .project-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }
  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }
    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 7px;
        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    a {
      position: static;
      &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
  .project-description {
    color: var(--light-slate);
    font-size: 17px;
    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      color: var(--green);
      &:hover,
      &:focus,
      &:active {
        color: var(--green);
        outline: 0;
        &:after {
          width: 100%;
        }
        & > * {
          color: var(--green) !important;
          transition: var(--transition);
        }
      }
      &:after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: var(--green);
        transition: var(--transition);
        opacity: 0.5;
      }
    }
  }
  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;
      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;
