import styled from "styled-components";
import { Page } from "./../variables/Sizes";

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
  height: 55px;
`;

const HeaderTitle = styled.h1`
  color: #f1f6f9;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px 0px;
  padding: 10px 30px;

  &:hover {
    color: #9ba4b5;
    cursor: pointer;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  padding: 0px 30px;
  height: 100%;
`;

const Link = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-width: 10px;
  border-color: white;
  color: #f1f6f9;
  font-size: 20px;
  text-align: center;
  width: 100px;
  height: 100%;
  border: 2px solid transparent;

  &:hover {
    color: #9ba4b5;
    cursor: pointer;

    /* border-bottom: 2px solid #9ba4b5; */
  }
`;

// #endregion

type props = {
  setCurrentPage: (page: Page) => void;
};

export default function Header({ setCurrentPage }: props) {
  // const scrollToTarget = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element === null) {
  //     return;
  //   }
  //   const headerOffset = 100;
  //   const elementPosition = element.getBoundingClientRect().top;
  //   const offsetPosition = elementPosition + window.scrollY - headerOffset;
  //   window.scrollTo({
  //     top: offsetPosition,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <HeaderContainer>
      <HeaderTitle onClick={() => setCurrentPage(Page.HOME)}>
        Henry's Portfolio
      </HeaderTitle>
      <LinkContainer>
        <Link
          onClick={() => {
            setCurrentPage(Page.HOME);
          }}
        >
          Home
        </Link>
        <Link
          onClick={() => {
            setCurrentPage(Page.RESUME);
          }}
        >
          Resume
        </Link>
        <Link
          onClick={() => {
            setCurrentPage(Page.PROJECTS);
          }}
        >
          Projects
        </Link>
        <Link
          onClick={() => {
            setCurrentPage(Page.GAMES);
          }}
        >
          Games
        </Link>
      </LinkContainer>
    </HeaderContainer>
  );
}
