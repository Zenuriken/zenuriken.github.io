import styled from "styled-components";
import { Project } from "../variables/Types";

// #region CSS
const CardContainer = styled.a`
  all: unset;
  align-items: center;
  background-color: #f1f6f9;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  gap: 20px;
  height: 200px;
  padding: 20px;
  width: 550px;
  /* border-bottom: 10px solid transparent; */

  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.25);

  &:hover {
    /* background-color: #d7dbde; */
    box-shadow: 0px 5px 25px 5px rgba(0, 0, 0, 0.25);
    /* border-bottom: 10px solid #394867; */
    background-color: #e0e6e9;
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  max-width: 300px;
  height: 200px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardTitle = styled.h2`
  /* margin-bottom: 10px; */
  margin: 0;
`;

const DescriptionText = styled.p`
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
        {/* <DescriptionText>{description}</DescriptionText> */}
      </TextContainer>
    </CardContainer>
  );
}
