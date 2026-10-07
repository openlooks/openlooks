import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface CenterProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function Center(props: CenterProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("center", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
