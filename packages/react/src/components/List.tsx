import type { JSX } from "react";
import type { BaseComponentProps } from "./BaseComponentProps";
import { buildOpenLooksClassName } from "../utils/classname";

export interface ListProps extends BaseComponentProps {}

export function List(props: ListProps): JSX.Element {
  return (
    <ul
      id={props.id}
      className={buildOpenLooksClassName("text", props.c)}
      style={props.sx}
    >
      {props.children}
    </ul>
  );
}
