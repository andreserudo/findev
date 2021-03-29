import React, { useContext, useState } from 'react';
import APIContext from '../../context/APIContext';
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

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { localidade, stack } = formData;

    // eslint-disable-next-line no-unused-vars
    const dataToFind = {
      localidade,
      stack,
      initialYear: e.target[3].value,
      finalYear: e.target[4].value,
    };
    handleRequest(dataToFind);
  };
  return (
    <FormWrapper>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Localidade:
          <input type="text" name="localidade" value={formData.localidade} onChange={(event) => handleInputChange(event)} />
        </label>

        <label>
          Stack:
          <input type="text" name="stack" value={formData.stack} onChange={(event) => handleInputChange(event)} />
        </label>

        <SelectPeriod />

        <button type="submit">Encontrar</button>
      </form>
    </FormWrapper>
  );
}

export default Form;
