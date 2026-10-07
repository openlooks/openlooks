import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface HeaderProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function Header(props: HeaderProps) {
  return (
    <header
      id={props.id}
      className={buildOpenLooksClassName("header", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </header>
  );
}
