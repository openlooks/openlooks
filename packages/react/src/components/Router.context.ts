import React from "react";
export default React.createContext({
    url(): string {
        return window.location.pathname;
    },
    navigate(newUrl: string): void {
        console.log(newUrl);
    },
});
