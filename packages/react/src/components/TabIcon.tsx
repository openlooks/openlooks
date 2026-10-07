import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface TabIconProps extends BaseComponentProps {}

export function TabIcon(props: TabIconProps): JSX.Element {
  return (
    <span
      id={props.id}
      className={buildOpenLooksClassName("tab-icon", props.c)}
      style={props.sx}
    >
      {props.children}
    </span>
  );
}
