import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface MenuDividerProps extends BaseComponentProps {}

export function MenuDivider(props: MenuDividerProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("menu-divider", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
