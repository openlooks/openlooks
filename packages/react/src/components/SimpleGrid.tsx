import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface SimpleGridProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function SimpleGrid(props: SimpleGridProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('simplegrid', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
