import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

import { STYLES } from '../../constants';


const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header style={STYLES}/>
      <Main style={STYLES}>
        <ShoeIndex sortId={sortId} setSortId={setSortId} style={STYLES}/>
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
