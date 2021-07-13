import { useState } from 'react';
import { TalkBot } from './TalkBot';
import styled from 'styled-components';
import { ConvexComponent } from './ConvexComponent';

const Container = styled.div`
  width: ${({theme}) => theme.width};
  position: relative;
`
const ChatbotImage = styled.img`
  width: 100%;
`
const ChatbotReplay = styled(ConvexComponent)`
  position: absolute;
  top: 12.5%;
  left: ${({theme}) => theme.width};
  text-align: left;
  text-shadow: none;
  font-size: 0.8rem;
  color: #222;
  width: 8rem;
  padding: 0.5rem;
  margin-left: 1rem;
`

export const Chatbot = ({theme}) => {
  const [text, setText] = useState('');
  const [reply, setReply] = useState('');

  return (
    <Container theme={theme}>
      <ChatbotImage src={`${process.env.PUBLIC_URL}/371905140_ROBOT_WAVING_400px.gif`} />
      <ChatbotReplay theme={theme}>{reply}</ChatbotReplay>
      <TalkBot
        text={text}
        setText={setText}
        setReply={setReply}  
      />
      <small><a href="https://cliply.co/clip/robot-waving/">image by ©︎ cliply.co</a></small>
    </Container>
  )
}