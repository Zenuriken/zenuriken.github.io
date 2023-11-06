import styled from "styled-components";
import SideNav from "../components/SideNav";
import { renderToStaticNodeStream } from "react-dom/server";
import { Section } from "../variables/Sizes";
import { useState } from "react";

// #region CSS

// #endregion

export default function ProjectsPage() {
  const [currentSection, setCurrentSection] = useState(
    Section.COMPUTERGRAPHICS
  );

  return (
    <>
      <SideNav
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </>
  );
}
