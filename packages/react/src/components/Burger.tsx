import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface BurgerProps extends BaseComponentProps {
  opened?: boolean;
  label?: string;
}

export function Burger(props: BurgerProps): JSX.Element {
  return (
    <button
      id={props.id}
      className={buildOpenLooksClassName(
        "unstyled-button burger-button",
        props.c,
      )}
      style={props.sx}
      aria-label={props.label}
      onClick={(event) => {
        props.onClick?.(event);
      }}
    >
      <div className="openlooks burger" data-open={props.opened}></div>
    </button>
  );
}
