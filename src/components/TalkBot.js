import styled from 'styled-components';

const Form = styled.form`
  display: flex;
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
    <Form onSubmit={(e) => talkToBot(e)}>
      <input type="text" value={text} onChange={(e) => setText( e.target.value )}></input>
      <button type="submit">🗣</button>
    </Form>
  )
}