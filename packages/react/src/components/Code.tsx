import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface CodeProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    block?: boolean;
    children?: any;
}
export default function Code(props: CodeProps) {
    return (<>
      <>{props.block && <pre id={props.id} className={buildOpenLooksClassName('code', props.c, { color: 'gray' })} style={props.sx as React.CSSProperties | undefined}>
          <code id={props.id} className={buildOpenLooksClassName('code', props.c, { color: 'gray' })} style={props.sx as React.CSSProperties | undefined}>
            {props.children}
          </code>
        </pre>}</>
      <>{!props.block && <code id={props.id} className={buildOpenLooksClassName('code', props.c, { color: 'gray' })} style={props.sx as React.CSSProperties | undefined}>
          {props.children}
        </code>}</>
    </>);
}
