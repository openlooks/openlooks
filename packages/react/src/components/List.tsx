import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface ListProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function List(props: ListProps) {
    return (<ul id={props.id} className={buildOpenLooksClassName('text', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </ul>);
}
