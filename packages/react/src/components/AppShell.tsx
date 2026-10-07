import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { BaseComponentProps } from "./BaseComponentProps";

export interface AppShellProps extends BaseComponentProps {}

export function AppShell(props: AppShellProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("appshell", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
