import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import APIContext from './APIContext';
import states from '../services/states';
import { getAllCandidates } from '../services';

function Provider({ children }) {
  const [stateAPI, setStateAPI] = useState(states.DEFAULT);
  const [candidates, setCandidates] = useState([]);

  const handleStateChange = async (state) => {
    await setStateAPI(state);
  };

  const handleRequest = async (formData) => {
    setStateAPI(states.LOADING);
    // await handleStateChange(states.LOADING);
    const response = await getAllCandidates(formData);

    setCandidates(response.data);
    // await handleStateChange(response.status);
    setStateAPI(response.status);
  };

  const context = {
    stateAPI,
    candidates,
    handleRequest,
    handleStateChange,
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
