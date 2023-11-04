import styled from "styled-components";

// #region CSS
const ArticleCardContainer = styled.div`
  background-color: #e5d7be;
  width: 400px;
  height: 282px;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;

  padding-top: 10px;

  filter: drop-shadow(8px 4px 8px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: #cfa358;
    cursor: pointer;
  }
`;

const ArticleCardImage = styled.img`
  width: 350px;
  height: 200px;
`;

const ArticleCardTitle = styled.p`
  font-weight: bold;
`;

// #endregion

type props = {
  img: string,
  title: string,
  onClick: () => void
}

function ArticleCard({onClick, img, title}: props) {
  return (
    <ArticleCardContainer
      onClick={() => {
        onClick();
      }}
    >
      <ArticleCardImage src={img}></ArticleCardImage>
      <ArticleCardTitle>{title}</ArticleCardTitle>
    </ArticleCardContainer>
  );
}

export default ArticleCard;
