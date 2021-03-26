import React from 'react';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';

import { HomeWrap, UpWrap, DownWrap } from './styles';

function Home() {
  return (
    <HomeWrap>
      <UpWrap>
        <Header />
      </UpWrap>
      <DownWrap>
        <DownWrap.Form>
          <Form />
        </DownWrap.Form>
      </DownWrap>
    </HomeWrap>
  );
}

export default Home;
