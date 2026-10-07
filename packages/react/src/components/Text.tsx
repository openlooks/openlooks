import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface TextProps extends BaseComponentProps {}

export function Text(props: TextProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("text", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
