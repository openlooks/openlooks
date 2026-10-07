import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface PaperProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function Paper(props: PaperProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("paper", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
