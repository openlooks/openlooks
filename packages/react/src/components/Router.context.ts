import { createContext } from "react";

export const RouterContext = createContext({
    url(): string {
        return window.location.pathname;
    },
    navigate(newUrl: string): void {
        console.log(newUrl);
    },
});
