import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface SimpleGridProps extends BaseComponentProps {}

export function SimpleGrid(props: SimpleGridProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("simplegrid", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
