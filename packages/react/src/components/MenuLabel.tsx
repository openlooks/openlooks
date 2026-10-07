import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface MenuLabelProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function MenuLabel(props: MenuLabelProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("menu-label", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
