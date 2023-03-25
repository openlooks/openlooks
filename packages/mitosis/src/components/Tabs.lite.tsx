import { useStore } from '@builder.io/mitosis';
import Context from './Tabs.context.lite';

export interface TabsProps {
  defaultValue?: string;
  children?: any;
}

export default function Tabs(props: TabsProps) {
  const state = useStore({
    currentValue: props.defaultValue || '',
  });

  return (
    <Context.Provider
      value={{
        currentTab: () => {
          return state.currentValue;
        },
        setCurrentTab: (newTab: string) => {
          state.currentValue = newTab;
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
