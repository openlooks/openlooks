import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface BoxProps extends BaseComponentProps {}

export function Box(props: BoxProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
