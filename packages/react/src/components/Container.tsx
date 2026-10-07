import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface ContainerProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function Container(props: ContainerProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("container", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
