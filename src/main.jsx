import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </React.StrictMode>
  );
}