import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface BadgeProps extends BaseComponentProps {}

export function Badge(props: BadgeProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("badge", props.c, {
        variant: "light",
        color: "blue",
        size: "md",
        radius: "xl",
      })}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
