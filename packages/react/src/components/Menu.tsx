import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface MenuProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function Menu(props: MenuProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('popover paper', props.c, { shadow: 'sm', radius: 'sm', withBorder: true })} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
