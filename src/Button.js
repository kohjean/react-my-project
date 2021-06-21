import { useState } from 'react';
import { ConvexComponent } from './components/ConvexComponent';
import { ConcaveComponent } from './components/ConcaveComponent';
import styled from 'styled-components';

const OffButton = styled(ConcaveComponent)`
  font-family: 'Century Gothic';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 25%;
  user-select: none;
  font-size: 2rem;
`

const OnButton = styled(ConvexComponent)`
  font-family: 'Century Gothic';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 25%;
  user-select: none;
  font-size: 2rem;
`

export const Button = () => {
  const [state, setState] = useState('ON');
  const toggleButton = () => {
    const buttonStates = (state === 'ON') ? 'OFF' : 'ON';
    setState(buttonStates);
  }
  return (
    <div>
      {
        state === 'ON'
          ? <OnButton state={state} onClick={toggleButton}>{state}</OnButton>
          : <OffButton state={state} onClick={toggleButton}>{state}</OffButton>
      }
    </div>
  )
}