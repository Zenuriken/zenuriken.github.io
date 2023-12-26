import styled from "styled-components";
import { keyframes } from 'styled-components'
import profile from "./../assets/profile.jpg";
import icon_github from "./../assets/icon_github.png";
import icon_linkedin from "./../assets/icon_linkedin.png";
import icon_mail from "./../assets/icon_mail.png";

// #region CSS
const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

/* The typing effect */
const typing = keyframes`
  from { width: 0 }
  to { width: 80% }
`;

/* The typewriter cursor effect */
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white; }
`;

const HomePageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 0px;
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  height: 200px;
  margin: 0px;
`;

const Column = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;

const Title = styled.h1`
  color: #f1f6f9;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  text-align: left;


  animation: ${fadeInAnimation} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const Subtitle = styled.h2`
  color: #f1f6f9;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    ${typing} 2s steps(24, end),
    ${blinkCaret} .75s step-end infinite;
`;

const ImageContainer = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 200px;
  justify-content: center;
  overflow: hidden;
  width: 200px;
`;

const Image = styled.img`
  height: auto;
  width: 100%;

  animation: ${fadeInAnimation} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const IconContainer = styled.a`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.5s;
  width: 50px;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }

  animation: ${fadeInAnimation} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;
// #endregion

export default function HomePage() {
  return (
    <HomePageContainer>
      <Row>
        <ImageContainer>
          <Image src={profile} />
        </ImageContainer>
        <Column>
          <Title>Hi my name is Henry</Title>
          <Subtitle>{`Welcome to my website :)`}</Subtitle>
        </Column>
      </Row>
      <br />
      <br />
      <IconRow>
        <IconContainer href={"https://github.com/zenuriken"}>
          <Image src={icon_github} />
        </IconContainer>
        <IconContainer href={"https://www.linkedin.com/in/henrylala/"}>
          <Image src={icon_linkedin} />
        </IconContainer>
        <IconContainer href={"mailto:henryla106@gmail.com"}>
          <Image src={icon_mail} />
        </IconContainer>
      </IconRow>
    </HomePageContainer>
  );
}
