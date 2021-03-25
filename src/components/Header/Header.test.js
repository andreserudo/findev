import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('o <Header /> deve', () => {
  it('conter a logo', () => {
    const { getByRole } = render(<Header />);
    const titulo = getByRole('heading', { name: 'Findev' });

    expect(titulo.textContent).toBe('Findev');
  });

  it('ter a frase da marca', () => {
    const { getByRole } = render(<Header />);
    const frase = 'Encontre quem está lhe procurando.';

    const texto = getByRole('heading', { name: frase });

    expect(texto.textContent).toBe(texto);
  });
});
