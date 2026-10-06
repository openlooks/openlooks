import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface CardProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function Card(props: CardProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('card paper', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
