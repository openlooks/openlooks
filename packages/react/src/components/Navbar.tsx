import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface NavbarProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children: any;
}
export default function Navbar(props: NavbarProps) {
    return (<nav id={props.id} className={buildOpenLooksClassName('navbar scrollarea', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </nav>);
}
