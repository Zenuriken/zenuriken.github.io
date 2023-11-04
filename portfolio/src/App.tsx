import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import profile from './assets/profile.jpg';
import icon_github from './assets/icon_github.png';
import icon_linkedin from './assets/icon_linkedin.png';
import icon_mail from './assets/icon_mail.png';


// Need to order media queries from smallest to largest.
const PageContainer = styled.div`
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
  margin: 0px;
  height: 200px;
`;

const Column = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;

const Title = styled.h1`
  color: #F1F6F9;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  text-align: left;
`;

const Subtitle = styled.h2`
  color: #F1F6F9;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  text-align: left;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    overflow: hidden;

  &:hover {
    width: 75px;
    height: 75px;
    filter: blur(5px);
    cursor: pointer;
  }
`;


export default function App() {

  // Renders the content of this page
  const renderPageContent = () => {
    return (
      <>
      <Row>
        <ImageContainer>
          <Image src={profile} />
        </ImageContainer>
        <Column>
          <Title>Hi my name is Henry</Title>
          <Subtitle>Welcome to my website</Subtitle>
        </Column>
      </Row>
      <br/>
      <br/>
      <IconRow>
        <IconContainer>
          <Image src={icon_github} /> 
        </IconContainer>
        <IconContainer>
          <Image src={icon_linkedin} /> 
        </IconContainer>
        <IconContainer>
          <Image src={icon_mail} /> 
        </IconContainer>
      </IconRow>  
    </>
    );
  }


  return (
    <>
      <Header onClick={() => {}}/>
      <PageContainer>
        {renderPageContent()}
      </PageContainer>
    </>
  )
}