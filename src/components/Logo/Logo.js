import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS, QUERIES } from '../../constants';

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};

  @media ${QUERIES.tabletAndDown} {
    flex: 1;
  }
`;

export default Logo;
