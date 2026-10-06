import React from "react";
import { buildOpenLooksClassName } from '../../utils/classname';
import { getPrism } from '../../utils/prism';
import './Prism.css';
export interface PrismProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    language: string;
    code: string;
}
// prettier-ignore
export default function Prism(props: PrismProps) {
    return (<pre id={props.id} className={buildOpenLooksClassName(`language-${props.language}`, props.c)}><code id={props.id} className={buildOpenLooksClassName(`language-${props.language}`, props.c)} style={props.sx as React.CSSProperties | undefined} dangerouslySetInnerHTML={{ __html: getPrism().highlight(props.code, getPrism().languages[props.language], props.language) }}/></pre>);
}
