import styled from 'styled-components';
import { SpeechInput } from './SpeechInput';

const Button = styled.button`
  width: 50%;
`
const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
`

export const TalkBot = (props) => {
  const text = props.text;
  const setText = props.setText; // APIに渡すテキストをセットする
  const setReply = props.setReply; // APIからのレスポンスをセットする

  const formdata = new FormData();
  formdata.append('apikey', process.env.REACT_APP_A3RT_API_KEY);
  formdata.append('query', text);

  const talkToBot = async (e) => {
    e.preventDefault();
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
    <form onSubmit={(e) => talkToBot(e)}>
      <TextArea rows="3" value={text} onChange={(e) => setText( e.target.value )}></TextArea>
      <Button type="submit">✉️</Button>
      <SpeechInput
        text={text}
        setText={setText}
        setReply={setReply}
      />
    </form>
  )
}