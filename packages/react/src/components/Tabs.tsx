import { useState } from "react";
import { TabsContext } from "./Tabs.context";

export interface TabsProps {
  defaultValue?: string;
  children?: any;
}

import type { JSX } from "react";

export function Tabs(props: TabsProps): JSX.Element {
  const [currentValue, setCurrentValue] = useState(props.defaultValue || "");
  return (
    <TabsContext.Provider
      value={{
        currentTab: () => {
          return currentValue;
        },
        setCurrentTab: (newTab) => {
          setCurrentValue(newTab);
        },
      }}
    >
      {props.children}
    </TabsContext.Provider>
  );
}
