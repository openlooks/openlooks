import React from "react";
import Context from "./Tabs.context";
export interface TabProps {
    value: string;
    children: any;
}
export default function Tab(props: TabProps) {
    const ctx = React.useContext(Context);
    return (<button className="openlooks tab" role="tab" aria-controls={`${props.value}-panel`} aria-selected={ctx.currentTab() === props.value} onClick={() => ctx.setCurrentTab(props.value)}>
      {props.children}
    </button>);
}
