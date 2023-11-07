import styled from "styled-components";
import SideNav from "../components/SideNav";
import { Section } from "../variables/Sizes";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

// #region CSS
const Title = styled.h1`
  color: #f1f6f9;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* margin: 0; */
  width: 100%;
  text-align: left;
  padding-left: 750px;
`;
// #endregion

export default function ProjectsPage() {
  const [currentSection, setCurrentSection] = useState(
    Section.COMPUTERGRAPHICS
  );

  return (
    <>
      <SideNav
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Title>Computer Graphics (C++)</Title>
      {/* <ProjectCard/> */}
      <Title>Computer Vision (Python)</Title>
      <Title>User Interfaces (Java, CSS, HTML)</Title>
      <Title>Full Stack (React, Typescript, CSS)</Title>
    </>
  );
}
