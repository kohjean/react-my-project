import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Button } from './Button';
import { DropDownMenu } from './DropDownMenu';
import { SearchForm } from './components/SearchForm';

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
  const [isButtonShow, setButtonShow] = useState(false);
  const [isSearchFormShow, setSearchForm] = useState(false);
  const [isCatDisplayShow, setCatDisplay] = useState(false);

  const showComponentArray = [
    setButtonShow,
    setSearchForm,
    setCatDisplay,
  ];

  return (
    <div className="App">
      <header>

      </header>
      <body className="Components-area">
        {
          isButtonShow &&
            <Button />
        }
        {
          isSearchFormShow &&
            <SearchForm />
        }
        {/* {
          isCatDisplayShow &&
            <Button />
        } */}
        <DropDownMenu showComponentArray={showComponentArray}></DropDownMenu>
      </body>
      <footer>
        <BackgroundText>components</BackgroundText>
      </footer>
    </div>
  );
}

export default App;