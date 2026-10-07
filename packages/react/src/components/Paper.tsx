import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface PaperProps extends BaseComponentProps {}

export function Paper(props: PaperProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("paper", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
