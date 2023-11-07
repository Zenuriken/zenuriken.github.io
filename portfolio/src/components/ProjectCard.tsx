import styled from "styled-components";
import profile from "../assets/profile.jpg";

// #region CSS
const CardContainer = styled.div`
  background-color: #f1f6f9;
  width: 600px;
  height: 200px;
  flex-shrink: 0;

  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: row;

  border-radius: 10px;

  padding: 20px;
  gap: 20px;

  filter: drop-shadow(8px 4px 8px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: #d7dbde;
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 300px;
  height: 200px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: right;
`;

const CardTitle = styled.h2`
  font-weight: bold;
`;

const DescriptionText = styled.p``;

// #endregion

type props = {
  img: string;
  title: string;
  onClick: () => void;
};

export default function ProjectCard({ onClick, img, title }: props) {
  return (
    <CardContainer
      onClick={() => {
        onClick();
      }}
    >
      <CardImage src={profile}></CardImage>
      <TextContainer>
        <CardTitle>Project 1 (Javascript, CSS, HTML)</CardTitle>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nunc quis facilisis interdum, nisl nisl ultricies nunc,
          nec tincidunt dolor nisi vitae magna. Sed sed risus vitae elit
          tincidunt luctus.
        </DescriptionText>
      </TextContainer>
    </CardContainer>
  );
}
