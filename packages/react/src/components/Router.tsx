import { useEffect, useState } from "react";
import { scrollToTop } from "../utils/scrolltop";
import { RouterContext } from "./Router.context";

export interface RouterProps {
  children?: any;
}

export function Router(props: RouterProps) {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);
  useEffect(() => {
    // Listen for URL changes
    window.addEventListener("popstate", () => {
      setCurrentUrl(window.location.pathname);
      scrollToTop();
    });
  }, []);
  return (
    <RouterContext.Provider
      value={{
        url: () => {
          return currentUrl;
        },
        navigate: (newUrl) => {
          // Update the URL without reloading the page
          window.history.pushState(null, "", newUrl);
          // Use window.location.pathname to get the resolved URL
          setCurrentUrl(window.location.pathname);
          // Scroll to top
          scrollToTop();
        },
      }}
    >
      {props.children}
    </RouterContext.Provider>
  );
}
