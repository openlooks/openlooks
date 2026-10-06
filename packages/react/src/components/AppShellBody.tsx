import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface AppShellBodyProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function AppShellBody(props: AppShellBodyProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('body', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
