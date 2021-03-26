import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { theme } from '../../themes';
import SelectPeriod from './SelectPeriod';

describe('o <SelectPeriod /> deve', () => {
  it('ter um label, dois inputs e um select', () => {
    const { getByLabelText, getAllByRole, getByRole } = render(
      <ThemeProvider theme={theme}>
        <SelectPeriod />
      </ThemeProvider>,
    );
    const label = getByLabelText('Anos de Experiência:');
    const inputs = getAllByRole('textbox');
    const select = getByRole('combobox');

    expect(label).toBeInTheDocument();
    expect(inputs.length).toBe(2);
    expect(select).toBeInTheDocument();
  });

  it('ter três opcoes de selecao', () => {
    const { getAllByRole } = render(
      <ThemeProvider theme={theme}>
        <SelectPeriod />
      </ThemeProvider>,
    );
    const opcoes = ['até', 'entre', 'acima de'];

    const select = getAllByRole('option');

    expect(select[0].textContent).toBe(opcoes[0]);
    expect(select[1].textContent).toBe(opcoes[1]);
    expect(select[2].textContent).toBe(opcoes[2]);
  });

  it('mudar a quantidade de inputs quando nao for a opcao inicial', () => {
    const { getByRole, getAllByRole } = render(
      <ThemeProvider theme={theme}>
        <SelectPeriod />
      </ThemeProvider>,
    );

    const select = getByRole('combobox');
    const options = getAllByRole('option');
    userEvent.selectOptions(select, [options[0].textContent]);
    const inputs = getAllByRole('textbox');

    expect(inputs.length).toBe(1);
    userEvent.selectOptions(select, [options[0].textContent]);
    expect(inputs.length).toBe(2);
  });
});
