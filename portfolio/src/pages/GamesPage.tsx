import styled from "styled-components";
import ProjectCard from "../components/Card";
import projects from "../data/projects.json";

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
  return (
    <ProjectPageContainer>
      <Title id="computerGraphics">Play Some of My Video Games!</Title>
      <ProjectCardContainer>
        <ProjectCard project={projects.ghostOfViridia} />
        <ProjectCard project={projects.totallyNotDoom} />
        <ProjectCard project={projects.bearsBobaria} />
      </ProjectCardContainer>
      <Title id="computerVision">Check Out Other Games I Contributed to</Title>
      <ProjectCardContainer>
        <ProjectCard project={projects.metal} />
        <ProjectCard project={projects.dontWakeUp} />
        <ProjectCard project={projects.polyDrome} />
      </ProjectCardContainer>
    </ProjectPageContainer>
  );
}
