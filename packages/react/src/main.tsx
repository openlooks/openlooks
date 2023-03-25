import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './site/App';
import { initApp } from './utils/init';

import '@openlooks/styles';
import './site/index.css';

initApp();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
