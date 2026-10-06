import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface ConfiguratorProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function Configurator(props: ConfiguratorProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('configurator', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
