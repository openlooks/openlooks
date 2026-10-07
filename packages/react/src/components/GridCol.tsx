import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface GridColProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function GridCol(props: GridColProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("grid-col", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
