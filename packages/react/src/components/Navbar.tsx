import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface NavbarProps extends BaseComponentProps {}

export function Navbar(props: NavbarProps): JSX.Element {
  return (
    <nav
      id={props.id}
      className={buildOpenLooksClassName("navbar scrollarea", props.c)}
      style={props.sx}
    >
      {props.children}
    </nav>
  );
}
