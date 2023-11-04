import styled from "styled-components";

// #region CSS
const HeaderContainer = styled.div`
  align-items: center;
  background-color: rgba(33, 42, 62, 0.75);
  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
`;

const HeaderTitle = styled.h1`
  color: #F1F6F9;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px 0px;
  padding: 10px 30px;

  &:hover {
    color: #9BA4B5;
    cursor: pointer;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 5px 30px;
`;

const Link = styled.div`
  display: inline-block;
  border-width: 10px;
  border-color: white;
  color: #F1F6F9;
  font-size: 20px;
  text-align: center;
  width: 100px;
  height: 100%;

  &:hover {
    color: #9BA4B5;
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
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
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
        Henry's Portfolio
      </HeaderTitle>
      <LinkContainer>
        <Link
          onClick={() => {
            scrollToTarget("news");
          }}
        >
          Home
        </Link>
        <Link
          onClick={() => {
            scrollToTarget("reviews");
          }}
        >
          Resume
        </Link>
        <Link
          onClick={() => {
            scrollToTarget("recommendations");
          }}
        >
          Projects
        </Link>
      </LinkContainer>
    </HeaderContainer>
  );
}