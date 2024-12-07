import styled from "styled-components";
import { useEffect } from "react";
import { Page, Section } from "../variables/Types";

// #region CSS
const SideNavContainer = styled.div`
  align-items: center;
  border-right: 2px solid #9ba4b5;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  gap: 20px;
  height: 100%;
  left: max(calc((100vw - 1100px) / 2), 0px);
  padding: 200px 0px;
  position: fixed;
  top: 55px;
  width: 250px;
  z-index: 0;
`;

const Link = styled.div<{ isCurrentProjectSection: boolean }>`
  background-image: ${(props) =>
    props.isCurrentProjectSection
      ? `linear-gradient(90deg, rgba(155, 164, 181, 0), rgba(155, 164, 181, 1))`
      : `none`};
  color: #f1f6f9;
  color: ${(props) => (props.isCurrentProjectSection ? "#000000" : "#f1f6f9")};
  font-size: 20px;
  pointer-events: ${(props) =>
    props.isCurrentProjectSection ? "none" : "auto"};
  width: 100%;

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
  currentPage: Page;
  section: Section;
};

export default function SideNav({ currentPage, section }: props) {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (scrollY < 330) {
  //       setCurrProjectSection(ProjectSection.COMPUTERGRAPHICS);
  //     } else if (scrollY < 1030) {
  //       setCurrProjectSection(ProjectSection.COMPUTERVISION);
  //     } else {
  //       setCurrProjectSection(ProjectSection.WEBDEVELOPMENT);
  //     }
  //     // console.log("Scroll pos: " + scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

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

  // const onProjectSectionChange = (projectSection: ProjectSection) => {
  //   scrollToTarget(projectSection);
  // };

  const renderLinks = () => {};

  return (
    <SideNavContainer>
      {/* <Link
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
          currProjectSection === ProjectSection.WEBDEVELOPMENT
        }
        onClick={() => onProjectSectionChange(ProjectSection.WEBDEVELOPMENT)}
      >
        <LinkText>Web Development</LinkText>
      </Link> */}
    </SideNavContainer>
  );
}
