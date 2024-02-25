import styled from "styled-components";
import SideNav from "../sideNavs/ProjectsSideNav";
import { Project, ProjectSection } from "../variables/Types";
import { useState } from "react";
import Card from "../components/Card";
import projects from "../data/projects.json";

// #region CSS
const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 175px;
  width: 1100px;
  justify-content: flex-end;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 175px;
  padding-top: 100px;
  width: 750px;
`;

const Title = styled.h1`
  color: #f1f6f9;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 75px;
`;
// #endregion

export default function ProjectsPage() {
  const [currProjectSection, setCurrProjectSection] = useState(
    ProjectSection.COMPUTERGRAPHICS
  );

  const renderProjSection = (section: Project[]) => {
    return (
      <CardContainer>
        {section.map(project => {
          return(<Card project={project}/>);
        })}
      </CardContainer>
    )
  }

  return (
    <ProjectPageContainer>
      <SideNav
        currProjectSection={currProjectSection}
        setCurrProjectSection={setCurrProjectSection}
      />
      <CardsContainer>
        <Title id="computerGraphics">Computer Graphics (C++)</Title>
        {renderProjSection(projects.computerGraphics)}
        <Title id="computerVision">Computer Vision (Python)</Title>
        {renderProjSection(projects.computerVision)}
        <Title id="webDevelopment">Web Development (JS, CSS, React)</Title>
        {renderProjSection(projects.webDevelopment)}
      </CardsContainer>
    </ProjectPageContainer>
  );
}
