import { useStore } from '@builder.io/mitosis';
import Context from './Router.context.lite';

export interface RouterProps {
  children?: any;
}

export default function Router(props: RouterProps) {
  const state = useStore({
    currentUrl: window.location.pathname,
  });

  return (
    <Context.Provider
      value={{
        url: () => {
          return state.currentUrl;
        },
        navigate: (newUrl: string) => {
          state.currentUrl = newUrl;
          window.history.pushState(null, '', newUrl);
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
