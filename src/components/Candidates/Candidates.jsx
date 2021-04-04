import React from 'react';
import PropTypes from 'prop-types';
import { AnimateSharedLayout } from 'framer-motion';
import Box from './styles';
import Candidate from '../Candidate/Candidate';

function Candidates({ candidates }) {
  if (candidates.length === 0) {
    return (
      <h3>Não foram encontrados resultados para a sua busca.</h3>
    );
  }

  return (
    <AnimateSharedLayout>
      <h3>Resultados</h3>
      <Box layout>
        {candidates.map((item) => (<Candidate key={item.id} item={item} />))}
      </Box>
    </AnimateSharedLayout>
  );
}

Candidates.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Candidates;
