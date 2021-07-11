import { useState } from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import './App.css';
import { Button } from './Button';
import { DropDownMenu } from './DropDownMenu';
import { SearchForm } from './components/SearchForm';
import { CatDisplay } from './components/CatDisplay';
import { Chatbot } from './components/Chatbot';

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
    font-size: 3rem;
  `}
`

function App() {
  const [isButtonShow, setButtonShow] = useState(false);
  const [isSearchFormShow, setSearchForm] = useState(false);
  const [isCatDisplayShow, setCatDisplay] = useState(false);
  const [isChatbotShow, setChatbot] = useState(false);

  const stateHooks = [
    setButtonShow,
    setSearchForm,
    setCatDisplay,
    setChatbot,
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
        {
          isChatbotShow &&
            <Chatbot theme={{width: "180px"}}/>
        }
        <DropDownMenu stateHooks={stateHooks}></DropDownMenu>
      </body>
      <footer>
        <BackgroundText>components</BackgroundText>
      </footer>
    </div>
  );
}

export default App;