import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { theme } from '../../themes';
import SelectPeriod from './SelectPeriod';

describe('o <SelectPeriod /> deve', () => {
  it('ter dois labels, dois inputs e um select', () => {
    const { getByLabelText, getAllByRole, getByRole } = render(
      <ThemeProvider theme={theme}>
        <SelectPeriod />
      </ThemeProvider>,
    );
    const label = getByLabelText('Anos de Experiência:');
    const labelE = getByLabelText('e');
    const inputs = getAllByRole('textbox');
    const select = getByRole('combobox');

    expect(label).toBeInTheDocument();
    expect(labelE).toBeInTheDocument();
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

  it('deve aceitar somente números para filtro por intervalo', () => {
    const { getAllByRole } = render(
      <ThemeProvider theme={theme}>
        <SelectPeriod />
      </ThemeProvider>,
    );

    const inputs = getAllByRole('textbox');

    userEvent.type(inputs[0], 'a');
    userEvent.type(inputs[0], '1');
    userEvent.type(inputs[1], 'b');
    userEvent.type(inputs[1], '2');

    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveValue('2');
  });

  it('deve aceitar somente números para filtro por limite', () => {
    const { getAllByRole, getByRole } = render(
      <ThemeProvider theme={theme}>
        <SelectPeriod />
      </ThemeProvider>,
    );

    const select = getByRole('combobox');
    const options = getAllByRole('option');
    const inputs = getAllByRole('textbox');

    userEvent.selectOptions(select, [options[0].textContent]);

    userEvent.type(inputs[0], 'a');
    userEvent.type(inputs[0], '1');

    expect(inputs[0]).toHaveValue('1');
  });
});
