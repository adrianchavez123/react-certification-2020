import styled from 'styled-components';

const Profile = styled.div`
  :hover {
    color: ${(props) => props.theme.navHoverFontColor};
  }
  display: flex;
  font-size: 2.2rem;
  cursor: pointer;
  position: relative;
  align-items: center;

  span {
    font-size: 1rem;
  }
  @media only screen and (max-width: 1100px) {
    span {
    display:none;
  }
`;

const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AuthenticatedAvatar = styled.div`
  height: 1.5em;
  width: 1.5em;
  background-image: ${(props) => `url(${props.avatarUrl})`};
  background-size: contain;
  border-radius: 50%;
  display: inline-block;
`;

export { Profile, PreferenceContainer, AuthenticatedAvatar };
