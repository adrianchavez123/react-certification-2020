import styled from 'styled-components';

const Search = styled.input`
  width: 50vw;
  height: 70%;
  background: ${(props) => props.theme.searchingBackground};
  border: 1px solid ${(props) => props.theme.searchingBorderColor};
  font-size: 2.2rem;
  color: #f2f3ff;
  padding-left: 10%;
`;

const SearchContainer = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
`;

const SearchingButton = styled.button`
  position: absolute;
  left: 2%;
  top: 15%;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: #fff;
  background: ${(props) => props.theme.navBackground};
  border: 0;
`;

export { Search, SearchContainer, Label, SearchingButton };
