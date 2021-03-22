import styled from 'styled-components';

const Search = styled.input`
  width: 50vw;
  height: 70%;
  background: #00419e;
  border: 1px solid black;
  font-size: 2.2rem;
  color: #f2f3ff;
`;

const SearchContainer = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
`;

export { Search, SearchContainer };
