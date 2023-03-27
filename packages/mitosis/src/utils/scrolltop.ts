export function scrollToTop(): void {
  for (const el of document.querySelectorAll('main')) {
    el.scrollTop = 0;
  }
}
