import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface StackProps extends BaseComponentProps {}

export function Stack(props: StackProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("stack", props.c, {
        justify: "flex-start",
      })}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
