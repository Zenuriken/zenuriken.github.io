import styled from "styled-components";
import { ResumeSection } from "../variables/Types";
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

const Link = styled.div<{ isCurrentResumeSection: boolean }>`
  color: #f1f6f9;
  font-size: 20px;
  width: 100%;

  pointer-events: ${(props) =>
    props.isCurrentResumeSection ? "none" : "auto"};
  color: ${(props) => (props.isCurrentResumeSection ? "#000000" : "#f1f6f9")};
  background-image: ${(props) =>
    props.isCurrentResumeSection
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
  currResumeSection: ResumeSection;
  setCurrResumeSection: (currResumeSection: ResumeSection) => void;
};

export default function SideNav({
  currResumeSection,
  setCurrResumeSection,
}: props) {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (scrollY < 330) {
  //       setCurrResumeSection(ResumeSection.COMPUTERGRAPHICS);
  //     } else if (scrollY < 1030) {
  //       setCurrResumeSection(ResumeSection.COMPUTERVISION);
  //     } else if (scrollY < 1730) {
  //       setCurrResumeSection(ResumeSection.USERINTERFACES);
  //     } else {
  //       setCurrResumeSection(ResumeSection.FULLSTACK);
  //     }
  //     // console.log("Scroll pos: " + scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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

  const onResumeSectionChange = (ResumeSection: ResumeSection) => {
    scrollToTarget(ResumeSection);
  };

  return (
    <SideNavContainer>
      <Link
        isCurrentResumeSection={currResumeSection === ResumeSection.EDUCATION}
        onClick={() => onResumeSectionChange(ResumeSection.EDUCATION)}
      >
        <LinkText>Education</LinkText>
      </Link>
      <Link
        isCurrentResumeSection={currResumeSection === ResumeSection.EXPERIENCE}
        onClick={() => onResumeSectionChange(ResumeSection.EXPERIENCE)}
      >
        <LinkText>Experience</LinkText>
      </Link>
      <Link
        isCurrentResumeSection={currResumeSection === ResumeSection.SKILLS}
        onClick={() => onResumeSectionChange(ResumeSection.SKILLS)}
      >
        <LinkText>User Interfaces</LinkText>
      </Link>
    </SideNavContainer>
  );
}
