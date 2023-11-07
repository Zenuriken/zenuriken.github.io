import styled from "styled-components";
import { Project } from "../variables/Types";
import icon_github from "../assets/icon_github.png";
import { useEffect, useState } from "react";

// #region CSS
const CardContainer = styled.div`
  align-items: center;
  background-color: #f1f6f9;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  gap: 20px;
  height: 200px;
  padding: 20px;
  width: 600px;
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
  justify-content: left;
  align-items: right;
`;

const CardTitle = styled.h2`
  margin: 0;
`;

const DescriptionText = styled.p``;

// #endregion

type props = {
  project: Project;
};

const IMAGE_DIR = "./../assets/";

export default function ProjectCard({ project }: props) {
  const { id, image, title, description } = project;

  const [imageSrc] = useState(IMAGE_DIR + image);
  console.log(imageSrc);

  return (
    <CardContainer id={id}>
      <CardImage src={imageSrc} />
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <DescriptionText>{description}</DescriptionText>
      </TextContainer>
    </CardContainer>
  );
}
