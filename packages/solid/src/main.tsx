/* @refresh reload */
import '@openlooks/styles';
import { render } from 'solid-js/web';
import App from './components/App/App';
import './index.css';

render(() => <App />, document.getElementById('root') as HTMLDivElement);
