import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface UnstyledButtonProps extends BaseComponentProps {}

export function UnstyledButton(props: UnstyledButtonProps): JSX.Element {
  return (
    <button
      id={props.id}
      className={buildOpenLooksClassName("unstyled-button", props.c)}
      style={props.sx}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </button>
  );
}
