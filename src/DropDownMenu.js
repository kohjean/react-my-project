import { useState } from 'react';
import styled from 'styled-components';
import { ListItem } from './components/ListItem';

const Container = styled.div`
width: 12rem;
border: 1px solid #FFF;
`

const ToggleButton = styled.p`
  text-align: center;
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
        showMenu === true
        ?
          <ListItem></ListItem>
        : null
      }
    </Container>
  )
}