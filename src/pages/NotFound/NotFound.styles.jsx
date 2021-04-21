import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundSection = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #fafafa;
`;
const HomeLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  display: block;
  text-align: right;
  padding: 0.2rem 0.3rem;

  & ::before {
    content: '←';
    padding-right: 0.2rem;
    display: inline-block;
  }
`;

const BigTitle = styled.h1`
  font-size: 10rem;
  font-weight: 200;
  line-height: 4rem;
`;

const Title = styled.h3`
  font-size: 5rem;
  font-weight: 300;
  line-height: 2rem;
`;

const Text = styled.p`
  font-size: 2rem;
  font-weight: 200;
`;
export { NotFoundSection, HomeLink, BigTitle, Title, Text };
