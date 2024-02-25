import styled from "styled-components";
import { GameSection
 } from "../variables/Types";
import { useEffect } from "react";

// #region CSS
const SideNavContainer = styled.div`
  align-items: center;
  border-right: 2px solid #9ba4b5;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  gap: 20px;
  height: 100%;
  left: 0px;
  padding: 50px 0px;
  position: fixed;
  top: 55px;
  width: 250px;
  z-index: 0;
`;

const Link = styled.div<{ isCurrentGameSection: boolean }>`
  color: #f1f6f9;
  font-size: 20px;
  width: 100%;

  pointer-events: ${(props) =>
    props.isCurrentGameSection
     ? "none" : "auto"};
  color: ${(props) => (props.isCurrentGameSection
     ? "#000000" : "#f1f6f9")};
  background-image: ${(props) =>
    props.isCurrentGameSection

      ? "linear-gradient(90deg, #394867 0%, #9ba4b5 100%)"
      : "none"};

  &:hover {
    color: #9ba4b5;
    cursor: pointer;
  }
`;

const LinkText = styled.p`
  padding: 0px 10px;
  text-align: right;
`;
// #endregion

type props = {
  currGameSection: GameSection;
  setCurrGameSection
  : (currGameSection
    : GameSection
    ) => void;
};

export default function SideNav({
  currGameSection
  ,
  setCurrGameSection
  ,
}: props) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 330) {
        setCurrGameSection(GameSection.MYGAMES);
      } else {
        setCurrGameSection(GameSection.OTHERGAMES);
      }
      // console.log("Scroll pos: " + scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTarget = (id: string) => {
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

  const onGameSectionChange = (GameSection: GameSection) => {
    scrollToTarget(GameSection);
  };

  return (
    <SideNavContainer>
      <Link
        isCurrentGameSection={currGameSection === GameSection.MYGAMES}
        onClick={() => onGameSectionChange(GameSection.MYGAMES)}>
        <LinkText>My Games</LinkText>
      </Link>
      <Link
        isCurrentGameSection={currGameSection === GameSection.OTHERGAMES}
        onClick={() => onGameSectionChange(GameSection.OTHERGAMES)}>
        <LinkText>Other Games</LinkText>
      </Link>
      
    </SideNavContainer>
  );
}
