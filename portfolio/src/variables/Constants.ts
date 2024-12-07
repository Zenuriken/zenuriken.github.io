import HomePage from "../pages/HomePage";
import { GameSection, Page, ProjectSection, ResumeSection } from "./Types";

export const pageToSections = {
  [Page.GAMES]: GameSection,
  [Page.PROJECTS]: ProjectSection,
  [Page.RESUME]: ResumeSection,
};
