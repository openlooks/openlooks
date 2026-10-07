import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface HeaderProps extends BaseComponentProps {}

export function Header(props: HeaderProps): JSX.Element {
  return (
    <header
      id={props.id}
      className={buildOpenLooksClassName("header", props.c)}
      style={props.sx}
    >
      {props.children}
    </header>
  );
}
