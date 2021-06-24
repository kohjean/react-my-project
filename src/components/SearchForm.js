import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { ConcaveComponent } from './ConcaveComponent';

const Container = styled(ConcaveComponent)`
  height: 100%;
  display: flex;
  align-items: center;
  width: 12rem;
  border-radius: 4px;
  margin-left: 2rem;
`

export const SearchForm = () => {
  return (
    <Container>
      <SearchIcon />
      <InputBase
        placeholder="Search"
      />
    </Container>
  )
}