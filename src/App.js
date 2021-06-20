import styled from 'styled-components';
import './App.css';
import { Button } from './Button';
import { DropDownMenu } from './DropDownMenu';

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
      <header className="Components-area">
        <Button></Button>
        <DropDownMenu></DropDownMenu>
      </header>
      <BackgroundText>components</BackgroundText>
    </div>
  );
}

export default App;