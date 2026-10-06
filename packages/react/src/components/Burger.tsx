import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface BurgerProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    opened?: boolean;
    label?: string;
    onClick?: (e: any) => void;
}
export default function Burger(props: BurgerProps) {
    return (<button id={props.id} className={buildOpenLooksClassName('unstyled-button burger-button', props.c)} style={props.sx as React.CSSProperties | undefined} aria-label={props.label} onClick={(event) => {
            props.onClick?.(event);
        }}>
      <div className="openlooks burger" data-open={props.opened}></div>
    </button>);
}
