import React from 'react';
import Header from '../../components/Header/Header';

import { HomeWrap, UpWrap, DownWrap } from './styles';

function Home() {
  return (
    <HomeWrap>
      <UpWrap>
        <Header />
      </UpWrap>
      <DownWrap />
    </HomeWrap>
  );
}

export default Home;
