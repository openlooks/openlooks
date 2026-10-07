import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface TabListProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function TabList(props: TabListProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("tablist", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
