import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface AppShellMainProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function AppShellMain(props: AppShellMainProps) {
  return (
    <main
      id={props.id}
      className={buildOpenLooksClassName("main scrollarea", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </main>
  );
}
