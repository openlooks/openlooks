/* @refresh reload */
import { render } from 'solid-js/web';
import App from './site/App';

import '@openlooks/styles';
import './site/index.css';

render(() => <App />, document.getElementById('root') as HTMLDivElement);
