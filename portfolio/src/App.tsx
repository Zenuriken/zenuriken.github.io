import './App.css'
import styled from 'styled-components';
import { deviceQuery } from './variables/Sizes';
import Header from './components/Header';

// Need to order media queries from smallest to largest.
const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  ${deviceQuery.mobileS} { 
    background-color: red;
  }

  ${deviceQuery.mobileM} {
    background-color: orange;
  }

  ${deviceQuery.tablet} {
    background-color: yellow;
  }
`;


function App() {

  return (
    <Header onClick={() => {}}></Header>
  )
}

export default App
