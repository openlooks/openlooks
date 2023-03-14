import { createContext } from '@builder.io/mitosis';

export default createContext({
  url(): string {
    return window.location.pathname;
  },
  navigate(newUrl: string): void {
    console.log(newUrl);
  },
});
