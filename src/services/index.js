import dataResponse from './mockAPI';

const getAllCandidates = () => {
  const { candidates } = dataResponse;

  return candidates.slice(0, 5);
};

const getFilteredACandidates = async () => {
  const { candidates } = dataResponse;

  return candidates.slice(5, 10);
};

export { getAllCandidates, getFilteredACandidates };
