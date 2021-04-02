import { useState } from 'react';
import states from '../services/states';

function useStatesAPI() {
  const [stateAPI, setStatesAPI] = useState(states.DEFAULT);

  const handleNewState = (state) => {
    setStatesAPI(state);
  };

  return [
    stateAPI,
    handleNewState,
  ];
}

export default useStatesAPI;
