import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface FlexProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function Flex(props: FlexProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("flex", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
