import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface MenuDividerProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function MenuDivider(props: MenuDividerProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('menu-divider', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
