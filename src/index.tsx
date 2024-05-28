import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import HttpApi from 'i18next-http-backend';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // TODO: Strict mode and double rendering: Strict mode executes some operations twice in order to detect side effects (such as unintentional state mutations). This also includes calling useEffect cleanup functions and initializations twice in the development environment, but this does not happen in the production environment.
  <React.StrictMode> 
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();