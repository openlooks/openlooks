import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './site/App';

import '@openlooks/styles';
import './site/index.css';
import './site/prism-light.css';

declare global {
  interface Window {
    Prism: any;
  }
}

window.Prism = window.Prism || {};
window.Prism.manual = true;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
