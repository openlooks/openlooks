import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface TableProps extends BaseComponentProps {}

export function Table(props: TableProps): JSX.Element {
  return (
    <table
      id={props.id}
      className={buildOpenLooksClassName("table", props.c)}
      style={props.sx}
    >
      {props.children}
    </table>
  );
}
