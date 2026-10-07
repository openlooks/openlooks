import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";

import type { BaseComponentProps } from "./BaseComponentProps";

export interface ScrollAreaProps extends BaseComponentProps {}

export function ScrollArea(props: ScrollAreaProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("scrollarea", props.c, {
        variant: "hover",
        scrollbarSize: "md",
      })}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
