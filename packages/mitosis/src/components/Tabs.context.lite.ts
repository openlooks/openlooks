import { createContext } from '@builder.io/mitosis';

export default createContext({
  currentTab(): string {
    return '';
  },
  setCurrentTab(newTab: string): void {
    console.log(newTab);
  },
});
