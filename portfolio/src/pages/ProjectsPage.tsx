import styled from "styled-components";
import SideNav from "../components/ProjectsSideNav";
import { ProjectSection } from "../variables/Types";
import { useState } from "react";
import Card from "../components/Card";
import projects from "../data/projects.json";

// #region CSS
const ProjectPageContainer = styled.div`
  /* border-color: #00ff77;
  border-style: solid;
  border-width: 1px; */
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 175px;
  width: 1100px;
  justify-content: flex-end;
`;

const ProjectCardsContainer = styled.div`
  /* border-color: red;
  border-style: solid;
  border-width: 1px; */
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

  return (
    <ProjectPageContainer>
      <SideNav
        currProjectSection={currProjectSection}
        setCurrProjectSection={setCurrProjectSection}
      />
      <ProjectCardsContainer>
        <Title id="computerGraphics">Computer Graphics (C++)</Title>
        <CardContainer>
          <Card project={projects.rasterizer} />
          <Card project={projects.meshEdit} />
          <Card project={projects.pathTracer} />
          <Card project={projects.pathTracer2} />
          <Card project={projects.clothSimulator} />
          <Card project={projects.celShading} />
        </CardContainer>
        <Title id="computerVision">Computer Vision (Python)</Title>
        <CardContainer>
          <Card project={projects.colorizing} />
          <Card project={projects.filtersAndFrequencies} />
          <Card project={projects.faceMorphing} />
          <Card project={projects.autostitchingPhotoMosaics} />
          <Card project={projects.facialKeypointDetection} />
          <Card project={projects.poorMansAugmentedReality} />
          <Card project={projects.lightFieldCamera} />
        </CardContainer>
        <Title id="webDevelopment">Web Development (JS, CSS, React)</Title>
        <CardContainer>
          <Card project={projects.voltz} />
          <Card project={projects.storyScape} />
        </CardContainer>
      </ProjectCardsContainer>
    </ProjectPageContainer>
  );
}
