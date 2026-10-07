import {
  BaseComponentProps,
  buildOpenLooksClassName,
  RouterContext,
} from "@openlooks/react";
import type { JSX, MouseEvent } from "react";
import { useContext } from "react";

export interface SiteNavLinkProps extends BaseComponentProps {
  href: string;
  onClick: (event: MouseEvent) => void;
}

export function SiteNavLink(props: SiteNavLinkProps): JSX.Element {
  const router = useContext(RouterContext);
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
