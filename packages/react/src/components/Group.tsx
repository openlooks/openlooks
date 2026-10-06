import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface GroupProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function Group(props: GroupProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('group', props.c, { spacing: 'sm' })} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
