import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface TabLabelProps extends BaseComponentProps {}

export function TabLabel(props: TabLabelProps): JSX.Element {
  return (
    <span
      id={props.id}
      className={buildOpenLooksClassName("tab-label", props.c)}
      style={props.sx}
    >
      {props.children}
    </span>
  );
}
