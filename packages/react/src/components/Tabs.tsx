import React from "react";
import Context from "./Tabs.context";
export interface TabsProps {
    defaultValue?: string;
    children?: any;
}
export default function Tabs(props: TabsProps) {
    const [currentValue, setCurrentValue] = React.useState(props.defaultValue || '');
    return (<Context.Provider value={{
            currentTab: () => {
                return currentValue;
            },
            setCurrentTab: (newTab) => {
                setCurrentValue(newTab);
            },
        }}>
      {props.children}
    </Context.Provider>);
}
