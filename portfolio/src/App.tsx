import './App.css'
import styled from 'styled-components';
import { device } from './components/Sizes';

const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;


function App() {

  return (
    <div> potato </div>
  )
}

export default App
