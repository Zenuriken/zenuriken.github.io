import styled from "styled-components";
import ResumeSideNav from "../sideNavs/ResumeSideNav";
import { ResumeSection } from "../variables/Types";
import { useState } from "react";
import resume from "../data/resume.json";

// #region CSS
const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 175px;
  margin-left: 350px;
  padding-top: 100px;
  width: 1400px;
`;

const Title = styled.h1`
  color: #f1f6f9;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  width: 100%;
`;

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 75px;
`;
// #endregion

export default function ResumePage() {
  const [currResumeSection, setCurrResumeSection] = useState(
    ResumeSection.EDUCATION
  );

  const renderEducationSection = () => {
    const {id, degree, major, years, location, logo, gpa, courseWork} = resume.education;
    return (
      <>
        <Title id="education">Education</Title>
        <div>{degree}</div>
        <div>{major}</div>
        <div>{years}</div>
        <div>{location}</div>
        <div>{logo}</div>
        <div>{gpa}</div>
        <div>{courseWork.map(course => {
          return <div>{course}</div>
        })}</div>
      </>
    )
  };

  const renderExperienceSection = () => {
    return (
      <>
        <Title id="experience">Experience</Title>
      </>
    )
  }

  const renderSkillsSection = () => {
    return (
      <>
        <Title id="skills">Skills</Title>
      </>
    )
  }

  return (
    <ProjectPageContainer>
      <ResumeSideNav
        currResumeSection={currResumeSection}
        setCurrResumeSection={setCurrResumeSection}
      />
      {renderEducationSection()}
      {renderExperienceSection()}
      {renderSkillsSection()}
    </ProjectPageContainer>
  );
}
