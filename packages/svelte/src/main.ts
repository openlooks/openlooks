import App from './site/App.svelte';
import { initApp } from './utils/init';

import '@openlooks/styles';
import './site/index.css';

initApp();

const app = new App({ target: document.getElementById('root') });

export default app;
