import { useState } from 'react';
import styled from 'styled-components';

const OffButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 25%;
  background: #DCEDF8;
  box-shadow: 2px 2px 6px #BBC9D3 inset,
             -2px -2px 6px rgb(240,250,255) inset;
  user-select: none;
  font-size: 2rem;
`

const OnButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 25%;
  background: #DCEDF8;
  box-shadow: 2px 2px 6px #BBC9D3,
             -2px -2px 6px rgb(240,250,255);
  user-select: none;
  font-size: 2rem;
  text-shadow: 2px 2px 6px #AFAFAF,
              -2px -2px 6px #ECECEC;
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