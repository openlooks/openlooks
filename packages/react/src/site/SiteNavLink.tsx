import React from "react";
import Context from "../components/Router.context";
import { buildOpenLooksClassName } from '../utils/classname';
export interface SiteNavLinkProps {
    id?: string;
    c?: string;
    children?: any;
    href: string;
    onClick: (event: React.MouseEvent) => void;
}
export default function SiteNavLink(props: SiteNavLinkProps) {
    const router = React.useContext(Context);
    return (<a id={props.id} className={buildOpenLooksClassName('anchor text', props.c)} href={props.href} aria-current={router.url() === props.href ? 'page' : undefined} onClick={(event) => {
            event.preventDefault();
            router.navigate(props.href);
            props.onClick(event);
        }}>
      {props.children}
    </a>);
}
