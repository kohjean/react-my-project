import { useState } from 'react';
import styled from 'styled-components';
import { ListItem } from './components/ListItem';

const Container = styled.div`
  width: 12rem;
  box-shadow: 2px 2px 6px #BBC9D3,
              -2px -2px 6px rgb(240,250,255);
  position: absolute;
  right: 2rem;
`

const ToggleButton = styled.p`
  text-align: center;
  font-size: 2rem;
`


export const DropDownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    const menuState = (showMenu === true) ? false : true;
    setShowMenu(menuState);
  }

  return (
    <Container>
      <div onClick={toggleMenu}>
        {
          showMenu === true ? <ToggleButton>△</ToggleButton> : <ToggleButton>▽</ToggleButton>
        }
      </div>
      {
        showMenu === true ? <ListItem /> : null
      }
    </Container>
  )
}