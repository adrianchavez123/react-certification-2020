import styled from 'styled-components';

const Group = styled.section`
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 5%;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    margin: 0 3%;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 0;
  margin: 0 10%;
  padding: 2% 0;
`;

export default Group;
