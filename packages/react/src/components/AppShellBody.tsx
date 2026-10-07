import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { BaseComponentProps } from "./BaseComponentProps";

export interface AppShellBodyProps extends BaseComponentProps {}

export function AppShellBody(props: AppShellBodyProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("body", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
