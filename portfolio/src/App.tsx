import './App.css'
import styled from 'styled-components';
import { device } from './variables/Sizes';

// Need to order media queries from smallest to largest.
const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${device.mobileS} { 
    background-color: red;
  }

  @media ${device.mobileM} {
    background-color: blue;
  }

  @media ${device.mobileL} {
    background-color: green;
  }
`;


function App() {

  return (
    <Page> potato </Page>
  )
}

export default App
