import { initApp } from '@openlooks/core';
import { App } from './site/App';

import '@openlooks/styles/index.css';
import './site/index.css';

initApp();

const root = document.getElementById('app') as HTMLDivElement;
root.appendChild(new App().createDom());
