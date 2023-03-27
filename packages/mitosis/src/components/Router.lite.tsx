import { onMount, useStore } from '@builder.io/mitosis';
import { scrollToTop } from '../utils/scrolltop';
import Context from './Router.context.lite';

export interface RouterProps {
  children?: any;
}

export default function Router(props: RouterProps) {
  const state = useStore({
    currentUrl: window.location.pathname,
  });

  onMount(() => {
    // Listen for URL changes
    window.addEventListener('popstate', () => {
      state.currentUrl = window.location.pathname;
      scrollToTop();
    });
  });

  return (
    <Context.Provider
      value={{
        url: () => {
          return state.currentUrl;
        },
        navigate: (newUrl: string) => {
          // Update the URL without reloading the page
          window.history.pushState(null, '', newUrl);

          // Use window.location.pathname to get the resolved URL
          state.currentUrl = window.location.pathname;

          // Scroll to top
          scrollToTop();
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
