import React from "react";
import styled from "styled-components";
import myImage from "../../assets/me1.jpg";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React & Redux",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Git & GitHub",
    "jQuery",
  ];
  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Usmonkul and I enjoy creating things that live
              on the internet. My interest in Web development started back in
              2019 when I enrolled for a bachelor's degree in the IT field at my
              Woosong university.
            </p>
            <p>
              Although I majored in an IA and BigData at my university, my
              strong interest in web development forced me to choose this field.
              I do love creating outstanding interactive websites using
              different Front-end tools.
            </p>
            <p>
              During my university and self-studying period, I built around 30
              interactive and responsive websites. Currently, I'm focused on
              learning advanced React.js and TypeScript .
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img
              className="img"
              src={myImage}
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    &:hover,
    &:focus {
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      width: 100%;
    }
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;
