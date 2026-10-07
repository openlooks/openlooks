import type { JSX } from "react";
import { BaseComponentProps } from "..";
import { buildOpenLooksClassName } from "../utils/classname";

export interface AnchorProps extends BaseComponentProps {
  href: string;
  target?: string;
  label?: string;
}
export function Anchor(props: AnchorProps): JSX.Element {
  return (
    <a
      id={props.id}
      className={buildOpenLooksClassName("anchor text", props.c)}
      style={props.sx}
      href={props.href}
      target={props.target}
      aria-label={props.label}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </a>
  );
}
