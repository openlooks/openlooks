import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { BaseComponentProps } from "./BaseComponentProps";

export interface AppShellMainProps extends BaseComponentProps {}

export function AppShellMain(props: AppShellMainProps): JSX.Element {
  return (
    <main
      id={props.id}
      className={buildOpenLooksClassName("main scrollarea", props.c)}
      style={props.sx}
    >
      {props.children}
    </main>
  );
}
