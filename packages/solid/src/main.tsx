/* @refresh reload */
import '@openlooks/styles';
import { render } from 'solid-js/web';
import App from './components/App/App';

render(() => <App />, document.getElementById('root') as HTMLDivElement);
