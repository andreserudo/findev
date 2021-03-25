import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

// const inputLocalidade = 'inputLocalidade';
// const inputStack = 'inputStack';
// const selectExperiencia = 'selectExperiencia';
// const buttonEncontrar = 'buttonEncontrar';

describe('o usuario deve ser capaz de ver na tela campos para', () => {
  it('informar a Localidade', () => {
    const { getByLabelText, getByRole } = render(<App />);
    const labelLocalidade = getByLabelText('Localidade:');
    const inputLocalidade = getByRole('textbox', { name: 'textbox' });

    expect(labelLocalidade).toBeInTheDocument();
    expect(inputLocalidade).toBeInTheDocument();
  });

  it('informar a Stack', () => {
    const { getByLabelText, getByRole } = render(<App />);
    const labelStack = getByLabelText('Stack:');
    const inputStack = getByRole('textbox', { name: 'textbox' });

    expect(labelStack).toBeInTheDocument();
    expect(inputStack).toBeInTheDocument();
  });
});
