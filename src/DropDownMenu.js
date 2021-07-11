import { useState } from 'react';
import styled from 'styled-components';
import { ListItem } from './components/ListItem';
import { ConvexComponent } from './components/ConvexComponent';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Container = styled(ConvexComponent)`
  border-radius: 50%;
  position: absolute;
  right: 2rem;
`

const Drawer = styled(ConvexComponent)`
  width: 12rem;
  transition-duration: 0.6s;
  position: absolute;
  right: 0;
`

const Inivisible = styled.div`
  width: 0;
  display: none;
`

export const DropDownMenu = ({ stateHooks }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    const menuState = (open === true) ? false : true;
    setOpen(menuState);
  }

  return (
    <Container>
      <IconButton onClick={handleDrawerToggle} className={open ? 'open' : ''}>
        {
          open === true ? <ChevronRightIcon /> : <MenuIcon />
        }
      </IconButton>
      <div onClick={handleDrawerToggle}>
      </div>
      {
        open === true
          ?
            <Drawer>
              <ListItem stateHooks={stateHooks}/>
            </Drawer>
          :
            <Inivisible>
              <ListItem stateHooks={stateHooks}/>
            </Inivisible>
      }
    </Container>
  )
}