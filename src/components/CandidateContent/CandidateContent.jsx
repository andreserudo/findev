import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Techs from './styles';

// eslint-disable-next-line react/prop-types
function CandidateContent({ item }) {
  return (
    <Techs
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <strong><p>Tecnologias:</p></strong>
      {item.technologies.map((tech) => (<span key={tech.name}>{tech.name}</span>))}
    </Techs>
  );
}

CandidateContent.propTypes = {
  item: PropTypes.shape({
    city: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default CandidateContent;
