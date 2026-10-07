import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface TabLabelProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function TabLabel(props: TabLabelProps) {
  return (
    <span
      id={props.id}
      className={buildOpenLooksClassName("tab-label", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </span>
  );
}
