import styled from "styled-components";
import Card from "../components/Card";
import projects from "../data/projects.json";
import GameSideNav from "../sideNavs/GamesSideNav";
import { useState } from "react";
import { GameSection, Project } from "../variables/Types";

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
  const [currGameSection, setCurrGameSection] = useState(
    GameSection.MYGAMES
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
      <GameSideNav
        currGameSection={currGameSection}
        setCurrGameSection={setCurrGameSection}
      />
      <CardsContainer>
        <Title id="myGames">Play Some of My Video Games!</Title>
        {renderProjSection(projects.myGames)}
        <Title id="otherGames">Check Out Other Games I Contributed to</Title>
        {renderProjSection(projects.otherGames)}
      </CardsContainer>
    </ProjectPageContainer>
  );
}
