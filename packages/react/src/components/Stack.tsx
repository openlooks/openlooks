import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface StackProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function Stack(props: StackProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("stack", props.c, {
        justify: "flex-start",
      })}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
