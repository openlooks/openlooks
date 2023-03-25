import { initTheme } from './theme';

declare global {
  interface Window {
    Prism: any;
  }
}

export function initApp() {
  window.Prism = window.Prism || {};
  window.Prism.manual = true;

  initTheme();
}
