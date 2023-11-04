import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const theme = {
  weight: {
      accent: 600,
    },
  colors: {
        black: '#000000',
    grey: '#b3b3b3',
    error: 'red',
  },
  borders: {
    black: '1px solid #000000',
    grey: '1px solid #b3b3b3',
  },
  radius: '5px',
  spasing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
