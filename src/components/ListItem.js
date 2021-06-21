import styled from 'styled-components';

const menuItems = [
  'Button',
  'SearchForm',
  'CatDisplay',
];

const NonDotList = styled.ul`
  list-style: none;
  text-align: left;
  font-size: 1.2rem;
  line-height: 2rem;
`

export const ListItem = () => {
  return (
    <NonDotList>
    {
      menuItems.map((item) => {
        return <li>+ { item }</li>
      })
    }
    </NonDotList>
  )
}