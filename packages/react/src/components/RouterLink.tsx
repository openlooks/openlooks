import { CSSProperties, useContext } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { RouterContext } from "./Router.context";

export interface RouterLinkProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  label?: string;
  children?: any;
  href: string;
}

export function RouterLink(props: RouterLinkProps) {
  const router = useContext(RouterContext);
  return (
    <a
      id={props.id}
      className={buildOpenLooksClassName("anchor text", props.c)}
      style={props.sx as CSSProperties | undefined}
      href={props.href}
      aria-label={props.label}
      aria-current={router.url() === props.href ? "page" : undefined}
      onClick={(event) => {
        event.preventDefault();
        router.navigate(props.href);
      }}
    >
      {props.children}
    </a>
  );
}
