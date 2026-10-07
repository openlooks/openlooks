import React from "react";
import { RouterContext } from "@openlooks/react";
import { buildOpenLooksClassName } from "@openlooks/react";
export interface SiteNavLinkProps {
  id?: string;
  c?: string;
  children?: any;
  href: string;
  onClick: (event: React.MouseEvent) => void;
}
export function SiteNavLink(props: SiteNavLinkProps) {
  const router = React.useContext(RouterContext);
  return (
    <a
      id={props.id}
      className={buildOpenLooksClassName("anchor text", props.c)}
      href={props.href}
      aria-current={router.url() === props.href ? "page" : undefined}
      onClick={(event) => {
        event.preventDefault();
        router.navigate(props.href);
        props.onClick(event);
      }}
    >
      {props.children}
    </a>
  );
}
