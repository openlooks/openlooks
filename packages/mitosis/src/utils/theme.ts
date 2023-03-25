// Supporting system preference and manual selection
// https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export function getTheme(): 'dark' | 'light' {
  return localStorage.theme || defaultTheme;
}

export function setTheme(theme: 'dark' | 'light'): void {
  if (theme === defaultTheme) {
    localStorage.removeItem('theme');
  } else {
    localStorage.theme = theme;
  }
  applyTheme();
}

export function toggleTheme(): void {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

export function applyTheme(): void {
  if (getTheme() === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function initTheme(): void {
  window.addEventListener('storage', applyTheme);
  applyTheme();
}
