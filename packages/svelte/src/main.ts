import App from './site/App.svelte';

import '@openlooks/styles';
import './site/index.css';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
