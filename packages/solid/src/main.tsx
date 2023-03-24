/* @refresh reload */
import { render } from 'solid-js/web';
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

render(() => <App />, document.getElementById('root') as HTMLDivElement);
