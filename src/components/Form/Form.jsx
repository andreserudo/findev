import React, { useContext, useState } from 'react';
import APIContext from '../../context/APIContext';
import useStatesAPI from '../../hooks/useStatesAPI';
import SelectPeriod from '../SelectPeriod/SelectPeriod';
import FormWrapper from './styles';

function Form() {
  const [formData, setFormData] = useState({
    localidade: '',
    stack: '',
    initialYear: '',
    finalYear: '',
  });
  const { handleRequest } = useContext(APIContext);
  const [handleNewState] = useStatesAPI();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { localidade, stack } = formData;

    const dataToFind = {
      city: localidade,
      stack,
      initialYear: e.target[3].value,
      finalYear: e.target[4].value,
      type: e.target[2].value,
    };

    await handleRequest(dataToFind);
  };
  return (
    <FormWrapper>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Localidade:
          <input type="text" name="localidade" value={formData.localidade} onChange={(event) => handleInputChange(event)} />
        </label>

        <label>
          Tecnologia:
          <input type="text" name="stack" value={formData.stack} onChange={(event) => handleInputChange(event)} />
        </label>

        <SelectPeriod />

        <button type="submit">Encontrar</button>
      </form>
    </FormWrapper>
  );
}

export default Form;
