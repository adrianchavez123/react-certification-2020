import styled from 'styled-components';

const Profile = styled.div`
  :hover {
    color: black;
  }
  padding-right: 20px;
  font-size: 2.2rem;
  cursor: pointer;
  position: relative;
`;

const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { Profile, PreferenceContainer };
