import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import SelectWrap from './styles';

function SelectPeriod() {
  const [period, setPeriod] = useState({
    initial: '',
    final: '',
  });
  const [isIntervalOn, setIntervalOn] = useState(true);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    const onlyNumbers = new RegExp('^[0-9]+$');

    if (value.match(onlyNumbers)) {
      setPeriod({ ...period, [name]: value });
    }
  };

  const handleSelectChange = ({ target }) => {
    if (target.value === 'entre') {
      return setIntervalOn(true);
    }
    return setIntervalOn(false);
  };

  return (
    <SelectWrap>
      <span htmlFor="initial">Anos de Experiência:</span>
      <SelectWrap.Group>
        <select defaultValue="entre" onChange={(event) => handleSelectChange(event)}>
          <option value="até">até</option>
          <option value="entre">entre</option>
          <option value="acima de">acima de</option>
        </select>
        <input
          type="number"
          name="initial"
          value={period.initial}
          onChange={(event) => handleInputChange(event)}
          maxLength="2"
        />
        {isIntervalOn && <span>e</span>}
        {isIntervalOn
        && (
          <input
            type="number"
            name="final"
            value={period.final}
            onChange={(event) => handleInputChange(event)}
            maxLength="2"
          />
        )}
      </SelectWrap.Group>
    </SelectWrap>
  );
}

// SelectPeriod.propTypes = {
//   data: PropTypes.shape({
//     initialYear: PropTypes.string,
//     finalYear: PropTypes.string,
//   }).isRequired,
// };

export default SelectPeriod;
