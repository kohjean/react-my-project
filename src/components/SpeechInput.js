import styled from 'styled-components';
import { useState } from 'react';

const Button = styled.button`
  width: 50%;
`

export const SpeechInput = (props) => {
  const setText = props.setText; // APIに渡すテキストをセットする
  const setReply = props.setReply; // APIからのレスポンスをセットする

  const [speech, setSpeech] = useState('🎤');

  const formdata = new FormData();
  formdata.append('apikey', process.env.REACT_APP_A3RT_API_KEY);
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'ja-JP';
  recognition.interimResults = true;

  recognition.onaudiostart = () => {
    setSpeech('🗣');
    setText('(しゃべって)');
  }

  recognition.onresult = (event) => {
    setSpeech('🎤');
    setText(event.results[0][0].transcript);
    // 発言が終了したかどうか
    if (event.results[0].isFinal) {
      formdata.append('query', event.results[0][0].transcript);
      SpeechToBot();
    }
  }

  recognition.onerror = (event) => {
    console.log('error: ' + event);
  }
  
  const SpeechToBot = async () => {
    setReply('・・・');
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
    <>
      <Button type="button" onClick={() => recognition.start()}>{ speech }</Button>
    </>
  )
}