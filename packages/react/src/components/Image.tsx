import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface ImageProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    src: string;
    alt: string;
}
export default function Image(props: ImageProps) {
    return (<img id={props.id} className={buildOpenLooksClassName('image', props.c)} style={props.sx as React.CSSProperties | undefined} src={props.src} alt={props.alt}/>);
}
