import styled from "styled-components";
import SideNav from "../components/SideNav";
import { Section } from "../variables/Types";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

// #region CSS
const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 350px;
  margin-bottom: 175px;
  padding-top: 100px;
  width: 1400px;
`;

const Title = styled.h1`
  color: #f1f6f9;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* margin: 0; */
  width: 100%;
  text-align: left;
  /* padding-left: 750px; */
`;

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
  gap: 30px;
  /* padding-left: 260px; */
  margin-bottom: 75px;
`;
// #endregion

export default function ProjectsPage() {
  const [currentSection, setCurrentSection] = useState(
    Section.COMPUTERGRAPHICS
  );

  return (
    <ProjectPageContainer>
      <SideNav
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Title id="computerGraphics">Computer Graphics (C++)</Title>
      <ProjectCardContainer>
        <ProjectCard project={projects.rasterizer} />
        <ProjectCard project={projects.meshEdit} />
        <ProjectCard project={projects.pathTracer} />
        <ProjectCard project={projects.pathTracer2} />
      </ProjectCardContainer>
      <Title id="computerVision">Computer Vision (Python)</Title>
      <ProjectCardContainer></ProjectCardContainer>
      <Title id="userInterfaces">User Interfaces (Java, CSS, HTML)</Title>
      <ProjectCardContainer></ProjectCardContainer>
      <Title id="fullStack">Full Stack (React, Typescript, CSS)</Title>
      <ProjectCardContainer></ProjectCardContainer>
    </ProjectPageContainer>
  );
}
