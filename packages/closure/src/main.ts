import { App } from './site/App';
import { initApp } from './utils/init';

import '@openlooks/styles';
import './site/index.css';

initApp();

const root = document.getElementById('app') as HTMLDivElement;
root.appendChild(new App().createDom());
