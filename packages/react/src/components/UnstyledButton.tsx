import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface UnstyledButtonProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    onClick?: (e: any) => void;
    children?: any;
}
export default function UnstyledButton(props: UnstyledButtonProps) {
    return (<button id={props.id} className={buildOpenLooksClassName('unstyled-button', props.c)} style={props.sx as React.CSSProperties | undefined} onClick={(event) => props.onClick?.(event)}>
      {props.children}
    </button>);
}
