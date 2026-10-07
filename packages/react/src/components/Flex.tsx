import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";

import type { BaseComponentProps } from "./BaseComponentProps";

export interface FlexProps extends BaseComponentProps {}

export function Flex(props: FlexProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("flex", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
