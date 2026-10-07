import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface SpaceProps extends BaseComponentProps {}

export function Space(props: SpaceProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("space", props.c)}
      style={props.sx}
    />
  );
}
