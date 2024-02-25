import styled from "styled-components";
import SideNav from "../sideNavs/ProjectsSideNav";
import { ProjectSection, ResumeSection } from "../variables/Types";
import { useState } from "react";
import ProjectCard from "../components/Card";
import projects from "../data/projects.json";
import ResumeSideNav from "../sideNavs/ResumeSideNav";

// #region CSS
const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 175px;
  margin-left: 350px;
  padding-top: 100px;
  width: 1400px;
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

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 75px;
`;
// #endregion

export default function ProjectsPage() {
  const [currResumeSection, setCurrResumeSection] = useState(
    ResumeSection.EDUCATION
  );

  return (
    <ProjectPageContainer>
      <ResumeSideNav
        currResumeSection={currResumeSection}
        setCurrResumeSection={setCurrResumeSection}
      />
      <Title id="education">Education</Title>
      <ProjectCardContainer>
        <ProjectCard project={projects.rasterizer} />
        <ProjectCard project={projects.meshEdit} />
        <ProjectCard project={projects.pathTracer} />
        <ProjectCard project={projects.pathTracer2} />
        <ProjectCard project={projects.clothSimulator} />
        <ProjectCard project={projects.celShading} />
      </ProjectCardContainer>
      <Title id="experience">Experience</Title>
      <ProjectCardContainer>
        <ProjectCard project={projects.colorizing} />
        <ProjectCard project={projects.filtersAndFrequencies} />
        <ProjectCard project={projects.faceMorphing} />
        <ProjectCard project={projects.autostitchingPhotoMosaics} />
        <ProjectCard project={projects.facialKeypointDetection} />
        <ProjectCard project={projects.poorMansAugmentedReality} />
        <ProjectCard project={projects.lightFieldCamera} />
      </ProjectCardContainer>
      <Title id="skills">Skills</Title>
      <ProjectCardContainer>
        <ProjectCard project={projects.voltz} />
        <ProjectCard project={projects.storyScape} />
      </ProjectCardContainer>
    </ProjectPageContainer>
  );
}
