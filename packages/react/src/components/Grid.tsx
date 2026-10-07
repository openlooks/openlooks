import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface GridProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function Grid(props: GridProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("grid", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
