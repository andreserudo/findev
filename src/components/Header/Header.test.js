import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from '../../themes';
import Header from './Header';

describe('o <Header /> deve', () => {
  it('conter a logo', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );
    const titulo = getByRole('heading', { name: 'Findev' });

    expect(titulo.textContent).toBe('Findev');
  });

  it('ter a frase da marca', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );
    const frase = 'Encontre quem está lhe procurando.';

    const texto = getByRole('heading', { name: frase });

    expect(texto.textContent).toBe(frase);
  });
});
