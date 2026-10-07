import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface MenuLabelProps extends BaseComponentProps {}

export function MenuLabel(props: MenuLabelProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("menu-label", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
