import { useState } from 'react';
import styled from 'styled-components';
import { ListItem } from './components/ListItem';
import { ConvexComponent } from './components/ConvexComponent';

const Container = styled(ConvexComponent)`
  width: 12rem;
  position: absolute;
  right: 2rem;
`

const ToggleButton = styled.p`
  text-align: center;
  font-size: 2rem;
`


export const DropDownMenu = ({ showComponentArray }) => {
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
        showMenu === true ? <ListItem showComponentArray={showComponentArray}/> : null
      }
    </Container>
  )
}