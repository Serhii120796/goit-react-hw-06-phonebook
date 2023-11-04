import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

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
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
