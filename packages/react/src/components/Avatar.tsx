import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface AvatarProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    src?: string;
    alt?: string;
    children?: any;
}
export default function Avatar(props: AvatarProps) {
    return (<div id={props.id} className={buildOpenLooksClassName('avatar', props.c, { color: 'gray' })} style={props.sx as React.CSSProperties | undefined}>
      <div className="openlooks center">
        <>{props.src && <img src={props.src} alt={props.alt} title={props.alt}/>}</>
        {props.children}
      </div>
    </div>);
}
