import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface ConfiguratorStageProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function ConfiguratorStage(props: ConfiguratorStageProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('configurator-stage', props.c)} style={props.sx as React.CSSProperties | undefined}>
      {props.children}
    </div>);
}
