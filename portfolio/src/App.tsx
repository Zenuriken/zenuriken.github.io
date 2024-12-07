import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Page } from "./variables/Types";
import ProjectsPage from "./pages/ProjectsPage";
import GamesPage from "./pages/GamesPage";
import styled from "styled-components";
import ResumePage from "./pages/ResumePage";
import SideNav from "./sideNavs/SideNav";
import { render } from "react-dom";
import { pageToSections } from "./variables/Constants";

const PageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export default function App() {
  const [currentPage, setCurrentPage] = useState(Page.HOME);

  const renderHeader = () => {
    return <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />;
  };

  const renderSideNav = () => {
    if (currentPage === Page.HOME) return null;
    return (
      <SideNav
        currentPage={currentPage}
        section={pageToSections[currentPage]}
      />
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage />;
      case Page.RESUME:
        return <ResumePage />;
      case Page.PROJECTS:
        return <ProjectsPage />;
      case Page.GAMES:
        return <GamesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <PageContainer>
      {renderHeader()}
      {renderSideNav()}
      {renderPage()}
    </PageContainer>
  );
}
