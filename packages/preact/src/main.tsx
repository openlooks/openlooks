import { render } from 'preact';
import App from './site/App';
import { initApp } from './utils/init';

import '@openlooks/styles';
import './site/index.css';

initApp();

render(<App />, document.getElementById('root') as HTMLElement);
