import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Page } from "./variables/Types";
import ProjectsPage from "./pages/ProjectsPage";
import GamesPage from "./pages/GamesPage";

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
        return <GamesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}
