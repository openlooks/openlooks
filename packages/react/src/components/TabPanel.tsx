import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
import Context from "./Tabs.context";
export interface TabPanelProps {
    c?: string;
    sx?: Record<string, any>;
    value: string;
    children?: any;
}
export default function TabPanel(props: TabPanelProps) {
    const ctx = React.useContext(Context);
    return (<div id={`${props.value}-panel`} className={buildOpenLooksClassName('tabpanel text', props.c)} style={props.sx as React.CSSProperties | undefined} role="tabpanel" hidden={ctx.currentTab() !== props.value}>
      {props.children}
    </div>);
}
