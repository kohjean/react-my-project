import styled from 'styled-components';

const menuItems = [
  'Button',
  'SearchForm',
  'CatDisplay',
  'Chatbot',
];

const NonDotList = styled.ul`
  list-style: none;
  text-align: left;
  font-size: 1.2rem;
  line-height: 2rem;
`

const Item = styled.li`
  cursor: pointer;
  &::before {
    content: '+ '
  }
`

export const ListItem = ({showComponentArray}) => {
  return (
    <NonDotList>
    {
      menuItems.map((key, val) => {
        return <Item key={ key } onClick={showComponentArray[val]}>{ key }</Item>
      })
    }
    </NonDotList>
  )
}