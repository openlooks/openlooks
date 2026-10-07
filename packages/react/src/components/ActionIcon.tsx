import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface ActionIconProps extends BaseComponentProps {
  title?: string;
}

export function ActionIcon(props: ActionIconProps) {
  return (
    <button
      id={props.id}
      className={buildOpenLooksClassName("actionicon", props.c, {
        color: "gray",
      })}
      style={props.sx}
      title={props.title}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </button>
  );
}
