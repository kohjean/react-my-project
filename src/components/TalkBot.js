import { useState } from 'react';
import styled from 'styled-components';
import { ConvexComponent } from './ConvexComponent';

const Container = styled.div`
  width: ${({theme}) => theme.width};
  position: relative;
`
const Form = styled.form`
  display: flex;
`
const Chatbot = styled.img`
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

export const TalkBot = ({theme}) => {
  const [text, setText] = useState();
  const [reply, setReply] = useState();

  let formdata = new FormData();
  formdata.append('apikey', process.env.REACT_APP_A3RT_API_KEY);
  formdata.append('query', text);

  const talkToBot = async (e) => {
    e.preventDefault();

    fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk', {
      method: 'post',
      body: formdata,
    }).then(response => {
      response.json().then(data => {
        setReply(data.results[0].reply);
      })
    }).catch(e => console.log(e));
  }

  return (
    <Container theme={theme}>
      <Chatbot src={`${process.env.PUBLIC_URL}/371905140_ROBOT_WAVING_400px.gif`}></Chatbot>
      <ChatbotReplay theme={theme}>{reply}</ChatbotReplay>
      <Form onSubmit={(e) => talkToBot(e)}>
        <input type="text" value={text} onChange={(e) => setText( e.target.value )}></input>
        <button type="submit">🗣</button>
      </Form>
      <small><a href="https://cliply.co/clip/robot-waving/">image ©︎ cliply.co</a></small>
    </Container>
  )
}