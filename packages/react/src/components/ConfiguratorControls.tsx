import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface ConfiguratorControlsProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function ConfiguratorControls(props: ConfiguratorControlsProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('configurator-controls', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
