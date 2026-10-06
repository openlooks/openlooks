import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
import Context from "./Router.context";
export interface RouterLinkProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
    label?: string;
    children?: any;
    href: string;
}
export default function RouterLink(props: RouterLinkProps) {
    const router = React.useContext(Context);
    return (<a id={props.id} className={buildOpenLooksClassName('anchor text', props.c)} style={props.sx as React.CSSProperties | undefined} href={props.href} aria-label={props.label} aria-current={router.url() === props.href ? 'page' : undefined} onClick={(event) => {
            event.preventDefault();
            router.navigate(props.href);
        }}>
      {props.children}
    </a>);
}
