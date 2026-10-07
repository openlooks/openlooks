import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface TabListProps extends BaseComponentProps {}

export function TabList(props: TabListProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("tablist", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
