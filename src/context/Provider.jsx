import React, { useState } from 'react';
import PropTypes from 'prop-types';
import APIContext from './APIContext';
import states from '../services/states';
import { getAllCandidates } from '../services';

function Provider({ children }) {
  const [stateAPI, setStateAPI] = useState(states.DEFAULT);

  const handleChangeState = (state) => {
    setStateAPI(state);
  };

  const handleRequest = (formData) => {
    setStateAPI(states.LOADING);
    const response = getAllCandidates();
    console.log(response);
    console.log(formData);
  };

  const context = {
    stateAPI,
    handleChangeState,
    handleRequest,
  };

  return (
    <APIContext.Provider value={context}>
      { children }
    </APIContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
