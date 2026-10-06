import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface TitleProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    order?: 1 | 2 | 3 | 4 | 5 | 6;
    children?: any;
}
export default function Title(props: TitleProps) {
    // TODO: Figure out how to use Solid "Dynamic" in Mitosis
    return (<>
      <>{(props.order === 1 || props.order === undefined) && <h1 id={props.id} className={buildOpenLooksClassName('title', props.c)} style={props.sx as React.CSSProperties | undefined}>
          {props.children}
        </h1>}</>
      <>{props.order === 2 && <h2 id={props.id} className={buildOpenLooksClassName('title', props.c)} style={props.sx as React.CSSProperties | undefined}>
          {props.children}
        </h2>}</>
      <>{props.order === 3 && <h3 id={props.id} className={buildOpenLooksClassName('title', props.c)} style={props.sx as React.CSSProperties | undefined}>
          {props.children}
        </h3>}</>
      <>{props.order === 4 && <h4 id={props.id} className={buildOpenLooksClassName('title', props.c)} style={props.sx as React.CSSProperties | undefined}>
          {props.children}
        </h4>}</>
      <>{props.order === 5 && <h5 id={props.id} className={buildOpenLooksClassName('title', props.c)} style={props.sx as React.CSSProperties | undefined}>
          {props.children}
        </h5>}</>
      <>{props.order === 6 && <h6 id={props.id} className={buildOpenLooksClassName('title', props.c)} style={props.sx as React.CSSProperties | undefined}>
          {props.children}
        </h6>}</>
    </>);
}
