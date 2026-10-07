import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface CenterProps extends BaseComponentProps {}

export function Center(props: CenterProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("center", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
