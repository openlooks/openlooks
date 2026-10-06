import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface AppShellProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function AppShell(props: AppShellProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('appshell', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
