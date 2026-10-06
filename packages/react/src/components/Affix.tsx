import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface AffixProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function Affix(props: AffixProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('affix', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
