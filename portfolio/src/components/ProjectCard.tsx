import styled from "styled-components";
import { Project } from "../variables/Types";

// #region CSS
const CardContainer = styled.a`
  align-items: center;
  all: unset;
  background-color: #f1f6f9;
  border-radius: 25px;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  gap: 20px;
  height: 200px;
  padding: 20px;
  width: 550px;

  &:hover {
    background-color: #e0e6e9;
    box-shadow: 0px 5px 25px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  height: 200px;
  max-width: 300px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const CardTitle = styled.h2`
  margin: 0;
`;

const DescriptionText = styled.p`
  color: #343434;
  margin: 0;
`;

// #endregion

type props = {
  project: Project;
};

export default function ProjectCard({ project }: props) {
  const { id, image, title, description, link } = project;

  const renderDescription = () => {
    return (
      <>
        {description.map((line) => {
          return <DescriptionText>{line}</DescriptionText>;
        })}
      </>
    );
  };

  return (
    <CardContainer id={id} href={link}>
      <CardImage src={image} />
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        {renderDescription()}
      </TextContainer>
    </CardContainer>
  );
}
