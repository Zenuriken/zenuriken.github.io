import styled from "styled-components";
import { ProjectSection } from "../variables/Types";
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

const Link = styled.div<{ isCurrentProjectSection: boolean }>`
  color: #f1f6f9;
  font-size: 20px;
  width: 100%;

  pointer-events: ${(props) =>
    props.isCurrentProjectSection ? "none" : "auto"};
  color: ${(props) => (props.isCurrentProjectSection ? "#000000" : "#f1f6f9")};
  background-image: ${(props) =>
    props.isCurrentProjectSection
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
  currProjectSection: ProjectSection;
  setCurrProjectSection: (projectSection: ProjectSection) => void;
};

export default function SideNav({
  currProjectSection,
  setCurrProjectSection,
}: props) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 330) {
        setCurrProjectSection(ProjectSection.COMPUTERGRAPHICS);
      } else if (scrollY < 1030) {
        setCurrProjectSection(ProjectSection.COMPUTERVISION);
      } else if (scrollY < 1730) {
        setCurrProjectSection(ProjectSection.USERINTERFACES);
      } else {
        setCurrProjectSection(ProjectSection.FULLSTACK);
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

  const onProjectSectionChange = (projectSection: ProjectSection) => {
    scrollToTarget(projectSection);
  };

  return (
    <SideNavContainer>
      <Link
        isCurrentProjectSection={
          currProjectSection === ProjectSection.COMPUTERGRAPHICS
        }
        onClick={() => onProjectSectionChange(ProjectSection.COMPUTERGRAPHICS)}
      >
        <LinkText>Computer Graphics</LinkText>
      </Link>
      <Link
        isCurrentProjectSection={
          currProjectSection === ProjectSection.COMPUTERVISION
        }
        onClick={() => onProjectSectionChange(ProjectSection.COMPUTERVISION)}
      >
        <LinkText>Computer Vision</LinkText>
      </Link>
      <Link
        isCurrentProjectSection={
          currProjectSection === ProjectSection.USERINTERFACES
        }
        onClick={() => onProjectSectionChange(ProjectSection.USERINTERFACES)}
      >
        <LinkText>User Interfaces</LinkText>
      </Link>
      <Link
        isCurrentProjectSection={
          currProjectSection === ProjectSection.FULLSTACK
        }
        onClick={() => onProjectSectionChange(ProjectSection.FULLSTACK)}
      >
        <LinkText>Full Stack</LinkText>
      </Link>
    </SideNavContainer>
  );
}
