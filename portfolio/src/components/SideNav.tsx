import styled from "styled-components";

// #region CSS
const SideNavContainer = styled.div`
  align-items: center;
  background-color: rgba(33, 42, 62, 0.75);
  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0px;
  height: 100%;
  width: 300px;
  z-index: 0;
  gap: 50px;
`;

const Link = styled.div`
  color: #F1F6F9;
  font-size: 20px;
  text-align: right;
  width: 200px;

  &:hover {
    color: #9BA4B5;
    cursor: pointer;
  }
`;

// #endregion

type props = {
    onClick: () => void;
}

export default function SideNav({onClick}: props) {
  
    const scrollToTarget = (id: string) => {
    onClick();
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

  return (
    <SideNavContainer>
        <Link
          onClick={() => {
            scrollToTarget("news");
          }}
        >
          Computer Graphics
        </Link>
        <Link
          onClick={() => {
            scrollToTarget("reviews");
          }}
        >
          Computer Vision
        </Link>
        <Link
          onClick={() => {
            scrollToTarget("recommendations");
          }}
        >
          User Interfaces
        </Link>
        <Link
          onClick={() => {
            scrollToTarget("recommendations");
          }}
        >
          Full-Stack
        </Link>
    </SideNavContainer>
  );
}