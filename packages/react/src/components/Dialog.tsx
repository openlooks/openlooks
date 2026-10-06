import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
import Affix from "./Affix";
export interface DialogProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    children?: any;
}
export default function Dialog(props: DialogProps) {
    return (<Affix>
      <div id={props.id} className={buildOpenLooksClassName('popover paper', props.c, { shadow: 'xl', radius: 'sm', withBorder: true })} style={props.sx as React.CSSProperties | undefined}>
        {props.children}
      </div>
    </Affix>);
}
