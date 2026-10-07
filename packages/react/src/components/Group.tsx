import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface GroupProps extends BaseComponentProps {}

export function Group(props: GroupProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("group", props.c, { spacing: "sm" })}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
