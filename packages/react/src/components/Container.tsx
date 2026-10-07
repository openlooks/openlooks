import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface ContainerProps extends BaseComponentProps {}

export function Container(props: ContainerProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("container", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
