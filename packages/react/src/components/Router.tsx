import React from "react";
import { scrollToTop } from '../utils/scrolltop';
import Context from "./Router.context";
export interface RouterProps {
    children?: any;
}
export default function Router(props: RouterProps) {
    const [currentUrl, setCurrentUrl] = React.useState(window.location.pathname);
    React.useEffect(() => {
        // Listen for URL changes
        window.addEventListener('popstate', () => {
            setCurrentUrl(window.location.pathname);
            scrollToTop();
        });
    }, []);
    return (<Context.Provider value={{
            url: () => {
                return currentUrl;
            },
            navigate: (newUrl) => {
                // Update the URL without reloading the page
                window.history.pushState(null, '', newUrl);
                // Use window.location.pathname to get the resolved URL
                setCurrentUrl(window.location.pathname);
                // Scroll to top
                scrollToTop();
            },
        }}>
      {props.children}
    </Context.Provider>);
}
