import React, { useContext } from 'react';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Error from '../../components/Error/Error';
import Candidates from '../../components/Candidates/Candidates';
import APIContext from '../../context/APIContext';
import states from '../../services/states';

import { HomeWrap, UpWrap, DownWrap } from './styles';

function Home() {
  const { candidates, stateAPI } = useContext(APIContext);
  return (
    <HomeWrap>
      <UpWrap>
        <Header />
      </UpWrap>
      <DownWrap>
        <DownWrap.Form>
          <Form />
        </DownWrap.Form>
        <DownWrap.Results>
          {stateAPI === states.SUCCESS && <Candidates candidates={candidates} />}
          {stateAPI === states.ERROR && <Error /> }
          {stateAPI === states.LOADING && <h3>Carregando...</h3> }
        </DownWrap.Results>
      </DownWrap>
    </HomeWrap>
  );
}

export default Home;
