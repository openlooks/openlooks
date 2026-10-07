import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface GridProps extends BaseComponentProps {}

export function Grid(props: GridProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("grid", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
