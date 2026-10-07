import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface GridColProps extends BaseComponentProps {}

export function GridCol(props: GridColProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("grid-col", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
