import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Button } from './Button';
import { DropDownMenu } from './DropDownMenu';
import { SearchForm } from './components/SearchForm';
import { CatDisplay } from './components/CatDisplay';
import media from "styled-media-query";

const BackgroundText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
  font-weight: bold;
  color: #DCEDF8;
  text-shadow: 2px 2px 6px #BBC9D3,
  -2px -2px 6px #FDFFFF;
  pointer-events: none;
  font-size: 4rem;
  ${media.lessThan("small")`
  /* screen width is less than 450px (small) */
    font-size: 2rem;
  `}
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
        {
          isCatDisplayShow &&
            <CatDisplay />
        }
        <DropDownMenu showComponentArray={showComponentArray}></DropDownMenu>
      </body>
      <footer>
        <BackgroundText>components</BackgroundText>
      </footer>
    </div>
  );
}

export default App;