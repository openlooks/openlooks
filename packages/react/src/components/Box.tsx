import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface BoxProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function Box(props: BoxProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
