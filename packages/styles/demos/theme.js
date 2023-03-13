// Supporting system preference and manual selection
// https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection

function applyTheme() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function setTheme(theme) {
  if (theme === 'auto') {
    localStorage.removeItem('theme');
  } else {
    localStorage.theme = theme;
  }
  applyTheme();
}

window.addEventListener('storage', applyTheme);

applyTheme();
