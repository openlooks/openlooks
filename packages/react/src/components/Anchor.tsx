import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface AnchorProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
  href: string;
  target?: string;
  label?: string;
  onClick?: (event: React.MouseEvent) => void;
}
export function Anchor(props: AnchorProps) {
  return (
    <a
      id={props.id}
      className={buildOpenLooksClassName("anchor text", props.c)}
      style={props.sx as React.CSSProperties | undefined}
      href={props.href}
      target={props.target}
      aria-label={props.label}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </a>
  );
}
