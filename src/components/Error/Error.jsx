import React from 'react';
import { Lottie } from '@crello/react-lottie';
import errorDog from '../../animations/error/errorDoge.json';
import ErrorWrapper from './styles';

function Error() {
  return (
    <ErrorWrapper>
      <Lottie
        width="150px"
        height="150px"
        config={{ animationData: errorDog, loop: true, autoplay: true }}
      />
      <h3>Algo deu errado. Não foi possível concluir a busca.</h3>
    </ErrorWrapper>
  );
}

export default Error;
