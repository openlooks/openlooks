import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface TextProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function Text(props: TextProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("text", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
