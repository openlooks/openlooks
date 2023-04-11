import { getPrism } from './prism';
import { initTheme } from './theme';

export function initApp() {
  getPrism().manual = true;
  initTheme();
}
