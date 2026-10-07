import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface ScrollAreaProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function ScrollArea(props: ScrollAreaProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("scrollarea", props.c, {
        variant: "hover",
        scrollbarSize: "md",
      })}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
