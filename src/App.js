import React from 'react';
import { ThemeProvider } from 'styled-components';
import Provider from './context/Provider';
import Home from './pages/Home/Home';
import { theme } from './themes';

function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
