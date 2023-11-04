import styled from "styled-components";

// #region CSS
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #414754;
  position: fixed;
  top: 0px;
  align-items: center;
  justify-content: space-between;
  /* padding: 10px 0px; */
  box-shadow: 0px 4px 24px 13px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const HeaderTitle = styled.h1`
  color: #e5d7be;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px 20px;
  margin: 0px 0px;

  &:hover {
    cursor: pointer;
    color: #cfa358;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px 30px;
`;

const Link = styled.p`
  color: #e5d7be;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    color: #cfa358;
    cursor: pointer;
  }
`;

// #endregion

type props = {
    onClick: () => void;
}

export default function Header({onClick}: props) {
  
    const scrollToTarget = (id: string) => {
    onClick();
    const element = document.getElementById(id);
    if (element === null) {
      return;
    }
    var headerOffset = 100;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <HeaderContainer>
      <HeaderTitle
        onClick={() => {
          onClick();
        }}
      >
        Gamer Rantz
      </HeaderTitle>
      <LinkContainer>
        <Link
          onClick={() => {
            scrollToTarget("news");
          }}
        >
          News
        </Link>
        <Link
          onClick={() => {
            scrollToTarget("reviews");
          }}
        >
          Reviews
        </Link>
        <Link
          onClick={() => {
            scrollToTarget("recommendations");
          }}
        >
          Recommendations
        </Link>
      </LinkContainer>
    </HeaderContainer>
  );
}