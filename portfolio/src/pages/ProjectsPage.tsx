import styled from "styled-components";
import SideNav from "../components/SideNav";
import { Section } from "../variables/Sizes";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

// #region CSS
const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 300px;
  padding-top: 100px;
  height: 100vh;
  width: 1920px;
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
  gap: 20px;
  /* padding-left: 260px; */
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
      <Title>Computer Graphics (C++)</Title>
      <ProjectCardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectCardContainer>
      <Title>Computer Vision (Python)</Title>
      <ProjectCardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectCardContainer>
      <Title>User Interfaces (Java, CSS, HTML)</Title>
      <ProjectCardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectCardContainer>
      <Title>Full Stack (React, Typescript, CSS)</Title>
      <ProjectCardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectCardContainer>
    </ProjectPageContainer>
  );
}
