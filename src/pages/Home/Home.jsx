import React from 'react';
import Header from '../../components/Header/Header';
import SelectPeriod from '../../components/SelectPeriod/SelectPeriod';

import { HomeWrap, UpWrap, DownWrap } from './styles';

function Home() {
  return (
    <HomeWrap>
      <UpWrap>
        <Header />
        <SelectPeriod />
      </UpWrap>
      <DownWrap />
    </HomeWrap>
  );
}

export default Home;
