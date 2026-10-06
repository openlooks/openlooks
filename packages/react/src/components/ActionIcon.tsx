import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface ActionIconProps {
    id?: string;
    c?: string;
    sx?: Record<string, string | number>;
    children?: any;
    title?: string;
    onClick?: (e: any) => void;
}
export default function ActionIcon(props: ActionIconProps) {
    return (<button id={props.id} className={buildOpenLooksClassName('actionicon', props.c, { color: 'gray' })} style={props.sx as React.CSSProperties | undefined} title={props.title} onClick={(event) => props.onClick?.(event)}>
      {props.children}
    </button>);
}
