import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface TableProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function Table(props: TableProps) {
    return (<table id={props.id} className={buildOpenLooksClassName('table', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </table>);
}
