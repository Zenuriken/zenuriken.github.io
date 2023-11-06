import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Page } from "./variables/Sizes";
import ProjectsPage from "./pages/ProjectsPage";

// #region CSS
const PageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;
// #endregion

export default function App() {
  const [currentPage, setCurrentPage] = useState(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage />;
      case Page.RESUME:
        return <div>Resume</div>;
      case Page.PROJECTS:
        return <ProjectsPage />;
      case Page.GAMES:
        return <div>Games</div>;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageContainer>{renderPage()}</PageContainer>
    </>
  );
}
