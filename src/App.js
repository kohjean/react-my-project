import styled from 'styled-components';
import './App.css';
import { Button } from './Button';

const BackgroundText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
  font-size: 4rem;
  font-weight: bold;
  color: #DCEDF8;
  text-shadow: 2px 2px 6px #BBC9D3,
  -2px -2px 6px #FDFFFF;
  pointer-events: none;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button></Button>
      </header>
      <BackgroundText>components</BackgroundText>
    </div>
  );
}

export default App;