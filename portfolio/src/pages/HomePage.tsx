import styled from "styled-components";
import profile from "./../assets/profile.jpg";
import icon_github from "./../assets/icon_github.png";
import icon_linkedin from "./../assets/icon_linkedin.png";
import icon_mail from "./../assets/icon_mail.png";

// #region CSS
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
`;

const Subtitle = styled.h2`
  color: #f1f6f9;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  text-align: left;
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
