import React from "react";
export default React.createContext({
    currentTab(): string {
        return '';
    },
    setCurrentTab(newTab: string): void {
        console.log(newTab);
    },
});
