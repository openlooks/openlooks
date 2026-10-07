import { createContext } from "react";

export const TabsContext = createContext({
    currentTab(): string {
        return '';
    },
    setCurrentTab(newTab: string): void {
        console.log(newTab);
    },
});
