import React from "react";
import styled from "styled-components";
import myImage from "../../assets/portret.jpg";

const About = () => {
  const skills = [
    "Python",
    "JavaScript (ES6+)",
    "TypeScript",
    "MySQL",
    "React & Next js",
    "Flask",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Node - Express js",
  ];
  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Usmonkul, and I am a passionate front-end developer 
              with a keen eye for creating engaging user experiences. I hold a Bachelor's 
              degree in Computer Science from Woosong University, where I graduated with an 
              impressive GPA of 4.36 out of 4.50.
            </p>
            <p>
              I specialize in front-end technologies, including React, JavaScript, Next js, and Tailwind CSS, 
              which I skillfully use to develop modern and responsive web applications. 
              My expertise extends to Flask, MySQL, TypeScript, and Express js, enabling me to deliver dynamic 
              and innovative functionalities.
            </p>
            <p>
              Throughout my career, I have successfully collaborated with diverse teams, 
              showcasing strong communication and teamwork skills. My adaptability and commitment to 
              continuous learning drive me to stay ahead of industry trends and rapidly adopt new technologies.
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
    grid-template-columns: repeat(3, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }
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
      height: 300px;
      object-fit: cover;
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
