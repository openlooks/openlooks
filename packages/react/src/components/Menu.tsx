import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface MenuProps extends BaseComponentProps {}

export function Menu(props: MenuProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("popover paper", props.c, {
        shadow: "sm",
        radius: "sm",
        withBorder: true,
      })}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
