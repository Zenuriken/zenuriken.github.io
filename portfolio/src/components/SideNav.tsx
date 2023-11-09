import styled from "styled-components";
import { Section } from "../variables/Types";
import { useEffect, useState } from "react";

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

const Link = styled.div<{ isCurrentSection: boolean }>`
  color: #f1f6f9;
  font-size: 20px;
  width: 100%;

  pointer-events: ${(props) => (props.isCurrentSection ? "none" : "auto")};
  color: ${(props) => (props.isCurrentSection ? "#000000" : "#f1f6f9")};
  background-image: ${(props) =>
    props.isCurrentSection
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
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
};

export default function SideNav({ currentSection, setCurrentSection }: props) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 330) {
        setCurrentSection(Section.COMPUTERGRAPHICS);
      } else if (scrollY < 1030) {
        setCurrentSection(Section.COMPUTERVISION);
      } else if (scrollY < 1730) {
        setCurrentSection(Section.USERINTERFACES);
      } else {
        setCurrentSection(Section.FULLSTACK);
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

  const onSectionChange = (section: Section) => {
    scrollToTarget(section);
  };

  return (
    <SideNavContainer>
      <Link
        isCurrentSection={currentSection === Section.COMPUTERGRAPHICS}
        onClick={() => onSectionChange(Section.COMPUTERGRAPHICS)}
      >
        <LinkText>Computer Graphics</LinkText>
      </Link>
      <Link
        isCurrentSection={currentSection === Section.COMPUTERVISION}
        onClick={() => onSectionChange(Section.COMPUTERVISION)}
      >
        <LinkText>Computer Vision</LinkText>
      </Link>
      <Link
        isCurrentSection={currentSection === Section.USERINTERFACES}
        onClick={() => onSectionChange(Section.USERINTERFACES)}
      >
        <LinkText>User Interfaces</LinkText>
      </Link>
      <Link
        isCurrentSection={currentSection === Section.FULLSTACK}
        onClick={() => onSectionChange(Section.FULLSTACK)}
      >
        <LinkText>Full Stack</LinkText>
      </Link>
    </SideNavContainer>
  );
}
